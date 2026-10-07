"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "@/theme/theme"
import { ReactNode } from "react"

type AppThemeProviderProps = {
	children: ReactNode;
};

export default function AppThemeProvider( props: AppThemeProviderProps ) {
	return <ThemeProvider theme={ theme }>
			<CssBaseline />
			{ props.children }
		</ThemeProvider>
	
}