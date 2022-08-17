import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navMenus } from "./config";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./style.scss";
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }
    return (

        <div>

            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30} />
                    </Link>

                    <ul className={click ? "navbar_container_menu active" : "navbar_container_menu"}>
                        {
                            navMenus.map((item, key) => (
                                <li key={key} className="navbar_container_menu_item">
                                    <Link className="navbar_container_menu_item_link" to={item.to} >
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {
                            click ? <HiX size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;