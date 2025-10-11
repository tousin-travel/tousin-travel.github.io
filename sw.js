// Service Worker for Cache Control
const CACHE_NAME = 'tousin-v202510112029582029582022102007002009221338411';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script_abc2/script.js',
    '/resources/logo.png'
];

// Font Awesome fonts to cache
const fontUrls = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-brands-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-solid-900.woff2'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                // Cache main resources
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                // Cache fonts separately to handle CORS
                return caches.open(CACHE_NAME).then(cache => {
                    return Promise.all(
                        fontUrls.map(url => 
                            fetch(url, { mode: 'cors' })
                                .then(response => cache.put(url, response))
                                .catch(err => console.log('Failed to cache font:', url, err))
                        )
                    );
                });
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
