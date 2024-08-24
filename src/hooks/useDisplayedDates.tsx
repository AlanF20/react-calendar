import { useState } from "react"
import { months } from "../utils/"

export function useDisplayedDates() {
	const [actualDate, setActualDate] = useState(() => new Date())
	const [monthNumber, setMonthNumber] = useState(actualDate.getMonth())
	const [month, setMonth] = useState(months[monthNumber])
	const [year, setYear] = useState(actualDate.getFullYear())

	const handlePrevMonth = () => {
		setMonthNumber((prevNumber) => {
			console.log(prevNumber)
			const newMonthNumber = prevNumber === 0 ? 11 : prevNumber - 1
			setMonth(() => months[newMonthNumber])
			return newMonthNumber
		})
		if (monthNumber === 0) {
			setYear((prevYear) => prevYear - 1)
		}
	}

	const handleNextMonth = () => {
		setMonthNumber((prevNumber) => {
			const newMonthNumber = prevNumber === 11 ? 0 : prevNumber + 1
			setMonth(months[newMonthNumber])
			return newMonthNumber
		})
		if (monthNumber === 11) {
			setYear((year) => year + 1)
		}
	}
	return { month, year, handlePrevMonth, handleNextMonth }
}
