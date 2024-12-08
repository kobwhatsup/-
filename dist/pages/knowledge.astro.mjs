/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { a as getLatestCases } from '../chunks/cases_DjzEPT11.mjs';
import { f as formatDate } from '../chunks/date_XlhYAFzk.mjs';
import { $ as $$Card } from '../chunks/Card_D7rU73tU.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$CaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseCard;
  const { case: caseData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <h3 class="text-lg font-semibold text-gray-900"> <a${addAttribute(`/knowledge/${caseData.id}`, "href")} class="hover:text-indigo-600"> ${caseData.title} </a> </h3> <p class="mt-2 text-gray-600 line-clamp-2"> ${caseData.description} </p> <div class="mt-4 flex items-center text-sm text-gray-500"> <span>更新时间：${formatDate(caseData.updatedAt)}</span> </div> </div> ` })}`;
}, "/home/project/src/components/knowledge/CaseCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const cases = await getLatestCases();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u77E5\u8BC6\u5206\u4EAB - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">知识分享</h1> <p class="mt-2 text-lg text-gray-600">典型案例分析与调解技巧分享</p> </div> <div class="flex space-x-4"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按类别筛选` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按时间排序` })} </div> </div> <div class="grid gap-8 md:grid-cols-2"> ${cases.map((case_) => renderTemplate`${renderComponent($$result2, "CaseCard", $$CaseCard, { "case": case_ })}`)} </div> </div> ` })}`;
}, "/home/project/src/pages/knowledge/index.astro", void 0);

const $$file = "/home/project/src/pages/knowledge/index.astro";
const $$url = "/knowledge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
