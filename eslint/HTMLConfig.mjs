import format from "eslint-plugin-format"

export default {
	name: "HTML_Style",
	files: [ "**/*.{html,htm}" ],
	languageOptions: {
		parser: format.parserPlain,
	},
	plugins: {
		format,
	},
	rules: {
		"format/prettier": [
			"warn",
			{
				/** HTML FORMATTER DOES NOT WORK NOW */
				parser: "html",
				printWidth: 200,
				tabWidth: 1,
				useTabs: true,
				semi: false,
				singleQuote: false,
				jsxSingleQuote: false,
				trailingComma: "es5",
				htmlWhitespaceSensitivity: "ignore",
				vueIndentScriptAndStyle: true,
				endOfLine: "lf",
				singleAttributePerLine: true,
			},
		],
	},
}
