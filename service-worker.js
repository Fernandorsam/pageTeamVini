self.addEventListener('install', function(event) {
    // Durante a instalação, abre o cache 'v1' e adiciona recursos a ele
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/styles.css',
                '/assets/js/scripts.js',
                // ...add other resources to cache...
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    // Durante a busca, tenta responder com recursos do cache
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response; // Retorna o recurso do cache se disponível
            }
            return fetch(event.request).then(function(response) {
                // Se o recurso não estiver no cache, faz uma solicitação de rede
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                var responseToCache = response.clone();
                caches.open('v1').then(function(cache) {
                    cache.put(event.request, responseToCache); // Armazena a resposta no cache
                });
                return response;
            });
        })
    );
});
