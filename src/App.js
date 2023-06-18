import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Bus from './Bus';
import Nav from './Nav';

function App() {
  // const URL = "http://localhost:3500/Services"; using json-server
  const currentDate = new Date()
  const [busStopCode, setBusStopCode] = useState('23021');
  const [busNum, setBusNum] = useState('');
  const [nextBusTime, setNextBusTime] = useState('');
  const [nextBusTime2, setNextBusTime2] = useState('');
  const [nextBusTime3, setNextBusTime3] = useState('');
  const [loading, setLoading] = useState(true);

  const URL = `http://127.0.0.1:5000/users/api/busArrival/${busStopCode}`

  useEffect(() => {
      setLoading(true);
      axios.get(URL).then(res => {
          setLoading(false);
          console.log(res.data);
          setBusStopCode(res.data.BusStopCode)
          setBusNum(res.data.Services[0].ServiceNo);
          setNextBusTime(res.data.Services[0].NextBus.EstimatedArrival)
          setNextBusTime2(res.data.Services[0].NextBus2.EstimatedArrival)
          setNextBusTime3(res.data.Services[0].NextBus3.EstimatedArrival)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [URL])

  if (loading) return '...Loading'

  return (
    <>
      <Header setBusStopCode = { setBusStopCode }/>
      <Nav 
        currentDate = { currentDate }
        busStopCode = { busStopCode }/>
      <Bus 
        busNum = { busNum }
        nextBusTime = { nextBusTime }
        nextBusTime2 = { nextBusTime2 } 
        nextBusTime3 = { nextBusTime3} />
    </>
  );
}

export default App;
