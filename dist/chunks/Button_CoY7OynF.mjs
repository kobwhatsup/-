import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_B8wudQ4A.mjs';
import { clsx } from 'clsx';
import 'html-escaper';

const $$Astro = createAstro("https://kobwhatsup.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: className,
    ...props
  } = Astro2.props;
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(clsx(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/project/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
