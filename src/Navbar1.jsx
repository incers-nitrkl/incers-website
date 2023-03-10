import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar1 = ()=>{
    return(<>
        <div className="info_div">
            <NavLink to="/" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover_1" >Home</h2></NavLink>
            <NavLink to="/about" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover_1" >About</h2></NavLink>
            <NavLink to="/members" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover_1" >Members</h2></NavLink>
            <NavLink to="/contact" exact activeClassName="active_class" style={{textDecoration:"none"}}> <h2 className="nav_hover_1" >ContactUs</h2></NavLink>
                    
        </div>
    </>);
}

export default Navbar1;