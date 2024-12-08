/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../../chunks/astro/server_B8wudQ4A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_1gR2RPt3.mjs';
import { $ as $$Button } from '../../chunks/Button_CoY7OynF.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const editorCommands = [
  {
    name: "bold",
    icon: "B",
    title: "加粗",
    action: (editor) => editor.chain().focus().toggleBold().run()
  },
  {
    name: "italic",
    icon: "I",
    title: "斜体",
    action: (editor) => editor.chain().focus().toggleItalic().run()
  },
  {
    name: "underline",
    icon: "U",
    title: "下划线",
    action: (editor) => editor.chain().focus().toggleUnderline().run()
  },
  {
    name: "bulletList",
    icon: "•",
    title: "无序列表",
    action: (editor) => editor.chain().focus().toggleBulletList().run()
  },
  {
    name: "orderedList",
    icon: "1.",
    title: "有序列表",
    action: (editor) => editor.chain().focus().toggleOrderedList().run()
  },
  {
    name: "link",
    icon: "🔗",
    title: "链接",
    action: (editor) => {
      const url = prompt("请输入链接地址:");
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      }
    }
  },
  {
    name: "image",
    icon: "📷",
    title: "图片",
    action: () => {
      document.getElementById("image-upload")?.click();
    }
  }
];

const $$EditorToolbar = createComponent(($$result, $$props, $$slots) => {
  const groups = [
    ["bold", "italic", "underline"],
    ["bulletList", "orderedList"],
    ["link", "image"]
  ];
  return renderTemplate`${maybeRenderHead()}<div class="editor-toolbar flex items-center flex-wrap gap-2 p-2 border-b border-gray-300 bg-gray-50"> ${groups.map((group, index) => renderTemplate`<div${addAttribute([
    "toolbar-group flex items-center space-x-1",
    index < groups.length - 1 && "border-r border-gray-300 pr-2"
  ], "class:list")}> ${group.map((name) => {
    const command = editorCommands.find((cmd) => cmd.name === name);
    return command && renderTemplate`<button type="button"${addAttribute(command.name, "data-command")}${addAttribute(command.title, "title")} class="p-1.5 rounded hover:bg-gray-200 text-gray-700 min-w-[28px] text-center"> ${command.icon} </button>`;
  })} </div>`)} </div>`;
}, "/home/project/src/components/forum/EditorToolbar.astro", void 0);

const $$Editor = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="editor-wrapper border border-gray-300 rounded-md overflow-hidden" data-editor data-astro-cid-qz4iztrv> ${renderComponent($$result, "EditorToolbar", $$EditorToolbar, { "data-astro-cid-qz4iztrv": true })} <div class="editor-content p-4 min-h-[300px] focus:outline-none prose prose-indigo max-w-none" contenteditable="true" data-astro-cid-qz4iztrv></div> <input type="hidden" name="content" id="editor-content" data-astro-cid-qz4iztrv> <input type="hidden" name="html_content" id="editor-html-content" data-astro-cid-qz4iztrv> <input type="file" id="image-upload" accept="image/*" class="hidden" data-astro-cid-qz4iztrv> </div>  `;
}, "/home/project/src/components/forum/Editor.astro", void 0);

const $$New = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    "\u7ECF\u9A8C\u5206\u4EAB",
    "\u95EE\u9898\u54A8\u8BE2",
    "\u6848\u4F8B\u8BA8\u8BBA",
    "\u5176\u4ED6"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u53D1\u5E03\u5E16\u5B50 - \u91D1\u724C\u8C03\u89E3\u5458" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900">发布帖子</h1> <p class="mt-2 text-gray-600">分享您的经验和想法</p> </div> <form class="space-y-6" action="/api/posts" method="POST" enctype="multipart/form-data"> <div> <label for="title" class="block text-sm font-medium text-gray-700">标题</label> <input type="text" name="title" id="title" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> <div> <label for="category" class="block text-sm font-medium text-gray-700">分类</label> <select id="category" name="category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> ${categories.map((category) => renderTemplate`<option${addAttribute(category, "value")}>${category}</option>`)} </select> </div> <div> <label class="block text-sm font-medium text-gray-700">内容</label> ${renderComponent($$result2, "Editor", $$Editor, {})} </div> <div> <label class="block text-sm font-medium text-gray-700">附件</label> <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"> <div class="space-y-1 text-center"> <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"> <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <div class="flex text-sm text-gray-600"> <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"> <span>上传文件</span> <input id="file-upload" name="attachments" type="file" class="sr-only" multiple> </label> <p class="pl-1">或拖放文件</p> </div> <p class="text-xs text-gray-500">支持任意类型文件，单个文件不超过10MB</p> </div> </div> </div> <div class="flex justify-end space-x-4"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "type": "button", "onclick": "history.back()" }, { "default": ($$result3) => renderTemplate`取消` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result3) => renderTemplate`发布` })} </div> </form> </div> ` })} `;
}, "/home/project/src/pages/forum/new.astro", void 0);

const $$file = "/home/project/src/pages/forum/new.astro";
const $$url = "/forum/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
