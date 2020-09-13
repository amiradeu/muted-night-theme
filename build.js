const { writeFile, readFileSync } = require("fs");
const yaml = require("js-yaml");

// ------------------------------------------------
// Load Muted color theme
// ------------------------------------------------
const themeColors = yaml.safeLoad(readFileSync("themes/colors.yaml", "utf-8"));

// ------------------------------------------------
// Load Base theme
// ------------------------------------------------
let base_dark = yaml.safeLoad(readFileSync("themes/base-dark.yaml", "utf-8"));
let base_light = yaml.safeLoad(readFileSync("themes/base-light.yaml", "utf-8"));

// ------------------------------------------------
// Load language specific theme
// ------------------------------------------------
let json_dark = yaml.safeLoad(readFileSync("themes/json-dark.yaml"));

// ------------------------------------------------
// Load workbench theme
// ------------------------------------------------
const workbench_dark = yaml.safeLoad(
	readFileSync("themes/workbench-dark.yaml", "utf-8")
);
const workbench_light = yaml.safeLoad(
	readFileSync("themes/workbench-light.yaml", "utf-8")
);

// ------------------------------------------------
// Convert yaml to json
// ------------------------------------------------
Object.assign(base_dark, workbench_dark);
// Merge additional syntax token styles
base_dark.tokenColors = base_dark.tokenColors.concat(
	json_dark
	// 	template,
	// 	markdown,
	// 	js,
	// 	html,
	// 	css,
	// 	regex,
	// 	jsdoc
);
base_dark = JSON.stringify(base_dark, null, 2);
for (let color in themeColors) {
	base_dark = base_dark.replace(
		new RegExp(color + '"', "g"),
		themeColors[color] + '"'
	);
}

Object.assign(base_light, workbench_light);
base_light = JSON.stringify(base_light, null, 2);
for (let color in themeColors) {
	base_light = base_light.replace(
		new RegExp(color + '"', "g"),
		themeColors[color] + '"'
	);
}

// ------------------------------------------------
// Write output json file for theme
// ------------------------------------------------
writeFile("dist/muted-night.json", base_dark, (err) => {
	if (err) {
		console.warn("Muted-Night" + err);
	}
	console.log("Build Muted-Night finished");
});

writeFile("dist/muted-day.json", base_light, (err) => {
	if (err) {
		console.warn("Muted-Day" + err);
	}
	console.log("Build Muted-Day finished");
});
