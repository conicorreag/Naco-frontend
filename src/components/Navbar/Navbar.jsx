import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../pages/profile/Logout.jsx";
import { AuthContext } from "../../auth/AuthContext";
import { useContext, useState, useEffect } from "react";

function Navbar() {
    const { token, setToken } = useContext(AuthContext);
    const [sesion, setSesion] = useState(false);

    useEffect(() => {
        if (token != "null" && token != null) {
        setSesion(true);
        }
        else{
        setSesion(false);
        }
    }, [token]);

    return (
        <header>
            <nav className="navbar">
                <NavLink to="/" className="logo-display">
                    <img src="/logo-no-text.svg" alt="logo-image" className="logo-image" />
                    <span className="name title">ATAQUE DE TRONOS </span>
                </NavLink>
                <ul className="navbar-links-container">
                    <li className="navbar-element">
                        <NavLink to="login" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Login
                        </NavLink>
                    </li>
                    <li className="navbar-element">
                        <NavLink to="signup" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li className="navbar-element">
                        <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-element"> 
                        <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="navbar-element">
                        <NavLink to="rules" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Reglas
                        </NavLink>    
                    </li>
                    {sesion && 
                        <li className="navbar-element">
                        <NavLink to="game" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Game
                        </NavLink>
                        </li>
                    }
                    <li className="logout">
                        <LogoutButton />
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Navbar;