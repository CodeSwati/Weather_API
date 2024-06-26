import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {
    const Weather = useWeather();
    console.log(Weather);
  return (
    <div>
       <input className='input-field'
       placeholder="search...." value={Weather.value} 
       onChange={(e)=>Weather.setSearchCity(e.target.value)}/>
    </div>
  )
}

export default Input