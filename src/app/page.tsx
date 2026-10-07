import { AppShell } from "@/components/layout/AppShell"
import { ExpenseList } from "@/components/features/expenses/ExpenseList"
import { mockExpenses } from "@/lib/mock-data/expenses"

export default function Home() {
	return <AppShell>
		<ExpenseList expenses={ mockExpenses } />
	</AppShell>
	
}