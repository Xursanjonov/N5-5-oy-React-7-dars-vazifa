import React from 'react'
import shopImage from '../../assets/images/shop-premium.png'
import './shopPremium.scss'
import Button from '../formComponents/Button'

const ShopPremium = () => {
    return (
        <section className='shopPremium'>
            <div className='shopPremium__div1'>
                <div className='shopPremium__div1__card'>
                    <div>
                        <h1>Shop Premium </h1>
                        <h2>Tempered Glass in wholesale</h2>
                        <h3>Price !</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> <br />

                            LKR : 299
                        </p>
                        <Button>Shop Tempered Glass </Button>
                    </div>
                    <img src={shopImage} alt="Shop Premium iimage" />
                </div>
            </div>
            <div className='shopPremium__div2'></div>
        </section>
    )
}

export default ShopPremium