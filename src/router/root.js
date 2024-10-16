import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
// import Footer from '../layout/footer'

const Root = () => {
  return (
    <div>
        {/* REMOVE HEADER ON PRODUCTION */}
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default Root