import React from 'react'

export default function Bookmark( { setBusStopCode } ) {
    function select253() {
        setBusStopCode('23209');
    }

    function select258() {
        setBusStopCode('23021');
    }

    function select945() {
        setBusStopCode('43641');
    }

    return (
        <>
            <button className='select' onClick = { select258 } >258</button>
            <button className='select' onClick = { select253 } >253</button>
            <button className='select' onClick = { select945 } >Golf</button>
        </>
    )
}