---
{
    "title": "Raster Modeler",
    "description": "Developed a open source tool for visualizing databases as ERD schemas. Created a web app as part of my Bachelor's degree to help fellow students in Database Basics (ICA0005) course.",
    "techStack": [
        "React", 
        "TypeScript"
    ],
    "links": [
        {
            "display": "Github",
            "href": "https://github.com/oskar-anderson/RasterModeler"
        },
        {
            "display": "Thesis",
            "href": "https://digikogu.taltech.ee/et/Item/a99fe3f6-43d7-4902-98b0-6a5f6b4c377e"
        }
    ],
    "image":
    {
        "src": "/static/img/posts/raster-modeler/main-view.png",
        "alt": "Main view"
    },
    "readMoreLink": "/posts/RasterModeler"
}
---

Developed a open source web app to help visualize database ERD schemas. Creating ERD schemas was a main part of Database Basics (ICA0005) course. Unfortunately the professor insisted on using a programm from 2004 called QSEE SuperLite. The programm was difficult to use and its workflow was slow.

<figure>
    <img src="/static/img/posts/raster-modeler/discord-conversation.png" alt="Discord" />
    <figcaption>Student advising others to avoid QSEE SuperLite</figcaption>
</figure>

As I found existing solutions to be problematic:
* Expensive - (DrawSQL - 19$/mo, Vertabelo - 39$/mo)
* Server issues - (Vertabelo)
* Buggy - (MySQL Workbench - crashes when picking connect to database from topbar)
* Database specific - (MySQL Workbench)
* Bad UI - (diagrams.net, Vertabelo)

