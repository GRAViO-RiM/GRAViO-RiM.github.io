'use strict';
// Keep the install page in Safari so its icon can be added first. Installed
// shortcuts open the existing Apps Script app without copying business data.
const launchLink = document.getElementById('openApp');
const isInstalled = window.navigator.standalone === true ||
  window.matchMedia('(display-mode: standalone)').matches;
if (isInstalled && !new URLSearchParams(window.location.search).has('install')) {
  window.location.replace(launchLink.href);
}
