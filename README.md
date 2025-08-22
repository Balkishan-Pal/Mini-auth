# Mini Auth & Feed Application

A React + TypeScript project demonstrating a mini authentication system with a feed, including user sign-in, sign-up, posts, emojis, and toast notifications. Tailwind CSS is used for styling.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customizations](#customizations)
- [License](#license)

---

## Demo

- Users can sign in or sign up.
- Feed displays posts with emoji reactions, images, timestamps, and usernames.
- Toast notifications appear on successful login.
- Sign-in and sign-up pages are centered, while feed retains full layout.

---

## Features

- **Authentication**: Sign-in and Sign-up forms.
- **Feed**: Display posts with emojis, images, timestamps, and usernames derived from email.
- **Emoji Picker**: Add emojis to posts.
- **Toast Notifications**: Feedback on login/sign-up.
- **Responsive Layout**: Navbar fixed, feed and auth pages styled appropriately.
- **Tailwind Styling**: Reusable input and button styles.

---

## Technologies

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Vite
- JavaScript / ES6+

---

## Project Structure




src/
│
├─ assets/ # Images and icons
├─ components/ # Reusable components
│ ├─ Common/
│ │ ├─ InputBox/
│ │ ├─ Post/
│ │ └─ Toast/
│ └─ NavBar/
├─ pages/
│ ├─ Feed.tsx
│ ├─ SignIn.tsx
│ └─ SignUp.tsx
├─ utils/ # Utility functions (e.g., timeAgo, formatNameFromEmail)
├─ Constants/ # Dummy posts and other constants
├─ App.tsx
└─ index.css





---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mini-auth-feed.git
cd mini-auth-feed


npm install
# or
yarn



npm run dev
# or
yarn dev




Usage

Navigate to /signin or /signup to authenticate.

Post messages in the feed, add emojis and images.

Toast notifications appear on successful login.

Customizations

Adding Images: Add more images to src/assets and update dummy posts.

Emoji Picker: Extend the list of emojis in the InputBox component.

Navbar: Customize links or user display.

Theme: Tailwind CSS can be modified in tailwind.config.js.
