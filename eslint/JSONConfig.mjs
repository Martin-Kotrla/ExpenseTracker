import format from "eslint-plugin-format"

export default {
	name: "JSON_Style",
	files: [ "**/*.{json,jsonc,json5}" ],
	languageOptions: {
		parser: format.parserPlain,
	},
	plugins: {
		format,
	},
	rules: {
		"format/dprint": [
			"warn",
			{
				language: "json",
				languageOptions: {
					lineWidth: 200,
					indentWidth: 1,
					useTabs: true,
					newLineKind: "lf",
					"commentLine.forceSpaceAfterSlashes": true,
					preferSingleLine: false,
					trailingCommas: "jsonc",
				},
			},
		],
	},
}
