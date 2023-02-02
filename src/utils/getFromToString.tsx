const getFromToString = (str: string) => {
	const strArray = str.split('/')
	const key = strArray.filter(Boolean).join('')
	return key
}

export default getFromToString
