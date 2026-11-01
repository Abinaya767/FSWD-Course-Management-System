# LearnSpace – Student Course Management and Online Learning Platform

A React/Vite student learning portal with an Express/MongoDB API. The project is organized into 15 cumulative task snapshots under `deliverables/`.

## Stack
React, Vite, React Router, Axios, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Socket.IO.

## Requirements
- Node.js 20+
- npm
- MongoDB local instance or MongoDB Atlas connection string

## Run locally
1. Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI` and a long random `JWT_SECRET`.
2. In `backend/`: `npm install`, then `npm run seed`, then `npm run dev`.
3. In `frontend/`: `npm install`, then `npm run dev`.
4. Open the Vite URL shown in the terminal (normally http://localhost:5173).

The frontend uses `VITE_API_URL` (default `http://localhost:5000/api/v1`). Copy `frontend/.env.example` to `frontend/.env` if needed.

## Admin provisioning
There is no public admin registration. After configuring the backend environment, run:
`npm run create-admin -- --name "Platform Admin" --email admin@example.com --password "ChangeThisPassword123!"`
Use a unique strong password and keep credentials private.

## API and Postman
All API routes use `/api/v1`. Import `docs/LearnSpace.postman_collection.json` into Postman. Health check: `GET /api/v1/health`.

## Project structure
- `frontend/` React client
- `backend/` Express API, models, routes, middleware, seed/admin scripts
- `docs/` API collection and deployment notes
- `TASK_SUBMISSION.md` explains the cumulative snapshot represented by each task ZIP

## Important configuration
Quiz pass threshold defaults to 60%; module quizzes have 5 questions and 2 attempts; final assessment has 2 attempts. These are enforced by backend logic. Certificate PDF generation creates a plain structured PDF record; the final visual certificate design is intentionally deferred until the user's reference design is supplied. No QR code or signature is generated.

## Current implementation boundaries
Email delivery and Google sign-in are not enabled. Real-time chat and course-published notifications use Socket.IO when the backend is running. Deployment requires the user to configure hosting and MongoDB credentials. See `docs/DEPLOYMENT.md`.
