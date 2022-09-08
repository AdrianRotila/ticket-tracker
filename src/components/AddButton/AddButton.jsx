import React, { useState } from 'react';
import "./AddButton.scss";
import add from "../../assets/images/add-button.svg";
import close from "../../assets/images/close-button.svg";

const AddButton = (props) => {
    const {className} = props;
    const [showForm, setShowForm] = useState(false);

    const changeState = () => {
        setShowForm(!showForm);
    }

    const formJSX = (
        <div className='window'>
            <div className='form'>
                <div className='form__close'>
                    <img onClick={changeState} src={close} alt="" />
                </div>
                <input className='form__name' type="text" placeholder='Enter your full name here'/>
                <input className='form__role' type="text" placeholder='Enter you role here' />
                <button className='form__submit'>Submit</button>
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

export default AddButton