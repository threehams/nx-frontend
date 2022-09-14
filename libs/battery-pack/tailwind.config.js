const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const { join } = require("path");

console.log(createGlobPatternsForDependencies(join("..", __dirname)));
module.exports = {
  // presets: [require("../../../tailwind-workspace-preset.js")],
  content: [
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(join("..", __dirname)),
  ],
};
