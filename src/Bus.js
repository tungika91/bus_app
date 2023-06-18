import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bus( {URL} ) {
    const [busNum, setBusNum] = useState('');
    const [nextBusTime, setNextBusTime] = useState('');
    const [nextBusTime2, setNextBusTime2] = useState('');
    const [nextBusTime3, setNextBusTime3] = useState('');

    useEffect(() => {
      axios.get(URL).then(res => {
        console.log(res.data[0]);
        setBusNum(res.data[0].ServiceNo);
        setNextBusTime(res.data[0].NextBus.EstimatedArrival.slice(11,19))
        setNextBusTime2(res.data[0].NextBus2.EstimatedArrival.slice(11,19))
        setNextBusTime3(res.data[0].NextBus3.EstimatedArrival.slice(11,19))
      })
      .catch((error) => {
        console.log(error)
      })
    }, [URL])


    return (
        <>
            <section 
                className='busNum'
                style={{
                    backgroundColor: "#000",
                    color: '#0cd510',
                    fontSize: 75
                }}>
                <p>{ busNum }</p>
            </section>
            <br/>
            <section 
                className='arrival'
                style={{
                    backgroundColor: "#FFF",
                    color: '#000',
                    fontSize: 75
                }}>
                <p>{ nextBusTime }</p>
            </section>

            <br/>
            <section 
                className='arrival'
                style={{
                    backgroundColor: "#FFF",
                    color: '#6d716d',
                    fontSize: 75
                }}>
                <p>{ nextBusTime2 }</p>
            </section>

            <br/>
            <section 
                className='arrival'
                style={{
                    backgroundColor: "#FFF",
                    color: '#6d716d',
                    fontSize: 75
                }}>
                <p>{ nextBusTime3 }</p>
            </section>

        </>
  )
}

