import React from 'react'
import NavBar from './NavBar'
import Styles from "./NavBarO.module.css"

export const navBarO = ({isScrolling}) => {
    console.log({isScrolling})

    return (
        <nav className={isScrolling < 50 ? Styles.navBar : Styles.navBar + " " + Styles.sticky}>
            <h1>MatiasFeliz </h1>
            <NavBar />
        </nav>
    )
}

export default navBarO
