/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_1gR2RPt3.mjs';
import { g as getArticleById } from '../../chunks/articles_BxAB6Rqg.mjs';
import { f as formatDate } from '../../chunks/date_XlhYAFzk.mjs';
import { $ as $$Button } from '../../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const article = await getArticleById(id);
  if (!article) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article.title} - \u91D1\u724C\u8C03\u89E3\u5458` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="mb-8"> <div class="flex items-center space-x-4 mb-6"> <a href="/news" class="text-indigo-600 hover:text-indigo-700">
← 返回新闻列表
</a> </div> <h1 class="text-3xl font-bold text-gray-900 mb-4">${article.title}</h1> <div class="flex items-center text-sm text-gray-500 mb-8"> <span>发布时间：${formatDate(article.createdAt)}</span> <span class="mx-2">·</span> <span class="text-indigo-600">${article.category}</span> </div> <div class="prose prose-indigo max-w-none"> ${article.content} </div> </div> <div class="border-t border-gray-200 pt-8"> <div class="flex justify-between items-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`分享` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`打印` })} </div> </div> </div> ` })}`;
}, "/home/project/src/pages/news/[id].astro", void 0);

const $$file = "/home/project/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
