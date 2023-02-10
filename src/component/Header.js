import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/post' className="nav-link">Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header