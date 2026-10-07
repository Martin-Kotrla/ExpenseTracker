import format from "eslint-plugin-format"
import newlineDestructuring from "eslint-plugin-newline-destructuring"
import unusedImports from "eslint-plugin-unused-imports"
import stylistic from "@stylistic/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import EcmaScriptExtensions from "./EcmascriptExtensions.mjs"
import jsxComments from "./jsxComments.mjs"

/** @link https://dprint.dev/plugins/typescript/config */
const dprintConfig = {
	name: "EcmascriptStyle_Dprint",
	files: [ EcmaScriptExtensions ],
	languageOptions: {
		parser: format.parserPlain,
	},
	plugins: {
		format,
		"jsx-comments": jsxComments,
	},
	processor: "jsx-comments/processor", // custom processor that disables dprint`s jsxExpressionContainer.spaceSurroundingExpression for comments
	rules: {
		"format/dprint": [
			"warn",
			{
				language: "typescript",
				languageOptions: {
					/// BASE
					lineWidth: 200,
					indentWidth: 1,
					useTabs: true,
					semiColons: "asi",
					quoteStyle: "preferDouble",
					quoteProps: "asNeeded",
					newLineKind: "lf",

					/// CODE
					useBraces: "whenNotSingleLine", // "always"
					bracePosition: "sameLine",
					singleBodyPosition: "nextLine",
					nextControlFlowPosition: "sameLine",
					trailingCommas: "onlyMultiLine", // can be configured for many situations (arrays, objects, parameters ...)
					operatorPosition: "maintain", // applies for ternary (? :). now just keeps original
					preferHanging: false, // can be configured for many situations
					preferSingleLine: false,
					"arrowFunctions.useParentheses": "maintain", // can be force
					"binaryExpression.linePerExpression": false, // can be true
					"memberExpression.linePerExpression": false, // for chaining a.b() true => .b() is moved to the new line
					spaceAround: true,
					spaceSurroundingProperties: true,
					"binaryExpression.spaceSurroundingBitwiseAndArithmeticOperator": true,
					"commentLine.forceSpaceAfterSlashes": true,
					"constructor.spaceBeforeParentheses": false,
					"doWhileStatement.spaceAfterWhileKeyword": true,
					"exportDeclaration.spaceSurroundingNamedExports": true,
					"forInStatement.spaceAfterForKeyword": true,
					"forOfStatement.spaceAfterForKeyword": true,
					"forStatement.spaceAfterForKeyword": true,
					"forStatement.spaceAfterSemiColons": true,
					"functionDeclaration.spaceBeforeParentheses": false,
					"functionExpression.spaceBeforeParentheses": false,
					"functionExpression.spaceAfterFunctionKeyword": false,
					"getAccessor.spaceBeforeParentheses": false,
					"ifStatement.spaceAfterIfKeyword": true,
					"importDeclaration.spaceSurroundingNamedImports": true,
					"method.spaceBeforeParentheses": false,
					"setAccessor.spaceBeforeParentheses": false,
					"taggedTemplate.spaceBeforeLiteral": false,
					"whileStatement.spaceAfterWhileKeyword": false,
					"module.sortImportDeclarations": "maintain",
					"module.sortExportDeclarations": "maintain",
					"exportDeclaration.sortNamedExports": "maintain",
					"importDeclaration.sortNamedImports": "maintain",
					"exportDeclaration.forceSingleLine": false,
					"importDeclaration.forceSingleLine": false,
					"exportDeclaration.forceMultiLine": "never", // "whenMultiple"
					"importDeclaration.forceMultiLine": "never", // "whenMultiple"

					/// TYPES
					"typeLiteral.separatorKind": "comma",
					"enumDeclaration.memberSpacing": "newLine",
					"constructorType.spaceAfterNewKeyword": false,
					"constructSignature.spaceAfterNewKeyword": false,
					"typeAnnotation.spaceBeforeColon": false,
					"typeAssertion.spaceBeforeExpression": false,

					/// JSX
					"jsxSelfClosingElement.spaceBeforeSlash": true,
					"jsx.bracketPosition": "nextLine",
					"jsx.forceNewLinesSurroundingContent": false, // can be true so <>{children}</> children is moved to the next line
					"jsx.multiLineParens": "never",

					// false -> {children} and {/* comment */}
					// true  -> { children } and { /* comment */ }
					// comments is omitted with custom processor that disables check if jsx comment is detected
					"jsxExpressionContainer.spaceSurroundingExpression": true,
				},
			},
		],
	},
}

const stylisticConfig = {
	name: "EcmascriptStyle_Stylistic",
	files: [ EcmaScriptExtensions ],
	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	plugins: {
		"newline-destructuring": newlineDestructuring,
		"unused-imports": unusedImports,
		"@stylistic": stylistic,
		"jsx-comments": jsxComments,
	},
	rules: {
		"jsx-comments/no-spacing": [ "warn" ], // custom rule to format jsx comments from { /* */ } into {/* */}

		// unused-imports plugin
		"no-unused-vars": "off", // (must be off for unused-imports)
		"@typescript-eslint/no-unused-vars": "off", // (must be off for unused-imports)
		"unused-imports/no-unused-imports": "warn",

		"newline-destructuring/newline": [
			"warn",
			{
				allowAllPropertiesOnSameLine: true,
				items: 3,
				consistent: true,
			},
		],

		"@stylistic/max-len": [
			"warn",
			{
				code: 200,
				tabWidth: 4,
			},
		],

		// -- INDENTATION -- //
		"@stylistic/object-curly-newline": [
			"warn",
			{
				ObjectExpression: {
					minProperties: 5,
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					minProperties: 6,
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					minProperties: 7,
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					minProperties: 3,
					multiline: true,
					consistent: true,
				},
			},
		],
		"@stylistic/array-bracket-newline": [ "warn", { multiline: true } ],
		"@stylistic/array-element-newline": [
			"warn",
			{
				ArrayExpression: "consistent", // "multiline"
				ArrayPattern: "consistent", // "multiline"
			},
		],
		"@stylistic/function-call-argument-newline": [ "warn", "consistent" ],
		"@stylistic/jsx-child-element-spacing": "warn", // may be off
		"@stylistic/jsx-curly-brace-presence": [ "warn", "always" ],
		"@stylistic/jsx-first-prop-new-line": [ "warn", "multiline" ],
		"@stylistic/jsx-max-props-per-line": [
			"warn",
			{
				maximum: {
					single: 3,
					multi: 1,
				},
			},
		],
		"@stylistic/jsx-curly-newline": [
			"warn",
			{
				multiline: "consistent",
				singleline: "consistent",
			},
		],
		"@stylistic/jsx-one-expression-per-line": [ "warn", { allow: "single-child" } ],
		"@stylistic/jsx-self-closing-comp": [
			"warn",
			{
				component: true,
				html: true,
			},
		],
		"@stylistic/linebreak-style": [ "warn", "unix" ],
		"@stylistic/max-statements-per-line": [ "warn", { max: 1 } ],
		// 		"@stylistic/member-delimiter-style": [
		// 			"warn",
		// 			{
		// 				multiline: {
		// 					delimiter: "comma",
		// 					requireLast: false,
		// 				},
		// 				singleline: {
		// 					delimiter: "comma",
		// 					requireLast: false,
		// 				},
		// 				overrides: {
		// 					interface: {
		// 						multiline: {
		// 							delimiter: "none",
		// 							requireLast: false,
		// 						},
		// 					},
		// 				},
		// 			},
		// 		],
		"@stylistic/multiline-ternary": [ "warn", "always-multiline" ],
		"@stylistic/new-parens": [ "warn", "always" ],
		"@stylistic/newline-per-chained-call": [ "warn", { ignoreChainWithDepth: 2 } ],
		"@stylistic/no-floating-decimal": "warn",
		"@stylistic/no-mixed-operators": "warn",
		"@stylistic/no-multi-spaces": "warn",
		"@stylistic/no-multiple-empty-lines": [
			"warn",
			{
				max: 2,
				maxEOF: 1,
			},
		],
		// 		"@stylistic/no-trailing-spaces": [
		// 			"warn",
		// 			{
		// 				ignoreComments: true,warn
		// 				skipBlankLines: true,
		// 			},
		// 		],
		"@stylistic/no-whitespace-before-property": "warn",
		"@stylistic/one-var-declaration-per-line": [ "warn", "initializations" ],
		"@stylistic/operator-linebreak": [
			"off",
			"after",
			// {
			// 	overrides: { "|": "before" },
			// },
		],
		"@stylistic/space-unary-ops": "warn",
		// "@stylistic/template-curly-spacing": [ "warn", "always" ],
		"@stylistic/template-tag-spacing": [ "warn", "never" ],

		"@stylistic/type-annotation-spacing": "warn",
		"@stylistic/type-generic-spacing": [ "off" ], //
		"@stylistic/type-named-tuple-spacing": [ "warn" ],
		"@stylistic/wrap-iife": [ "warn", "inside", { functionPrototypeMethods: true } ],
		"@stylistic/wrap-regex": "warn",

		/// disabling legacy rules
		...stylistic.configs["disable-legacy"].rules,
	},
}

export default [
	dprintConfig,
	stylisticConfig,
]
