import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Bookmark from './Bookmark';
import Bus from './Bus';
import Nav from './Nav';

function App() {
  const currentDate = new Date()
  const [busStopCode, setBusStopCode] = useState('23021');
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = 'https://tungika91.pythonanywhere.com/api/busArrival/';

  useEffect(() => {
      // console.log(URL+busStopCode);
      setLoading(true);
      axios.get(URL+busStopCode)
      .then(res => {
          setLoading(false);
          // setBusStopCode(res.data.BusStopCode);
          setBuses(res.data.Services);
          console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [busStopCode])

  if (loading) return '...Loading'

  return (
    <>
      <Nav 
        currentDate = { currentDate }
        busStopCode = { busStopCode }/>
      <Header 
        setBusStopCode = { setBusStopCode }/>
      <br/>
      <Bookmark 
        setBusStopCode = { setBusStopCode }/>
      {buses.map(bus => (
          <Bus bus={bus}/>
      ))}
    </>
  );
}

export default App;
