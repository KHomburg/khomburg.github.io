# Kevin Homburg - Portfolio Website

This is the personal portfolio and professional website of **Kevin Homburg**, a Software Engineer.

## Overview

The website is a lightweight, frontend-only application built using React. Interestingly, it runs without a complex build step (like Webpack or Vite). Instead, it uses Babel standalone to compile JSX directly in the browser, making the setup extremely simple and easy to deploy.

The project is configured for deployment, likely to GitHub Pages (`khomburg.github.io`).

## Features

- **React Application**: Built using React for component-based UI organization.
- **In-Browser Compilation**: Uses `babel.min.js` to transpile React JSX into standard JavaScript directly in the browser.
- **Internationalization (i18n)**: Supports multilingual content (English and German) powered by `i18next` and `react-i18next`, with translations loaded dynamically from `src/locales/`.
- **Responsive Design**: Custom CSS (using modern fonts like *Outfit* from Google Fonts) to ensure a great viewing experience across desktop and mobile devices.

## Project Structure

```text
khomburg/
├── index.html       # The main entry point loading scripts, setting up i18n, and rendering the React app
├── src/
│   ├── App.js         # App-level orchestration and state
│   ├── App.css        # The global stylesheet
│   ├── components/    # Shared UI pieces like the background effects and language switcher
│   ├── hooks/         # Small custom hooks for browser interactions and generated visuals
│   ├── sections/      # Page-sized content sections such as hero, story, reasons, and contact
│   ├── locales/       # JSON translation files (e.g., en.json, de.json)
│   └── vendor/        # Localized vendor scripts (React, DOM, Babel, i18next, etc.)
└── README.md        # This documentation file
```

## How to Run Locally

Because the application fetches translation files via HTTP (`i18nextHttpBackend`), simply opening the `index.html` file in a browser will likely cause Cross-Origin Request (CORS) errors. 

To run the application locally, you should serve it through a local HTTP server.

**Option 1: Using Python**
If you have Python installed, you can use the built-in HTTP server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

**Option 2: Using Node.js / npx**
If you have Node.js installed, you can use a package like `serve`:
```bash
npx serve .
```
Or `live-server` for hot-reloading:
```bash
npx live-server
```

## Technologies Used

- **HTML5 & CSS3**
- **React (v18+)**
- **Babel (Standalone)**
- **i18next** (with `react-i18next`, `i18next-browser-languagedetector`, and `i18next-http-backend`)
