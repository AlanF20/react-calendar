import { useState } from "react"
import { useDisplayedDates } from "./hooks/useDisplayedDates"
import { days } from "./utils"

export function Calendar() {
	const { month, year, handlePrevMonth, handleNextMonth } = useDisplayedDates()
	const [calendar, setCalendar] = useState([1, 2, 3, 4, 5, 6, 7, 8])
	return (
		<main className="w-[100%] flex flex-col">
			<section className="w-[100%] flex gap-3 justify-center items-center h-[50px]">
				<p className="w-[75%] flex gap-2">
					<span className="font-bold text-4xl">{month}</span>
					<span className="font-bold text-4xl">{year}</span>
				</p>
				<div className="w-[25%] flex justify-evenly">
					<button onClick={handlePrevMonth}>Back</button>
					<button onClick={handleNextMonth}>Next</button>
				</div>
			</section>
			<section className="w-[100%] flex justify-evenly">
				{days.map((day, index) => {
					return (
						<h3 key={index} className="w-[14.2%]">{day}</h3>
					)
				})}
			</section>
			<section className="w-[100%] flex justify-between flex-wrap">
				{calendar.map(item => {
					return (
						<p className="w-[14.2%]">{item}</p>
					)
				})}
			</section>
		</main>
	)
}
