
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('countdown-cache').then((cache) => {
      return cache.addAll([
        './',
        './my_countdown.html',
        './my_countdown.css',
        './my_countdown.js',
        './alarm.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
