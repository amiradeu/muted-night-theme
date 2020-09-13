const { writeFile, readFileSync } = require("fs");
const yaml = require("js-yaml");

// Load Muted color theme
const themeColors = yaml.safeLoad(readFileSync("themes/colors.yaml", "utf-8"));
// Base has the syntax tokens applicable across multiple languages
let base = yaml.safeLoad(readFileSync("themes/muted-base-dark.yaml", "utf-8"));
// Additional theme definitions to combine with base syntax token styles
const workbench = yaml.safeLoad(
	readFileSync("themes/workbench-dark.yaml", "utf-8")
);

// Convert yaml to json
Object.assign(base, workbench);
// Merge additional syntax token styles
// base.tokenColors = base.tokenColors.concat(
// 	template,
// 	markdown,
// 	js,
// 	html,
// 	css,
// 	regex,
// 	jsdoc
// );

base = JSON.stringify(base, null, 2);

for (let color in themeColors) {
	base = base.replace(new RegExp(color + '"', "g"), themeColors[color] + '"');
}

// Output final json file for theme
writeFile("dist/muted-night.json", base, (err) => {
	if (err) {
		console.warn("Muted-Night" + err);
	}
	console.log("Build Muted-Night finished");
});
