self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('offline-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/Farahaty/',
        '/Farahaty/index.html'
      ]);
    })
  );
});