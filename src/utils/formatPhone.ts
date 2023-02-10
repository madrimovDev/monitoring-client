function formatPhoneNumber(phoneNumber: string) {
	const number = '+998' + phoneNumber
	return number.replace(/^(\+998)(\d{2})(\d{3})(\d{4})$/, '$1 ($2) $3-$4')
}

export default formatPhoneNumber
