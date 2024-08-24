type monthsSignature = {
	[key: number]: string
}
export const months: monthsSignature = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December'
}


export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const monthsFinishDay = [
	{
		name: 'January',
		finish: 31
	}, {
		name: 'February',
		finish: 28,
		leapFinish: 29
	}, {
		name: 'March',
		finish: 31
	}, {
		name: 'April',
		finish: 30
	}, {
		name: 'May',
		finish: 31
	}, {
		name: 'June',
		finish: 30
	}, {
		name: 'July',
		finish: 31
	}, {
		name: 'August',
		finish: 31
	}, {
		name: 'September',
		finish: 30
	}, {
		name: 'October',
		finish: 31
	}, {
		name: 'November',
		finish: 30
	}, {
		name: 'December',
		finish: 31
	}
]
