// src/lib/checkDigit.ts
export function calculateCheckDigit(base: string): number {
	// base = first 11 digits for UPC-A or 12 digits for EAN-13
	const digits = base.split('').map(Number);
	const len = digits.length;

	// Must be 11 or 12 digits
	if (len !== 11 && len !== 12) throw new Error('Invalid length');

	let sum = 0;
	for (let i = 0; i < len; i++) {
		const digit = digits[len - 1 - i]; // reverse order
		sum += i % 2 === 0 ? digit * 3 : digit; // odd positions ×3, even ×1 (from right)
	}

	const checksum = (10 - (sum % 10)) % 10;
	return checksum;
}

export function withCheckDigit(base: string): string {
	const check = calculateCheckDigit(base);
	return base + check;
}

export function validateCheckDigit(full: string): boolean {
	if (full.length !== 13) return false;
	const base = full.slice(0, -1);
	const expected = calculateCheckDigit(base);
	const actual = parseInt(full[12], 10);
	return expected === actual;
}