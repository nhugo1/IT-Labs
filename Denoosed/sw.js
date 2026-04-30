const CACHE_NAME = 'chess-vision-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});