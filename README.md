# LearnSpace – Full-stack Learning Platform

A fresh React + Express + MongoDB implementation based on the requested LearnSpace idea.

## Features
- Public home page, login, registration and published course catalogue
- Student dashboard, saved courses, enrollment, resume learning and learning history
- Sequential modules, lessons, 5-question module quizzes, server-tracked attempts
- Final quiz, completion record and certificate record
- Student notifications when an admin publishes a course
- Admin-only course management, student list and real database dashboard
- No public admin registration, fake statistics, testimonials, course reviews or admin preview

## Stack
React/Vite, React Router, Axios, Node.js, Express, MongoDB/Mongoose, JWT and bcryptjs.

## Setup
### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and set MONGO_URI and a strong JWT_SECRET
npm run seed
npm run create-admin
npm run dev
```
API: `http://localhost:5000/api/v1`

### Frontend (new terminal)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Open the local Vite URL shown in the terminal.

## Admin account
Use `npm run create-admin` to create the first admin. There is no public admin signup route.

## Configurable assessment rules
`backend/src/config/assessment.js` contains the pass marks and attempt limits. Defaults: 5 questions per module quiz, 2 attempts per module quiz, 2 final attempts. Passing marks are configuration defaults and can be changed by the project owner.

## Certificate design
Certificate issuance is recorded in the database after a successful final assessment. The PDF layout is deliberately not invented; connect the certificate design supplied by the project owner before implementing the final PDF renderer.

## Google sign-in
Google sign-in needs OAuth client credentials. This starter uses email/password authentication and documents Google OAuth as a future configured integration; it does not pretend Google sign-in is active without credentials.

## Fullscreen assessment limitation
The final quiz requests browser fullscreen and records visibility changes where supported. Browsers cannot guarantee that a learner cannot switch tabs or leave fullscreen.
