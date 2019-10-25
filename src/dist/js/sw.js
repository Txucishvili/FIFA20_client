self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/FIFA20_client/src',
        '/FIFA20_client/src/index.html',
        '/FIFA20_client/src/dist/js/app.bundle.js',
        '/FIFA20_client/src/dist/js/a2hs.bundle.js',
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

