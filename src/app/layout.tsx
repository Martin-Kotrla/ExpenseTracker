import type { Metadata } from "next"
import AppThemeProvider from "@/components/providers/AppThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
	title: "Expense Tracker",
	description: "Track your income and expenses",
}

export default function RootLayout( {
	                                    children,
                                    }: Readonly<{
	children: React.ReactNode;
}> ) {
	return (
		<html lang="en">
		<body>
		<AppThemeProvider>
			{ children }
		</AppThemeProvider>
		</body>
		</html>
	)
}