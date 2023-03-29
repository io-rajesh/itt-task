import React from 'react';
import Ball from './ball';

const Lottery = () => {
    const data = {
        title:'Game-1',
        numbers: [1,2,3,4,5,6]
    }
    const container = {
        border:'2px solid grey',
        borderRadius:'7px',
        width:'40em',
        textAlign:'center',
        margin:'1em auto auto',
        padding: '2em'
    }
    const Balls = data.numbers.map((val,i) =><Ball key= {i} num={val} />)
    return (
        <div style={container}>
            <h3>{data.title}</h3>
            <div>
            {Balls}
            </div>
        </div>
    )
}

export default Lottery