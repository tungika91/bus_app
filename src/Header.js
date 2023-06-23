import React, { useRef } from 'react'

export default function Header( { setBusStopCode } ) {
    const busCode = useRef();

    function handleClick(e) {
        if (busCode.current.value !== '') {
            console.log(busCode.current.value);
            setBusStopCode(busCode.current.value);
        } 
    }
    
    return (
        <>
            <input ref={ busCode } type='text' placeholder='Enter Bus Stop Code'></input>
            <button onClick = { handleClick } >Search</button>
        </>
    )
}
