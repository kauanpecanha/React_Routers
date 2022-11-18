import React from 'react'
import '../layout/Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="menu">
        <nav>
            <ul>
                <li><a href = "/">Início</a></li>
                <li><a href = "/param/123">Param #01</a></li>
                <li><a href =   "/param">Param #02</a></li>
                <li><a href = "/about">Sobre</a></li>
                <li><a href = "/notfound">404</a></li>
            </ul>
        </nav>
    </aside>
)

export default Menu;