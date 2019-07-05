import React from 'react'
import {Link} from "react-router-dom";

const Banner =(props)=>{
    return(
        <div className='nav-bar-content'>
            <nav>
                <li className='header-left'>
                    <h1>Events App</h1>
                </li>
                <span className='header-right'>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Events/">Events</Link>
                    </li>
                </nav>
                </span>
            </nav>

        </div>
    )
}

export default Banner