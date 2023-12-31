---
slug: "error-messages"
title: "Error messages"
slugDirectory: "blog/"
thumbnail: "/static/img/posts/error-messages/thumbnail.jpg"
intro: "Component for error messages"
tags: ["template"]
minToRead: 5
publishedDate: "18.12.2023"
authorName: "Karl Oskar Anderson"
---

Notification messages provide contextual feedback for user actions. They range from inline responses to user actions to page error state messages.

### Overview

Displaying notifications effectively is crucial for providing a positive user experience. Notifications consist of message status and notification type.

Notifications have 4 possible message statuses that is typically indicated by the error background and border color:

- Info - 🔵 blue
- Success - 🟢 green
- Warning - 🟡 yellow
- Error - 🔴 red

Error and success notifications help users understand action results, while informational and warning messages draw user attention to important details.

Notifications come in many forms depending on the distruptiveness of the message:

- Inline - Provide feedback about form status placed below or above the form, usually combined with input field validation.
- Toast - Time-based messages that disappear automatically. Sometimes combined with a notification panel.
- Banner - System level reminders or error notifications located at the top of the page
- Modal - Disruptive notifications that block user activity for a critical information, they are mostly abused for newsletters.

Effective use of these notification types enhances user interaction and ensures a smoother user journey.

### Inline

Inline notifications are a complimentary to input field validation. Inline notification are not exclusive to form validation, they can also be used to display form submit errors.

#### Inline notification

Inline notifications are typically used to show a form status.

<figure>
    <img src="/static/img/posts/error-messages/github-failed-2fa.png" alt="Github failed 2FA" />
    <figcaption>Example of inline notification displaying the status of a form submission.</figcaption>
</figure>

Form validation includes an error summary notification and field error messages next to each erroneous answer. The error summary is particularly useful in large forms, guiding the user to the invalid fields. Following best UX principles, the error summary be positioned above the submit button or at the top of the page on page refresh.

#### Field validation

Field validation is used for validating individual form fields.

<figure>
    <img src="/static/img/posts/error-messages/field-validation.png" alt="Field validation" />
    <figcaption>Example of field validation on Google login form.</figcaption>
</figure>

Field validation is done actively using a `change` event on the inputs. Unlike the `input` event that fires for every keystroke, the `change` event fires only when the `focusout` event occures and the input has changed. This allows displaying errors once the user has completed typing. Validation happens on input changes and on submit button click, otherwise required fields could be empty, as the form fields are all initially displayed as valid and user might not trigger the `focusout` event on all inputs.

Avoid using html validation tags like `required` and `minlength` they only work on button click when `e.preventDefault()` is not called. Instead use [Zod](https://zod.dev/).

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="LYapErW" data-user="Karl-Oskar-Anderson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Karl-Oskar-Anderson/pen/LYapErW">
  Input validation</a> by Karl Oskar Anderson (<a href="https://codepen.io/Karl-Oskar-Anderson">@Karl-Oskar-Anderson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Toast

<strong style="color: red">Avoid error and warning toasts!</strong>

Toast are short notifications usually placed at the bottom left or top left corner of the page. Toasts commonly disappear automatically after a couple of seconds.

<figure>
    <img src="/static/img/posts/error-messages/toast-primevue.png" alt="Toast example" />
    <figcaption>Example of toast from <a href="https://primevue.org/toast/">PrimeVue UI toolkit</a>.</figcaption>
</figure>

Toast have a lot of UX problems:

- Users cannot fully read and understand auto-disappearing toast messages
- They appear far away from the problem area
- They block screen area

For these reasons it is best not to use a toast for error messages or other critical alerts that require user action. Consider alternative notification methods that provide a better user experience and ensure that important messages are effectively communicated to users.

Toast are straightforward to implement using a third party library as they are self-contained. However, there is no single universally maintained library. A quick Google search reveals many deprecated libraries like notyf, push.js, notify.js and toastr. One promising up-to-date framework agnostic library is [toastify-js](https://github.com/apvarun/toastify-js).

### Banner

Banner notification provide a simple solutions for displaying important info or handling unexpected request errors at the top of the page.

<figure>
    <img src="/static/img/posts/error-messages/Internal_error__Wildfrost_Wiki.png" alt="Banner example" />
    <figcaption>Example of an error banner notification used by <a href="https://wildfrostwiki.com/index.php?search=Shroom+Muncher">MediaWiki</a></figcaption>
</figure>

<figure>
    <img src="/static/img/posts/error-messages/banner-stackblitz.png" alt="Banner example" />
    <figcaption>Example of info banner notification used by Github</figcaption>
</figure>

Banners are very simple to implement.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOJbqjV" data-editable="true" data-user="Karl-Oskar-Anderson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Karl-Oskar-Anderson/pen/jOJbqjV">
  Banner notification</a> by Karl Oskar Anderson (<a href="https://codepen.io/Karl-Oskar-Anderson">@Karl-Oskar-Anderson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Modal

Modals serve as effective tools for communicating important information to users when the current application state cannot be sustained, and a redirection is imminent upon user acknowledgment. Modals are commonly used for informing users about the expiration of the current browser session.

<figure>
    <img src="/static/img/posts/error-messages/modal.png" alt="Modal example" />
    <figcaption>Example of session ending modal from RyanAir.</figcaption>
</figure>

Modals prove valuable in alerting users about an impending redirection to another page, typically prompted by an error or an unexpected issue.

<figure>
    <img src="/static/img/posts/error-messages/modal2.png" alt="Modal example" />
    <figcaption>Example of redirect modal notification.</figcaption>
</figure>

For consistency consider using a shared modal component that defines the modal header and footer to create consistent modal style. Take a look at [SweetAlert2](https://sweetalert2.github.io/) as an example of a consistent visual style.
