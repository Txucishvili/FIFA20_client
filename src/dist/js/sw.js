self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        './src/dist/js/app.bundle.js',
        './src/dist/js/a2hs.bundle.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
