import React from 'react'
import '../styles.css'

export const Navbar = ({brand}) => {
    return (
        <>
            <nav className="navbar">
                <a className="logo" href='/'> {brand}</a>
            </nav>
        </>
    )
}
