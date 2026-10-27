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
var BASICO = ["portal.html", "portal.webmanifest", "fuentes/cormorant-garamond.woff", "fuentes/cormorant-sc-600.woff2", "fuentes/cormorant-sc-bold.woff", "fuentes/museomoderno-400.woff", "fuentes/museomoderno-500.woff", "fuentes/museomoderno-600.woff", "imagenes/cuerpo-hombre.webp", "imagenes/cuerpo-mujer.webp", "imagenes/fondo-camino-tres-frascos.webp", "imagenes/fondo-comidas.webp", "imagenes/fondo-contacto-carta.webp", "imagenes/fondo-cuerpo-figura.webp", "imagenes/fondo-encuentro-manos.webp", "imagenes/fondo-estudio-pantalla.webp", "imagenes/fondo-flores.webp", "imagenes/fondo-notas-libreta.webp", "imagenes/frasco-banner-estudio-la-copa.webp", "imagenes/frasco-banner-remedios.webp", "imagenes/frasco-banner-tomas-la-gota.webp", "imagenes/frasco-banner-va-en-camino.webp", "imagenes/icono-01-inicio.webp", "imagenes/icono-02-cuerpo.webp", "imagenes/icono-03-estudio.webp", "imagenes/icono-04-remedios.webp", "imagenes/icono-05-contacto.webp", "imagenes/icono-06-tomas-de-hoy.webp", "imagenes/icono-07-encuentro.webp", "imagenes/icono-08-camino-etapas.webp", "imagenes/icono-09-pedir-otro-frasquito.webp", "imagenes/icono-10-envio.webp", "imagenes/icono-12-notas.webp", "imagenes/icono-13-con-esto-llegaste.webp", "imagenes/icono-14-flores.webp", "imagenes/icono-15-comidas.webp", "imagenes/icono-16-pago.webp", "imagenes/icono-17-lamina.webp", "imagenes/icono-20-zona-cabeza.webp", "imagenes/icono-21-zona-cuello-garganta.webp", "imagenes/icono-22-zona-pecho.webp", "imagenes/icono-23-zona-abdomen.webp", "imagenes/icono-24-zona-pelvis.webp", "imagenes/icono-25-zona-brazos-manos.webp", "imagenes/icono-26-zona-piernas-pies.webp", "imagenes/icono-27-zona-todo-el-cuerpo.webp", "imagenes/icono-28-mail.webp", "imagenes/icono-29-whatsapp.webp", "imagenes/icono-30-instalar-iphone.webp", "imagenes/icono-31-instalar-android.webp", "imagenes/logo-cuantica.webp", "imagenes/logo-icono-app.webp", "imagenes/que-es-flor.webp", "imagenes/silueta-neutra.webp", "imagenes/simbolo-adn.webp", "imagenes/icono-180.png", "imagenes/icono-192.png", "imagenes/icono-512.png"];

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
  // (27/10, diseno) de a uno: si un dibujo no baja, el resto queda guardado igual
  ev.waitUntil(caches.open(CAJA).then(function (c) {
    return Promise.all(BASICO.map(function (u) { return c.add(u).catch(function () { return null; }); }));
  }).catch(function () { return null; }));
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
