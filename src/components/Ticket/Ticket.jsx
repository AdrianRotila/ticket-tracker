import React from 'react'
import Counter from '../Counter/Counter';
import "./Ticket.scss"

const Ticket = (props) => {
    const {ticketInfoArr, counterTitle} = props;

    const ticketInfoJSX = ticketInfoArr.map((ticket, index) => {
        return (
            <div key={index} className='ticket'>
                <p className='ticket__name'>{ticket.name}</p>
                <p className='ticket__role'>{ticket.role}</p>
                <Counter counterTitle = {counterTitle} />
            </div>
        )
    })

    return (
        <div className='all-tickets'>{ticketInfoJSX}</div>
    )
}

export default Ticket