// Static learning data + local progress stored in localStorage.
export const tracks = [
  {
    id: "stoicism",
    title: "Stoicism Foundations",
    level: "Beginner",
    duration: "45 min",
    summary: "Core ideas of Stoic practice: control, virtue, daily reflection.",
    lessons: [
      { id: "stoicism-1", title: "What is Stoicism?", duration: "10 min" },
      { id: "stoicism-2", title: "Dichotomy of Control", duration: "12 min" },
      { id: "stoicism-3", title: "Practicing Reflection", duration: "14 min" }
    ]
  },
  {
    id: "habits",
    title: "Habits That Stick",
    level: "Intermediate",
    duration: "50 min",
    summary: "Identity-based habits, cues, and systems you can keep.",
    lessons: [
      { id: "habits-1", title: "Identity First", duration: "12 min" },
      { id: "habits-2", title: "Designing Cues", duration: "14 min" },
      { id: "habits-3", title: "Systems Over Goals", duration: "16 min" }
    ]
  },
  {
    id: "reading",
    title: "Active Reading",
    level: "All levels",
    duration: "35 min",
    summary: "Read with intention: questions, annotations, and synthesis.",
    lessons: [
      { id: "reading-1", title: "Pre-read: Questions", duration: "8 min" },
      { id: "reading-2", title: "Annotate and Mark", duration: "12 min" },
      { id: "reading-3", title: "Synthesize and Teach", duration: "15 min" }
    ]
  }
];

export const lessons = {
  "stoicism-1": {
    trackId: "stoicism",
    title: "What is Stoicism?",
    blurb: "A quick tour of the philosophy, why it endures, and what it asks of you.",
    objectives: [
      "Name the three disciplines of Stoicism.",
      "Recognize the difference between virtue and outcomes.",
      "Frame Stoicism as practice, not doctrine."
    ],
    sections: [
      {
        heading: "A lived philosophy",
        body: "Stoicism is a practice of aligning thoughts and actions with what you can control. It favors clear perception, intentional action, and acceptance of what happens next."
      },
      {
        heading: "Three disciplines",
        body: "Perception (see clearly), Action (act justly), Will (embrace outcomes). Each day is a small rehearsal of these disciplines."
      },
      {
        heading: "Virtue over outcomes",
        body: "You cannot force outcomes, but you can shape your preparation, effort, and character. Stoicism measures the latter."
      }
    ],
    reflection: [
      "Where are you over-focused on outcomes instead of preparation?",
      "What part of today is firmly in your control?",
      "How can you rehearse perception, action, and will tomorrow?"
    ],
    resources: [
      { label: "Massimo Pigliucci on Stoicism (video)", url: "https://youtu.be/R9OCA6UFE-0" },
      { label: "Meditations (PDF)", url: "https://classics.mit.edu/Antoninus/meditations.html" }
    ]
  },
  "stoicism-2": {
    trackId: "stoicism",
    title: "Dichotomy of Control",
    blurb: "Separating what you influence from what you cannot move.",
    objectives: [
      "List three things you control and three you do not.",
      "Design one habit that sits fully within your control."
    ],
    sections: [
      {
        heading: "Draw the line",
        body: "Control: your preparation, your effort, your response. Not in control: other people, timing, outcomes. Rehearse this division until it is reflex."
      },
      {
        heading: "Practice",
        body: "For a task today, name the controllables. Name the uncontrollables. Set your attention on the first list only."
      }
    ],
    reflection: [
      "What did you try to control today that was never yours?",
      "What can you do next time to stay on your side of the line?"
    ],
    resources: []
  },
  "stoicism-3": {
    trackId: "stoicism",
    title: "Practicing Reflection",
    blurb: "Daily review to align intention with action.",
    objectives: [
      "Use an evening review template.",
      "Spot one win and one gap without judgment."
    ],
    sections: [
      {
        heading: "Evening check-in",
        body: "Ask: What did I do well? Where did I drift? What is one adjustment for tomorrow?"
      }
    ],
    reflection: [
      "Write tonight’s review in 3 sentences.",
      "Name one adjustment you will test tomorrow."
    ],
    resources: []
  },
  "habits-1": {
    trackId: "habits",
    title: "Identity First",
    blurb: "Change who you see yourself as, not just what you do.",
    objectives: [
      "Write an identity statement for the habit you want.",
      "Link one tiny action to that identity."
    ],
    sections: [
      {
        heading: "Identity statements",
        body: "Instead of \"I will read more,\" try \"I am a person who reads 10 pages daily.\" Actions follow identity."
      }
    ],
    reflection: [
      "Write your identity statement.",
      "What tiny action proves it today?"
    ],
    resources: []
  },
  "habits-2": {
    trackId: "habits",
    title: "Designing Cues",
    blurb: "Place the behavior on rails: clear triggers, easy start.",
    objectives: [
      "Pick a time and place cue for your habit.",
      "Remove one friction point."
    ],
    sections: [
      {
        heading: "Cues and friction",
        body: "Time-based cues (after breakfast) and place-based cues (at the desk) build predictability. Remove friction: lay out the book, pin the tab, prep the mat."
      }
    ],
    reflection: [
      "Where will your cue live tomorrow?",
      "What friction can you remove in 60 seconds?"
    ],
    resources: []
  },
  "habits-3": {
    trackId: "habits",
    title: "Systems Over Goals",
    blurb: "Keep score by showing up and refining the system.",
    objectives: [
      "Define your minimum viable habit.",
      "Set a weekly review to adjust cues and environment."
    ],
    sections: [
      {
        heading: "Minimum viable habit",
        body: "Shrink the habit until it is almost impossible to fail. Show up, then scale up."
      }
    ],
    reflection: [
      "What is your minimum viable version?",
      "When will you review the system each week?"
    ],
    resources: []
  },
  "reading-1": {
    trackId: "reading",
    title: "Pre-read: Questions",
    blurb: "Start with curiosity so the text has hooks to land on.",
    objectives: [
      "Draft 3 questions before you read.",
      "Skim headings to build a map."
    ],
    sections: [
      {
        heading: "Front-load curiosity",
        body: "Questions prime attention. What am I looking for? How does this connect to what I know?"
      }
    ],
    reflection: [
      "Write 3 pre-read questions for your next chapter."
    ],
    resources: []
  },
  "reading-2": {
    trackId: "reading",
    title: "Annotate and Mark",
    blurb: "Mark the text so you can find and teach it later.",
    objectives: [
      "Use a simple code: ? (confusing), ! (insight), → (connection).",
      "Capture one quote and one question."
    ],
    sections: [
      {
        heading: "Make retrieval easy",
        body: "Annotate lightly as you go. Mark pages you will revisit. Record one quote and one question per session."
      }
    ],
    reflection: [
      "What mark did you use most today? Why?"
    ],
    resources: []
  },
  "reading-3": {
    trackId: "reading",
    title: "Synthesize and Teach",
    blurb: "Turn notes into a short teach-back to lock learning.",
    objectives: [
      "Write a 5-sentence summary.",
      "Teach one idea to someone else or to a camera."
    ],
    sections: [
      {
        heading: "Teach to remember",
        body: "A short summary and a teach-back force clarity. If you cannot explain it simply, reread and rewrite."
      }
    ],
    reflection: [
      "Teach one idea aloud in 60 seconds.",
      "What was hard to explain? Re-read that part."
    ],
    resources: []
  }
};

const STORAGE_KEY = "arcana.learning.progress";

function today() {
  return new Date().toISOString().slice(0, 10);
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    return {
      completed: new Set(parsed.completed || []),
      lastLessonId: parsed.lastLessonId || null,
      streak: parsed.streak || { count: 0, lastDate: null }
    };
  } catch (_) {
    return defaultProgress();
  }
}

function defaultProgress() {
  return { completed: new Set(), lastLessonId: null, streak: { count: 0, lastDate: null } };
}

function saveProgress(progress) {
  const data = {
    completed: Array.from(progress.completed),
    lastLessonId: progress.lastLessonId,
    streak: progress.streak
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Allow remote sync to hydrate local progress.
export function applyRemoteProgress({ completedIds = [], lastLessonId = null, streak = null } = {}) {
  const merged = {
    completed: new Set(completedIds),
    lastLessonId: lastLessonId || null,
    streak: streak || { count: 0, lastDate: null }
  };
  saveProgress(merged);
}

export function getProgressSnapshot() {
  const p = loadProgress();
  return {
    completedIds: Array.from(p.completed),
    lastLessonId: p.lastLessonId,
    streak: p.streak
  };
}

export function getLesson(id) {
  return lessons[id] || null;
}

export function getTrack(id) {
  return tracks.find(t => t.id === id) || null;
}

export function markLessonComplete(id) {
  const progress = loadProgress();
  progress.completed.add(id);
  progress.lastLessonId = id;
  updateStreak(progress);
  saveProgress(progress);
}

export function toggleLessonCompletion(id) {
  const progress = loadProgress();
  if (progress.completed.has(id)) {
    progress.completed.delete(id);
  } else {
    progress.completed.add(id);
    progress.lastLessonId = id;
    updateStreak(progress);
  }
  saveProgress(progress);
}

export function isLessonComplete(id) {
  return loadProgress().completed.has(id);
}

export function getCompletionForTrack(trackId) {
  const track = getTrack(trackId);
  if (!track) return { done: 0, total: 0, pct: 0 };
  const progress = loadProgress();
  const total = track.lessons.length;
  const done = track.lessons.filter(l => progress.completed.has(l.id)).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function getOverallProgress() {
  const progress = loadProgress();
  const allLessons = tracks.flatMap(t => t.lessons.map(l => l.id));
  const total = allLessons.length;
  const done = allLessons.filter(id => progress.completed.has(id)).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct, streak: progress.streak };
}

export function getNextLesson(currentLessonId) {
  const lesson = getLesson(currentLessonId);
  if (!lesson) return null;
  const track = getTrack(lesson.trackId);
  if (!track) return null;
  const idx = track.lessons.findIndex(l => l.id === currentLessonId);
  return track.lessons[idx + 1] || null;
}

export function rememberLastLesson(id) {
  const progress = loadProgress();
  progress.lastLessonId = id;
  updateStreak(progress);
  saveProgress(progress);
}

export function getLastLesson() {
  const progress = loadProgress();
  return progress.lastLessonId ? getLesson(progress.lastLessonId) : null;
}

function updateStreak(progress) {
  const todayKey = today();
  const last = progress.streak.lastDate;
  if (!last) {
    progress.streak = { count: 1, lastDate: todayKey };
    return;
  }
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  if (last === todayKey) {
    return; // already counted today
  }
  if (last === yesterdayKey) {
    progress.streak = { count: (progress.streak.count || 0) + 1, lastDate: todayKey };
  } else {
    progress.streak = { count: 1, lastDate: todayKey };
  }
}
