"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Navbar() {
	return (
		<AppBar position={"static"} color={"primary"} elevation={0}>
			<Toolbar>
				<Typography variant={"h6"} component={"div"}>
					{"Expense Tracker"}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
