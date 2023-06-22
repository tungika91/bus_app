import React, { useRef } from 'react'

export default function Header( { setBusStopCode } ) {
    const busCode = useRef();

    function handleClick(e) {
        if (busCode.current.value !== '') {
            console.log(busCode.current.value);
            setBusStopCode(busCode.current.value);
        } 
    }

    function select253() {
        setBusStopCode('23209');
    }

    function select258() {
        setBusStopCode('23021');
    }

    return (
        <>
            <input ref={ busCode } type='text' placeholder='Enter Bus Stop Code'></input>
            <button onClick = { handleClick } >Search</button>
            <button onClick = { select258 } >258</button>
            <button onClick = { select253 } >253</button>
        </>
    )
}
