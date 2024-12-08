/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$RegisterForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="space-y-4" action="#" method="POST"> <div> <label for="name" class="block text-sm font-medium text-gray-700">
姓名
</label> <div class="mt-1"> <input id="name" name="name" type="text" required placeholder="请输入真实姓名" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div> <label for="phone" class="block text-sm font-medium text-gray-700">
手机号码
</label> <div class="mt-1"> <input id="phone" name="phone" type="tel" autocomplete="tel" required placeholder="请输入手机号码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">
密码
</label> <div class="mt-1"> <input id="password" name="password" type="password" autocomplete="new-password" required placeholder="请设置登录密码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div> <label for="password-confirm" class="block text-sm font-medium text-gray-700">
确认密码
</label> <div class="mt-1"> <input id="password-confirm" name="password-confirm" type="password" autocomplete="new-password" required placeholder="请再次输入密码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> </div> </div> <div> <label for="code" class="block text-sm font-medium text-gray-700">
验证码
</label> <div class="mt-1 flex space-x-2"> <input id="code" name="code" type="text" required placeholder="请输入验证码" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "variant": "outline", "class": "w-24 shrink-0 text-sm" }, { "default": ($$result2) => renderTemplate`
获取验证码
` })} </div> </div> <div class="flex items-start mt-4"> <div class="flex items-center h-5"> <input id="agree-terms" name="agree-terms" type="checkbox" required class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"> </div> <div class="ml-2 text-sm"> <label for="agree-terms" class="text-gray-700">
我已阅读并同意
<a href="/terms" class="font-medium text-indigo-600 hover:text-indigo-500">《服务条款》</a>
和
<a href="/privacy" class="font-medium text-indigo-600 hover:text-indigo-500">《隐私政策》</a> </label> </div> </div> <div class="mt-6"> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "class": "w-full justify-center" }, { "default": ($$result2) => renderTemplate`
注册
` })} </div> </form>`;
}, "/home/project/src/components/auth/RegisterForm.astro", void 0);

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6CE8\u518C - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-md"> <div class="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10"> <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-gray-900">
注册账号
</h2> <p class="mt-2 text-sm text-gray-600">
已有账号？
<a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
立即登录
</a> </p> </div> ${renderComponent($$result2, "RegisterForm", $$RegisterForm, {})} </div> </div> </div> ` })}`;
}, "/home/project/src/pages/register.astro", void 0);

const $$file = "/home/project/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
