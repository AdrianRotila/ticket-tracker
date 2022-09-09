import "./Header.scss"
import add from "../../assets/images/add-button.svg";
import AddTicket from "../AddTicket/AddTicket";

const Header = (props) => {
    const {showForm, toggleAdd, handleSubmit, nameEvent, roleEvent} = props;
   
    return (
        <div className='header'>
            <h1 className='header__title' >Ticket Tracker</h1>
            {showForm && <AddTicket showForm = {showForm} toggleAdd = {toggleAdd} nameEvent = {nameEvent} handleSubmit = {handleSubmit} roleEvent = {roleEvent}/>}
            <img onClick={toggleAdd} className = 'header__add' src={add} alt="" 
            />
        </div>
    )
}

export default Header