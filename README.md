# MoodSync — Emotion-Based Playlist Generator

Tech: React (Vite), Node.js, Express, MongoDB.

## Quick Start

### 1) Backend
```bash
cd server
cp .env.example .env
npm install
npm run seed
npm run dev
```
Server runs on http://localhost:5000

### 2) Frontend
```bash
cd client
npm install
echo "VITE_API_BASE=http://localhost:5000" > .env
npm run dev
```
Frontend runs on http://localhost:5173

---

This starter includes:
- 10 pages on the frontend (React Router), simple styling only.
- Node/Express API with MongoDB and seed data.
- Naive sentiment → mood classification endpoint.
- Playlists stored in MongoDB with YouTube links.
- Feedback form saved to MongoDB.
```
