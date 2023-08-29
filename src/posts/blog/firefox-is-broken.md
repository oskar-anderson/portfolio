---
slug: "firefox-is-broken"
title: "Firefox is broken"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/firefox-is-broken/firefox-logo.png"
intro: "Firefox is broken, I'm switching over to Chrome"
tags: ["rambling"]
minToRead: 2
publishedDate: "28.08.2023"
authorName: "Karl Oskar Anderson"
---

I have so far used mostly Mozilla Firefox for everyday browsing and development.
This is mainly due to me preferring Firefox's scrollable tabs to Chrome squeezed tabs.
But lately (currently using v116.0.3) the experience has not been good both in terms of bugs and lack of web standard support.

### Bugs

First of all, I usually accumulate tabs throughout the day and end up with 100+ open tabs at the end of the day. This seems to slow everything to a halt. And closing so many tabs at once will crash the other open browser windows. This seems to be a relatively new issue as I have not noticed it before 2023.

Secondly, the dev tools are acting very weird.
The dev tools show wrong CSS styles being applied to elements. 
![Wrong css styles being applied](/static/img/blog/firefox-is-broken/wrong-css.png)
This makes it impossible to disable and enable rules as enabling a rule will apply wrong style to element.

Finally, there is a issue where loading right click context menu or inspecting element causes everything to freeze for 10 seconds. I disabled all add-ones, but it did not help. I don't know what causes this, but so far it has only occurred while developing this very Astro site.

### Features
In terms of features Firefox is also lagging behind.

It is the only browser without support for `:has()` which can make it difficult to style markdown based sites as the developer does have control over the generated HTML.

Implementing draggable website elements for Firefox is painful.
First of all there is a 8 year old [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1189486) that breaks input elements inside a draggable element. Secondly while developing draggable table rows for [RasterModeler](https://github.com/oskar-anderson/RasterModeler) I could not get the row displayed at its original size during a drag action. For whatever reason draggable elements seem to get shown at 50% size in Firefox. It took additional time to implement a different approach using item drop location indicators.

### Final words

Hopefully this is just a temporary bug with the latest Firefox version.
I will be swiching over to Chrome for now atleast until the dev tools get fixed.