/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_1gR2RPt3.mjs';
import 'clsx';
import { f as formatDate } from '../../chunks/date_XlhYAFzk.mjs';
import { $ as $$Button } from '../../chunks/Button_CoY7OynF.mjs';
import { g as getPostById } from '../../chunks/posts_aIqC7wVF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://kobwhatsup.github.io");
const $$CommentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommentCard;
  const { comment } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 rounded-lg p-4 mb-4"> <div class="flex items-start space-x-3"> <div class="flex-1"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-2"> <span class="text-sm font-medium text-gray-900">${comment.author.name}</span> <span class="text-sm text-gray-500">${formatDate(comment.createdAt)}</span> </div> </div> <p class="mt-2 text-sm text-gray-700"> ${comment.content} </p> </div> </div> </div>`;
}, "/home/project/src/components/forum/CommentCard.astro", void 0);

// 使用内存存储替代 SQLite
const comments = [];

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.post_id === postId)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const post = await getPostById(id);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const comments = await getCommentsByPostId(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - \u91D1\u724C\u8C03\u89E3\u5458` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="mb-8"> <div class="flex items-center space-x-4 mb-6"> <a href="/forum" class="text-indigo-600 hover:text-indigo-700">
← 返回论坛
</a> </div> <h1 class="text-3xl font-bold text-gray-900 mb-4">${post.title}</h1> <div class="flex items-center text-sm text-gray-500 mb-8"> <span>${post.author?.name || "\u533F\u540D\u7528\u6237"}</span> <span class="mx-2">·</span> <span>${formatDate(post.created_at)}</span> <span class="mx-2">·</span> <span>${post.category}</span> </div> <div class="prose prose-indigo max-w-none"> ${post.content} </div> </div> <div class="border-t border-gray-200 pt-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">评论 (${comments.length})</h2> <form class="mb-8" action="/api/comments" method="POST"> <input type="hidden" name="postId"${addAttribute(id, "value")}> <label for="comment" class="sr-only">添加评论</label> <textarea id="comment" name="content" rows="3" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="写下你的评论..."></textarea> <div class="mt-3 flex justify-end"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result3) => renderTemplate`发表评论` })} </div> </form> <div class="space-y-6"> ${comments.map((comment) => renderTemplate`${renderComponent($$result2, "CommentCard", $$CommentCard, { "comment": comment })}`)} </div> </div> </div> ` })}`;
}, "/home/project/src/pages/forum/[id].astro", void 0);

const $$file = "/home/project/src/pages/forum/[id].astro";
const $$url = "/forum/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
