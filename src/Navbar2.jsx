import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

const usestyles = makeStyles({
    menu: {
        display: "none"
    },
    menu1: {
        display: "block",
        position: "absolute",
    }

});

const Navbar2 = () => {
    const [open, setOpen] = useState('');


    function show() {
        const mainMenu = document.querySelector('.mainMenu');
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }
    function close() {
        const mainMenu = document.querySelector('.mainMenu');
        mainMenu.style.top = '-100%';
    }
    const functionopen = () => {
        setOpen(show);
    }
    const functionclose = () => {
        setOpen(close)
    }

    const classes = usestyles();
    const w = 700;
    if (window.screen.width <= 700) {
        return (<>

            <nav>
                <div class="openMenu" onClick={functionopen}><i class="fa fa-bars"></i></div>
                <ul class="mainMenu">
                    <li><a href="/"> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Home</span></h3></a></li>
                    <li><a href="/about"><h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">About</span></h3></a></li>
                    <li>
                        <div className="menu_1">
                            <ul>
                                <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Members 2023-24</span></h3></li> </NavLink>
                                <NavLink to="/members1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Members 2022-23</span></h3></li> </NavLink>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/contact"><h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Contact</span></h3></a></li>
                    <li>
                        <div className="menu_1">
                            <ul>
                                <NavLink to="/events" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Placement-Diaries</span></h3></li> </NavLink>
                                <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Presentation-Competetions</span></h3></li> </NavLink>
                                <NavLink to="/events2" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Webinars And Technical Sessions</span></h3></li> </NavLink>
                                <NavLink to="/events3" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">FlashBack Friday</span></h3></li> </NavLink>
                                <NavLink to="/events4" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Monday Matter</span></h3></li> </NavLink>
                                <NavLink to="/events5" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Materials Unlocked</span></h3></li> </NavLink>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="menu_1">
                            <ul>
                                <NavLink to="/aboutincerschapter" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Incers-About</span></h3></li> </NavLink>
                                <NavLink to="/mritika" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Mrittika-2023</span></h3></li> </NavLink>
                                <NavLink to="/mritika1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Mrittika-2019</span></h3></li> </NavLink>

                            </ul>
                        </div>
                    </li>
                    <div class="closeMenu" onClick={functionclose}><i class="fa fa-times"></i></div>
                    <span class="icons">
                        <a href=""><i class="fa fa-facebook"></i></a>
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"> <i class="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/incers-nitr"> <i class="fa fa-linkedin"></i></a>
                    </span>
                </ul>
            </nav>
        </>)
    }
    else {
        return (<>
            <div class="menu-bar">
                <link rel="stylesheet" href="index.css" />
                <div>
                    <div id="logo1" style={{ cursor: "pointer" }}><img src="images/incers-chapter-logo.png" style={{ height: "60px", width: "70px", background: "100% 100%", borderRadius: "0px", padding: "0px", marginTop: "-12px" }} /></div>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/members">Members <i class="fas facaret-down"></i></a>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/members">Members 2023-24</a></li>
                                <li><a href="/members1">Members 2022-23</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/contact">Contact-us</a>
                    </li>
                    <li><a href="#">Events <i class="fas facaret-down"></i></a>

                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/events">Placement-Diaries</a></li>
                                <li><a href="/events1">Presentation-Competitions</a></li>
                                <li><a href="/events2">Webinars And Technical Sessions</a></li>
                                <li><a href="/events3">FlashBack Friday</a></li>
                                <li><a href="/events4">Monday Matter</a></li>
                                <li><a href="/events5">Materials Unlocked</a></li>

                            </ul>
                        </div>
                    </li>
                    <li><a href="#">InCerS NITR <i class="fas facaret-down"></i></a>

                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/aboutincerschapter">Incers-About</a></li>
                                <li><a href="/mritika">Mrittika-2023</a></li>
                                <li><a href="/mritika1">Mrittika-2019</a></li>

                            </ul>
                        </div>
                    </li>

                </ul>
            </div></>)

    }
}
const functionnav = () => {
    const widths = 700
    if (window.screen.width <= widths) {
        return (<> <div className="nav_bar">
            {Navbar2()}
        </div></>)
    }
    else {
        return (<><div>{Navbar2()}</div></>)
    }
}
const Navbar23 = () => {
    return (<>
        {functionnav()}
    </>)

}

export default Navbar23;