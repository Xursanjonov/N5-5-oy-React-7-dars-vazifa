import React from 'react'
import Logo from '../../../assets/icons/Logo'
import Input from '../../formComponents/Input'
import Button from '../../formComponents/Button'
import { FaBars, FaSearch } from 'react-icons/fa'
import './header.scss'

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header className='header'>
      <nav className="header__nav">
        <div className="header__nav__list">
          <a href="#" className='header__nav__list-item'>Home</a>
          <a href="#" className='header__nav__list-item'>Shop All</a>
          <a href="#" className='header__nav__list-item'>Blog</a>
        </div>
        <Logo />
        <div className="header__nav__search-div">
          <a href="#" className='header__nav__search-div__item'>About Us</a>
          <form className="header__nav__search-div__form">
            <Input className={'header__nav__search-div__form__input'} type={'search'} placeholder={'Search Product'} />
            <FaSearch />
          </form>
        </div>
        <Button onClick={() => setShowMenu(true)} className="header__nav__bars"> <FaBars /> </Button>
      </nav>
    </header>
  )
}

export default Header