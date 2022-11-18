import React from 'react'
import '../layout/Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="menu">
        <nav>
            <ul>
                <li><a href = "/">Home</a></li>
                <li><a href = "/about">Sobre</a></li>
                {/* <li><a href = "/">Home</a></li> */}
            </ul>
        </nav>
    </aside>
)

export default Menu;