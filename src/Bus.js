import React, { useEffect, useState } from 'react';
import Arrival from './Arrival';
import BusNum from './BusNum';

export default function Bus( { busNum, nextBusTime, nextBusTime2, nextBusTime3} ) {
    return (
        <>
            <BusNum busNum = { busNum }/>
            <br/>
            <Arrival busTime = { nextBusTime }/>
            <Arrival busTime = { nextBusTime2 }/>
            <Arrival busTime = { nextBusTime3 }/>

        </>
  )
}

