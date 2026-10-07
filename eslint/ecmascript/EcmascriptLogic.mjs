import EcmaScriptExtensions from "./EcmascriptExtensions.mjs"
import reactHooks from "eslint-plugin-react-hooks"
import react from "eslint-plugin-react"
import typescriptParser from "@typescript-eslint/parser"
import javascript from "@eslint/js"
import typescript from "@typescript-eslint/eslint-plugin"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"
import unusedImports from "eslint-plugin-unused-imports"


const callback = (
	carry,
	key,
) => {
	if ( Object.hasOwn( carry, key ) ) {
		delete carry[key]
	}
	return carry
}

const omit = (
	obj,
	keys,
) =>
	keys.reduce( callback, {
		...obj,
	} )
/**
 * @type {
 *     (rule: [number | string] | number | string ) => [0 | 2 | "off" | "error"] | 0 | 2 | "off" | "error"
 * }
 */
const warnToError = ( ruleValue ) => {
	const ruleEnabled = typeof ruleValue === "object" ? ruleValue[0] : ruleValue
	if ( ruleEnabled === 1 || ruleEnabled === "warn" ) {
		if ( typeof ruleValue === "object" ) { // array
			ruleValue[0] = "error"
			return ruleValue
		}
		return "error"
	}
	return ruleValue
}

// replaces "warn" with "error"
/**
 * @type {(rules: Record<string,[number | string] | number | string> ) => Record<string,[number | string] | number | string>}
 */
const replaceWarning = ( rules ) => {
	return Object.fromEntries(
		Object.entries( rules )
			.map( ( [ ruleKey, ruleValue ] ) => [ ruleKey, warnToError( ruleValue ) ] ),
	)
}

export default {
	name: "EcmascriptLogic",
	files: [ EcmaScriptExtensions ],
	settings: {
		react: {
			version: "detect",
		},
	},
	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		globals: omit( {
			...globals.node,
			...globals.browser,
		}, [ "AudioWorkletGlobalScope " ] ),
	},
	plugins: {
		"@typescript-eslint": typescript,
		react,
		"react-hooks": reactHooks,
		"unused-imports": unusedImports,
	},
	rules: replaceWarning( {
		// javascript
		...javascript.configs.recommended.rules,
		eqeqeq: [ "error", "always" ],
		"no-dupe-class-members": "off",
		"no-undef": "off",
		"no-redeclare": "off",
		// typescript
		...typescript.configs.recommended.rules,

		// unused-imports plugin
		"no-unused-vars": "off", // (must be off for unused-imports)
		"@typescript-eslint/no-unused-vars": "off", // (must be off for unused-imports)
		"@typescript-eslint/no-unused-expressions": "off",
		"unused-imports/no-unused-vars": [
			"error",
			{
				// 				vars: "all",
				// 				varsIgnorePattern: "^_",
				// 				args: "after-used",
				// 				argsIgnorePattern: "^_",
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "all",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"@typescript-eslint/no-empty-object-type": [
			"error",
			{ allowInterfaces: "with-single-extends", allowObjectTypes: "never" },
		],

		// react
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
		"react/display-name": "off",
		"react/jsx-uses-vars": "error",
		"react/prop-types": "off",

		// react-hooks
		...reactHooks.configs.recommended.rules,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "off",
		// "react-hooks/preserve-manual-memoization": "off",

		// disabling legacy rules
		...stylistic.configs["disable-legacy"].rules,
	} ),
}
