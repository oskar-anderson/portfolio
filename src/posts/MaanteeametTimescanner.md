---
title: "Maanteeamet Timescanner"
slug: "maanteeamet-timescanner"
description: "Developed a web scraper for getting info from Maanteeamet e-service about available driving exam times."
techStack: ["Python", "Selenium" ]
image: 
    src: "/static/img/posts/maanteeamet-timescanner/available-MTA-driving-exam-time-found.png"
    alt: "Maanteeamet Timescanner"
slugDirectory: "/posts/"
---
Developed a web scraper for getting info from Maanteeamet e-service about available driving exam times.
The program is written in Python with Selenium browser API and using Gmail SMTP. Source code can be found [here](https://github.com/oskar-anderson/maanteeamet-timescanner)


### About

This program was developed because Maanteeamet only allows reserving driving exams 2 months in advance and as a result available times were scarce.
There were 2 primary sources of new available times:

* Start of a new month.
* People cancelling their registration.

The bloom of underground markets, like Facebook exam selling groups, made it even more difficult for legitimate users to register for a driving exam.
Since driving exams in these circles regularly went up to 80€, I found it economically more reasonable to develop my own solution.

### The Solution

A automated web scraper for extracting available driving exam times was built.

For setup the user has to first specify into a YAML configuration file in what cities they would like to take the driving exam.
They then have to enable Less Than Secure apps in Google Settings to allow the program to send emails through their Gmail. 
Now the fun can begin 😃. 
All that the user has to do is activate the program with a simple command and go do something else while the machine is working in the background.

```python
python ./schedule_checker.py
```

The program is going to open Google Chrome browser though Selenium WebDriver and automatically navigate to Maanteeamet e-service.
The program will then continue to open and close a model window that provides available driving exams across Estonia.
This information is parsed and email will be sent to the user about any driving exam times in the specified cities.
Email sending is done though Gmail with Python SMTP library.
The user will then receive an email like this.

<figure>
    <img src="/static/img/posts/maanteeamet-timescanner/available-MTA-driving-exam-time-found.png" alt="Sent email." />
    <figcaption>Sent email.</figcaption>
</figure>

The user can then choose to either register for the exam or ignore it.

### Results

I was able to get a driving exam time with this program in just 5 hours.
The program also became popular among my peers, with multiple friends asking me to share the program with them so they too could get their driving licenses.
