/* EL PORTAL COMO APP (13/10, portal_como_app.py): el service worker MINIMO.

   Para que el celular deje instalar el portal como una app hace falta uno.
   Hace tres cosas y nada mas:
     - guarda la pagina, sus letras y sus dibujos (que no llevan datos de
       nadie: lo de cada paciente viaja despues del # y nunca llega aca);
     - si no hay senal, abre el portal con lo guardado;
     - la lista de links apagados y las laminas cifradas van SIEMPRE a la
       red: un link apagado se apaga aunque la pagina este guardada.
   Solo atiende lo del propio portal (nada de otras paginas del sitio). */
"use strict";
var CAJA = "cuantica-portal-app2";
var BASICO = ["portal.html", "portal.webmanifest", "fuentes/cormorant-garamond.woff", "fuentes/cormorant-sc-600.woff2", "fuentes/cormorant-sc-bold.woff", "fuentes/museomoderno-400.woff", "fuentes/museomoderno-500.woff", "fuentes/museomoderno-600.woff", "imagenes/cuerpo-hombre.webp", "imagenes/cuerpo-mujer.webp", "imagenes/logo-cuantica.webp", "imagenes/silueta-neutra.webp", "imagenes/simbolo-adn.webp", "imagenes/icono-180.png", "imagenes/icono-192.png", "imagenes/icono-512.png"];

function esBasico(url) {
  try {
    var u = new URL(url);
    if (u.origin !== self.location.origin) { return false; }
    var base = new URL("./", self.location.href).pathname;
    var rel = u.pathname.indexOf(base) === 0 ? u.pathname.slice(base.length) : "";
    return BASICO.indexOf(rel) >= 0;
  } catch (e) { return false; }
}

self.addEventListener("install", function (ev) {
  ev.waitUntil(caches.open(CAJA).then(function (c) { return c.addAll(BASICO); }).catch(function () { return null; }));
  self.skipWaiting();
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CAJA && k.indexOf("cuantica-portal-") === 0; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (ev) {
  var r = ev.request;
  if (r.method !== "GET" || !esBasico(r.url)) { return; }
  // Primero la red (asi la pagina nueva llega al toque); sin senal, lo guardado.
  ev.respondWith(fetch(r).then(function (resp) {
    if (resp && resp.ok) {
      var copia = resp.clone();
      caches.open(CAJA).then(function (c) { return c.put(r, copia); }).catch(function () { return null; });
    }
    return resp;
  }).catch(function () {
    return caches.match(r, {ignoreSearch: true}).then(function (x) { return x || Response.error(); });
  }));
});
