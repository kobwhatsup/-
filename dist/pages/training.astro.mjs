/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_1gR2RPt3.mjs';
import { g as getLatestCourses } from '../chunks/courses_H33fSd4b.mjs';
import { f as formatDate } from '../chunks/date_XlhYAFzk.mjs';
import { $ as $$Card } from '../chunks/Card_D7rU73tU.mjs';
import { $ as $$Button } from '../chunks/Button_CoY7OynF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$CourseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CourseCard;
  const { course } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6"> <h3 class="text-lg font-semibold text-gray-900"> <a${addAttribute(`/training/${course.id}`, "href")} class="hover:text-indigo-600"> ${course.title} </a> </h3> <p class="mt-2 text-gray-600 line-clamp-2"> ${course.description} </p> <div class="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500"> <div> <span class="font-medium">课程时长：</span> ${course.duration} </div> <div> <span class="font-medium">开课时间：</span> ${formatDate(course.startDate)} </div> <div> <span class="font-medium">课程类别：</span> ${course.category} </div> <div> <span class="font-medium">课程价格：</span> ${course.price} </div> </div> <div class="mt-6"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "class": "w-full" }, { "default": ($$result3) => renderTemplate`立即报名` })} </div> </div> ` })}
---`;
}, "/home/project/src/components/training/CourseCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const courses = await getLatestCourses();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u57F9\u8BAD\u8BFE\u7A0B - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">培训课程</h1> <p class="mt-2 text-lg text-gray-600">专业的调解技能培训课程</p> </div> <div class="flex space-x-4"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按类别筛选` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`按时间排序` })} </div> </div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${courses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", $$CourseCard, { "course": course })}`)} </div> </div> ` })}`;
}, "/home/project/src/pages/training/index.astro", void 0);

const $$file = "/home/project/src/pages/training/index.astro";
const $$url = "/training";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
