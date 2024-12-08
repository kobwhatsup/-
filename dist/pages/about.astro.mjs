/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5E73\u53F0\u4ECB\u7ECD - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 mb-8">平台介绍</h1> <div class="prose prose-indigo max-w-none"> <h2>关于金牌调解员</h2> <p>金牌调解员平台是一个专业的调解员服务平台，致力于为调解员提供全方位的支持和服务。我们的使命是促进社会和谐，提升调解工作的专业化水平。</p> <h2>我们的优势</h2> <ul> <li>专业的法律法规资源库</li> <li>丰富的调解案例分析</li> <li>系统的培训课程体系</li> <li>活跃的调解员交流社区</li> </ul> <h2>平台特色</h2> <p>我们提供最新的法律法规解读、行业动态、调解技巧分享等专业内容，帮助调解员提升专业能力，更好地服务社会。</p> <h2>发展愿景</h2> <p>打造中国最专业的调解员服务平台，为推动多元化纠纷解决机制的发展贡献力量。</p> </div> </div> ` })}`;
}, "/home/project/src/pages/about/index.astro", void 0);

const $$file = "/home/project/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
