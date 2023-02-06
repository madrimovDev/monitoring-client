const getFromToString = (str: string) => {
	const strArray = str.split('/')
	const key = strArray.filter(Boolean)[1]
	return key
}

export default getFromToString
