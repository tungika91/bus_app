import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Bus from './Bus';
import Nav from './Nav';

function App() {
  const currentDate = new Date()
  const [busStopCode, setBusStopCode] = useState('23021');
  const [busStopName, setBusStopName] = useState('');
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `http://localhost:5000/users/api/busArrival/${busStopCode}`; //using json-server

  useEffect(() => {
      console.log(URL);
      setLoading(true);
      axios.get(URL).then(res => {
          setLoading(false);
          setBusStopCode(res.data.BusStopCode);
          setBuses(res.data.Services);
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
        setBusStopCode = { setBusStopCode }
        setBusStopName = { setBusStopName } />

      {buses.map(bus => (
          <Bus bus={bus} />
      ))}
    </>
  );
}

export default App;
