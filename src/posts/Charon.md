---
title: "Charon"
slug: "charon"
description: "Charon is a Moodle plugin for programming assigments used by 1000 students every semester. It allows teachers to track student coding submissions, manage grading and provide feedback. I worked in an agile team at TalTech to improve plugin functionality."
techStack: ["Laravel", "PHP", "Vue", "JS", "MariaDB", "REST", "Moodle API"]
image:
  src: "/static/img/posts/charon/charon-task-description-headless-thumbnail.png"
  alt: "Charon popup"
slugDirectory: "/posts/"
---

Charon is a plugin for integrating Moodle learning management system with an automated tester for managing student programming assignments submissions, feedback, defense registrations and grading.
This plugin is used actively by TalTech programming teachers, teacher assistants and students.
<figure>
    <img src="/static/img/posts/charon/charon-task-description-headless.png" alt="Assignment view" />
    <figcaption>Assignment view.</figcaption>
</figure>

### Background

When students commit into their repository a git hook sends a request to Charon that will forward it to a tester.
The tester runs the student code against teachers tests that will return info on passed tests and code style back to Charon backend where it will be processed and saved into a database.
The students may then have to defend their assignments to receive a grade.

The tech stack consists of a Laravel backend that provides MVC for Moodle and API for frontend.
The backend mainly provides APIs for communication between MariaDB and Vue frontend, but also interacting with Moodle, sending out emails and gluing together Gitlab/Github and Arete testing framework services.
The frontend is mostly done in Vue. Frontend provides a grading environment for teachers to check student submissions along with attached files, leave comments and give points.
The frontend provides a better user experience then would be available through Moodle itself, by showing submission data about single student.

This system was built initially as a bachelor’s degree thesis in 2017.
You can read more about it [here](https://digikogu.taltech.ee/et/item/b628d504-57e3-4d90-9c60-4bcd6bea3d61).

### What I did

I was part of a 5-member fullstack agile Scrum development team.
Our work process was divided into 2-week sprints with individual demos and sprint retros.
Our agile was a mix of Kanban and XP (pair programming) depending on circumstances.

My daily work consisted of solving issues, doing merge reviews and hunting bugs - string injection, missing hierarchy list root node, missing foreign key constraint, outdated data seeding logic, etc.
The issues were either miscellaneous tasks or part of a larger epic goal.


I contributed to solving an epic user story related to logging teacher/TA(teacher assistant) activities needed for tracking TA contributions and therefore payment. I modified grading logic API to also save concrete teacher activity message and designed an independent Vue component used on 3 different pages along with reactive server side 4 field filtering options.

<figure>
    <img src="/static/img/posts/charon/charon-teacher-activity-component.png" alt="Teacher activity component" />
    <figcaption>Teacher activity log.</figcaption>
</figure>

I created an admin section page with the main goal of speeding up development process by both bypassing Moodle team for configuring global settings and adopting feature flag based development.
This included creating API and middleware for handling settings changes in the backend and creating the page along with conditional navigation link in the frontend.

<figure>
    <img src="/static/img/posts/charon/charon-admin-settings.png" alt="Admin settings" />
    <figcaption>Admin settings.</figcaption>
</figure>

### Final words

Overall it was a great opportunity to improve something that I had used previously and create a better experience for future students and teachers.
I gained a lot of experince on agile methodologies, general software development cycle and teamwork.