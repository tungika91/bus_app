import React, { useState, useEffect } from 'react';
import './App.css';
import Bus from './Bus';
import Nav from './Nav';

function App() {
  const URL = "http://localhost:3500/Services";
  return (
    <>
      <h1>Bus Arrival from SWTC to Joo Koon MRT</h1>
      <Nav />
      <Bus URL = { URL }/>
    </>
  );
}

export default App;
