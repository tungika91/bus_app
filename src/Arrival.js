import React from 'react';
import moment from 'moment';

export default function ArrivalTime({ busTime }) {
  let currentTime = new Date()
  let duration = moment(busTime).diff(currentTime,'minutes')
  const walkingMinutes = 6
  let isWalkable = walkingMinutes < duration
  return (
    <>
      {
        isWalkable ? <section 
            className='arrival'
            style={{
                backgroundColor: "#FFF",
                color: '#000',
 
            }}>
            <p>{ duration }</p> </section> 
            : <section 
            className='arrival'
            style={{
                backgroundColor: "#FFF",
                color: '#d50c0c',

            }}>
            <p>{ duration }</p> </section>
      }
    </>
  )
}
