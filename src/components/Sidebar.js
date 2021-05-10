import React from 'react';

import './sidebar.css'

export default function Sidebar() {
    const userRoutes = [
        { path: '/links', name: 'Ajuda', icon: 'fa fa-address-book' },
        { path: '/technician', name: 'Técnico', icon: 'fa fa-microchip' },
        { path: '/command', name: 'Comandos', icon: 'fa fa-terminal' },
        { path: '/finance', name: 'Financas', icon: 'fa fa-money' },
        { path: '/domain', name: 'Domínio', icon: 'fa fa-globe' },
        { path: '/home', name: 'Início', icon: 'fa fa-home' },
    ].reverse();

    const handleSidebar = () => {
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
        let search = document.querySelector(".fa-search");

        btn.onclick = function () {
            sidebar.classList.toggle("active");
        };

        search.onclick = function () {
            sidebar.classList.toggle("active");
        };
    }

    return (
        <div className="sidebar">

            <div className="logo_content">

                <div className="logo">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <div className="logo_name">LogoSidebar</div>
                </div>

                <i className="fa fa-bars" aria-hidden="true" id="btn" onClick={handleSidebar}></i>
            </div>

            <ul className="nav_list">

                <li>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search" />
                    <span className="tooltip">Search</span>
                </li>

                {userRoutes.map((element) => (
                    <li key={element.path}>
                        <a href={element.path}>
                            <i className={element.icon} aria-hidden="true"></i>
                            <span className="link_name">{element.name}</span>
                        </a>
                        <span className="tooltip">{element.name}</span>
                    </li>
                ))}

            </ul>

        </div>
    )
}