const cacheName = "DefaultCompany-BeeTris-0.1";
const contentToCache = [
    "Build/Beetris.loader.js",
    "Build/Beetris.framework.js",
    "Build/Beetris.data",
    "Build/Beetris.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', event => {
  // Просто передайте запрос дальше
  event.respondWith(fetch(event.request));
});
