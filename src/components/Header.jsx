import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <h1> this is Header Component</h1>
            <div>
                <Link to="/">Home</Link> <br />
                <Link to="about">About</Link>  <br />
                <Link to="contact"> Contact </Link>   <br />
            </div>
        </>
    )
}
export default Header;