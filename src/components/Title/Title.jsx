import React from 'react'
import "./Title.scss"

const Title = (props) => {
    const {mainTitle} = props;

    return (
        <h1 className='title'>{mainTitle}</h1>
    )
}

export default Title