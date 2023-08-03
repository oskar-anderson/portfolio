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
        <td style="background: #FFC7C7">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">Vertabelo</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">Lucidchart</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">QuickDBD</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">diagrams.net</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">wwwsqldesigner</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">MySQL Workbench</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">DbSchema</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
    </tr>
    <tr>
        <td style="text-align: left;">DBeaver</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #9EFF9E">0</td>
        <td style="background: #FFC7C7">0</td>
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

While most of the application development process felt natural and perhaps too mundane to discuss further.
The application does use two interesting programming aspects worth diving into.

#### Command pattern
Most applications have a functionality to undo user actions. 
This functionality is usually implemented through a programming design pattern called command pattern. 
I tried to find answers in the classical Gang of Four design patterns book, but found it unhelpful.
Here is the solution I ended up using.

First we need a interface that all commands must implement:
```js
export interface ICommand<T extends IHydratable<T>> {
    context: Draw;
    args: T;
    redo(): void; 
    undo(): void
}

export interface IHydratable<T> {
    hydrate(): T
}
```
Here we are saying that all commands must have 2 instance properties `context` and `args` that will be instantiated on new command creation.
Commands have all the data to execute any time, but in practice they are only created when needed to execute.
`context` is the data the command will modify and `args` is the hydratable payload.
Hydratable means that the data should be serializable into JSON and the same data type can later be deserialized into a class instance. 
This is just needed to emulate `JsonSerializer.Deserialize<T>(args);` from a strongly typed language.
Next there is 2 parameterless methods that modify the context state by executing or unexecuting commands.

Here is what a concrete command implementation looks like:
```js
export class CommandCreateTable implements ICommand<CommandCreateTableArgs> {
    context: Draw;
    args: CommandCreateTableArgs;

    constructor(context: Draw, args: CommandCreateTableArgs) {
        this.context = context;
        this.args = args;
    }

    redo() {
        let newTable = this.args.table.mapToTable();
        this.context.schemaPushAndUpdate(newTable);
    }

    undo() {
        this.context.schemaPopAndUpdate();
    }
}
```
As the sample above show the 


The table relations are drawn using a greedy A* algorithm with diagonal movement tweak using a cost based grid.

The app is built as a SPA with a drawing page and a scripting page.
This allows the canvas element to be loaded only once reducing the time it takes switch between the pages.
