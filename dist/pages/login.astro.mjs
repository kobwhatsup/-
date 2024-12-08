/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="space-y-4" action="#" method="POST"> <div> <label for="phone" class="block text-sm font-medium text-gray-700">
手机号码
</label> <div class="mt-1"> <input id="phone" name="phone" type="tel" autocomplete="tel" required placeholder="请输入手机号码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">
密码
</label> <div class="mt-1"> <input id="password" name="password" type="password" autocomplete="current-password" required placeholder="请输入密码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"> <label for="remember-me" class="ml-2 block text-sm text-gray-900">
记住我
</label> </div> <div class="text-sm"> <a href="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
忘记密码？
</a> </div> </div> <div class="mt-6"> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "class": "w-full justify-center" }, { "default": ($$result2) => renderTemplate`
登录
` })} </div> </form>`;
}, "/home/project/src/components/auth/LoginForm.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u767B\u5F55 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-md"> <div class="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10"> <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-gray-900">
登录账号
</h2> <p class="mt-2 text-sm text-gray-600">
还没有账号？
<a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
立即注册
</a> </p> </div> ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} </div> </div> </div> ` })}`;
}, "/home/project/src/pages/login.astro", void 0);

const $$file = "/home/project/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
