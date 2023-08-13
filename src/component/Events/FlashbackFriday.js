import React from 'react';
import Navbar from '../../Navbar';


const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div class="top_div PCNavbar-4">
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
const Events3 = () => {

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
                <div class="mrittika-img PCNavbar-4">
                    <img class="mrittika-img1" src="images/FF-banner.png" alt="suraj" style={{height:"565px",width:"100%",borderRadius:"0px"}}/>
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
                <div class="about-2023 ff-about" style={{marginTop:"2rem"}}>
                    <h1 style={{marginLeft:"-4rem"}}>FLASHBACK FRIDAY</h1>
                    
                    {/* <a  href="/mritika1">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Visit Mrittika 2019</h4></button>
                    </a> */}
                </div>
                <div class="about-content">
                    <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once 
                        thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood 
                        backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, 
                        while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way 
                        to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain 
                        reasons. To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from 
                        successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a 
                        conglomeration of important events in their journey from college to where they are now. All the information will be 
                        shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                    </p>
                    
                </div>
            
                {/* FlashBack Friday video  */}
                <div class="container" style={{marginTop:"-2rem",marginBottom:"-3rem"}}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe style={{transform:"scale(0.7)"}} class="embed-responsive-item" src="//www.youtube.com/embed/EIfB_z3K0mE"></iframe></div>
                </div>
            </div>



                {/* <div class="faculty-advisor">
                    <p>cards</p>
                </div> */}
                <div class="executive-members">
                    <section class="testimonials text-center fi">
                        <div class="container" style={{marginBottom:"10rem"}}>
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp"style={{marginBottom:"2rem"}}>
                                    <h3 class="text-center font-weight-bold">FLASHBACK<span class="bg-main"> INTERVIEWS</span></h3>
                                </div>
                            </div>

                            {/* Executive Cards HOVER EFFECT */}
                            <h3 class="interview fi-22" style={{marginLeft:"-63rem",marginTop:"0rem",marginBottom:"2rem"}}>INTERVIEW 2022-23</h3>
                            <div class="row">
                                
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/ClG_f3fPIGC/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB1.PNG" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CgmJEDVJ2d8/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB2.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CgBvd35vtB4/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB3.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/Cen82_zhLAK/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB4.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CcFw_e1vYB0/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB5.png" />
                                    </a>         
                                </div>
                            </div>

                            <h3 class="interview fi-23" style={{marginLeft:"-63rem",marginTop:"2rem",marginBottom:"2rem"}}>INTERVIEW 2021-22</h3>    
                            <div class="row" style={{marginBottom:"4rem"}}>
                                
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CaryVFCPdTk/">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB6.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CZjhZh-PL-F/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB7.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CYI2Wc6FUrf/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB8.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CWvUkomP5-a/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB9.jpeg" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CV7RmfYliKQ/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB10.png" />
                                    </a>         
                                </div>
                                
                            </div>

                            <div class="row" style={{marginBottom:"4rem"}}>
                                
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CVDPWOLFUv3/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB11.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CTpDGQehplE/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB12.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CTE9KHbFIoe/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB13.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CNcI0kclBQ2/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB14.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CKVbgtXlwLK/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB15.png" />
                                    </a>         
                                </div>
                                
                            </div>

                            <div class="row" style={{marginBottom:"4rem"}}>
                                
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CJxUVuqFn-H/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB16.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CJgJbgnF_9w/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB17.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CGHED3elid2/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB18.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CE_3lEvFcMb/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB19.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CEI5jnlFMcP/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB20.png" />
                                    </a>         
                                </div>
                                
                            </div>


                            <div class="row" style={{marginBottom:"0rem"}}>
                                
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CDS1J9vFbij/?utm_source=ig_web_copy_link">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB21.png" />
                                    </a>         
                                </div>
                                <div class="card card-fb hover" style={{ height:"230px" ,width:"200px",marginLeft:"1rem"}}  data-wow-duration="1.4s">
                                    <a href="https://www.instagram.com/p/CWvbk8WPFj2/?igshid=YmMyMTA2M2Y=">
                                        <img class="card-img-top" style={{ height: "230px" ,width:"200px"}} src="images/FB22.png" />
                                    </a>         
                                </div>
                                    
                            </div>

                        </div>
                    </section>
                </div>
                

                
            <div>
            
            </div>



            <div class="social_media_part footer-2 PCNavbar-4" style={{marginTop:"66rem"}}>
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

export default Events3
