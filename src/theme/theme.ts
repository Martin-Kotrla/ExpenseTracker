import { createTheme } from "@mui/material/styles"

const theme = createTheme( {
	palette: {
		mode: "light",
		primary: {
			main: "#2563EB",
		},
		secondary: {
			main: "#7C3AED",
		},
		background: {
			default: "#F8FAFC",
			paper: "#FFFFFF",
		},
	},
	shape: {
		borderRadius: 12,
	},
} )

export default theme