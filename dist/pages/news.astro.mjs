/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { a as getArticlesByCategory } from '../chunks/articles_BxAB6Rqg.mjs';
import { f as formatDate } from '../chunks/date_XlhYAFzk.mjs';
import { $ as $$Card } from '../chunks/Card_D7rU73tU.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <h3 class="text-lg font-semibold text-gray-900"> <a${addAttribute(`/news/${article.id}`, "href")} class="hover:text-indigo-600"> ${article.title} </a> </h3> <p class="mt-2 text-gray-600 line-clamp-3"> ${article.content} </p> <div class="mt-4 flex items-center text-sm text-gray-500"> <span>发布时间：${formatDate(article.createdAt)}</span> <span class="mx-2">·</span> <span class="text-indigo-600">${article.category}</span> </div> </div> ` })}`;
}, "/home/project/src/components/news/NewsCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const news = await getArticlesByCategory("\u884C\u4E1A\u52A8\u6001");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u884C\u4E1A\u52A8\u6001 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">行业动态</h1> <p class="mt-2 text-lg text-gray-600">了解调解行业最新发展动态</p> </div> <div class="flex space-x-4"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按类别筛选` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按时间排序` })} </div> </div> <div class="grid gap-6"> ${news.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article })}`)} </div> </div> ` })}`;
}, "/home/project/src/pages/news/index.astro", void 0);

const $$file = "/home/project/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
