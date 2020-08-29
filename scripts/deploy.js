const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "git@github.com:mbazhlekova/mbazhlekova.github.io.git",
    user: {
      name: "Maria Bazhlekova",
      email: "mbazhlek@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
