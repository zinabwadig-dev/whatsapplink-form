# Week 4, Session 2: Booking Form

Build a real booking form for a business of your choice (barber, gym, clinic, tutor, photographer...).

The HTML and CSS are provided. **You write `script.js` yourself, from an empty file.** Do not copy the lesson code. Open the lesson only to check an idea.

---

## The form

| Field | Id | Error paragraph |
|---|---|---|
| Name | `#name` | `#name-error` |
| Email | `#email` | `#email-error` |
| Phone | `#phone` | `#phone-error` |
| Service (dropdown) | `#service` | `#service-error` |
| Message (textarea) | `#message` | `#message-error` |

The form is `#booking-form`. The WhatsApp link is `#whatsapp-link`.

---

## Your tasks

### Part 1: Read the values
On submit, stop the page from refreshing and print all 5 values in the Console.

### Part 2: Validate
- **Name:** not empty (not even spaces)
- **Email:** must contain an `@`
- **Phone:** at least 9 characters
- **Service:** the user must choose one (the default option has an empty value)
- **Message:** at least 10 characters after trimming

### Part 3: Show the errors
- Each error appears in its own paragraph, under its own field.
- Old errors disappear when the user submits again.
- Nothing is shown in the Console anymore.

### Part 4: WhatsApp link
If everything is valid, build a message that includes the name, phone, service and message. Turn it into a WhatsApp link with `encodeURIComponent` and show the link on the page. Replace the number with your own to test it.

### Part 5: Save a draft
- Save all 5 fields to `localStorage` while the user types.
- Restore them when the page opens.
- Remove the draft after a successful booking.

Check it in DevTools: **Application > Local Storage**.

---

## Test your work

Do all of these before you submit:

1. Submit an empty form: you see 5 errors.
2. Fix only one field and submit again: only that error disappears.
3. Type half a form and refresh: it comes back.
4. Submit a valid form: the WhatsApp link opens with the correct message.
5. After a valid booking, refresh: the form is empty.

---

## Bonus

Add a "Clear draft" button that empties the form and removes the saved draft.

---

## Submission

1. Create your own GitHub repository for this project.
2. Push your work with clear commit messages (for example: `Add form validation`, `Save draft in localStorage`).
3. We will review it together in the next session.

## A note on AI

You can use AI to understand an error. Do not use it to write your `script.js`. If you cannot explain every line of your own code, rewrite it until you can.

---

**MilcodeUni** | milcodeuni.tech