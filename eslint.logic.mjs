import EcmascriptLogic from "./eslint/ecmascript/EcmascriptLogic.mjs"

export default [
	EcmascriptLogic,
	{
		ignores: [ "node_modules", "dist", "build", "coverage", ".next", ".turbo", ".yarn", "playwright-report", "*.lock" ],
	},
]
