import React from 'react';
import Navbar from './Navbar';
import Brochure from './images/brochure2019.pdf';


const Events4 = () => {
    const functionnav = ()=>{
        const widths = 700
        if(window.screen.width <= widths){
            return(<>
                 <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo_new.png" style={{ height: "58px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div>
            </>)
        }
            else{
                return <Navbar />
            }
        }
    return (<>

        <div className='main_div'>
            {/* <div class="top_div">
                    <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                    </div>
                    <Navbar />
                </div> */}
            {functionnav()}
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                <div class="container">
                    {/* <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/mritika_logo.png" style={{ height: "65px", width: "65px", background: "100% 100%", borderRadius: "0px", padding: "0px" ,marginLeft:"-180px",marginTop:"-1rem"}} /></div>
                    </div>
                    <h3 style={{marginRight:"-48rem"}}>InCerS NITR</h3>
                    <a class="navbar-brand" href="/">
                        <button class="btn btn-primary" style={{marginRight:"-30rem"}}>Home</button>
                    </a> */}
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars mfa-white"></span>
                    </button>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
                    <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
                </div>
            </nav>


            <div class="mrittika-bg">
                {/* <div class="overlay"></div> */}
                <div class="mrittika-img">
                    <img src="images/MRITTIKA2.0-bg.png" alt="suraj" style={{height:"565px",width:"100%"}}/>
                </div>
                <div class="container slider-top-text">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            {/* <h3 class="my-heading">WELCOME TO MRIT<span class="bg-main">TIKA</span></h3> */}
                            {/* <p class="myp-slider text-center">Where ceramists unite and become better together</p>
                            <p class="myp text-center">SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p> */}
                            <a class="btn btn-primary btn-join" title="Go to Brochure" href="https://docs.google.com/document/d/1T6DjZZsHYflBi5Wr3VZnujt5EzYUa3KiZaqeuRzwj7E/edit?usp=sharing" style={{marginTop:"12rem"}}>Go to Brochure</a>
                            {/*<a href="https://docs.google.com/forms/d/e/1FAIpQLSdrgZlgyceJlhRZhBOYVHXJXWGV-V6NZbli0DKgS-E6ARCr_A/viewform" title="Go to Registration Form" >
                                <button type="button" class="btn btn-primary" style={{marginTop:"20rem",marginBottom:"1rem",width:"13rem",marginLeft:"-12.4rem",fontWeight:"bold",fontSize:"1.2rem"}}>Register Here</button>
                            </a> */}
                            {/* <p>suraj</p> */}
                            
                            {/* <a  href="https://docs.google.com/document/d/1T6DjZZsHYflBi5Wr3VZnujt5EzYUa3KiZaqeuRzwj7E/edit?usp=sharing"  title="Go to Brochure" style={{marginTop:"12rem",fontWeight:"bold",fontSize:"1.2rem"}}>Go to Brochure</a> */}
                        </div>
                        
                        <div class="col-md-12 text-center mt-5">
                            <div class="scroll-down" >
                                <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            {/* New add */}

            <div class="mritika-about">
                <div class="about-2023 mm-about" style={{marginTop:"2rem"}}>
                    <h1 class="e1" style={{marginLeft:"-72rem"}}>ABOUT</h1>
                    
                    {/* <a  href="/mritika1">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Visit Mrittika 2019</h4></button>
                    </a> */}
                </div>
                <div class="about-content">
                    <p>Every week, you suffer from the same malady: a terrible case of the Mondays. 
                        You dread that alarm going off. And no matter how many things you try—meditation, 
                        reciting inspirational quotes, reading a bunch of happy quotes, you're having 
                        trouble getting going. But why not think of Monday as an opportunity rather than 
                        a punishment? It's a chance to start fresh. Who wants to wake up to a Monday after 
                        a good weekend rest? Mondays are boring, seems longer than usual and almost everyone 
                        hates it, right? It is also marked by tiredness and reluctance to start the week's 
                        work. But not anymore. NITR-ICS is going to make you look forward to the Monday and 
                        the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose 
                        of Ceramics and Material Science updates, to keep you intrigued for the rest of the 
                        week. We will be keeping you informed of all the latest, known, and unknown realms of 
                        material science, making your start of the week an interesting one. To all material 
                        enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed 
                        to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.
                    </p>
                    
                </div>
            
                {/* FlashBack Friday video  */}
                {/* <div class="container" style={{marginTop:"-2rem",marginBottom:"-3rem"}}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe style={{transform:"scale(0.7)"}} class="embed-responsive-item" src="//www.youtube.com/embed/EIfB_z3K0mE"></iframe></div>
                </div> */}
            </div>



                {/* <div class="faculty-advisor">
                    <p>cards</p>
                </div> */}
                <div class="executive-members">
                    <section class="testimonials text-center mi">
                        <div class="container" style={{marginBottom:"10rem"}}>
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp"style={{marginBottom:"2rem"}}>
                                    <h3 class="text-center font-weight-bold">MONDAY<span class="bg-main"> MATTER</span></h3>
                                </div>
                            </div>

                            {/* Executive Cards HOVER EFFECT */}
                            <h3 class="interview mi-22" style={{marginLeft:"-63rem",marginTop:"0rem",marginBottom:"2rem"}}>INTERVIEW 2022-23</h3>
                            <div class="row">
                                
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CMJPuzVlJ7e/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm1.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CKLCWNDFfT5/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm2.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CJ5OuilF7cx/">
                                        <img class="card-img-top" style={{ height: "250px" ,width:"200px"}} src="images/mm3.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CGzorlFFf-4/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm4.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CGO3uy_FLOW/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm5.png" />
                                    </a>         
                                </div>
                            </div>

                            <h3 class="interview mi-23" style={{marginLeft:"-63rem",marginTop:"2rem",marginBottom:"2rem"}}>INTERVIEW 2021-22</h3>    
                            <div class="row" style={{marginBottom:"18rem"}}>
                                
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CFG8jIxlHhr/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm6.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CE0wHsLF87y/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm7.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CEjCQZXFNkH/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm8.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CD-yFPklaCg/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm9.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CDhKg5lh4cr/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/mm10.png" />
                                    </a>         
                                </div>
                                
                            </div>

                        </div>
                    </section>
                </div>
                

                
            <div>
            
            </div>



            <div class="social_media_part footer-3" style={{marginTop:"15rem"}}>
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        {/* <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Deepsikha Brahma</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Partha Mishra</span>
                        </section> */}
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>incersnitr@gmail.com</span>
                        </section>
                    </div>
                    <span class="border-shape"></span>
                    <div class="bottom_content">
                        <section>
                            <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                            {/* <a href="#"><i class="fa fa-telegram"></i></a> */}
                        </section>
                        <section>
                            <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
                            <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
                            <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
                            <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
                        </section>
                    </div>
                    <div class="copyright">
                        Copyright © 2023 INCERSNITR - All rights reserved
                    </div>
                </footer>
            </div>


        </div>
        </>);
}

export default Events4
