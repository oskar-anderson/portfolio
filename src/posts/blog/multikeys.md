---
slug: "multikeys"
title: "Multikeys"
slugDirectory: "blog/"
thumbnail: "/static/img/blog/multikeys/AHK Icon.png"
intro: "Remap keyboard keys to match your requirement"
tags: ["software tips"]
minToRead: 2
publishedDate: "29.08.2023"
authorName: "Karl Oskar Anderson"
---

I used to have problems finding symbols on my keyboard. 
At least the PC keyboard I am using currently does not have an extra key between `left shift` and `Z` keys and so I was missing symbols `<`, `>` and `|`.
This made programming web pages difficult as less than and bigger than are common HTML tags.

I made a tiny Windows program called Multikeys that solves this problem by adding conditional logic to existing keys. 
A profile system is used to handle mapping keys to a different value depending on the active profile.
Changin active profile is like having a permanent modifier key held down.
Changin profile is done using `ctrl + #`, for example `ctrl + 1` changes to default profile.

Here is an example of how different profiles change values of keys:
```
Ctrl + 1 activates values at profile index 1: w->w and e->e and r->r
Ctrl + 2 activates values at profile index 2: w->( and e->) and r->[
Ctrl + 3 activates values at profile index 3: w->/ and e->| and r->\
```

The program is built on a Windows based scripting language called AutoHotkey.
It allows creation of different background processes and also creation of GUI desktop apps by utilizing Windows APIs.

Check out the installable binaries and source code [here](https://github.com/oskar-anderson/Multikeys).
