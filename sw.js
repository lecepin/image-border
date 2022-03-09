const CACHE_NAME = "image-border-res";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(["./", "./index.html"]))
  );
});

self.addEventListener("activate", (event) => {
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  return event.respondWith(
    caches.match(event.request).then((cacheData) => {
      if (cacheData) {
        return cacheData;
      }

      return fetch(event.request);
    })
  );
});
