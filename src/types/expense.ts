export type ExpenseCategory =
	| "food"
	| "transport"
	| "housing"
	| "entertainment"
	| "health"
	| "other";

export interface Expense {
	id: string;
	title: string;
	amount: number;
	category: ExpenseCategory;
	date: string; // ISO string, později nahradíme Date logikou z backendu
}
