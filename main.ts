import blog, { ga } from "https://cdn.jsdelivr.net/gh/bmz1/deno_blog@0.3.5/blog.tsx";

blog({
  title: "bmz-codez",
  author: "bmz",
  description: "Web stuff.",
  avatar: './assets/terminal.png',
  avatarClass: "full",
  background: "#f9f9f9",
  style: "ol{ list-style-type: decimal;; } ul{ list-style: square; }",
  links: [
    { title: "GitHub", url: "https://github.com/bmz1" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/bmz1/" },
  ],
  middlewares: [ga("UA-155334110-1")],
});
