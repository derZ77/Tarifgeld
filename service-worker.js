const CACHE_NAME = "entgelt-pwa-v2";

const ASSETS = [
  "./",
  "./manifest.json"
];

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
