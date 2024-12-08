/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8054\u7CFB\u6211\u4EEC - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 mb-8">联系我们</h1> <div class="bg-white shadow overflow-hidden sm:rounded-lg"> <div class="px-4 py-5 sm:px-6"> <h2 class="text-lg leading-6 font-medium text-gray-900">联系方式</h2> <p class="mt-1 max-w-2xl text-sm text-gray-500">如有任何问题，欢迎通过以下方式与我们联系</p> </div> <div class="border-t border-gray-200"> <dl> <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> <dt class="text-sm font-medium text-gray-500">客服电话</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">400-XXX-XXXX</dd> </div> <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> <dt class="text-sm font-medium text-gray-500">服务时间</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">周一至周五 9:00-18:00</dd> </div> <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> <dt class="text-sm font-medium text-gray-500">电子邮箱</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">contact@mediator.com</dd> </div> <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> <dt class="text-sm font-medium text-gray-500">办公地址</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">北京市朝阳区xxx大厦</dd> </div> </dl> </div> </div> </div> ` })}`;
}, "/home/project/src/pages/contact/index.astro", void 0);

const $$file = "/home/project/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
