import React, { useEffect, useState } from "react";
import './styles/DigitalClock.css'


const DigitalClock = () => {

	const [clockState, setClockState] = useState()
	
	useEffect(() => {
		setInterval(() => {
			//Date es palabra reservada
			const date = new Date()
			setClockState(date.toLocaleTimeString())
		}, 1000)
	}, [])

	return (
		<div className = 'clock-container'>
			<h2 className = 'clock'> {clockState} </h2>
		</div>
	)
}

export default DigitalClock;