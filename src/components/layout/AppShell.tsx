import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Navbar } from "./Navbar";
import { ReactNode } from "react"

interface AppShellProps {
	children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
	return (
		<Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
			<Navbar />
			<Container maxWidth={"md"} sx={{ py: 4 }}>
				{children}
			</Container>
		</Box>
	);
}
