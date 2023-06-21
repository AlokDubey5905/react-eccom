import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Dasboard</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/description'>description</Link>
                    </li>
                    <li>
                        <Link to='/addProduct'>Add Product</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;