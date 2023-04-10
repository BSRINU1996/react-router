import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <h1> Dev blogs!</h1>
            <div>
                <Link to="/">Home</Link> <br />
                <Link to="about">About</Link>  <br />
                <Link to="contact"> Contact </Link>   <br />
                <Link to="blogslist"> BlogsList </Link>   <br />
            </div>
        </>
    )
}
export default Header;