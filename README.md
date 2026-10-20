# Ma Garderie

Ma Garderie is a small mobile app made for a daycare. It shows a splash screen, a home page with daycare activities, and a side menu with Accueil, Activités, and À propos.

## Technologies

- React Native
- Expo and Expo Router
- TypeScript

## Features

- A welcome screen that moves to the home page after three seconds.
- A side menu for moving between the three pages.
- A list of five daycare activities, each with an icon, title, and description.
- A `+` button and activity cards that show a short message when tapped.

The activity data is stored in the app code. No backend or database is used.

## Run the app

Install [Node.js](https://nodejs.org/), then run these commands from the project folder:

```bash
npm install
npx expo start
```

Follow the Expo CLI instructions to open the app in Expo Go, an emulator, or a web browser.

## Screenshots

### Splash screen + Home page with activities

| Splash Screen | Home Page |
| :---: | :---: |
| ![Splash Screen](screenshots/01-splash.png) | ![Home Page](screenshots/02-home.png) |
