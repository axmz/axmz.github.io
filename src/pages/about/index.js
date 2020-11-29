import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const About = () => {

    return (
        <div className="about">
            <Link to="/">
                <div className="about__arrow">&#8592;</div>
            </Link>
            <div className="about__text">
                I am a web dev, an improver and status quo challenger. I like minimalism and growing plants.
            </div>
        </div>
    )
}

export default About