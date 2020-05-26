const CACHE_NAME = 'majda-trpkos-worker';
CACHES = [
    'dist/css/style.min.css',
    'index.html',
    'projects/projects.html',
    'resources/resources.html',
    'script.js',
    'worker.js',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'fonts/odachi/odachi.css',
    'fonts/odachi/odachi-webfont.woff',
    'fonts/odachi/odachi-webfont.woff2',
    
    'res/icons/facebook.svg',
    'res/icons/github.svg',
    'res/icons/github.png',
    'res/icons/discord.svg',
    'res/icons/telegram.svg',

    'res/setup/linux.png',
    'res/setup/ide.png',
    'res/setup/setup_light.jpg',
    'res/setup/keyboard.jpg',

    'res/majda.png',
    'res/majda-dark.png',
    'res/portrait.jpg',

    'res/projects/font.png',
    'res/projects/vxgi.jpg',
    'res/projects/tracing.jpg',
    'res/projects/majdacraft.jpg'
]

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request).then(
                function (response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function (cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            )
        })
    )
})


self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME)
        .then(cache => cache.addAll(CACHES))
    )
})


self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(cache => {
                    if (cache === CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})