import { c as createPost } from '../../chunks/posts_aIqC7wVF.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const category = formData.get("category");
    const authorId = "test-user";
    const postId = await createPost({
      title,
      content,
      category,
      authorId
    });
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `/forum/${postId}`
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create post" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
