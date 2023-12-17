---
slug: "error-messages"
title: "Error messages"
slugDirectory: "blog/"
thumbnail: ""
intro: "Component for error messages"
tags: ["template"]
minToRead: 1
publishedDate: "18.12.2023"
authorName: "Karl Oskar Anderson"
---
Displaying errors effectively is crucial for providing a positive user experience and helping users understand and resolve issues. Here are several approaches to display errors in a user interface:

## Form errors

### Inline validation

### Progressive disclosure


## Global errors

### Toast notifications
SweetAlert2 - https://sweetalert2.github.io/

### Error messages at the top
Simple solutions for handling unexpected request errors.

Here is an example from MediaWiki using a [static error message](https://wildfrostwiki.com/index.php?search=Shroom+Muncher) on top of the page:

![Example of error messages at the top](/static/img/posts/error-messages/Internal_error__Wildfrost_Wiki.png)


<style>
    .message-box-error.message-box-error {
        background-color: #fee7e6;
        border-color: #d33;
    }

    .message-box {
        background-color: #eaecf0;
        border-color: #a2a9b1;
    }

    .message-box {
        padding: 12px 24px;
        margin-bottom: 16px;
        border: 1px solid currentColor;
        color: #000;
    }
</style>

<div class="message-box message-box-error">
    [fbd25fb0ba081a0773d6e475] 2023-12-17 15:45:27: Fatal exception of type "Wikimedia\Assert\PreconditionException"
</div>

### Dedicated error page redirect
