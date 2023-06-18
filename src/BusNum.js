import React from 'react'

export default function BusNum( {busNum} ) {
  return (
    <section 
        className='busNum'
        style={{
            backgroundColor: "#0cd510",
            color: '#000',
            fontSize: 75
        }}>
        <p>{ busNum }</p>
    </section>
  )
}
