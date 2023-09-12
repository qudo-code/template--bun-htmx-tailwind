import fs from "fs";

const homePage = await fs.promises.readFile("./pages/home.html", "utf-8");

Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response(homePage, {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      });
    },
});