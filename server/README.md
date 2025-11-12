# MoodSync Server

## Setup
1. Copy `.env.example` to `.env` and adjust if needed.
2. Install deps: `npm install`
3. Seed sample playlists: `npm run seed`
4. Run the server: `npm run dev` (defaults to http://localhost:5000)

## Endpoints
- `GET /api/moods` → list of moods
- `POST /api/moods/classify` → { text } → { mood }
- `GET /api/playlists?mood=Happy` → playlists
- `POST /api/feedback` → save feedback
