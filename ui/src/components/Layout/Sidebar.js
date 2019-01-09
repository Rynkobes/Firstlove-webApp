import React from "react";
import { NavLink } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => (
  
  <div className='sidebar'>
    <ul>
      <li>
        <NavLink to="/" exact> Home </NavLink>
      </li>
      <li>People 
        <ul className="dropdown">
          <li>
            <NavLink to="/member">Member</NavLink>
          </li>
          <li>
          <NavLink to="/pastors">Church Leader</NavLink>
          </li>
          <li>
          <NavLink to="/pastors">Church Worker</NavLink>
          </li>
        </ul>
      </li>  
      <li>
        <NavLink to="/church">Churches</NavLink>
      </li>
      <li>
      <NavLink to="/denomination">Denomination</NavLink>
      </li>
     
      </ul>
      </div>
 
  
 
)
export default Sidebar;


