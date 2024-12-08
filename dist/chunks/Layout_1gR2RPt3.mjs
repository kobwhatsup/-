import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://kobwhatsup.github.io");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className, showText = true, darkMode = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center ${className}`, "class")}> <svg${addAttribute(`w-8 h-8 flex-shrink-0 ${darkMode ? "text-white" : "text-indigo-600"}`, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> ${showText && renderTemplate`<span${addAttribute(`text-xl font-semibold ml-2 ${darkMode ? "text-white" : "text-gray-900"}`, "class")}>
金牌调解员
</span>`} </div>`;
}, "/home/project/src/components/Logo.astro", void 0);

const $$Astro$1 = createAstro("https://kobwhatsup.github.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navigation = [
    { name: "\u9996\u9875", href: "/" },
    { name: "\u6CD5\u5F8B\u6CD5\u89C4", href: "/laws" },
    { name: "\u884C\u4E1A\u52A8\u6001", href: "/news" },
    { name: "\u77E5\u8BC6\u5206\u4EAB", href: "/knowledge" },
    { name: "\u57F9\u8BAD\u8BFE\u7A0B", href: "/training" },
    { name: "\u8BBA\u575B", href: "/forum" }
  ];
  const pathname = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex"> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> </div> <div class="hidden sm:ml-6 sm:flex sm:space-x-8"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
    pathname === item.href ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
  ], "class:list")}> ${item.name} </a>`)} </div> </div> <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4"> <a href="/login" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
登录
</a> <a href="/register" class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
注册
</a> </div> <!-- Mobile menu button --> <div class="flex items-center sm:hidden"> <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">打开主菜单</span> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </nav> <!-- Mobile menu --> <div class="sm:hidden hidden" id="mobile-menu"> <div class="pt-2 pb-3 space-y-1"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
    pathname === item.href ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
  ], "class:list")}> ${item.name} </a>`)} </div> <div class="pt-4 pb-3 border-t border-gray-200"> <div class="space-y-1"> <a href="/login" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
登录
</a> <a href="/register" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
注册
</a> </div> </div> </div> </header> `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const links = {
    about: [
      { text: "\u5E73\u53F0\u4ECB\u7ECD", href: "/about" },
      { text: "\u8054\u7CFB\u6211\u4EEC", href: "/contact" }
    ],
    services: [
      { text: "\u8C03\u89E3\u670D\u52A1", href: "/services" },
      { text: "\u57F9\u8BAD\u8BFE\u7A0B", href: "/training" }
    ],
    resources: [
      { text: "\u6CD5\u5F8B\u6CD5\u89C4", href: "/laws" },
      { text: "\u6848\u4F8B\u5206\u6790", href: "/knowledge" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800"> <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> <div> <h3 class="text-white text-lg font-semibold mb-4">关于我们</h3> <ul class="space-y-2"> ${links.about.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white"> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-white text-lg font-semibold mb-4">服务内容</h3> <ul class="space-y-2"> ${links.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white"> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-white text-lg font-semibold mb-4">资源中心</h3> <ul class="space-y-2"> ${links.resources.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white"> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-white text-lg font-semibold mb-4">联系方式</h3> <ul class="space-y-2"> <li class="text-gray-300">电话：400-XXX-XXXX</li> <li class="text-gray-300">邮箱：contact@mediator.com</li> </ul> </div> </div> <div class="mt-8 border-t border-gray-700 pt-8"> <p class="text-gray-400 text-center">© ${currentYear} 金牌调解员. 保留所有权利.</p> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description" content="金牌调解员 - 专业的调解员服务平台"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
