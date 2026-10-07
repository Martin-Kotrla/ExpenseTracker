import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Expense } from "@/types/expense"
import { formatCurrency, formatDate } from "@/lib/utils/format"

interface ExpenseListItemProps {
	expense: Expense;
}

export function ExpenseListItem( { expense }: ExpenseListItemProps ) {
	return <ListItem
		divider
		secondaryAction={
			<Typography variant={ "body1" } fontWeight={ 600 }>
				{ formatCurrency( expense.amount ) }
			</Typography>
		}
	>
		<ListItemText
			primary={ expense.title }
			secondary={
				<Stack
					direction={ "row" }
					spacing={ 1 }
					alignItems={ "center" }
					mt={ 0.5 }
				>
					<Chip label={ expense.category } size={ "small" } />
					<Typography variant={ "caption" } color={ "text.secondary" }>
						{ formatDate( expense.date ) }
					</Typography>
				</Stack>
			}
		/>
	</ListItem>
}
