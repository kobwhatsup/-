/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import 'clsx';
import { a as getLatestLaws } from '../chunks/laws_DI81yzzq.mjs';
import { b as getLatestArticles } from '../chunks/articles_BxAB6Rqg.mjs';
import { a as getLatestCases } from '../chunks/cases_DjzEPT11.mjs';
import { g as getLatestCourses } from '../chunks/courses_H33fSd4b.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      id: 1,
      title: "\u91D1\u724C\u8C03\u89E3\u5458",
      subtitle: "\u4E13\u4E1A\u7684\u8C03\u89E3\u5458\u670D\u52A1\u5E73\u53F0",
      description: "\u63D0\u4F9B\u6700\u65B0\u6CD5\u5F8B\u6CD5\u89C4\u3001\u653F\u7B56\u89E3\u8BFB\u3001\u884C\u4E1A\u52A8\u6001\u3001\u77E5\u8BC6\u5206\u4EAB\u7B49\u8D44\u6E90",
      image: "/images/banner1.jpg",
      cta: {
        primary: {
          text: "\u7ACB\u5373\u6CE8\u518C",
          href: "/register"
        },
        secondary: {
          text: "\u4E86\u89E3\u66F4\u591A",
          href: "/about"
        }
      }
    },
    {
      id: 2,
      title: "\u4E13\u4E1A\u57F9\u8BAD\u8BFE\u7A0B",
      subtitle: "\u63D0\u5347\u8C03\u89E3\u6280\u80FD",
      description: "\u7CFB\u7EDF\u7684\u8C03\u89E3\u77E5\u8BC6\u57F9\u8BAD\uFF0C\u5B9E\u6218\u7ECF\u9A8C\u5206\u4EAB\uFF0C\u52A9\u529B\u804C\u4E1A\u53D1\u5C55",
      image: "/images/banner2.jpg",
      cta: {
        primary: {
          text: "\u67E5\u770B\u8BFE\u7A0B",
          href: "/training"
        }
      }
    },
    {
      id: 3,
      title: "\u8C03\u89E3\u6848\u4F8B\u5206\u6790",
      subtitle: "\u7ECF\u9A8C\u5206\u4EAB\u4E0E\u4EA4\u6D41",
      description: "\u771F\u5B9E\u6848\u4F8B\u89E3\u6790\uFF0C\u8C03\u89E3\u6280\u5DE7\u5206\u4EAB\uFF0C\u4FC3\u8FDB\u7ECF\u9A8C\u4EA4\u6D41",
      image: "/images/banner3.jpg",
      cta: {
        primary: {
          text: "\u67E5\u770B\u6848\u4F8B",
          href: "/knowledge"
        }
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-gray-900"> <div class="relative overflow-hidden h-[400px]"> <!-- 调整高度从 600px 到 400px --> <!-- 轮播内容 --> <div class="flex transition-transform duration-500" id="slider"> ${slides.map((slide) => renderTemplate`<div class="w-full flex-shrink-0"> <div class="relative h-[400px]"> <!-- 同样调整这里的高度 --> <div class="absolute inset-0"> <img${addAttribute(slide.image, "src")}${addAttribute(slide.title, "alt")} class="h-full w-full object-cover"> <div class="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div> </div> <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"> <!-- 调整内边距 --> <div class="max-w-2xl"> <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"> <!-- 调整标题大小 --> ${slide.title} </h1> <p class="mt-2 text-lg text-white"> <!-- 调整副标题间距 --> ${slide.subtitle} </p> <p class="mt-2 text-base text-gray-300"> <!-- 调整描述文字大小和间距 --> ${slide.description} </p> <div class="mt-6 flex items-center gap-x-4"> <!-- 调整按钮间距 --> ${slide.cta.primary && renderTemplate`<a${addAttribute(slide.cta.primary.href, "href")} class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> ${slide.cta.primary.text} </a>`} ${slide.cta.secondary && renderTemplate`<a${addAttribute(slide.cta.secondary.href, "href")} class="text-sm font-medium text-white hover:text-gray-300"> ${slide.cta.secondary.text} <span aria-hidden="true">→</span> </a>`} </div> </div> </div> </div> </div>`)} </div> <!-- 导航按钮 --> <button type="button" class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white focus:outline-none" id="prev-button"> <span class="sr-only">上一张</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path> </svg> </button> <button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white focus:outline-none" id="next-button"> <span class="sr-only">下一张</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </button> <!-- 指示器 --> <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2"> ${slides.map((_, index) => renderTemplate`<button type="button" class="h-2 w-2 rounded-full bg-white/50 hover:bg-white"${addAttribute(index, "data-index")}> <span class="sr-only">幻灯片 ${index + 1}</span> </button>`)} </div> </div> </div> `;
}, "/home/project/src/components/home/HeroSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const latestLaws = await getLatestLaws(3);
  const latestNews = await getLatestArticles(3);
  const latestCases = await getLatestCases(3);
  const latestCourses = await getLatestCourses(3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u91D1\u724C\u8C03\u89E3\u5458 - \u9996\u9875" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} <!-- 最新法律法规 --> <section class="py-12 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-bold text-gray-900">最新法律法规</h2> <a href="/laws" class="text-indigo-600 hover:text-indigo-700 flex items-center">
查看更多
<svg class="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="grid gap-6 md:grid-cols-3"> ${latestLaws.map((law) => renderTemplate`<div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/laws/${law.id}`, "href")} class="hover:text-indigo-600"> ${law.title} </a> </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${law.summary}</p> <div class="text-sm text-gray-500">
生效日期：${new Date(law.effectiveAt).toLocaleDateString("zh-CN")} </div> </div>`)} </div> </div> </section> <!-- 行业动态 --> <section class="py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-bold text-gray-900">行业动态</h2> <a href="/news" class="text-indigo-600 hover:text-indigo-700 flex items-center">
查看更多
<svg class="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="grid gap-6 md:grid-cols-3"> ${latestNews.map((article) => renderTemplate`<div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/news/${article.id}`, "href")} class="hover:text-indigo-600"> ${article.title} </a> </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${article.content}</p> <div class="text-sm text-gray-500">
发布时间：${new Date(article.createdAt).toLocaleDateString("zh-CN")} </div> </div>`)} </div> </div> </section> <!-- 知识分享 --> <section class="py-12 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-bold text-gray-900">知识分享</h2> <a href="/knowledge" class="text-indigo-600 hover:text-indigo-700 flex items-center">
查看更多
<svg class="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="grid gap-6 md:grid-cols-3"> ${latestCases.map((case_) => renderTemplate`<div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/knowledge/${case_.id}`, "href")} class="hover:text-indigo-600"> ${case_.title} </a> </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${case_.description}</p> <div class="text-sm text-gray-500">
更新时间：${new Date(case_.updatedAt).toLocaleDateString("zh-CN")} </div> </div>`)} </div> </div> </section> <!-- 培训课程 --> <section class="py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-bold text-gray-900">培训课程</h2> <a href="/training" class="text-indigo-600 hover:text-indigo-700 flex items-center">
查看更多
<svg class="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="grid gap-6 md:grid-cols-3"> ${latestCourses.map((course) => renderTemplate`<div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/training/${course.id}`, "href")} class="hover:text-indigo-600"> ${course.title} </a> </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${course.description}</p> <div class="grid grid-cols-2 gap-2 text-sm text-gray-500"> <div>课程时长：${course.duration}</div> <div>开课时间：${new Date(course.startDate).toLocaleDateString("zh-CN")}</div> <div>课程价格：${course.price}</div> <div>课程类别：${course.category}</div> </div> </div>`)} </div> </div> </section> <!-- 加入我们 --> <section class="py-16 bg-indigo-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-white mb-4">加入金牌调解员</h2> <p class="text-xl text-indigo-100 mb-8">成为专业调解员，为和谐社会贡献力量</p> <div class="flex justify-center space-x-4"> <a href="/register" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
立即注册
</a> <a href="/about" class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600">
了解更多
</a> </div> </div> </section> </div> ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
