import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;

const handler = (req: Request): Response => {
  const url = new URL(req.url);

  // Yönlendirme mantığı
  if (url.pathname === "/") {
    const targetUrl = "https://postpanel.net/"; // Yönlendirilecek URL
    return new Response(null, {
      status: 302,
      headers: {
        Location: targetUrl,
      },
    });
  }

  // Varsayılan rota
  return new Response("Welcome! Use /redirect to be redirected to another URL.", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};

console.log(`Server is running on http://localhost:${PORT}`);
serve(handler, { port: PORT });
