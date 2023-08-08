---
{
    "title": "Charon",
    "description": "Worked in an agile team at TalTech to improve functionality of Moodle plugin for programming assignments used by about 1000 students every semester. Charon allows teachers to track coding submissions and defenses, manage grading and provide feedback.",
    "techStack": [
        "Laravel", 
        "PHP", 
        "Vue",
        "JS",
        "MariaDB",
        "REST",
        "Moodle API"
    ],
    "links": [
        {
            "display": "IT doc",
            "href": "https://ained.pages.taltech.ee/it-doc/moodle/charon/index.html"
        }
    ],
    "image":
    {
        "src": "/static/img/posts/charon/charon-task-description-headless.png",
        "alt": "Charon popup"
    },
    "readMoreLink": "/posts/Charon"
}
---
Charon is a plugin for integrating Moodle learning management system with an automated tester for managing student programming assignments submissions, feedback, defense registrations and grading.
This plugin is used actively by TalTech programming teachers, teacher assistants and students.


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

My work broadly fits into 3 categories:
* Solving issues
* Doing merge reviews
* Finding bugs

Bugs were something that I stumbled upon completely by accident or taking educated guesses on where things could break.
Here some of the bugs I found:
* String injection on PHP to JS variable assignment. Can you spot the mistake? `window.course_name = '{!! $course->fullname !!}';`
* UI mismatch between different pages and components
* Database tables missing foreign keys
* Data seeding logic not matching application rules
* Error accessing hierarchy list at 0 index caused by always expecting list to contain root node



During sprints we worked as a team to improve different aspects of the application:

**Implement feature flags** - 
Feature flags allow to modify system behavior without changing code.
Feature based development accelerated product release cycle as the release process no longer has to go through Moodle team and bigger epics can now be release partially.
This required implementation of an admin section, where plugin config could be modified by moderators.
Moderator role also needed to be implemented.
Editing config would also trigger email notifications to be sent to all moderators.


**Better activity messages** - 
Reduce number of messages generated when leaving feedback and grading students to improve overall message quality.
This would make it easier to track TA (teacher assistant) activity for payment, reporting and understanding the contributions of each TA.


### Pictures


<figure>
    <img src="/static/img/posts/charon/charon-task-description.png" alt="Student view of the assignment" />
    <figcaption>Student view of the assignment (This is technically also available to teachers).</figcaption>
</figure>
<figure>
    <img src="/static/img/posts/charon/
charon-create.png" alt="Creating a Charon programming assignment" />
    <figcaption>Creating a Charon programming assignment.</figcaption>
</figure>

<figure>
    <img src="/static/img/posts/charon/charon-popup.png" alt="Teacher picking a student submission for grading" />
    <figcaption>Teacher picking a student submission for grading.</figcaption>
</figure>

<figure>
    <img src="/static/img/posts/charon/charon-add-defense-registration.png" alt="Teacher adding student submission to defense registration" />
    <figcaption>Teacher adding student submission to defense registration.</figcaption>
</figure>

<figure>
    <img src="/static/img/posts/charon/charon-erd.png" alt="Charon ERD schema (with missing FKs)" />
    <figcaption>Charon ERD schema (with missing FKs).</figcaption>
</figure>

