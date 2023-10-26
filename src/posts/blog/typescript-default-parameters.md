---
slug: "typescript-default-parameters"
title: "Default TypeScript function parameters"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/typescript-default-parameters/thumbnail.png"
intro: "Creating functions in TypeScript with default parameter values"
tags: ["TypeScript"]
minToRead: 2
publishedDate: "26.10.2023"
authorName: "Karl Oskar Anderson"
---
Recently I wanted to use functions with default arguments in a TypeScript project. The problem was that the parameter that needed the default value was not the functions last parameter.

```js
// ❌ This functions cannot be called without overriding the options parameter
function greet(personName, options = { greetings : "Hello" }, useEmoji) { 
    console.log(
        useEmoji ? 
        `${options.greetings} ${personName}! 👋`
        : `${options.greetings} ${personName}!`
    )
}

greet("Mark", {}, false); // ❌ undefined Mark!
```

While the above function does not work. There is a way to get the desired outcome using destructuring assignment.


### JavaScript destructuring assignment

JavaScript allows to define a function with a default parameter argument. This is achieved by using destructuring assignment. Destructuring looks like this:

```js
const { a, b } = obj;
```

This allows unpacking array values or object properties into variables.
It also supports default values.

```js
const { a = 1 } = { a: null };          // { a: null }
const { b = 1 } = { b: undefined };     // { b: 1 }
const { c = 1 } = { c2: 2 };            // { c: 1 }
```

The same principle can be used on function arguments. 

```js
function greet(person, { greeting = "Hello" } = { }) {
    console.log(`${greeting} ${person}!`)
}
greet("Mark") // Hello Mark!
greet("Mark", { })  // Hello Mark!
greet("Mark", { greeting: "Hi" })  // Hi Mark!
```

Now that we know how this works in JavaScript, let's look at the TypeScript syntax.


### TypeScript default parameter function

The TypeScript syntax is quite a bit more difficult to understand than the JavaScript version. Let's look at a client API GET request service.

```ts
async get(
    url: string,
    {
        method = "get"
    }: { method? : "get" | "post" } = {},
    body: any,
    after: (response: T) => void, 
    catchErr: (error: string) => void
): Promise<void> {
    // ...
}

// will use HTTP GET method
get(url1, {}, { id: 1 }, after, catchErr) 

// will use HTTP POST method
get(url2, { method: "post" }, { phones: personPhonesArr }, after, catchErr) 
```
Here a post request is used to send complex data using the request body as opposed to the request header.

This function has the added type hint `{ method?: "get" | "post" }`: 
* The question mark defines this object property as optional. Optional just means that it does not have to be specified. It does not assign undefined to the property. 
* `"get" | "post"` defines the allowed values. Since they are both of type string, the property is automatically of type string.

This concludes how TypeScript default parameter functions work. 
### Recap 
This post went over how to define a function with default arguments in JavaScript and then explained the TypeScript syntax intricacies. While the TypeScript syntax does seem complex, hopefully the last example code serves as a good reference material.