/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u670D\u52A1\u6761\u6B3E - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 mb-8">服务条款</h1> <div class="prose prose-indigo max-w-none"> <h2>1. 服务内容</h2> <p>金牌调解员平台（以下简称"平台"）是一个为调解员提供专业服务的在线平台，主要提供法律法规、政策解读、行业动态、知识分享等服务。</p> <h2>2. 用户注册</h2> <p>用户注册时应当提供真实、准确、完整的个人资料，并保证资料的及时更新。如因用户提供资料不实而造成的任何损失，平台不承担任何责任。</p> <h2>3. 用户义务</h2> <p>用户在使用平台服务时，必须遵守中华人民共和国相关法律法规，不得利用平台服务从事违法违规活动。</p> <h2>4. 知识产权</h2> <p>平台上的所有内容，包括但不限于文字、图片、音频、视频等，均受著作权法和其他相关法律法规的保护。</p> <h2>5. 免责声明</h2> <p>平台提供的信息仅供参考，不构成任何形式的法律建议。用户应当根据具体情况自行判断和决策。</p> </div> </div> ` })}`;
}, "/home/project/src/pages/terms.astro", void 0);

const $$file = "/home/project/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
