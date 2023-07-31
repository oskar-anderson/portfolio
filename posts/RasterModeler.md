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

Developed a open source web app to help visualize database ERD schemas. 
Creating ERD schemas was a main part of Database Basics (ICA0005) course. 
Unfortunately the program (QSEE SuperLite) used for teaching the course was difficult to use and its workflow was slow. 
Since I found existing soltions problematic, I decided to write my own.

<figure>
    <img src="/static/img/posts/raster-modeler/discord-conversation.png" alt="Discord" />
    <figcaption>Student advising others to avoid QSEE SuperLite</figcaption>
</figure>


### Analysis

The acceptance criteria was to find a solution that:
* Works locally (offline or open-source)
* Does not cost above 10$/mo (license with no table size limitation)
* Supports SQL export to MariaDB/MySQL and Postgres
* Supports PNG export
* Ease of use - simple and fast workflow for modelling databases, intuitive UI

I reviewed several existing solutions and none of them met this criteria.

<!--
Cannot add class="table" to this ASCII table so unfortunately must write in html
|       Tool      |       Works locally     |        Not expensive      |          SQL export         |          PNG export         |          Ease of use          |
|:------          |     :---------------:   |      :---------------:    |      :---------------:      |      :----------------:     |       :--------------:        |
| DrawSQL         | 0                       | 0                         | 0                           | 1                           | 1                             |
| Vertabelo       | 0                       | 0                         | 1                           | 1                           | 0                             |
| Lucidchart      | 0                       | 1                         | 1                           | 1                           | 1                             |
| QuickDBD        | 0                       | 0                         | 1                           | 1                           | 1                             |
| diagrams.net    | 1                       | 1                         | 0                           | 1                           | 0                             |
| wwwsqldesigner  | 1                       | 1                         | 0                           | 0                           | 1                             |
| MySQL Workbench | 1                       | 1                         | 0                           | 1                           | 1                             |
| DbSchema        | 1                       | 0                         | 1                           | 1                           | 1                             |
| DBeaver         | 1                       | 1                         | 1                           | 1                           | 0                             |
-->


<table class="table">
    <thead style="text-align: left;">
    <tr>
        <th>Tool</th>
        <th>Works locally</th>
        <th>Not expensive</th>
        <th>SQL export</th>
        <th>PNG export</th>
        <th>Ease of use</th>
    </tr>
    </thead>
    <tbody style="text-align: center;">
    <tr>
        <td style="text-align: left;">DrawSQL</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">Vertabelo</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td style="text-align: left;">Lucidchart</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">QuickDBD</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">diagrams.net</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td style="text-align: left;">wwwsqldesigner</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">MySQL Workbench</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">DbSchema</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td style="text-align: left;">DBeaver</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    </tbody>
</table>

Extra problems that would deter me from using listed products:
* While reviewing Vertabelo server went offline outside regular maintenance
* There is a bug in MySQL Workbench - clicking on "Connect to Database" from topbar crashes the app.
