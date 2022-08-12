import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className="navbar navbar-expand-x2 navbar-dark bg-dark justify-content-around">
            <h1 className='text-secondary'>Favorite Authors</h1>
            <ul className="nav">
                <li className='nav-item'>
                    <NavLink to="/" className="nav-link active">Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/new" className="nav-link active">Add a new Author</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header