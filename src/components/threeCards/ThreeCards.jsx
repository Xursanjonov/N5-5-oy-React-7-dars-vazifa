import React from 'react'
import './threeCards.scss'

const ThreeCards = ({ title, info, img }) => {

    return (
        <div className='threeCards__item'>
            <img className='threeCards__item__img' src={img} alt="image" />
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}

export default ThreeCards