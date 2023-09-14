import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro_b21c044c.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './BlogAirJet_b1bc407c.mjs';
/* empty css                                *//* empty css                                */
const $$Astro = createAstro();
const $$SistemasSRL = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SistemasSRL;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/SistemasSRL.astro", void 0);

const $$file = "C:/Users/harin/Documents/Trabajo/GlobalReact/GlobalFinal/src/pages/SistemasSRL.astro";
const $$url = "/SistemasSRL";

export { $$SistemasSRL as default, $$file as file, $$url as url };
