const getFromToString = (str: string, end: string) => {
	const strArray = str.split('')
	strArray.shift()
	const key = strArray.join('')
	return key.substring(key.indexOf(end)).substring(1)
}

export default getFromToString
