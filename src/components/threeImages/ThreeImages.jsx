import React from 'react'
import image1 from '../../assets/images/chehollar.jpg'
import './threeImages.scss'
import Logo from '../../assets/icons/Logo'

const ThreeImages = () => {
    return (
        <section className='threeImages'>
            <img className='threeImages__img1' src={image1} alt="image 1" />
            <div className='threeImages__img1 threeImages__title'>
                <p className='threeImages__title__p1'>Mobile Phone</p>
                <p className='threeImages__title__p2'>Accessories</p>
            </div>
            <div className='threeImages__img1 threeImages__img3'> <Logo /> </div>
        </section>
    )
}

export default ThreeImages