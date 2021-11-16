import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Style from "./NavBar.module.css"
import Dropdown from "./Dropdown"
import logo from "../../Images/logo.png"

const NavBar = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    return (
        <div className={ Style.navBar_container}>
            <img className={Style.image} src={logo}/>
            <h1 className={Style.title}>Matias Feliz Fotografia</h1>
            <div className={ Style.nav}>
                <Link to="/" className={Style.menuItem}> Inicio </Link>
                <Dropdown className={Style.menuItem}/>
                <Link to="/aboutMe" className={Style.menuItem}> Sobre mi </Link>
                <Link to="/contactMe" className={Style.menuItem}> Contacto </Link>
            </div>
        </div>
    )
}

export default NavBar
