import React, { useState } from 'react'
import "./Counter.scss";

const Counter = () => {
    const [number, setNumber] = useState(0);

    const decreaseNumber = () => {
        setNumber(number + 1);
    }

    const increaseNumber = () => {
        setNumber(number - 1);
    }

    return (
        <div className='counter'>
            <p className='counter__title'>Tickets Solved</p>
            <p className='counter__number'>{number}</p>
            <div className='counter-tools'>
                <p className='counter-tools__decrement' onClick = {decreaseNumber}>-</p>
                <p className='counter-tools__increment' onClick = {increaseNumber}>+</p>
            </div>
        </div>
    )
}

export default Counter