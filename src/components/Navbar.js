import { Link } from 'gatsby'
import React, { useState } from 'react'
import {FcLock, FcUnlock} from 'react-icons/fc'
import logo from '../images/meatStoreLogo.png'

const Navbar = () => {
    const [show, setShow] =  useState(false)

    const closeIcon = show ? <FcUnlock /> : <FcLock /> 

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <button className="icon-button" onClick={() => setShow(!show)}>
                    {closeIcon}
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className="nav-link" activeClassName="active-link"
                    onClick={() => setShow(false)}>
                        Home
                    </Link>

                    <Link to="/recipes" className="nav-link" activeClassName="active-link"
                    onClick={() => setShow(false)}>
                        Recipes
                    </Link>
                    <Link to="/tags" className="nav-link" activeClassName="active-link"
                    onClick={() => setShow(false)}>
                        tags
                    </Link>
                    <Link to="/about" className="nav-link" activeClassName="active-link"
                    onClick={() => setShow(false)}>
                        about
                    </Link>
                    <div className="nav-link contact-link"
                    onClick={() => setShow(false)}>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
