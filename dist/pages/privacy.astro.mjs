/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u9690\u79C1\u653F\u7B56 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1> <div class="prose prose-indigo max-w-none"> <h2>1. 信息收集</h2> <p>我们收集的信息包括但不限于：用户注册信息、使用记录、设备信息等。我们承诺只收集必要的个人信息。</p> <h2>2. 信息使用</h2> <p>收集的信息将用于：提供和改进服务、用户身份验证、安全防护、数据分析等。未经用户同意，我们不会将信息用于其他目的。</p> <h2>3. 信息保护</h2> <p>我们采用业界标准的安全技术和程序来保护用户信息，防止未经授权的访问、使用或泄露。</p> <h2>4. 信息共享</h2> <p>除法律法规规定或用户授权外，我们不会向第三方分享用户个人信息。</p> <h2>5. 用户权利</h2> <p>用户有权访问、更正、删除其个人信息，也有权撤回同意或注销账号。</p> </div> </div> ` })}`;
}, "/home/project/src/pages/privacy.astro", void 0);

const $$file = "/home/project/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
