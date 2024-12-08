import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "未找到文件" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    const ext = file.name.split(".").pop();
    const filename = `${randomUUID()}.${ext}`;
    const filepath = join(uploadDir, filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);
    const url = `/uploads/${filename}`;
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("文件上传失败:", error);
    return new Response(JSON.stringify({ error: "文件上传失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
