import { useDisplayedDates } from "./hooks/useDisplayedDates"

export function Calendar() {
  const { month, year, handlePrevMonth, handleNextMonth } = useDisplayedDates()
  return (
    <main className="w-[100%] flex">
      <section className="w-[100%] flex gap-3 justify-center items-center h-[50px] border">
        <button className="w-[25%]" onClick={handlePrevMonth}>Back</button>
        <p className="w-[50%] flex gap-2 justify-center">
          <span className="font-bold text-4xl">{month}</span>
          <span className="font-bold text-4xl">{year}</span>
        </p>
        <button className="w-[25%]" onClick={handleNextMonth}>Next</button>
      </section>
    </main>
  )
}