import { useEffect, useState } from "react"
import './styles/TimeKeeper.css'

const TimeKeeper = () => {

	const [time, setTime] = useState(0)

	const [timeOn, setTimeOn] = useState(false)

	useEffect(() => {
		let interval = null;
			if(timeOn) {
				interval = setInterval(() => {
					setTime((prevTime) => prevTime + 10)
				}, 10)
			} else {
				clearInterval(interval)
			}
		return () => clearInterval(interval)
	}), [timeOn]


	return (
		<div className = 'keeper-container'>

			<section className = 'keeper-clock'>
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</section>

			<section className = 'stopwatch'>
				<button onClick = {() => setTimeOn(true)}> START </button>
				<button onClick = {() => setTimeOn(false)}> STOP </button>
				<button onClick = {() => setTimeOn(true)}> RESUME </button>
				<button onClick = {() => setTime(0)}> RESET </button>
			</section>
			
		</div>
	)
}

export default TimeKeeper;