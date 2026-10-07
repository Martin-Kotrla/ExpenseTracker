export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat("cs-CZ", {
		style: "currency",
		currency: "CZK",
		maximumFractionDigits: 0,
	}).format(amount);
}

export function formatDate(dateString: string): string {
	return new Intl.DateTimeFormat("cs-CZ", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(dateString));
}
