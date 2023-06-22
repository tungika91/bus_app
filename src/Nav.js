import React from 'react'

export default function Nav({ currentDate, busStopCode }) {
  const date = `${currentDate.getDate()}`;
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const time = currentDate.getHours() + ':' + currentDate.getMinutes();
  
  return (
    <div className='container'>
      <div className='topright'>
          <h1>Bus Stop: {busStopCode} </h1>
          <br/>
          <h2> { time } <br/> { date } { month }</h2>
          {/* <h1>{ date } { month }</h1> */}
      </div>
    </div>
  )
}
