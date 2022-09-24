import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaSun } from "react-icons/fa"
import { BsFillMoonFill } from 'react-icons/bs'

const Header = ({ theme, setTheme }) => {
    return (
        <header>
            <div className="header-content">
                <Link to="/">
                    <h1 className="header-title">
                        Where in the world?
                    </h1>
                </Link>

                <div className="theme-button" onClick={() => {
                    setTheme((prev) => prev === 'dark' ? "light" : "dark")
                    localStorage.setItem('theme', theme === "dark" ? "light" : "dark")
                }}>
                    {theme === "dark" ?
                        <>
                            <BsFillMoonFill className='moon-icon' />
                            <span className="current-theme">Dark Mode</span>
                        </>
                        :
                        <>
                            <FaSun className='sun-icon' />
                            <span className="current-theme">Light Mode</span>
                        </>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header