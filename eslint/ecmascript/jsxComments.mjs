const DprintJSXMsgRegExp = /Replace `\/\*\s*.*?\s*\*\/` with `·\/\*\s*.*?\s*\*\/·`/ // Replace `/*text*/` with `·/*text*/·`
// removes all errors like (replace {/* */} with { /**/ } ) so phpstorm correctly handles comments

const JSXCommentRegExp = /^\{\s*\/\*(.*?)\*\/\s*}$/ // { /* */ }
const cb = ( msg ) =>
	msg.ruleId !== "format/dprint"
	|| ( !msg.message.includes( "/*" )
		|| !DprintJSXMsgRegExp.test( msg.message ) )

// eslint plugin to disable buggy jsx comments check
const jsxComments = {
	meta: {
		name: "jsxCommentsPlugin",
		version: "0.0.2",
	},
	processors: {
		processor: {
			meta: {
				name: "jsxCommentsProcessor",
				version: "0.0.2",
			},
			// takes text of the file and filename
			preprocess( text, filename ) {
				return [ { text, filename } ]
			},

			// takes a Message[][] and filename
			postprocess( messages, _filename, options ) {
				// removes all errors like (replace {/* */} with { /**/ } ) so phpstorm correctly handles comments
				return [].concat( ...messages ).filter( cb, options )
			},

			supportsAutofix: true, // (optional, defaults to false)
		},
	},
	rules: {
		"no-spacing": {
			meta: {
				type: "layout",
				docs: {
					description: "Enforce spacing inside JSX comments to be `{/* comment */}` not `{ /* comment */ }`",
					category: "Stylistic Issues",
					recommended: false,
				},
				fixable: "whitespace",
				schema: [],
			},
			create( context ) {
				return {
					JSXExpressionContainer( node ) {
						const sourceCode = context.getSourceCode()
						const text = sourceCode.getText( node )

						if ( !text.includes( "/*" ) ) {
							return
						}

						// Match JSX comments inside curly braces
						const jsxCommentMatch = text.match( JSXCommentRegExp )

						if ( jsxCommentMatch ) {
							const commentContent = jsxCommentMatch[1] // Extract inner comment text
							const fixedText = `{/*${commentContent}*/}`

							// Check if the original text already matches the correct format
							if ( text === fixedText ) {
								return // Do nothing if it's already valid
							}

							context.report( {
								node,
								message: `JSX comments should not be spaced.`,
								fix( fixer ) {
									return fixer.replaceText( node, fixedText )
								},
							} )
						}
					},
				}
			},
		},
	},
}

export default jsxComments
