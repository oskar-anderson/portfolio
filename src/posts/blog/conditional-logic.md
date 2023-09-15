---
slug: "conditional-logic"
title: "If vs ternary vs switch for conditional logic"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/conditional-logic/thumbnail.png"
intro: "Looking at different ways of expressing conditional logic"
tags: ["tech"]
minToRead: 3
publishedDate: "15.09.2023"
authorName: "Karl Oskar Anderson"
---
Conditional statements are a fundamental programming concept to control the program execution flow. There are three different ways of handling conditional logic:

1. If
2. Switch
3. Ternary

Which of these approaches is best for handling enum type variables? Let's look into some examples of expressing conditional logic in JavaScript.

### If
The simplest approach to evaluate a boolean expression is using an `if` statement.
The if statement can be followed with `else if` and `else` to prevent having to constantly check the inverse of the previous expression.
```ts
let edgePath: string = "";
if ("simplebezier" === data!.pathType || "default" === data!.pathType) {
    [edgePath] = getBezierPath(data);
}
else if ("smoothstep" === data!.pathType) {
    [edgePath] = getSmoothStepPath(data);
}
else if ("straight" === data!.pathType) {
    [edgePath] = getStraightPath(data);
}
else if ("step" === data!.pathType) {
    [edgePath] = getSmoothStepPath({...data, borderRadius: 0});
} 
else {
    [edgePath] = getBezierPath(data)
}
```

The above example is 16 lines of code for something that should be relatively simple. This verboseness makes it hard to read. It is also not immediately obvious that all the comparisons are against one variable or expression using the same variable. These problems can be solved by using the switch statement.

### Switch
The switch statement evaluates several cases for a single expression.
```ts
let edgePath = ""<
switch (data?.pathType) {
    case "simplebezier":
    case "default":
        [edgePath] = getBezierPath(data);
        break;
    case "smoothstep":
        [edgePath] = getSmoothStepPath(data);
        break;
    case "straight":
        [edgePath] = getStraightPath(data);
        break;
    case "step":
        [edgePath] = getSmoothStepPath({...data, borderRadius: 0});
        break;
    default:
        [edgePath] = getBezierPath(data);
        break;
}
```
While this does seem more readable, it is actually longer than the previous if statement example, coming in at 19 lines of code. This is mostly because of the repetitious use of `break` keyword. While normally break statements exit loops, in switch statements the break keyword is overloaded to prevent different cases to fall through to the next case. In the above example fall through is used to evaluate strings `simplebezier` and `default` to the same `[edgePath] = getBezierPath(data);` assignment. Fortunately, the break statements can be skipped if the `switch` statement returns a value.

```ts
const getPath = (data: Payload) => {
    switch (data.pathType) {
        case "simplebezier":
        case "default":
            return getBezierPath(data);
        case "smoothstep":
            return getSmoothStepPath(data);
        case "straight":
            return getStraightPath(data);
        case "step":
            return getSmoothStepPath({...data, borderRadius: 0});
        default:
            return getBezierPath(data);
    }
};
const [edgePath] = getPath(data)
```
This approach does seem slightly better, but the switch statement still has two problems:
1. The syntax is weird and it looks out of place from a modern language. This is mostly because the switch statement is an archaic concept from Fortran era where `goto` statements were used. While this might seem as a just a style difference it does have a practical drawback as well.  Despite the distinct standard syntax of the switch statements IDEs seem to struggle with correct indentation of the switch statement cases. 
2. Default fall through is a horrible design decision, because it prevents variable declaration inside the switch statement because of redeclaration errors. For example, the code below would not be suitable for a switch statement, because of `Cannot redeclare block-scoped variable` errors caused by the variable declaration. Of course, the variables can be declared before the switch statements, but that will cause type errors unless explicit `any` type is used.

```ts
if (command.commandName === CommandMoveTableRelative.name) {
    let unhydratedArgs = command.args as CommandMoveTableRelativeArgs;
    let args = new CommandMoveTableRelativeArgs(unhydratedArgs.id, unhydratedArgs.x, unhydratedArgs.y).hydrate();
    return new CommandMoveTableRelative(context, args);    
}
if (command.commandName === CommandModifyTable.name) {
    let unhydratedArgs = command.args as CommandModifyTableArgs;
    let args = new CommandModifyTableArgs(unhydratedArgs.oldTable, unhydratedArgs.newTable).hydrate();
    return new CommandModifyTable(context, args);
}
```

### Ternary

Ternary statements are usually used as a shorthand way express simple two branch logic in one-line.
```ts
let numberType = ""
if (number % 2 === 0){
    numberType = "even"
}
else {
    numberType = "odd"
}
```
VS
```ts
let numberType = number % 2 === 0 ? "even" : "odd"
```
The caveat of this is that the returned values must be single one-line statements.

Ternary statement can also be chained.
```ts
const [edgePath] = 
"simplebezier"  === data!.pathType ? getBezierPath(data) :
"default"       === data!.pathType ? getBezierPath(data) :
"smoothstep"    === data!.pathType ? getSmoothStepPath(data) : 
"straight"      === data!.pathType ? getStraightPath(data) :     
"step"          === data!.pathType ? getSmoothStepPath({...data, borderRadius: 0}) : 
getBezierPath(data) // default
```

This example ditches the combined evaluation for `"simplebezier"` and `"default"` to achieve a more readable format, but this does not cause a problem since the ternary expression can only return a one-line statement so code duplication is kept minimal. 


Overall the chained ternary statement creates a concise way to express conditional logic that should be used more often. 

NB! Chained ternary statement results in error or worse in PHP.

### Bonus - PHP
As pointed out [here](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/) PHP uses left associative chained ternaries.
```php
$arg = 'A';
$vehicle =   $arg === 'B' ? 'bus' :
             $arg === 'A' ? 'airplane' :
             $arg === 'T' ? 'train' :
             $arg === 'C' ? 'car' :
             $arg === 'H' ? 'horse' :
             'feet';
echo $vehicle;
```
This prints out `horse` on PHP versions less than 7.4 and will result in an error since PHP 7.4. Maybe it will one day be standardized with every other programming language as [this RFC](https://wiki.php.net/rfc/ternary_associativity) suggests.


In PHP8 there is an 4th alternative called `match`. It works basically the same as a switch statement, but it does not require a `break` after every `case` statement. Also it will throw a `UnhandledMatchError` if no cases match and no default was defined. Throwing an error instead of having a default value seems like a good idea.

```php
$message = match ($statusCode) {
    200, 204, 300 => 'ok',
    400, 404 => 'not found',
    500 => 'server error'
};
```

It can also be used with a constant true to achieve a similar result like with a chained ternary expression.
```php
$state = match (true) {
    $isPartOfSameChain =>                           "isPartOfSameChain",
    sizeof($chain) > 1 && ! $isPartOfSameChain =>   "isPartOfChainBreak",
    sizeof($chain) === 0 && ! $isPartOfSameChain => "isNotPartOfChain",
};
```
