---
title: "HedgehogDBD"
slug: "HedgehogDBD"
description: "Developed a open source web app for visualizing databases as ERD schemas to help fellow students in Database Basics (ICA0005) course."
techStack: ["React", "TypeScript"]
image:
    src: "/static/img/posts/HedgehogDBD/main-view.png"
    alt: "Main view"
slugDirectory: "/posts/"
---

Developed an open source web app to help visualize database ERD schemas. 
Creating database diagrams was a main part of Database Basics (ICA0005) course. 
Unfortunately, the program (QSEE SuperLite) used for teaching the course was difficult to use and its workflow was slow. 
Since I found existing solutions problematic, I decided to write my own.

<figure>
    <img src="/static/img/posts/raster-modeler/discord-conversation.png" alt="Discord" />
    <figcaption>Student advising others to avoid QSEE SuperLite</figcaption>
</figure>

Links to the project: 
* [Live](https://hedgehog-dbd.vercel.app/)
* [Source code](https://github.com/oskar-anderson/HedgehogDBD)
* [Thesis](https://digikogu.taltech.ee/et/Item/a99fe3f6-43d7-4902-98b0-6a5f6b4c377e)


### Requirements analysis

The acceptance criteria were to find a solution that:
* Works locally (offline or open-source)
* Does not cost above 10$/mo (license with no table size limitation)
* Supports SQL export to MariaDB/MySQL and Postgres
* Supports PNG export
* Ease of use - simple and fast workflow for modelling databases, intuitive UI

Next, I reviewed several existing solutions.

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
        <td style="background: #FFC7C7">No</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">Vertabelo</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
    </tr>
    <tr>
        <td style="text-align: left;">Lucidchart</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">QuickDBD</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">diagrams.net</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
    </tr>
    <tr>
        <td style="text-align: left;">wwwsqldesigner</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">MySQL Workbench</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">DbSchema</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
    </tr>
    <tr>
        <td style="text-align: left;">DBeaver</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #9EFF9E">Yes</td>
        <td style="background: #FFC7C7">No</td>
    </tr>
    </tbody>
</table>

None of the tested solutions met the criteria so I created my own application.

### Tech stack analysis
Web apps are developed in either JavaScript or TypeScript. 
**TypeScript** was chosen to reduce time spent debugging type errors and improve developer experience.

The biggest requirements specific problem to overcome is drawing the diagram.
Initially a generic canvas element handled by PixiJS was used, but it was soon replaced by a special node/edge based diagramming library called **React Flow** for better UX. **React** was chosen to handle UI state of the application as React Flow library demands it.

One of the core ideas was that export functionality should not be built in, but developed separately according to user needs.
To achieve this the user is allowed to write their own export function.
In order to support scripting functionality a web IDE library needs to be used.
The three main options are:
* CodeMirror - Not bad, but version 6 as the current latest release is very hard to setup.
* Ace - UI looks a little outdated, but overall, a solid choice.
* Monaco Editor - Very impressive, but lacks documentation and setup can be difficult.

In terms of user needs **Monaco Editor** was chosen as it is web version of the popular Visual Studio Code text editor that most developers should be used to.
The chosen scripting language is JavaScript, as it enjoys widespread usage among developers and offers built-in scripting support through the `Function()` constructor.

### Execution
Now that the requirement scope and tech stack has been determined the development can begin.

#### UI

In terms of UI different approaches were considered.
Since a navigation minimap element looked too cluttered as a floating element on top of the canvas a separate sidebar aproache was taken.
Here is what the solution ended up looking:

<figure>
    <img src="/static/img/posts/HedgehogDBD/main-view.png" alt="Main drawing view." />
    <figcaption>Main drawing view.</figcaption>
</figure>

Table editing view is designed to provide a compact and quick way to edit diagram tables.
This allows all diagram table fields to be edited from a single place.
<figure>
    <img src="/static/img/posts/HedgehogDBD/table-edit-view.png" alt="Table edit view." />
    <figcaption>Table edit view.</figcaption>
</figure>

Users are allowed to create their own JavaScript scripts against their diagrams in the scripting view using Monaco Editor.

<figure>
    <img src="/static/img/posts/HedgehogDBD/scripting-view.png" alt="Scripting view." />
    <figcaption>Scripting view.</figcaption>
</figure>
This view has commenting functionality to allow sharing of user created content. Commenting is achieved through Github discussions.

#### Interesting code

While most of the application development process felt natural and perhaps too mundane to discuss further.
The application does use some interesting programming aspect worth diving into.

##### Command pattern
Most applications have a functionality to undo user actions. 
This functionality is usually implemented through a programming design pattern called command pattern. 
I tried to find answers in the classical Gang of Four design patterns book, but found it unhelpful.
Here is the solution I ended up using.

First we need a interface that all commands must implement:
```ts
export interface ICommand<T extends IHydratable<T>> {
    context: Draw;
    args: T;
    redo(): void; 
    undo(): void;
}

export interface IHydratable<T> {
    hydrate(): T;
}
```
Here we are saying that all commands must have 2 instance properties `context` and `args` that will be instantiated on new command creation.
Commands have all the data to execute any time, but in practice they are only created when needed to execute.
`context` is the data the command will modify and `args` is the hydratable payload.
Hydratable means that the data should be serializable into JSON and the same data type can later be deserialized into a class instance. 
This is just needed to emulate `JsonSerializer.Deserialize<T>(args);` from a strongly typed language.
Next there are 2 parameterless methods that modify the context state by executing or unexecuting commands.

Here is what a concrete command implementation looks like:
```ts
export class CommandCreateTable implements ICommand<CommandCreateTableArgs> {
    context: Draw;
    args: CommandCreateTableArgs;

    constructor(context: Draw, args: CommandCreateTableArgs) {
        this.context = context;
        this.args = args;
    }

    redo() {
        let newTable = this.args.table.mapToVm();
        this.context.schemaTables.push(newTable);
        this.context.areTablesDirty = true;
    }

    undo() {
        this.context.schemaTables = this.context.schemaTables
            .filter(x => x.id !== this.args.table.id);
        this.context.areTablesDirty = true;
    }
}
```
A `History` class is used for storing the commands as JSON so that they could be reverted back later. All commands should be executed through the history `execute` method:
```ts
export class History {
    undoHistory: string[] = [];
    redoHistory: string[] = [];
    
    constructor() {}

    execute(command: ICommand<any>) {
        let command = { commandName: command.constructor.name, args: command.args};
        this.undoHistory.push(JSON.stringify(command));
        this.redoHistory = [];
        command.redo();
    }

    private getInstance(command: CommandPattern, context: Draw): ICommand<any> {
        if (command.commandName === CommandMoveTableRelative.name) {
            let unhydratedArgs = command.args as CommandMoveTableRelativeArgs;
            let hydratedArgs = new CommandMoveTableRelativeArgs(unhydratedArgs.id, unhydratedArgs.x, unhydratedArgs.y).hydrate();
            return new CommandMoveTableRelative(context, hydratedArgs);    
        }
        if (command.commandName === CommandModifyTable.name) {}
        // ... list of all registered commands
        
    }

    redo(context: Draw) {
        if (this.redoHistory.length === 0) return;
        let command = JSON.parse(this.redoHistory.pop()!) as CommandPattern;
        this.undoHistory.push(JSON.stringify(command));
        this.getInstance(command, context).redo();
    }

    undo(context: Draw) {
        if (this.undoHistory.length === 0) return;
        let command = JSON.parse(this.undoHistory.pop()!) as CommandPattern;
        this.redoHistory.push(JSON.stringify(command));
        this.getInstance(command, context).undo();
    }
}

interface CommandPattern {
    commandName: string;
    args: any
}
```
This solution allow all registered commands to be rollbacked.

##### A-star algorithm
I had first hoped to find a canvas based library for either arrow drawing or pathfinding that would allow visualization of table relationship lines. I could not find any arrow drawing libraries and was quickly disappointed in pathfinding libraries as they lacked a cost-based grid system to control the grid movement.
I ended up creating my own A* star algorithm: 
```ts
findPath(start: { x: number, y: number }, heuristicTarget: { x: number, y: number }, ends: { x: number, y: number }[], grid: WorldGrid) {
    if (ends.length === 0) return [];
    let frontier = new PriorityQueue<{ value: {x: number, y: number}, cost: number}>
        ((
            a: {value: any, cost: number}, 
            b: {value: any, cost: number}
        ) => { return a.cost < b.cost ? -1 : 1 })   // lowest cost will pop first
        .push({ value: start, cost: 0 });
    let cameFrom: Map<string, { x: number, y: number } | null> = new Map()
        .set(grid.getPointId(start), null);
    let costSoFar: Map<string, number> = new Map()
        .set(grid.getPointId(start), 0);
    let end = null;
    while (! frontier.isEmpty()) {
        let current = frontier.pop().value;

        if (ends.findIndex(end => end.x === current.x && end.y === current.y) !== -1) { 
            end = current; 
            break;
        }

        for (let next of grid.neighbors(current.x, current.y)) {
            // the multiplication makes the algorithm greedy for the endpoint which helps eliminate randomness deciding between same cost cells
            let startToNextCost = (costSoFar.get(grid.getPointId(current))! + grid.getNeighborCost(current, next)) * 1.001; 
            if (! costSoFar.has(grid.getPointId(next)) || startToNextCost < costSoFar.get(grid.getPointId(next))!) {
                costSoFar.set(grid.getPointId(next), startToNextCost);
                let priority = startToNextCost + this.heuristic(next, heuristicTarget);
                frontier.push({ value: next, cost: priority });
                cameFrom.set(grid.getPointId(next), { x: current.x, y: current.y });
            }
        }
    }

    if (end === null) { return []; }
    let route: { x: number, y: number }[] = [end];
    while (true) {
        let next = cameFrom.get(grid.getPointId(route[0]));
        if (!next) { break; }
        route.unshift(next);
    }
    return route;
}
```
It utilizes a diagonal movement tweak inspired by [Amit Patel](https://www.redblobgames.com/pathfinding/a-star/implementation.html#ties-checkerboard-costs):
```ts
getNeighborCost(orig: { x: number, y: number}, neighbor: { x: number, y: number}): number {
    let cost = this.nodes[this.getPointId(neighbor)];
    let nudge = 0;  // nudge makes diagonal lines more likely
    if ((orig.x + orig.y) % 2 == 0 && neighbor.x != orig.x) { nudge = 0.0000001 }
    if ((orig.x + orig.y) % 2 == 1 && neighbor.y != orig.y) { nudge = 0.0000001 }
    return cost + nudge;
}
```
This solution seems to work rather well, but a it was later made redundant with the use of React Flow edge based system.

### Results
All the set requirements were fulfilled by the final product.
The workflow of this solution outperforms QSEE SuperLite by approximately 50% due to supporting multi-row editing and using automatic relationship lines.

Links to the project: 
* [Live](https://hedgehog-dbd.vercel.app/)
* [Source code](https://github.com/oskar-anderson/HedgehogDBD)
* [Thesis](https://digikogu.taltech.ee/et/Item/a99fe3f6-43d7-4902-98b0-6a5f6b4c377e)