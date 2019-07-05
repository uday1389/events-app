import React from 'react'
import {Link} from "react-router-dom";

const Banner =(props)=>{
    return(
        <div>
            <h1>
                Events App
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/Events/">Events</Link>
                    </div>
                </nav>
            </h1>
        </div>
    )
}

export default Banner