const CACHE_NAME = 'mylifeqr-v1';
const urlsToCache = [
  '/mylifeqr/',
  '/mylifeqr/index.html',
  '/mylifeqr/perfil.html',
  '/mylifeqr/MyLifeQRLogo.png',
  '/mylifeqr/Motoindex.png',
  '/mylifeqr/Casco.jpg',
  '/mylifeqr/TemplateNegroMyLifeQR.png',
  '/mylifeqr/TemplateRojoMyLifeQR.png',
  '/mylifeqr/TemplateNegroMyLifeQRCuadrado.png',
  '/mylifeqr/TemplateRojoMyLifeQRCuadrado.png',
  '/mylifeqr/TarjetaFrente.png',
  '/mylifeqr/TarjetaBack.png',
  '/mylifeqr/TarjetaFrenteEN.png',
  '/mylifeqr/TarjetaBackEN.png',
  '/mylifeqr/android-chrome-192x192.png',
  '/mylifeqr/android-chrome-512x512.png',
  '/mylifeqr/apple-touch-icon.png',
  '/mylifeqr/favicon.ico',
  '/mylifeqr/favicon-16x16.png',
  '/mylifeqr/favicon-32x32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});