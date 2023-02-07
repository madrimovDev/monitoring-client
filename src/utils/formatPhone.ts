const formatPhone = (phone: string) => {
	const phoneNumber = phone
	const isSeven = phoneNumber.length <= 7

	if (isSeven) {
		return phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3, 5) + ' ' + phoneNumber.substring(5, 7)
	}
	return (
		phoneNumber.substring(0, 2) +
		' ' +
		phoneNumber.substring(2, 5) +
		' ' +
		phoneNumber.substring(5, 8) +
		' ' +
		phoneNumber.substring(8, 10) +
		' ' +
		phoneNumber.substring(10)
	)
}

export default formatPhone
