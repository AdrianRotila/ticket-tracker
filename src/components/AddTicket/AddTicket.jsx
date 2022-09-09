import React from 'react';
import close from "../../assets/images/close-button.svg";
import "./AddTicket.scss";

const AddTicket = (props) => {
    const {toggleAdd, handleSubmit, nameEvent, roleEvent} = props;
    
    return (
        <div className='window'>
            <div className='form'>
                <div className='form__close'>
                    <img onClick={toggleAdd} src={close} alt="" />
                </div>
                <input className='form__name' type="text" placeholder='Enter your full name here' onChange={nameEvent}/>
                <input className='form__role' type="text" placeholder='Enter you role here' onChange={roleEvent} /> 
                <button className='form__submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div> 
    )
}

export default AddTicket

