import JSONConfig from "./eslint/JSONConfig.mjs"
import EcmascriptConfig from "./eslint/EcmascriptConfig.mjs"
import HTMLConfig from "./eslint/HTMLConfig.mjs"
import YAMLConfig from "./eslint/YAMLConfig.mjs"

export default [
  HTMLConfig,
  JSONConfig,
  YAMLConfig,
  ...EcmascriptConfig,
  {
    ignores: [ "node_modules", "dist", "build", "coverage", ".next", ".turbo", ".yarn" ],
  },
]
