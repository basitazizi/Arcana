// firebase-init.js
import { firebaseConfig } from './config.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

// Initialize
const app = initializeApp(firebaseConfig);

// Analytics can throw on unsupported environments; keep it safe:
try { getAnalytics(app); } catch (_) {}
