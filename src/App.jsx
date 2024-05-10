import React, { Fragment } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

function App() {

  return (
    <Fragment>
      <Header />
      <main className="main container">
        <h1>Main</h1>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
