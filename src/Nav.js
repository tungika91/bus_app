import React from 'react'

export default function Nav({ currentDate, busStopCode }) {
  return (
    <>
        <h1>{busStopCode} - AFT BENOI SECTOR</h1>
        <section>
          <h2>{ currentDate.toString() }</h2>
        </section>
    </>
  )
}
