import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_B8wudQ4A.mjs';
import { clsx } from 'clsx';
import 'html-escaper';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(clsx(
    "bg-white rounded-lg shadow-sm border border-gray-200",
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/project/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
