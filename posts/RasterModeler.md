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


### Requirements analysis

The acceptance criteria was to find a solution that:
* Works locally (offline or open-source)
* Does not cost above 10$/mo (license with no table size limitation)
* Supports SQL export to MariaDB/MySQL and Postgres
* Supports PNG export
* Ease of use - simple and fast workflow for modelling databases, intuitive UI

Next I reviewed several existing solutions.

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

None of the tested solutions met the criteria so I created my own application.

### Tech stack analysis
The biggest problem to overcome is drawing the schema.
There is 2 things to keep in mind:
* Performance is a big consideration point since schema entities need to be draggable.
* Schemas need to be exportable to PNG. This means that a HTML canvas element must be used.

Since HTML canvas is difficult to work with natively a game engine library was used.
The most performant library is **PixiJS** according to a [benchmark done by slay_lines](https://benchmarks.slaylines.io/).
Being popular (37400 stars on Github) and well documentatad made on top of great performance made it a clear winner.

**TypeScript** was chosen to reduce time spent debugging type errors and improve developer experience.
**React** was chosen to handle UI state of the application as it is the industry standard.

One of the core ideas was that export functionality should not be built in, but developed separately according to user needs.
To achive this the user is allowed to write their own export function.
In order to support scripting functionality a web IDE library needs to be used.
The three main options are:
* CodeMirror - Not bad, but version 6 as the current latest release is very hard to setup.
* Ace - UI looks a little outdated, but overall a solid choice.
* Monaco Editor - Very impressive, but lacks documentation and setup can be difficult.

In terms of user needs **Monaco Editor** was chosen as it is web version of the popular Visual Studio Code text editor that most developers should be used to.
The chosen scripting language is JavaScript, as it enjoys widespread usage among developers and offers built-in scripting support through the `Function()` constructor.

Deployment is setup using **Github Pages** using **Github Actions** CI/CD script.

### Execution

The application implement undo/redo functionality through the command pattern.
The table relations are drawn using a greedy A* algorithm with diagonal movement tweak using a cost based grid.

The app is built as a SPA with a drawing page and a scripting page.
This allows the canvas element to be loaded only once reducing the time it takes switch between the pages.
