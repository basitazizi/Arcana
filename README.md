# Arcana

Learning tracks with Firebase-backed authentication and streak sync.

## Firebase setup (streaks, progress, and sign-in)
Follow these one-time steps in the Firebase console so new users can sign up, sign in, and keep their streaks:

1. **Create a Firebase project** → click **Add app** → **Web**. Copy the config keys into `config.js` (replace the existing values if they are placeholders).
2. **Authentication → Sign-in method**
   - Enable **Email/Password**.
   - (Optional) Enable **Google** and add your domain plus `localhost` if testing locally.
3. **Firestore Database** → **Create database** (Production or Test mode is fine to start). You do **not** need to manually create collections; the app writes `userprogress/{uid}` and the `progress` subcollection automatically when a user signs up and completes a lesson.
4. **Security Rules**
   - Open **Firestore Database → Rules** and paste the rules from [`firestore.rules`](firestore.rules) or the block below, then **Publish**.

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Authenticated users can read/write only their own streak/progress docs.
       match /userprogress/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
         match /progress/{lessonId} {
           allow read, write: if request.auth != null && request.auth.uid == userId;
         }
       }

       // Public feed: anyone can read; creates are validated for size/type.
       match /posts/{postId} {
         allow read: if true;
         allow create: if request.resource.data.keys().hasOnly(['name', 'text', 'createdAt']) &&
           request.resource.data.name is string && request.resource.data.name.size() <= 80 &&
           request.resource.data.text is string && request.resource.data.text.size() <= 2000;
       }
     }
   }
   ```
5. **Deploy rules via CLI (optional)**: save `firestore.rules` locally and run `firebase deploy --only firestore:rules` if you prefer the CLI.
6. **Test**: load `auth.html`, create an account, complete a lesson, and confirm Firestore now shows a `userprogress/{uid}` document with streak fields plus a `progress/{lessonId}` doc marked `completed: true`.

## What the app stores per user
- Top-level document: `userprogress/{uid}` with fields
  - `streakCount` (Number)
  - `lastActiveDate` (String `YYYY-MM-DD`)
  - `lastLessonId` (String)
  - Timestamps `createdAt`/`updatedAt`
- Subcollection: `userprogress/{uid}/progress/{lessonId}` documents containing
  - `completed: true`
  - `completedAt` and `lastOpenedAt` timestamps

## How it works for end users
- Sign up or sign in on `auth.html` (email/password or Google).
- After sign-in, opening a lesson writes a `lastOpenedAt`; completing a lesson calls `recordCompletion`, which updates streaks, last lesson, and completion flags in Firestore.
- On dashboard/lessons/tracks pages, the app reads `userprogress/{uid}` and hydrates local storage so streaks and completions follow the user across devices.

## Local development
- Serve the files with any static server (e.g., `python -m http.server 8000`) and load `http://localhost:8000/auth.html` to sign in.
- Ensure your Firebase project allows localhost in authentication settings when using Google sign-in.
