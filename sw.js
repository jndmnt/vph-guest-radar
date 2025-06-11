// This is the service worker file (sw.js)

self.addEventListener('install', (event) => {
  // This event is fired when the service worker is installed.
  // You can pre-cache assets here if you want.
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
  // This event is fired when the service worker is activated.
  console.log('Service Worker: Activated');
});

// THIS IS THE CRUCIAL PART FOR INSTALLABILITY
self.addEventListener('fetch', (event) => {
  // This event is fired for every network request.
  // By having a fetch handler, you are telling the browser
  // that this PWA can handle network requests, a key part of offline capability.
  // We don't need to do anything complex yet, just respond to the request.
  event.respondWith(fetch(event.request));
});