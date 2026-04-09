const CACHE_NAME = 'mylifeqr-v1.1';
const urlsToCache = [
  '/mylifeqr/',
  '/mylifeqr/index.html',
  '/mylifeqr/perfil.html',
  '/mylifeqr/MyLifeQRLogo.png',
  '/mylifeqr/Motoindex.png',
  '/mylifeqr/Casco.jpg',
  '/mylifeqr/TemplateNegroMyLifeQR.png',
  '/mylifeqr/TemplateRojoMyLifeQR.png',
  '/mylifeqr/TemplateNegroMyLifeQREN.png',
  '/mylifeqr/TemplateRojoMyLifeQREN.png',
  '/mylifeqr/TemplateNegroMyLifeQRCuadrado.png',
  '/mylifeqr/TemplateRojoMyLifeQRCuadrado.png',
  '/mylifeqr/android-chrome-192x192.png',
  '/mylifeqr/android-chrome-512x512.png',
  '/mylifeqr/apple-touch-icon.png',
  '/mylifeqr/favicon.ico',
  '/mylifeqr/favicon-16x16.png',
  '/mylifeqr/favicon-32x32.png'
];

// Instalación
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cache guardado');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('[Service Worker] Error en cache:', err))
  );
});

// Activación - limpia caches viejos
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activado');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Eliminando cache viejo:', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Intercepción de peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // No cachear peticiones a Firebase
          if (!event.request.url.includes('firebase') && !event.request.url.includes('firestore')) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        });
      })
  );
});