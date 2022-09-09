import "./Header.scss"
import AddTicket from "../AddTicket/AddTicket.jsx"

const Title = (props) => {
    const {mainTitle} = props;

    return (
        <div className='header'>
            <h1 className='header__title' >{mainTitle}</h1>
            <AddTicket className = 'header__add' />
        </div>
    )
}

export default Title