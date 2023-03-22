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

const Navbar1 = () => {
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




    // openMenu.addEventListener('click', show);
    // closeMenu.addEventListener('click', close);


    const classes = usestyles();
    const w = 700;
    if (window.screen.width <= 700) {
        return (<>
            {/* <NavLink to="/" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-home"></i></h2></NavLink>
            <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >About</h2></NavLink>
            <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-user-secret"></i></h2></NavLink>
            <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-phone"></i></h2></NavLink>
            <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" ><i class="fa fa-calendar"></i></h2></NavLink> */}
            <nav>
                <div class="openMenu" onClick={functionopen}><i class="fa fa-bars"></i></div>
                <ul class="mainMenu">
                    <li><a href="/"> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Home</span></h3></a></li>
                    <li><a href="/about"><h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">About</span></h3></a></li>
                    <li>
                        <div className="menu_1">
                            <ul>
                                <NavLink to="/members1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Members 2020-21</span></h3></li> </NavLink>
                                {/* <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Presentation-Competetions</span></h3></li> </NavLink> */}
                                {/* <li><h3>hello</h3></li> */}
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

                                {/* <li><h3>hello</h3></li> */}
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="menu_1">
                            <ul>
                                <NavLink to="/mritika" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Mrittika-2023</span></h3></li> </NavLink>
                                <NavLink to="/mritika1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li> <h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">Mrittika-2019</span></h3></li> </NavLink>

                            </ul>
                        </div>
                    </li>

                    <li><a href="/mritika"><h3 class="my-heading " style={{ fontSize: "18px" }}><span class="bg-main">MRITTIKA</span></h3></a></li>
                    
                    {/* <li><a href="/mritika">Mrittika</a></li> */}
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
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" /> */}
            <link rel="stylesheet" href="index.css" />
            {/* <h1 class="logo" style={{cursor:"pointer"}}>NITR<span>ICS</span></h1> */}

            <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo_new.png" style={{ height: "65px", width: "70px", background: "100% 100%", borderRadius: "0px", padding: "0px" ,marginTop:"-12px"}} /></div>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/members">Members <i class="fas facaret-down"></i></a>
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="/members">Members 2022-23</a></li>
                            <li><a href="/members1">Members 2021-22</a></li>
                            <li><a href="/members2">Members 2020-21</a></li>
                            {/* <li><a href="/member1">Members 2021-22</a></li>
                            <li><a href="/member1">Members 2022-23</a></li> */}
                        </ul>
                    </div>
                </li>
                <li><a href="/contact">Contact-us</a>
                <div class="dropdown-menu">
                        <ul>
                            <li><a href="/contact">Contact-us</a></li>
                            <li><a href="/alumni">Alumni Members</a></li>
                            {/* <li><a href="/member1">Members 2021-22</a></li>
                            <li><a href="/member1">Members 2022-23</a></li> */}
                        </ul>
                    </div>
                </li>
                <li><a href="#">Events <i class="fas facaret-down"></i></a>

                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="/events">Placement-Diaries</a></li>
                            <li><a href="/events1">Presentation-Competitions</a></li>
                            <li><a href="/events2">Webinars And Technical Sessions</a></li>
                            <li><a href="/events3">FlashBack Friday</a></li>
                            <li><a href="/events4">Monday Matter</a></li>
                            {/* <li>
                                <a href="#">Team <i class="fas fa-caret-right"></i></a>

                                <div class="dropdown-menu-1">
                                    <ul>
                                        <li><a href="#">Team-1</a></li>
                                        <li><a href="#">Team-2</a></li>
                                        <li><a href="#">Team-3</a></li>
                                        <li><a href="#">Team-4</a></li>
                                    </ul>
                                </div>
                            </li> */}
                            {/* <li><a href="#">FAQ</a></li> */}
                        </ul>
                    </div>
                </li>
                {/* <li><a href="#">Blog</a>
                </li> */}
                {/* <li><a href="/mritika">Mrittika</a></li> */}


                <li><a href="/mritika">Mrittika <i class="fas facaret-down"></i></a>

                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="/mritika">Mrittika-2023</a></li>
                            <li><a href="/mritika1">Mrittika-2019</a></li>
                            
                        </ul>
                    </div>
                </li>

            </ul>
        </div></>)
        // return (<>
        //     <div className="hello_div">
        //         <NavLink to="/" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{ fontSize: "20px" }}>Home</h2>
        //         </NavLink>
        //         {/* <div className="menu_1">
        //             <ul>
        //                 <NavLink to="/blog" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>hello</h3></li> </NavLink>
        //                 <li><h3>hello</h3></li>
        //                 <li><h3>hello</h3></li>
        //             </ul>
        //         </div> */}
        //     </div> <div className="hello_div">
        //         <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{ fontSize: "20px" }}>About</h2>
        //         </NavLink>
        //         {/* <div className="menu_1">
        //             <ul>
        //                 <li><h3>hello</h3></li>
        //                 <li><h3>hello</h3></li>
        //                 <li><h3>hello</h3></li>
        //             </ul>
        //         </div> */}
        //     </div> <div className="hello_div">
        //         <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{ fontSize: "20px" }}>Members</h2>
        //         </NavLink>
        //         {/* <div className="menu_1">
        //             <ul>
        //                 <li><h3>Members(2018-22)</h3></li>
        //                 <li><h3>hello</h3></li>
        //                 <li><h3>hello</h3></li>
        //             </ul>
        //         </div> */}
        //     </div> <div className="hello_div">
        //         <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{ fontSize: "20px" }}>Contact</h2>
        //         </NavLink>
        //     </div>
        //     <div className="hello_div">
        //         <NavLink to="#" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{fontSize:"20px"}}>Events</h2>
        //         </NavLink>
        //         <div className="menu_1">
        //             <ul>
        //             <NavLink to="/events" exact activeClassName="active_class" style={{ textDecoration: "none" }} ><li> <h3 class="my-heading " style={{fontSize:"15px",marginLeft:"-50px",background:"black"}}><span class="bg-main">Placement-Diaries</span></h3></li> </NavLink>
        //             <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none"}} > <h3 class="my-heading " style={{fontSize:"15px",marginLeft:"-50px"}}><span class="bg-main">Presentation-Competetions</span></h3></NavLink>
        //             </ul>
        //         </div>
        //     </div>

        //     <div className="hello_div">
        //         <NavLink to="/mritika" exact activeClassName="active_class" style={{ textDecoration: "none" }}>
        //             <h2 className="nav_hover" style={{ fontSize: "20px" }}>Mrittika</h2>
        //         </NavLink>
        //         {/* <div className="menu_1">
        //             <ul>
        //             <NavLink to="/events" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>PlacementDiaries</h3></li> </NavLink>
        //             <NavLink to="/events1" exact activeClassName="active_class" style={{ textDecoration: "none", color: "red" }} ><li><h3>Presentation-Competetions</h3></li> </NavLink>
        //                 <li><h3>hello</h3></li>
        //             </ul>
        //         </div> */}
        //     </div>
        //     {/* <NavLink to="/about" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >AboutSociety</h2></NavLink> */}
        //     {/* <NavLink to="/members" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >Members</h2></NavLink> */}
        //     {/* <NavLink to="/contact" exact activeClassName="active_class" style={{ textDecoration: "none" }}> <h2 className="nav_hover" >ContactUs</h2></NavLink> */}
        // </>)
    }
}
const functionnav = () => {
    const widths = 700
    if (window.screen.width <= widths) {
        return (<> <div className="nav_bar">
            {Navbar1()}
        </div></>)
    }
    else {
        return (<><div>{Navbar1()}</div></>)
    }
}
const Navbar = () => {
    return(<>
          {functionnav()}
    </>)

}
    
    export default Navbar;