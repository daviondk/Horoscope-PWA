const version = "0.0.03b";
const cacheName = `nothing-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
				'/css/main.css',
                '/index.html',
                '/get_horo.php',
                '/getsign.php',
				'/lib/jquery-3.3.0.js',
				'/scripts/parser.js',
				'/scripts/script.js',
                '/scripts/main.js',
                '/scripts/konam.js',
                '/scripts/pwacompat.min.js',
				'/image/bg/bg.png',
				'/image/signs/bliznetci.png',
				'/image/signs/deva.png',
				'/image/signs/kozerog.png',
				'/image/signs/lev.png',
				'/image/signs/oven.png',
				'/image/signs/rak.png',
				'/image/signs/ribi.png',
				'/image/signs/scorpion.png',
				'/image/signs/streletc.png',
				'/image/signs/telec.png',
				'/image/signs/vesi.png',
				'/image/signs/vodoley.png',
				'/image/icon.png'
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
