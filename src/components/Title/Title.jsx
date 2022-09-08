import "./Title.scss"
import Button from "../AddButton/AddButton.jsx"

const Title = (props) => {
    const {mainTitle} = props;


    return (
        <div className='header'>
            <h1 className='header__title' >{mainTitle}</h1>
            <Button className = 'header__add' />
        </div>
    )
}

export default Title