const CACHE_NAME = "cache-v1";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './index.html',
                './style.css',
                './script.js'
            ])
        })
    )
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                if (cache !== CACHE_NAME) {
                    return caches.delete(cache);
                }
            }))
        })
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone))
            return res;
        }).catch(() => caches.match(event.request).then(res => res))
    )
})