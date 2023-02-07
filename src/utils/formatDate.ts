const formatDate = (time: Date) => {
	return new Intl.DateTimeFormat('ru-RU').format(new Date(time))
}

export default formatDate
