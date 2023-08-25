import { NavLink } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink to="/" exact>                    
                    <img src="images/logo_new.png" style={{ height: "65px", width: "70px"}} />
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fs-5" href="/"> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5" href="/contact">Contact-Us</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <NavLink to="/members3" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Members 2023-24
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/members" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Members 2022-23
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/members1" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Members 2021-22
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <NavLink to="/events" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Placement-Diaries
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/events1" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Presentation-Competitions
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/events2" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Webinars And Technical Sessions
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/events3" exact style={{ textDecoration: "none", color: 'black' }} >
                                        FlashBack Friday
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/events4" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Monday Matter
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/events5" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Materials Unlocked
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                InCeS-NITR
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <NavLink to="/aboutincerschapter" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Incers-About
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/mritika" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Mrittika-2023
                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink to="/mritika1" exact style={{ textDecoration: "none", color: 'black' }} >
                                        Mrittika-2019
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>)

}

export default Navbar;