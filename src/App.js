import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Bus from './Bus';
import Nav from './Nav';

function App() {
  const currentDate = new Date()
  const [busStopCode, setBusStopCode] = useState('23021');
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `tungika91.pythonanywhere.com/api/busArrival/${busStopCode}`;
  // const URL = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStopCode}`;

  useEffect(() => {
      console.log(URL);
      setLoading(true);
      axios.get(URL)
      .then(res => {
          setLoading(false);
          setBusStopCode(res.data.BusStopCode);
          setBuses(res.data.Services);
          console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [URL])

  if (loading) return '...Loading'

  return (
    <>
      <Nav 
        currentDate = { currentDate }
        busStopCode = { busStopCode }/>
      <Header 
        setBusStopCode = { setBusStopCode }/>

      {buses.map(bus => (
          <Bus bus={bus} />
      ))}
    </>
  );
}

export default App;
