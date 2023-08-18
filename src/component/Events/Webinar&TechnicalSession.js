import React from 'react';
import Navbar from '../../Navbar';
import "react-multi-carousel/lib/styles.css";
import "./Webinar&TechnicalSession.css";


const Events2 = () => {

    const functionnav = () => {
        const widths = 700
        if (window.screen.width <= widths) {
            return (<>
                <div class="top_div PCNavbar">
                    <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo_new.png" style={{ height: "58px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                    </div>
                    <Navbar />
                </div>
            </>)
        }
        else {
            return <Navbar />
        }
    }
    return <>
        <div class="main_div">
            {functionnav()}
            <div class="container">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
                <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
                <h3 class="pb-3 my-4 font-italic border-bottom" >
                    WEBINARS AND TECHNICAL SESSIONS
                </h3>

                <div className="WT-row">
                    <div class="col-md-6 card-effect ">
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design ev-1 card-ts" style={{ height: "16rem", width: "70rem" }}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">OBMODTEA 2020</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">A series of interactive sessions by some of the most renowned researchers in material science, covering
                                    Bio-ceramics in a very simplified and elaborate manner.</p>
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://www.instagram.com/p/CFeHJpmFA4l/">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/TS-1.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>

                    <div class="col-md-6 card-effect" >
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design2 ev-1 card-ts" style={{ height: "16rem", width: "70rem" }}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Mesoporous SilicaBy Munmi Das</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">A technical session on Mesoporous Silica, a porous Ceramic was delivered by Munmi Das , a final year Dual Degree Student
                                    of Ceramic Engineering on 9th February,2022. The technical aspects and properties were well explained by her. NITR ICS is fortunate to have brainy
                                    and creative minded members like her.</p>
                                <a class="btn btn-outline-success btn-sm" href="https://www.youtube.com/watch?v=h2AQkirPS-Y">Go to Youtube</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/TS-2.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div class="WT-row TS-card">
                    <div class="col-md-6 card-effect" >
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 competition-design ev-1 card-ts" style={{ height: "16rem", width: "70rem" }}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">New Implementations of Carbon in Refractories by Depsikha Brahma</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">Presentation on- New implementations of Carbon Refractories by Deepsikha Brahma
                                </p>
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://www.youtube.com/watch?v=2zF65FrMGts">Go to Youtube</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/TS-3.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-6 card-effect">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 competition-design2 ev-1 card-ts" style={{ height: "16rem", width: "70rem" }}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Virtual Demonstration-Tata Stee</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Technical Session</a>
                                </h6>

                                <p class="card-text mb-auto">We are fortunate and thrilled to announce that Indian Ceramic Society (ICS) invites Professional Experts of Tata
                                    Steel to organize a virtual workshop on overview of Iron and Steel manufacturing and application of refractories.</p>
                                <a class="btn btn-outline-success btn-sm" href="https://www.instagram.com/p/Cbm6yUTvS8K/">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/TS-4.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-6 card-effect" >
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 competition-design2 ev-1 card-ts" style={{ height: "16rem", width: "70rem" }}>
                            <div class="card-body d-flex flex-column align-items-start" >
                                <strong class="d-inline-block mb-2 text-success">Li-Ion batteries and beyond- a perspective for future energy storage</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Technical Session</a>
                                </h6>

                                <p class="card-text mb-auto">Ceramic Engineering of NIT Rourkela successfully concluded with the 3 Days National Webinar on "Li-Ion batteries and beyond- a
                                    perspective for future energy storage needs from June 23rd-25th, 2022. </p>
                                <a class="btn btn-outline-success btn-sm" href="https://www.instagram.com/p/CfQzTQPvdIG">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/TS-5.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="social_media_part footer-1 PCNavbar">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>incersnitr@gmail.com</span>
                        </section>
                    </div>
                    <span class="border-shape"></span>
                    <div class="bottom_content">
                        <section>
                            <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                        </section>
                        <section>
                            <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
                            <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
                            <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
                            <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
                            <a href="/mritika" style={{ fontSize: "1.1rem" }}>Mrittika 2.0</a>
                            <a href="/aboutincerschapter" style={{ fontSize: "1.1rem" }}>Incers-about</a>
                        </section>
                    </div>
                    <div class="copyright">
                        Copyright © 2023 INCERSNITR - All rights reserved
                        <a style={{ color: "#1e1e1e", cursor: "value" }} href="https://wallpaperaccess.com/full/459955.jpg">a</a>
                    </div>
                </footer>
            </div>
        </div>
    </>
}

export default Events2