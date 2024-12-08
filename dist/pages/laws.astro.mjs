/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { a as getLatestLaws } from '../chunks/laws_DI81yzzq.mjs';
import { f as formatDate } from '../chunks/date_XlhYAFzk.mjs';
import { $ as $$Card } from '../chunks/Card_D7rU73tU.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$LawCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LawCard;
  const { law } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <h3 class="text-lg font-semibold text-gray-900"> <a${addAttribute(`/laws/${law.id}`, "href")} class="hover:text-indigo-600"> ${law.title} </a> </h3> <p class="mt-2 text-gray-600 line-clamp-2"> ${law.content} </p> <div class="mt-4 flex items-center text-sm text-gray-500"> <span>生效日期：${formatDate(law.effectiveAt)}</span> <span class="mx-2">·</span> <span>发布日期：${formatDate(law.createdAt)}</span> </div> </div> ` })}`;
}, "/home/project/src/components/laws/LawCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const laws = await getLatestLaws();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6CD5\u5F8B\u6CD5\u89C4 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">法律法规</h1> <p class="mt-2 text-lg text-gray-600">最新的法律法规和政策解读</p> </div> <div class="flex space-x-4"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按类别筛选` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按时间排序` })} </div> </div> <div class="grid gap-6"> ${laws.map((law) => renderTemplate`${renderComponent($$result2, "LawCard", $$LawCard, { "law": law })}`)} </div> </div> ` })}`;
}, "/home/project/src/pages/laws/index.astro", void 0);

const $$file = "/home/project/src/pages/laws/index.astro";
const $$url = "/laws";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
