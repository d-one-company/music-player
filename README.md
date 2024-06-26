# Music Player

## Try it our [here](https://music.d-one.design)

## Description

Music Player is an open-source music application that allows users to listen to a selection of tracks. It's built using Next JS and React, and it's designed to be a user-friendly interface for music lovers.

## Features

- Authentication
- Play/Pause Tracks
- Next/Previous track navigation
- Volume control
- Search for tracks
- Queue tracks
- Playlists
- Playlist management
- Like/Dislike tracks

## Screenshots

### Main Screen

![Main Screen](https://utfs.io/f/33728b94-5bcc-4f7d-aa8f-69074bde38cd-fhm5bw.43.19.jpg)

### Playlist

![Playlist Screen](https://utfs.io/f/18eb3cd2-1407-404a-8245-930a57fbc1e0-fhm5bw.39.49.jpg)

### Search

![Search Screen](https://utfs.io/f/31bae30c-f74f-4cea-868f-c0192f69d8c2-fhm5bw.57.28.jpg)

### Trending

![Trending Screen](https://utfs.io/f/230d9e4f-1851-46f5-94af-c1e7019927f7-fhm5bv.02.10.jpg)

### Creating Playlist

![Creating Playlist](https://utfs.io/f/fc89a9a9-dc15-4994-aab5-5f3b6b46c58b-fhm5bv.45.53.jpg)

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next Auth
- Zustand

## Installation

To get a local copy up and running follow these simple steps:

1. Clone the repo

    ```bash
    git clone https://github.com/d-one-company/music-player.git
    ```

2. Install packages

    ```bash
    pnpm install
    ```

3. Start the development server

    ```bash
    pnpm dev
    ```

## Usage

To use the application, navigate to the `/` route in your browser.

### Home Page

Here you'll find your playlists displayed, along with additional sections depending on your interaction. If no specific playlist is selected, you'll see trending tracks; if a playlist is selected, it will display tracks in that playlist. The page also shows your recently favorited tracks and your current queue with a small player. Clicking any playlist takes you to its detailed page, and selecting any track from a playlist will play it in the player. Each track's entry includes the artist name, number of listens, duration, and a like/unlike button. Clicking this button will add the track to your list of recently favorited tracks.

### Playlist Page

On the Playlist page, you'll see the playlist's cover, name, track count, and total length. You can play the playlist, search for tracks within it, and use a large player at the bottom. Each track displays details similar to those on the home page, including artist, listens, duration, and like/unlike options.

### Search Page

The Search page allows users to find tracks by searching for album, track, or artist names.

### Trending Page

The Trending page displays the most popular tracks based on their popularity and recent listens.

### Favorites Page

The Favorites page displays your recently favorited tracks.

### Create a Playlist

To create a new playlist, click the "+" icon to open a modal. In this modal, you'll find an input field where you can name your playlist. Below the input, there's a list of all available tracks which you can search through. Select the tracks you want to add to your playlist. Once you've chosen your tracks, click 'Create Playlist'. After creation, you'll be redirected to the newly created playlist page where you can view or modify the playlist.
