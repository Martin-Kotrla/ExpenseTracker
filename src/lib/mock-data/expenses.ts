import { Expense } from "@/types/expense";

export const mockExpenses: Expense[] = [
	{
		id: "1",
		title: "Nákup potravin",
		amount: 850,
		category: "food",
		date: "2026-09-20",
	},
	{
		id: "2",
		title: "MHD jízdenka",
		amount: 550,
		category: "transport",
		date: "2026-09-18",
	},
	{
		id: "3",
		title: "Nájem",
		amount: 12000,
		category: "housing",
		date: "2026-09-01",
	},
	{
		id: "4",
		title: "Kino",
		amount: 240,
		category: "entertainment",
		date: "2026-09-15",
	},
]
