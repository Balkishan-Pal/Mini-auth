# Mini Auth Frontend App

A mini frontend application implementing a **feed page with authentication flow**. Built using **React**, **TypeScript**, and **TailwindCSS**. This project demonstrates a modular and maintainable approach to UI design and frontend interactions.

---

## Live Preview

[View Live App](https://mini-auth-gamma.vercel.app/)

## GitHub Repository

[View Repository](https://github.com/Balkishan-Pal/Mini-auth)

---

## Features

### Core Features

- **Frontend Only**: Fully implemented in React with TypeScript and TailwindCSS.
- **Authentication Flow**:
  - Users can **Sign In** or **Sign Up** via dedicated auth pages.
  - Feed page triggers a **modal** for unauthenticated users when trying to interact.
  - Authenticated users can fully interact with the feed.

### Feed Page

- **Post Editor**:
  - Users can enter text and publish new posts.
  - Posts appear immediately in the feed upon publishing.
  - Other buttons (e.g., reactions) show an alert: *"Function not implemented"*.

- **Posts Display**:
  - Each post displays user **name** (derived from email), **emoji**, **timestamp** (`5 mins ago`, `1 hour ago`, etc.), and optional image.
  - Supports **dummy posts** for demonstration.

- **UI & Interactions**:
  - Modular components for **InputBox**, **Post**, and **Navbar**.
  - Smooth **modal** animations.
  - Responsive design for mobile and tablet screens.

### Extras

- **Reusable Components**: Built modularly for maintainability and easy extension.
- **Utility Functions**: Includes `timeAgo` for timestamps and `formatNameFromEmail` for user display.
- **Random Images**: New posts can optionally assign a random image from assets.
- **Global Font**: `Inter` applied consistently throughout the app.

---

## Project Structure



├─ assets/           # Images and icons
├─ components/       # Reusable components
│  ├─ Common/
│  │  ├─ InputBox/
│  │  ├─ Post/
│  │  └─ Toast/
│  └─ NavBar/
├─ pages/
│  ├─ Feed.tsx
│  ├─ SignIn.tsx
│  └─ SignUp.tsx
├─ utils/            # Utility functions (timeAgo, formatNameFromEmail)
├─ Constants/        # Dummy posts and other constants
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

Customizations
Adding Images: Add more images to src/assets and update dummy posts.
Emoji Picker: Extend the list of emojis in the InputBox component.
Navbar: Customize links or user display.

Theme: Tailwind CSS can be modified in tailwind.config.js and index.css
