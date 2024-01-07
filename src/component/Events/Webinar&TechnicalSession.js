import React from 'react';
import Navbar from '../../Navbar';
import "react-multi-carousel/lib/styles.css";
import "./Webinar&TechnicalSession.css";
import Footer from '../Footer/Footer';


const Events2 = () => {
    return <>
        <Navbar />
        <div >
            <div class="container">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                
                <h3 class="pb-3 my-4 border-bottom" style={{color:"green"}}>
                    WEBINARS AND TECHNICAL SESSIONS
                </h3>

                <div className="d-flex flex-wrap flex-column">
                    <div class="col-md-12 card-effect" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 WTdesign">
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">OBMODTEA 2020</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">A series of interactive sessions by some of the most renowned researchers in material science, covering
                                    Bio-ceramics in a very simplified and elaborate manner.</p>
                                <a class="btn btn-outline-primary btn-sm mt-4" role="button" href="https://www.instagram.com/p/CFeHJpmFA4l/">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail [200x250]" src="images/TS-1.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>

                    <div class="col-md-12 card-effect" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 WTdesign2">
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Mesoporous Silica By Munmi Das</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">A technical session on Mesoporous Silica, a porous Ceramic was delivered by Munmi Das , a final year Dual Degree Student
                                    of Ceramic Engineering on 9th February,2022. The technical aspects and properties were well explained by her. NITR ICS is fortunate to have brainy
                                    and creative minded members like her.</p>
                                <a class="btn btn-outline-success btn-sm mt-4" href="https://www.youtube.com/watch?v=h2AQkirPS-Y">Go to Youtube</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail [200x250]" src="images/TS-2.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap flex-column">
                    <div class="col-md-12 card-effect" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 WTdesign" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">New Implementations of Carbon in Refractories by Depsikha Brahma</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">Presentation on- New implementations of Carbon Refractories by Deepsikha Brahma
                                </p>
                                <a class="btn btn-outline-primary btn-sm mt-4" role="button" href="https://www.youtube.com/watch?v=2zF65FrMGts">Go to Youtube</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail [200x250]" src="images/TS-3.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-12 card-effect" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 WTdesign2" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Virtual Demonstration-Tata Stee</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">We are fortunate and thrilled to announce that Indian Ceramic Society (ICS) invites Professional Experts of Tata
                                    Steel to organize a virtual workshop on overview of Iron and Steel manufacturing and application of refractories.</p>
                                <a class="btn btn-outline-success btn-sm mt-4" href="https://www.instagram.com/p/Cbm6yUTvS8K/">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail [200x250]" src="images/TS-4.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-12 card-effect" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out" >
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 WTdesign2" >
                            <div class="card-body d-flex flex-column align-items-start" >
                                <strong class="d-inline-block mb-2 text-success">Li-Ion batteries and beyond- a perspective for future energy storage</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Technical Session</a>
                                </h6>
                                <p class="card-text mb-auto">Ceramic Engineering of NIT Rourkela successfully concluded with the 3 Days National Webinar on "Li-Ion batteries and beyond- a
                                    perspective for future energy storage needs from June 23rd-25th, 2022. </p>
                                <a class="btn btn-outline-success btn-sm mt-4" href="https://www.instagram.com/p/CfQzTQPvdIG">Go to Instagram</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail [200x250]" src="images/TS-5.png" style={{ width: "230px", height: "250px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </>
}

export default Events2