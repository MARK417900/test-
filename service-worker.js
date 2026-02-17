const CACHE_NAME = "marks-zone-v1";

const urlsToCache = [
  "index.html",
  "logo.jpg",
  "Hotya.jpg",
  "xo.jpg",
  "GOSH.jpg",
  "coming soon.jpg"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});