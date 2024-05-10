import React from 'react'
import heroImg from '../../assets/images/hero-img.png'
import './hero.scss'

const Haro = () => {
    return (
        <section className='hero'>
            <div className="hero__title">
                <h3 className='hero__title__h3'>Mobile</h3>
                <h2 className='hero__title__h2'>Backcover</h2>
                <h1 className='hero__title__h1'>Tempered Glass</h1>
                <a href="#" className='hero__title__btn'>Shop all!</a>
            </div>
            <div className="hero__img">
                <img className='hero__img__item' src={heroImg} alt="Hero image" />
            </div>
        </section>
    )
}

export default Haro