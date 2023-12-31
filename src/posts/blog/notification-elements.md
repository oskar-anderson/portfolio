---
slug: "notification-elements"
title: "Notification elements"
slugDirectory: "blog/"
thumbnail: "/static/img/posts/notification-elements/thumbnail.jpg"
intro: "Choosing the right feedback component"
tags: ["template"]
minToRead: 5
publishedDate: "18.12.2023"
authorName: "Karl Oskar Anderson"
---

Notification messages provide contextual feedback for user actions. They range from inline user action feedback texts to application level errors.

### Overview

Displaying notifications effectively is crucial for providing a positive user experience. Notifications consist of type and message status.

Notifications have four possible message statuses that is typically indicated by the error background and border color:

- Info - 🔵 blue
- Success - 🟢 green
- Warning - 🟡 yellow
- Error - 🔴 red

Error and success notifications help users understand action results, while informational and warning messages draw user attention to important details.

Notifications come in many forms depending on the disruptiveness of the message:

- Inline - Provide feedback about form status placed below or above the form, usually combined with input field validation.
- Toast - Short, usually temporary, messages that do not require a user action. Sometimes combined with a notification panel.
- Banner - System level reminders or error notifications located at the top of the page.
- Modal - Disruptive popups that block user activity for a important message.

Effective use of these notification types enhances user interaction and ensures a smoother user journey.

### Inline

Inline notifications are complimentary to input field validation. Inline notifications are not exclusive to form validation, they can also be used to display form submit errors.

#### Inline notification

Inline notifications are typically used to show a form status.

<figure>
    <img src="/static/img/posts/notification-elements/github-failed-2fa-short.png" alt="Inline example" />
    <figcaption>Example of inline notification displaying the status of a form submission.</figcaption>
</figure>

Form validation includes an error summary notification and field error messages next to each erroneous answer. The error summary is particularly useful in large forms, guiding the user to the invalid fields. Following best UX principles, the error summary should be positioned above the submit button or at the top of the page (combined with a page refresh or navigate to the top scroll action).

#### Field validation

Field validation is used for validating individual form fields.

<figure>
    <img src="/static/img/posts/notification-elements/field-validation.png" alt="Field validation" />
    <figcaption>Example of field validation on Google login form.</figcaption>
</figure>

Field validation is done actively using a `change` event on the inputs. Unlike the `input` event that fires for every keystroke, the `change` event fires only when the `focusout` event occurs and the input has changed. This allows displaying errors once the user has completed typing. Validation happens on input changes and on submit button click. All field validations are controlled by a `{ errors: [], show: false }` property that controls whether the error message is displayed or not.

Avoid using html validation tags like `required` and `minlength` as they only work on button click when `e.preventDefault()` is not called. Use [Zod](https://zod.dev/) for handling validation logic.

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="LYapErW" data-user="Karl-Oskar-Anderson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Karl-Oskar-Anderson/pen/LYapErW">
  Input validation</a> by Karl Oskar Anderson (<a href="https://codepen.io/Karl-Oskar-Anderson">@Karl-Oskar-Anderson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Toast

<strong style="color: red">Avoid error and warning toasts!</strong>

Toasts are short notifications usually placed at the bottom left or top left corner of the page. Toasts commonly disappear automatically after a couple of seconds.

<figure>
    <img src="/static/img/posts/notification-elements/toast-primevue.png" alt="Toast example" />
    <figcaption>Example of toast from <a href="https://primevue.org/toast/">PrimeVue UI toolkit</a>.</figcaption>
</figure>

Toast have a lot of UX problems:

- Users cannot fully read and understand auto-disappearing toast messages
- They appear far away from the problem area
- They block screen area

For these reasons it is best not to use a toast for error messages or other critical alerts that require user action. Consider alternative notification methods that provide a better user experience and ensure that important messages are effectively communicated to users.

Toast are straightforward to implement using a third party library as they are self-contained. However, there is no single universally maintained library. A quick Google search reveals many deprecated libraries like notyf, push.js, notify.js and toastr. One promising up-to-date framework agnostic library is [toastify-js](https://github.com/apvarun/toastify-js).

### Banner

Banner notification provide a simple solution for displaying important info or handling unexpected request errors at the top of the page.

<figure>
    <img src="/static/img/posts/notification-elements/Internal_error__Wildfrost_Wiki.png" alt="Banner example" />
    <figcaption>Example of an error banner notification used by <a href="https://wildfrostwiki.com/index.php?search=Shroom+Muncher">MediaWiki</a></figcaption>
</figure>

<figure>
    <img src="/static/img/posts/notification-elements/banner-stackblitz.png" alt="Banner example" />
    <figcaption>Example of info banner notification used by Github</figcaption>
</figure>

Banners are simple to implement without having to use any third party dependencies.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOJbqjV" data-editable="true" data-user="Karl-Oskar-Anderson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Karl-Oskar-Anderson/pen/jOJbqjV">
  Banner notification</a> by Karl Oskar Anderson (<a href="https://codepen.io/Karl-Oskar-Anderson">@Karl-Oskar-Anderson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Modal

Modals serve as effective tools for communicating important information to users when the current application state cannot be sustained, and a redirection is imminent upon user acknowledgment. Modals are commonly used for informing users about the expiration of the current browser session.

<figure>
    <img src="/static/img/posts/notification-elements/modal.png" alt="Modal example" />
    <figcaption>Example of session ending modal from RyanAir.</figcaption>
</figure>

Modals prove valuable in alerting users about an impending redirection to another page, typically prompted by an error or an unexpected issue.

<figure>
    <img src="/static/img/posts/notification-elements/modal2.png" alt="Modal example" />
    <figcaption>Example of redirect modal notification.</figcaption>
</figure>

Consider using a shared modal component that defines the modal header and footer to create consistent modal style. Take a look at [SweetAlert2](https://sweetalert2.github.io/) as an example of a consistent visual style for modals.
