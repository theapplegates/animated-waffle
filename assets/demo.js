const Image = require("@11ty/eleventy-img");
(async () => {
  let stats = await Image("Paul-Kevin-2.jpg", {
    formats: ["avif", "webp", "jpeg"],
    outputDir: "../../_site/img/",
    widths: [600, 1200, 1800],
  });
  console.log( Image.generateHTML(stats, {
    alt: "A bomb ass nebula",
    loading: "lazy",
    decoding: "async",
  }) );
})();
