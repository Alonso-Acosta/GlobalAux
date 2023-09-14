import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c338a7a5.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_b21c044c.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_4e595690.mjs');
const _page1  = () => import('./chunks/index_8d67b843.mjs');
const _page2  = () => import('./chunks/LubricacionDobleLinea_a50a01d8.mjs');
const _page3  = () => import('./chunks/LubricacionIndustrial_a60b7e69.mjs');
const _page4  = () => import('./chunks/SistemasSRL_ddf8b8db.mjs');
const _page5  = () => import('./chunks/BlogAirJet_fadb7821.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/LubricacionDobleLinea.astro", _page2],["src/pages/LubricacionIndustrial.astro", _page3],["src/pages/SistemasSRL.astro", _page4],["src/pages/BlogAirJet.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
