---
slug: "container-queries-suck"
title: "Container queries suck"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/container-queries-suck/thumbnail - container-queries-suck.png"
intro: "Container queries are not a replacement for media queries"
tags: ["CSS"]
minToRead: 4
publishedDate: "03.03.2024"
authorName: "Karl Oskar Anderson"
---
I was working on an application that needed to responsively fit into an unknown viewport on external site. This seemed like a ideal problem to solve using container queries. Unfortunately, container queries did not solve this issue without side effects. Let's look at the issues container queries cause.

### Introduction
Traditionally, CSS media queries would be used to make responsive components that look good on both desktop and mobile. Media queries work based on the dimensions of the site viewport. This works alright, but placing components inside a container smaller than the viewport like a sidebar can cause problems especially with `flex-direction` and `grid-column` rules.

Chrome 106 released in September 2022 offered a solution to this problem - container queries. Container query allows styling components based on the size of the element's container. Container queries work by defining a containment context that works as a viewport for all of its children's elements. This is done by giving the parent element `container-type: inline-size;` CSS rule. At this point it might seem like container queries are the new media queries, however they have drawbacks.

### Problems with modals

The first problem is that fixed/absolute elements inside the container cannot expand past the container. This makes it impossible to have dropdown inputs open as full screen modals on smaller screen sizes.

This problem can be remedied by disabling the container query when a full screen modal is supposed to be visible. However, this solution is not ideal as it is impossible to animate the transition to the full screen modal view. 

```css
.inline-size {
    container-type: inline-size;
}
.inline-size:has([data-modal-open="true"]) {
    container-type: normal;
}
```

There is also a second problem caused by the modal view not having a scrollbar. This causes the container to recalculate its size indefinably as the scrollbar will appear and disappear.
```css
body:has([data-modal-open="true"]) {
    overflow: hidden;
}
```

This problem is reported on StackOverflow with no solution [here](https://stackoverflow.com/questions/76005559/how-to-position-an-absolute-fixed-element-relative-to-the-viewport-instead-of-pa) and [here](()[https://stackoverflow.com/questions/74601420/css-container-inline-size-and-fixed-child])


### Stacking context issue

Another problem is that container queries mess with element stacking order causing dropdown elements that expand past the container to be clipped by relative elements outside the dropdown. This can be somewhat fixed by specifing the stacking order of the outside elements. This only works if the other relative elements have a lower z-index value, so that would not be a very scaleable solution. 
```css
.inline-size {
    container-type: inline-size;
    position: relative;
    z-index: 1;
}
```

This issue is also reported on Stackoverflow [here](https://stackoverflow.com/questions/76607899/why-does-container-type-inline-size-seem-to-mess-with-stacking-overflow-rules).

### Problem overview
Container elements act as being positioned relatively and having a z-index of 0. This traps the children's elements from escaping out of the container query. Components like modal based inputs and dropdowns will not work inside a container query. As container queries are not a suitable solution, let's see how these components could be used by using JavaScript instead.  

### Solution
Instead of using classes directly, lets write the responsive style rules inside HTML `data-resize-responsive` attributes. The format for this would be `{ target: string, breakpoints: { [id: number]: string }}`. This allows the specifing the target container whose dimensions will determine the correct breakpoint rule to be used.

Next a window resize event handler needs to be added to detect changes to the window size that will in turn cause changes to every other element. When a resize event fires all elements with a `data-resize-responsive` attribute will be selected, parsed and applied like this:

```ts
function addResizeListeners(detachedEventSignal) {
    const resizeHandler = () => {
        const elements = Array.from(document.querySelectorAll('[data-resize-responsive]'));
        for (const element of elements) {
            const responsiveness = JSON.parse(element.dataset.resizeResponsive);
            const container = document.querySelector(responsiveness.target);
            const breakpointEntries = Object.entries(responsiveness.breakpoints)
                .map(x => ({ key: Number(x[0]), value: x[1] }))
                .sort((a, b) => Number(a.key) - Number(b.key));
            
            let newRules = breakpointEntries.findLast(x => container.clientWidth >= x.key)?.value ?? "";
            
            const possiblyAddedClasses = Array.from(new Set(breakpointEntries.flatMap(x => x.value.split(" "))));
            const classesToRemove = Array.from(element.classList).filter(x => 
                possiblyAddedClasses.includes(x) && 
                !newRules.split(" ").includes(x)
                                                                                    )
            const classesToAdd = newRules.split(" ").filter(x => !element.classList.contains(x) && x !== "");
            
            element.classList.remove(...classesToRemove);
            element.classList.add(...classesToAdd);
        }
    }

    window.addEventListener('resize', resizeHandler, { signal: detachedEventSignal });
    resizeHandler();
}
```

This solution manages to achieve the same desired responsive design without bumping into problems with container queries. The solution works best when paired with a CSS utility framework like Tailwind to prevent manual work writing utility classes.


### Wrap up
I was looking forward to expanding my design skill repertoire with container queries, but unfortunately found them problematic. This article demonstrated problems that arise with container queries and offered an alternative solution to solving them. All of the problem and the proposed alternative solution are available for demonstration on [Codepen](https://codepen.io/Karl-Oskar-Anderson/pen/abxoVNV).


<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="abxoVNV" data-editable="true" data-user="Karl-Oskar-Anderson" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Karl-Oskar-Anderson/pen/abxoVNV">
  Container query</a> by Karl Oskar Anderson (<a href="https://codepen.io/Karl-Oskar-Anderson">@Karl-Oskar-Anderson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>