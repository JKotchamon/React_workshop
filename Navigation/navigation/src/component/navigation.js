import {Link} from "react-router-dom"
import { FaBars,FaHome,FaWindowClose } from 'react-icons/fa';
import { useState } from "react";
import navigation from "./navigation.css"
import MenuData from "../data/MenuData";

const Navigation =()=>{
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu =()=>setShowMenu(!showMenu)
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to = "#" className="menu-bar">
                        <FaBars onClick={toggleMenu}></FaBars>
                    </Link>
                </div>
            </div>
            <nav className= {showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item">
                    <li className="navbar-toggle">
                        <Link to = "#" className="menu-bar">
                            <FaWindowClose onClick={toggleMenu}></FaWindowClose>
                        </Link>
                    </li>
                    {MenuData.map((menu,index)=>{
                        return(
                            <li className="menu-text" key={index}>
                                <Link to ={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                    })}


                </ul>
            </nav>
        </aside>
    )

}

export default Navigation