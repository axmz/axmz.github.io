import { Link } from 'gatsby'
import React from 'react'
import './styles.css'

const Test = () => {

    return (
        <div className="container">
            <div className="menu">
            <Link to="/about" className="menu__item">About me</Link>
            <Link to="/projects" className="menu__item">Projects</Link>
            {/* <Link to="/resume" className="menu__item">Resume</Link> */}
            </div>
        </div>
    )
}

export default Test