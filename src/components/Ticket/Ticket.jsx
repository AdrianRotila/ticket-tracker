import React from 'react'
import "./Ticket.scss"

const Ticket = (props) => {
    const {ticketInfoArr} = props;

    const ticketInfoJSX = ticketInfoArr.map((ticket, index) => {
        return (
            <div key={index} className='ticket'>
                <p className='name'>{ticket.name}</p>
                <p className='role'>{ticket.role}</p>
            </div>
        )
    })

    return (
        <div className='all-tickets'>{ticketInfoJSX}</div>
    )
}

export default Ticket