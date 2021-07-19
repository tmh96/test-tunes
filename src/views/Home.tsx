import React, { useState } from 'react'

import './Home.scss'
import logo from '../assets/logo.svg'

const Home: React.FC = () => {
    const [title] = useState('Welcome!')

    return (
        <div className="home">
            <h1>{title}</h1>
            <img className="logo" src={logo} alt="react logo"/>
            <p>
                Something should be here.
            </p>
            <small>
                There is something here in this&nbsp;
                <a href="https://reactjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                >
                    documentation
                </a>
            </small>
        </div>
    )
}

export default Home