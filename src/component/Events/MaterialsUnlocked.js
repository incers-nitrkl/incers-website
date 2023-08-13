import React from 'react';
import Navbar from '../../Navbar';


const Events5 = () => {
    const functionnav = ()=>{
        const widths = 700
        if(window.screen.width <= widths){
            return(<>
                 <div class="top_div PCNavbar-5">
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


            <div class="mrittika-bg ">
                {/* <div class="overlay"></div> */}
                <div class="mrittika-img PCNavbar-5">
                    <img class="mrittika-img3" src="images/MU-banner.png" alt="suraj" style={{height:"565px",width:"100%",borderRadius:"0px"}}/>
                </div>
                <div class="container slider-top-text">
                    <div class="row" style={{display:"none"}}>
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

            <div class="mritika-about mritika-about-udit">
                <div class="about-2023 mm-about" style={{marginTop:"2rem"}}>
                    <h1 class="e1" style={{marginLeft:"-72rem"}}>ABOUT</h1>
                    
                    {/* <a  href="/mritika1">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Visit Mrittika 2019</h4></button>
                    </a> */}
                </div>
                <div class="about-content" style={{textAlign:"justify"}}>
                    <p>Materials are at the core of all scientific research and have a profound impact on virtually every 
                        aspect of modern life. They are essential to the development of new technologies, from semiconductors and 
                        computer chips to advanced medical devices and renewable energy technologies. In fact, materials science is 
                        a critical field of study that seeks to understand the properties and behavior of various materials, and to 
                        develop new materials with unique and beneficial properties.
                    </p>
                    <p>
                    Materials science plays a significant role in a range of fields, including physics, chemistry, engineering, biology, 
                    and nanotechnology. By investigating the properties of materials at the atomic and molecular level, scientists can 
                    understand the underlying physical and chemical phenomena that drive their behavior. This knowledge is then applied to 
                    the development of new materials with improved performance and functionality, such as stronger and more durable metals, 
                    lighter and more efficient composites, and more efficient energy storage and conversion systems.
                    </p>
                    <p>
                    In summary, the study of materials is vital to advancing our understanding of the natural world and to developing new 
                    technologies that can address the most pressing challenges of our time, from climate change to disease prevention and 
                    treatment. As such, the importance of materials in science cannot be overstated.
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
                                    <h3 class="text-center font-weight-bold">MATERIALS<span class="bg-main"> UNLOCKED</span></h3>
                                </div>
                            </div>

                            {/* Executive Cards HOVER EFFECT */}
                            {/* <h3 class="interview mi-22" style={{marginLeft:"-63rem",marginTop:"0rem",marginBottom:"2rem"}}>INTERVIEW 2022-23</h3> */}
                            <div class="row e2">
                                
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"0rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/Ch7QINAPt00/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mu1.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/Cjng5ORPwSw/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mu2.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CkddWz_PUUm/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mu3.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CmZAVuCPK8q/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mu4.png" />
                                    </a>         
                                </div>
                                {/* <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CGO3uy_FLOW/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm5.png" />
                                    </a>         
                                </div> */}
                            </div>

                            {/* <h3 class="interview mi-23" style={{marginLeft:"-63rem",marginTop:"2rem",marginBottom:"2rem"}}>INTERVIEW 2021-22</h3>    
                            <div class="row" style={{marginBottom:"18rem"}}>
                                
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CFG8jIxlHhr/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm6.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CE0wHsLF87y/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm7.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CEjCQZXFNkH/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm8.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CD-yFPklaCg/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm9.png" />
                                    </a>         
                                </div>
                                <div class="card card-mm hover" style={{ height:"300px" ,width:"270px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CDhKg5lh4cr/">
                                        <img class="card-img-top" style={{ height: "300px" ,width:"270px"}} src="images/mm10.png" />
                                    </a>         
                                </div>
                                
                            </div> */}

                        </div>
                    </section>
                </div>
                

                
            <div>
            
            </div>



            <div class="social_media_part footer-5 PCNavbar-5" style={{marginTop:"-6rem"}}>
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
                            <a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                            {/* <a href="#"><i class="fa fa-telegram"></i></a> */}
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
                    </div>
                </footer>
            </div>


        </div>
        </>);
}

export default Events5
