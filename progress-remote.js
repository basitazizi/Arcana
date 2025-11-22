import { firebaseConfig } from './config.js';
import { initializeApp, getApp, getApps } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import {
  getFirestore, doc, setDoc, getDoc, getDocs, collection, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function nextStreak(current) {
  const today = todayKey();
  const last = current?.lastActiveDate;
  if (!last) return { count: 1, lastActiveDate: today };
  const y = new Date(); y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);
  if (last === today) return current;
  if (last === yesterday) return { count: (current.count || 0) + 1, lastActiveDate: today };
  return { count: 1, lastActiveDate: today };
}

export async function fetchProgress(uid) {
  if (!uid) return null;
  const userRef = doc(db, 'userprogress', uid);
  const userDoc = await getDoc(userRef);

  // Bootstrap an empty profile so new accounts have a place to store streaks/progress.
  if (!userDoc.exists()) {
    await setDoc(userRef, {
      streakCount: 0,
      lastActiveDate: null,
      lastLessonId: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }, { merge: true });
  }

  const snap = await getDocs(collection(userRef, 'progress'));
  const completedIds = [];
  snap.forEach(d => { if (d.data()?.completed) completedIds.push(d.id); });
  const refreshed = userDoc.exists() ? userDoc : await getDoc(userRef);
  const userData = refreshed.exists() ? refreshed.data() : {};
  return {
    completedIds,
    lastLessonId: userData.lastLessonId || null,
    streak: { count: userData.streakCount || 0, lastDate: userData.lastActiveDate || null }
  };
}

export async function recordCompletion(uid, lessonId) {
  if (!uid || !lessonId) return;
  const userRef = doc(db, 'userprogress', uid);
  const progRef = doc(userRef, 'progress', lessonId);

  // Update streak and last lesson
  const userSnap = await getDoc(userRef);
  const userData = userSnap.exists() ? userSnap.data() : {};
  const streak = nextStreak({ count: userData.streakCount || 0, lastActiveDate: userData.lastActiveDate || null });

  await Promise.all([
    setDoc(progRef, {
      completed: true,
      completedAt: serverTimestamp(),
      lastOpenedAt: serverTimestamp()
    }, { merge: true }),
    setDoc(userRef, {
      lastLessonId: lessonId,
      streakCount: streak.count,
      lastActiveDate: streak.lastActiveDate,
      updatedAt: serverTimestamp()
    }, { merge: true })
  ]);

  return streak;
}

export async function recordOpened(uid, lessonId) {
  if (!uid || !lessonId) return;
  const userRef = doc(db, 'userprogress', uid);
  const progRef = doc(userRef, 'progress', lessonId);
  await setDoc(progRef, { lastOpenedAt: serverTimestamp() }, { merge: true });
}
