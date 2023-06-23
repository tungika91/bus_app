import React from 'react'

export default function Nav({ currentDate, busStopCode }) {
  const date = `${currentDate.getDate()}`;
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const time = currentDate.getHours() + ':' + currentDate.getMinutes();
  
  return (
    <div className='Header'>
      <div className='topright'>
          <h1>Bus Stop: {busStopCode} </h1>
          <h2> { time } <br/> { date } { month }</h2>
      </div>
    </div>
  )
}
