import React from 'react'
import Logo from '../../../assets/icons/Logo'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-container__div1">
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="footer-container__div2">
                    <h4 className='footer-div2-title'>Contact us</h4>
                    <h4>E: info@example.com</h4>
                    <h4>P: +94 7670000000</h4>
                    <h4>A: 123 Hospital rd, </h4>
                    <h4>Kalubowila, Dehiwela </h4>
                </div>
                <div className="footer-container__div3">
                    <h4 className='footer-div3-title'>Useful links</h4>
                    <h4>Shop All </h4>
                    <h4>Tempered Glass</h4>
                    <h4>Back-cover </h4>
                    <h4>About Us </h4>
                </div>
                <ul className="footer-container__div4">
                    <li> <span><FaWhatsapp /></span> Whatsapp </li>
                    <li> <span><FaFacebookF /></span> Facebook </li>
                    <li> <span><FaInstagram /></span> Instargram </li>
                    <li> <span><FaTiktok /></span> Tik Tok </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer