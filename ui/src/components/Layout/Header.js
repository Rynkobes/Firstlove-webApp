import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import ToggleButton from './ToggleButton';


const Header = (props) => (
    <div className="header">
        <nav className="header_nav">
        <div>
            <ToggleButton click={props.sidebarClickHandler}/>
        </div>
        <div className="header_logo">
        <Link to="/">UD_Logo</Link>
        </div>
        </nav>
    </div>
)

export default Header