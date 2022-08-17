import React from 'react';

const Nav = () => {
    return (
        <div>
            <ul className="nav justify-content-center py-4">
                <li className="nav-item">
                    <a className="nav-link fs-5  text-muted" aria-current="page" href="/">All image</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fs-5  text-muted" href="/b-image">Best image</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fs-5  text-muted" href="/p-image">Photographer image</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;