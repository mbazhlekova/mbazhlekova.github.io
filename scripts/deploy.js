const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/mbazhlekova/mbazhlekova.github.io",
    user: {
      name: "mbazhlekova",
      email: "mbazhlek@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
