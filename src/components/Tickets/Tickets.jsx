import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import "./Tickets.scss"
import team from "../../data/team.js"
import { useState } from 'react';

const Tickets = (props) => {
    const {counterTitle} = props;

    const [teamArray, setTeamArray] = useState(team);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");
    const [showForm, setShowForm] = useState(false);

    const nameEvent = (name) => setEmployeeName(name.target.value);
    const roleEvent = (role) => setEmployeeRole(role.target.value);
    const toggleAdd = () => setShowForm(!showForm);
    
    const newMember = {
        id : team.length + 1,
        name: employeeName,
        role: employeeRole
    }

    const handleSubmit = () => {
        setTeamArray(teamArray.concat(newMember));
        setShowForm(!showForm);
    }

    const ticketInfoJSX = teamArray.map((ticket, index) => {
        return (
            <div key={index} className='ticket'>
                <p className='ticket__name'>{ticket.name}</p>
                <p className='ticket__role'>{ticket.role}</p>
                <Counter counterTitle = {counterTitle} />
            </div>
        )
    })

    return (
        <>
            <Header showForm = {showForm} toggleAdd = {toggleAdd} nameEvent = {nameEvent} handleSubmit = {handleSubmit} roleEvent = {roleEvent} />
            <div className='all-tickets'>{ticketInfoJSX}</div>
        </>
    )
}

export default Tickets