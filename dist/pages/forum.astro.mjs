/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import 'clsx';
import { f as formatDate } from '../chunks/date_XlhYAFzk.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
import { a as getAllPosts } from '../chunks/posts_aIqC7wVF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow rounded-lg p-6"> <div class="flex justify-between items-start"> <div> <h3 class="text-lg font-medium text-gray-900"> <a${addAttribute(`/forum/${post.id}`, "href")} class="hover:text-indigo-600"> ${post.title} </a> </h3> <p class="mt-1 text-sm text-gray-500"> ${post.category} </p> </div> </div> <p class="mt-3 text-gray-600 line-clamp-2"> ${post.content} </p> <div class="mt-4 flex items-center justify-between text-sm text-gray-500"> <div class="flex items-center space-x-4"> <span>${post.author?.name || "\u533F\u540D\u7528\u6237"}</span> <span>${formatDate(post.created_at)}</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path> </svg> <span>${post._count?.comments || 0}</span> </div> </div> </div>`;
}, "/home/project/src/components/forum/PostCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getAllPosts();
  const categories = [
    "\u5168\u90E8",
    "\u7ECF\u9A8C\u5206\u4EAB",
    "\u95EE\u9898\u54A8\u8BE2",
    "\u6848\u4F8B\u8BA8\u8BBA",
    "\u5176\u4ED6"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8BBA\u575B - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">调解员论坛</h1> <p class="mt-2 text-lg text-gray-600">分享经验，交流心得</p> </div> <a href="/forum/new"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary" }, { "default": ($$result3) => renderTemplate`发布帖子` })} </a> </div> <div class="mb-8"> <div class="flex space-x-4"> ${categories.map((category) => renderTemplate`<button class="px-4 py-2 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"> ${category} </button>`)} </div> </div> <div class="space-y-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> </div> ` })}`;
}, "/home/project/src/pages/forum/index.astro", void 0);

const $$file = "/home/project/src/pages/forum/index.astro";
const $$url = "/forum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
