import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout =(props) =>{
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className='dashboard container'>
                    {props.children}
                </div>
            </main>
            <div className='row'>
                <Footer />
            </div>
        </>
    )
}

export default Layout
