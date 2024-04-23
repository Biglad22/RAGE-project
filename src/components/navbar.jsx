
import logo from "../assets/nav-logo.svg";
import { Link, useLocation } from "react-router-dom";
import classes from "../styles/navbar.module.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () =>{

    //gets active rout path
    const currentPath = useLocation().pathname;

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(oldValue => !oldValue);
    };

    const links = [
       { page : 'home', link:'/'},
       { page : 'projects', link:'/projects'},
       { page : 'volunteer', link:''},
       { page : 'about us', link:'/about'}
    ];

    return(
        <>
            <nav>
                <div className={`${classes.logo}  logo`}>
                    <img src={logo} alt="RAGE logo" title="our logo" />
                </div>

                <div className={`${classes.navLinks} ${isOpen ?  classes.openMenu : ''}`}>
                    {
                        links.map((i, index)=>(<Link to={i.link} key={index} className={currentPath === i.link ? 'active' : ''}  > {i.page} </Link>))
                    }
                    <Link to='/volunteer' className={`${classes.cta} cta`}>volunteer</Link>
                </div>

                <div className={`${classes.navBtns}`}>
                    <Link to='/volunteer' className={`${classes.cta} cta`}>volunteer</Link>
                    <button type="button" className={`${classes.meunBtn} meun-btn`} onClick={handleClick} style={{color : isOpen ? '#4D4D4D' :  '#4C3DFE'}}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                
            </nav>
        </>
    )

}