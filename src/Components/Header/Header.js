import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container menu">
                    <Link className="navbar-brand" to="/home">TravelX</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            {user.email && <li className="nav-item"> <span className="nav-link" style={{ color: 'tomato' }}>{user.displayName}</span> </li>}
                            { user.email?
                                <li className="nav-item mx-2">
                                <Link className="text-white btn btn-primary" onClick={logOut} to="/login">Logout</Link>
                                </li> :
                                <li className="nav-item">
                                <Link className="text-white btn btn-primary" to="/login">Login</Link>
                                </li>
                            }
                            <li className="nav-item mx-2">
                            <Link className="text-white btn btn-secondary" to="/admin">Admin</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;