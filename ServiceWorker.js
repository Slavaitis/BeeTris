self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v3').then(function(cache) {
        return cache.addAll([
          '/',
          '/Build/Beetris.data',
          '/Build/Beetris.framework.js',
          '/Build/Beetris.loader.js',
          '/Build/Beetris.wasm',
          '/Build/Beetris.worker.js',
          '/index.html',
          '/ServiceWorker.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v3'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });