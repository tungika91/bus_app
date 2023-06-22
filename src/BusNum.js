import React from 'react'

export default function BusNum( {busNum} ) {
  return (
    <div 
        className='busNum'
        style={{
            backgroundColor: "#11cd0a",
            color: '#000',
            fontSize: 65
        }}>
        <p>{ busNum }</p>
    </div>
  )
}
