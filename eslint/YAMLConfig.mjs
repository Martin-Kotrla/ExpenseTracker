import format from "eslint-plugin-format"

export default {
	name: "YAML_Style",
	files: [ "**/*.{yaml,yml}" ],
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
				parser: "yaml",
				printWidth: 200,
				tabWidth: 4,
				useTabs: false, // tabs are not supported in yaml
				semi: false,
				singleQuote: false,
				endOfLine: "lf",
			},
		],
	},
}
