/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "\u8C03\u89E3\u670D\u52A1",
      description: "\u63D0\u4F9B\u4E13\u4E1A\u7684\u8C03\u89E3\u670D\u52A1\uFF0C\u5E2E\u52A9\u5F53\u4E8B\u4EBA\u9AD8\u6548\u89E3\u51B3\u7EA0\u7EB7\u3002",
      features: [
        "\u4E13\u4E1A\u8C03\u89E3\u5458\u56E2\u961F",
        "\u6807\u51C6\u5316\u8C03\u89E3\u6D41\u7A0B",
        "\u4FDD\u5BC6\u6027\u4FDD\u969C",
        "\u9AD8\u6548\u89E3\u51B3\u65B9\u6848"
      ]
    },
    {
      title: "\u6CD5\u5F8B\u54A8\u8BE2",
      description: "\u4E13\u4E1A\u7684\u6CD5\u5F8B\u54A8\u8BE2\u670D\u52A1\uFF0C\u89E3\u7B54\u8C03\u89E3\u76F8\u5173\u6CD5\u5F8B\u95EE\u9898\u3002",
      features: [
        "\u4E13\u4E1A\u6CD5\u5F8B\u987E\u95EE",
        "\u5FEB\u901F\u54CD\u5E94",
        "\u4E13\u4E1A\u610F\u89C1\u4E66",
        "\u8DDF\u8E2A\u670D\u52A1"
      ]
    },
    {
      title: "\u57F9\u8BAD\u8BA4\u8BC1",
      description: "\u7CFB\u7EDF\u7684\u8C03\u89E3\u5458\u57F9\u8BAD\u8BFE\u7A0B\u548C\u4E13\u4E1A\u8D44\u683C\u8BA4\u8BC1\u3002",
      features: [
        "\u4E13\u4E1A\u8BFE\u7A0B\u4F53\u7CFB",
        "\u5B9E\u8DF5\u6F14\u7EC3",
        "\u8D44\u683C\u8BA4\u8BC1",
        "\u7EE7\u7EED\u6559\u80B2"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8C03\u89E3\u670D\u52A1 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
专业的调解服务
</h2> <p class="mt-4 text-lg text-gray-500">
为您提供全方位的调解服务支持
</p> </div> <div class="mt-20"> <div class="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12"> ${services.map((service) => renderTemplate`<div class="relative flex flex-col items-center"> <div class="text-center"> <h3 class="text-2xl font-bold text-gray-900">${service.title}</h3> <p class="mt-4 text-gray-500">${service.description}</p> <ul class="mt-8 space-y-4"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center"> <svg class="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="ml-3 text-gray-500">${feature}</span> </li>`)} </ul> </div> </div>`)} </div> </div> <div class="mt-16 text-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "class": "px-8" }, { "default": ($$result3) => renderTemplate`
立即咨询
` })} </div> </div> </div> ` })}`;
}, "/home/project/src/pages/services/index.astro", void 0);

const $$file = "/home/project/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
