import React, { Fragment } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import Haro from "./components/hero/Haro"
import ThreeCards from "./components/threeCards/ThreeCards"
import { threeProducts } from "./static"
import ThreeImages from "./components/threeImages/ThreeImages"
import SectionIcon from "./components/sections/SectionIcon"

function App() {

  const threeCard = threeProducts?.map((product) => <ThreeCards key={product.id} {...product} />)

  return (
    <Fragment>
      <Header />
      <main className="main container">
        <Haro />
        <section className='SectionTitle'>
          <SectionIcon name={'about us'} />
          <h1 className="sectionTitle__text"> If you're looking for a Premium Quality Tempered Glass or Back-cover for your Device </h1>
          <p className="sectionTitle__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>
        <ThreeImages />
        <SectionIcon name='Why Choose US' />
        <section className="threeCards"> {threeCard} </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
