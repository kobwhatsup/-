import type { APIRoute } from 'astro';

export function handleError(error: unknown) {
  console.error('API Error:', error);
  return new Response(JSON.stringify({ 
    error: 'Internal Server Error' 
  }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });
}

export function redirect(url: string, status = 302) {
  return new Response(null, {
    status,
    headers: { Location: url }
  });
}