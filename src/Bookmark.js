import React, { useRef } from 'react'

export default function Bookmark( { setBusStopCode } ) {
    const busCode = useRef();

    function select253() {
        setBusStopCode('23209');
    }

    function select258() {
        setBusStopCode('23021');
    }

    return (
        <>
            <button className='select' onClick = { select258 } >258</button>
            <button className='select' onClick = { select253 } >253</button>
        </>
    )
}