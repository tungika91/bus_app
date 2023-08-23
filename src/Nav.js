import React from 'react';
import { IoReloadCircle } from 'react-icons/io5';

export default function Nav({ currentDate, busStopCode }) {
  const date = `${currentDate.getDate()}`;
  const month = currentDate.toLocaleString('default', {month: 'long'});
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes();
  
  function handleRefresh() {
    window.location.reload();
  }
  return (
    <div className='Header'>
      <div className='topright'>
          <h1>Bus Stop: {busStopCode} </h1>
          <button onClick = { handleRefresh }><IoReloadCircle/></button>
          <h2> {hour<10 ? '0' : ''}{ hour }:{minute < 10 ? '0' : ''}{ minute } <br/> { date } { month.substring(0,3) }</h2>
      </div>
    </div>
  )
}
