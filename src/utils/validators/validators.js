export function required(value) {
	if (value) return undefined
	return 'this field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength) return `max length is ${maxLength}`
	return undefined
}
