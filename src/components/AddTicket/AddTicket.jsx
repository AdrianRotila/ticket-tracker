import React, { useState } from 'react';
import "./AddTicket.scss";
import add from "../../assets/images/add-button.svg";
import close from "../../assets/images/close-button.svg";
import team from "../../data/team.js"


const AddTicket = (props) => {
    const {className} = props;
    const [showForm, setShowForm] = useState(true);

    const [teamArray, setTeamArray] = useState(team);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");

    const nameEvent = (name) => setEmployeeName(name.target.value);
    const roleEvent = (role) => setEmployeeRole(role.target.value);
    const changeState = () => setShowForm(!showForm);
    
    const newMember = {
        id : team.length + 1,
        name: employeeName,
        role: employeeRole
    }

    const addTeamMember = () => {
        setTeamArray(teamArray.concat(newMember));
        changeState();
    }
   
    

    const formJSX = (
        <div className='window'>
            <div className='form'>
                <div className='form__close'>
                    <img onClick={changeState} src={close} alt="" />
                </div>
                <input className='form__name' type="text" placeholder='Enter your full name here' onChange={nameEvent}/>
                <input className='form__role' type="text" placeholder='Enter you role here' onChange={roleEvent} />
                <button className='form__submit' onClick={addTeamMember}>Submit</button>
            </div>
        </div> 
    )

    const addButtonImage = (
        <img 
            onClick={changeState}
            className= {className} 
            src={add} 
            alt="" 
        />
    )

    return (
       showForm ? addButtonImage : formJSX
    )
}

export default AddTicket

