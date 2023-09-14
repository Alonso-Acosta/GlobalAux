import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_b21c044c.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3724c0fd.js"}],"styles":[{"type":"external","src":"/_astro/BlogAirJet.d362a79c.css"},{"type":"external","src":"/_astro/index.a9cbbd9f.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3724c0fd.js"}],"styles":[{"type":"external","src":"/_astro/BlogAirJet.d362a79c.css"},{"type":"external","src":"/_astro/LubricacionDobleLinea.7f28385b.css"}],"routeData":{"route":"/lubricaciondoblelinea","type":"page","pattern":"^\\/LubricacionDobleLinea\\/?$","segments":[[{"content":"LubricacionDobleLinea","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/LubricacionDobleLinea.astro","pathname":"/LubricacionDobleLinea","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3724c0fd.js"}],"styles":[{"type":"external","src":"/_astro/BlogAirJet.d362a79c.css"},{"type":"external","src":"/_astro/LubricacionIndustrial.6bc73b8b.css"}],"routeData":{"route":"/lubricacionindustrial","type":"page","pattern":"^\\/LubricacionIndustrial\\/?$","segments":[[{"content":"LubricacionIndustrial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/LubricacionIndustrial.astro","pathname":"/LubricacionIndustrial","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3724c0fd.js"}],"styles":[{"type":"external","src":"/_astro/BlogAirJet.d362a79c.css"}],"routeData":{"route":"/sistemassrl","type":"page","pattern":"^\\/SistemasSRL\\/?$","segments":[[{"content":"SistemasSRL","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/SistemasSRL.astro","pathname":"/SistemasSRL","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3724c0fd.js"}],"styles":[{"type":"external","src":"/_astro/BlogAirJet.d362a79c.css"},{"type":"external","src":"/_astro/BlogAirJet.09ff62ed.css"}],"routeData":{"route":"/blogairjet","type":"page","pattern":"^\\/BlogAirJet\\/?$","segments":[[{"content":"BlogAirJet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/BlogAirJet.astro","pathname":"/BlogAirJet","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/BlogAirJet.astro",{"propagation":"none","containsHead":true}],["C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/LubricacionDobleLinea.astro",{"propagation":"none","containsHead":true}],["C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/LubricacionIndustrial.astro",{"propagation":"none","containsHead":true}],["C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/SistemasSRL.astro",{"propagation":"none","containsHead":true}],["C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/LubricacionDobleLinea.astro":"chunks/pages/LubricacionDobleLinea_7f7b2704.mjs","/src/pages/LubricacionIndustrial.astro":"chunks/pages/LubricacionIndustrial_36262bcb.mjs","/src/pages/SistemasSRL.astro":"chunks/pages/SistemasSRL_0568ee6b.mjs","/src/pages/index.astro":"chunks/pages/index_213b9f7e.mjs","\u0000@astrojs-manifest":"manifest_c338a7a5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_4e595690.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_8d67b843.mjs","\u0000@astro-page:src/pages/LubricacionDobleLinea@_@astro":"chunks/LubricacionDobleLinea_a50a01d8.mjs","\u0000@astro-page:src/pages/LubricacionIndustrial@_@astro":"chunks/LubricacionIndustrial_a60b7e69.mjs","\u0000@astro-page:src/pages/SistemasSRL@_@astro":"chunks/SistemasSRL_ddf8b8db.mjs","\u0000@astro-page:src/pages/BlogAirJet@_@astro":"chunks/BlogAirJet_fadb7821.mjs","C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_7b164219.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.3724c0fd.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/BlogAirJet.09ff62ed.css","/_astro/BlogAirJet.d362a79c.css","/_astro/LubricacionDobleLinea.7f28385b.css","/_astro/LubricacionIndustrial.6bc73b8b.css","/_astro/index.a9cbbd9f.css","/favicon.svg","/_astro/hoisted.3724c0fd.js","/images/Blog/i2.jpg","/images/favicon/GlobalIcon.webp","/images/Clientes/Ajover.png","/images/Clientes/alfa.jpg","/images/Clientes/Alpina.png","/images/Clientes/Argos.png","/images/Clientes/AveryDennison.jpg","/images/Clientes/Baxter.png","/images/Clientes/Brinsa.png","/images/Clientes/Cemex.png","/images/Clientes/cerrejon.png","/images/Clientes/CerroMatoso.svg","/images/Clientes/Cetelsa.png","/images/Clientes/Colgate.png","/images/Clientes/Colombina.png","/images/Clientes/Corona.png","/images/Clientes/Familia.png","/images/Clientes/GerdauLogo.png","/images/Clientes/Gerfor.png","/images/Clientes/Goodyear.png","/images/Clientes/Grasco.png","/images/Clientes/Holcim.png","/images/Clientes/IngenioPichichi.png","/images/Clientes/kelloggs.png","/images/Clientes/Kimberly.png","/images/Clientes/Papelsa.png","/images/Clientes/peldar.png","/images/Clientes/PuertoSantaMarta.png","/images/Clientes/Rimax.png","/images/Clientes/SanMarcos.png","/images/Clientes/schott.webp","/images/Clientes/Sidenal.png","/images/Clientes/Sika.png","/images/Clientes/Smurfit.png","/images/Clientes/Solla.png","/images/Clientes/Thomas.png","/images/Clientes/unilever.png","/images/Clientes/Yamaha.jpg","/images/logo/logo-header.webp","/images/slides/1.jpg","/images/slides/2.jpg","/images/slides/3.jpg","/images/slides/asesoria.jpg","/images/slides/capacitacion.jpg","/images/slides/importaciones.jpg","/images/slides/LineaAire.jpg","/images/slides/nosotros.jpg","/images/slides/operador.jpg","/images/slides/Slide1.jpg","/images/slides/Slide2.jpg","/images/slides/Slide3.jpg","/images/Blog/Blog1/adjfam.jpg","/images/Blog/Blog1/Airjet.png","/images/Blog/Blog1/airjet_partswasherPR_900x300.jpg","/images/Blog/Blog1/ajapp.jpg","/images/Blog/Blog1/ajapp2.jpg","/images/Blog/Blog1/ajfam.jpg","/images/Blog/Blog1/Boquilla.png","/images/Productos/LubricacionIndustrial/Imagen1.jpg","/images/Productos/LubricacionIndustrial/lubricacion-automatica-i.webp","/images/Productos/LubricacionIndustrial/lubricacion-automatica-portada.webp","/images/Productos/LubricacionIndustrial/lubricacion-Resistencia.webp","/images/Productos/LubricacionIndustrial/lubricacion-Resistencia2.webp"]});

export { manifest };
