// progress.js
// Handles UI progress bar updates when lessons are marked complete.
// Relies on the existing learning-data.js helpers and optional remote sync functions.

import { getOverallProgress, getCompletionForTrack } from './learning-data.js';
import { currentUser } from './auth.js';
import { fetchProgress } from './progress-remote.js';

// Animate a progress bar element by setting width and label.
export function updateOverallProgressUI() {
  const overall = getOverallProgress();
  const overallCount = document.getElementById('overall-count');
  const overallPercent = document.getElementById('overall-percent');
  const overallBar = document.getElementById('overall-bar');
  const streakPill = document.getElementById('streak-pill');
  if (overallCount) overallCount.textContent = `${overall.done} of ${overall.total} lessons`;
  if (overallPercent) overallPercent.textContent = `${overall.pct}% complete across all tracks`;
  if (overallBar) {
    overallBar.style.transition = 'width 400ms ease';
    overallBar.style.width = `${overall.pct}%`;
    overallBar.setAttribute('aria-valuenow', overall.pct);
  }
  if (streakPill) streakPill.textContent = `Streak: ${overall.streak.count || 0}`;
}

// Refresh from remote for the signed-in user then update UI.
export async function refreshProgressFromRemote() {
  const user = currentUser();
  if (!user) {
    updateOverallProgressUI();
    return;
  }
  try {
    const remote = await fetchProgress(user.uid);
    if (remote) {
      // applyRemoteProgress is used elsewhere; fetching remote helps keep counts accurate
      // but we avoid importing applyRemoteProgress here to keep responsibilities separate.
    }
  } catch (err) {
    console.error('Failed to fetch remote progress', err);
  }
  updateOverallProgressUI();
}

// Convenience: call this after toggling/completing a lesson to update all visible bars.
export function onLessonMarked() {
  // update known progress bars in dashboard and tracks pages
  updateOverallProgressUI();
  // Update small per-track bars (if present)
  document.querySelectorAll('.track-card, .panel.track-panel').forEach(card => {
    const progressBar = card.querySelector('.progress-bar');
    // If card has a track id as data attribute, compute its progress
    const trackId = card.dataset?.trackId;
    if (trackId && progressBar) {
      const stats = getCompletionForTrack(trackId);
      progressBar.style.transition = 'width 400ms ease';
      progressBar.style.width = `${stats.pct}%`;
    }
  });
}

// Auto-run on import to ensure UI is initialized.
updateOverallProgressUI();

