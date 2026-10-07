import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { Expense } from "@/types/expense"
import { ExpenseListItem } from "./ExpenseListItem"

interface ExpenseListProps {
	expenses: Expense[];
}

export function ExpenseList( { expenses }: ExpenseListProps ) {
	if ( expenses.length === 0 ) {
		return <Typography
			color={ "text.secondary" }
			textAlign={ "center" }
			py={ 4 }
		>
			{ "Zatím žádné výdaje." }
		</Typography>
	}
	
	return <List>
		{ expenses.map( ( expense ) => (
			<ExpenseListItem key={ expense.id } expense={ expense } />
		) ) }
	</List>
	
}