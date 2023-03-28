// import React, { Component } from 'react'

// const Mritika1 = () => {
//     return(<>
//         <h2>Mrittika 2019</h2>
//     </>)
// }

// export default Mritika1;


import React from 'react';
import Navbar from './Navbar';
import Brochure from './images/brochure2019.pdf';


const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div class="top_div">
            <div>
                <div id="logo" style={{ cursor: "pointer" }}><img src="images/pics.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
            </div>
            <Navbar />
        </div>
        </>)
    }
        else{
            return <Navbar />
        }
    }
const Mritika1 = () => {

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
                        <div id="logo " style={{ cursor: "pointer" }}><img class="nav-3" src="images/mritika_logo.png" style={{ height: "65px", width: "65px", background: "100% 100%", borderRadius: "0px", padding: "0px" ,marginLeft:"-180px",marginTop:"-1rem"}} /></div>
                    </div>
                    <h3 class="nav-1" style={{marginRight:"-48rem"}}>InCerS NITR</h3>
                    <a class="navbar-brand nav-2" href="/">
                        <button class="btn btn-primary nav-2" style={{marginRight:"-30rem"}}>Home</button>
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


            <header class="masthead1 text-white overlay-1 overlay-1-19">
                <div class="overlay" style={{height:"43rem"}}></div>
                <div class="container slider-top-text">
                    <div class="row">
                        <div class="col-md-12 text-center text-center-19">
                            <h3 style={{marginTop:"5rem",marginBottom:"2rem"}} class="my-heading">WELCOME TO MRIT<span class="bg-main">TIKA</span></h3>
                            <p class="myp-slider text-center" >Where ceramists unite and become better together</p>
                            <p class="myp text-center" >SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p>
                            
                            <div style={{display:"flex",flexDirection:"column",marginTop:"6rem",justifyContent:"center",alignItems:"center"}}>
                                <a style={{marginBottom:"10px"}} class="btn btn-primary btn-join" href="#">JOIN THE COMMUNITY</a>
                                {/* <a style={{marginTop:"10px"}} class="btn btn-primary btn-join" href="#">BROCHURE 2019</a> */}
                                <a style={{marginTop:"10px"}} href={Brochure} download >
                                    <button type="button" class="btn btn-primary btn-join" >Brochure 2019</button>
                                </a>
                            </div>

                        </div>
                        <div class="col-md-12 text-center mt-5">
                            <div class="scroll-down">
                                <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* new change for about */}
                <div id='incer-about' style={{marginTop:"5rem",paddingLeft:"5rem",paddingRight:"5rem",marginBottom:"5rem"}}>
                    {/* <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem",fontWeight:"bold"}}>ABOUT</h3> */}

                    <div class="about-2023 about-2023-19" style={{marginBottom:"2rem"}}>
                        <h2 id='about-head-19' style={{marginLeft:"-1.5rem"}}>INCERS NITR</h2>
                        
                        <a id='about-btn-19' href="/mritika">
                            <button class="btn btn-primary btn-19" style={{marginRight:"0rem",height:"4.8rem"}}><h4>Visit Upcoming <br/>Mrittika 2.0</h4></button>
                        </a>
                    </div>

                    <p>The Indian Ceramic Society (InCerS) opened up its student chapter for the first time at NIT
                        Rourkela in the year 2017 with the aim to ‘calcinate' the ever-evolving raw interest in materials
                        and their properties and has been awarded for the Best Student's Chapter for its outstanding
                        performance in the AY 21-22.
                        The InCerS chapter of NIT Rourkela organized the 1st National Conference (MRITTIKA 1.0) in
                        the year 2019, which comprised of Quiz competition, Model presentation and Paper
                        presentation. The Session was graced by Industrial delegates, scientists and eminent
                        personalities from TRL Krosaki, Kerneos aluminate, Aditya Birla Insulators, Tata steel, NALCO,
                        CGCRI and many more. The session was a confluence of young minds, Ceramic advancements
                        and industrial big shots. The brainstorming events brought up hefty goodies for exceptionally
                        performing candidates.</p>

                </div>



            <section class="testimonials mybg-events1 testimonials-19">

                <div class="container">

                    <div class="row">
                        
                        <div class="col-md-12 wow fadeInUp fadeInUp-19">
                            <h3 class="title-heading text-center">MRITTIKA EVENTS 2019</h3>
                            <p class="myp text-center">The Indian Ceramic Society student chapter of NITR conducted a two day conference, Mrittika  2019 from 06 April 2019 to 07 April 2019.

                                It involves various sessions starting from paper presentations  to quizzes and lectures on various domains of ceramics.It was attended by some of the industry’s top names, including-
                                NALCO,
                                Tata Steel,
                                TRL krosaki,
                                Aditya  Birla Group,
                                Kerneos  aluminate,
                                CGCRI</p>
                        </div>
                    </div>
                    <div class="row wow slideInLeft" data-wow-duration="3s">
                        <div class="col-md-4 mb-3">
                            <div class="big-img2">
                                <img src="images/20190407_185026.jpg" class="img-fluid" />
                            </div>

                        </div>
                        <div class="col-md-8">
                            <div class="inner-section">
                                <div class="my-grid">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4 mb-3">

                                            <img src="images/20190406_115551.jpg" class="img-fluid" />

                                        </div>
                                        <div class="col-sm-6 col-md-8 mb-3 ">

                                            <img src="images/20190406_122141.jpg" class="img-fluid" />

                                        </div>

                                        <div class="col-md-8 mb-3">
                                            <div class="text-block">
                                                <h5 class="events-heading">Participating Companies and industry experts</h5>
                                                <p class="myp-font">NALCO
                                                    Tata Steel,
                                                    TRL krosaki,
                                                    Aditya  Birla Group,
                                                    Kerneos  aluminate,
                                                    CGCRI. Also

                                                    there was a common platform for students , scientists, and industrialists to contribute to the development of ceramics.</p>
                                            </div>
                                        </div>
                                        <div class=" col-md-4 ">

                                            <img src="images/20190407_152923.jpg" class="img-fluid" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="testimonials bg-light" id="marketplace">
                <div class="container ">
                    <div class="row sp-1 sp-1-19">
                        <div class="col-md-8 mx-auto wow fadeInUp">
                            <h3 class="text-center font-weight-bold">MRITTIKA<span class="bg-main"> SPONSERS 2019</span></h3>
                            <p class=" text-center">To become a better you, remember to be grateful to people who have contributed to making you who you are today"</p>
                        </div>
                    </div>
                    {/* <div class="sp-1" style={{display:"flex",justifyContent:"center",alignItems:"center",justifyContent:"space-between",marginLeft:"140px",marginRight:"170px"}}>
                        <h4 style={{fontWeight:"bold",color:"green"}} class="underline">PLATINIUM SPONSER</h4>
                        <h4 style={{fontWeight:"bold",color:"green"}} class="underline">SILVER SPONSER</h4>
                    </div> */}
                    {/* <div class="row sp-1"> */}
                        <h4 style={{display:"flex",justifyContent:"center", fontWeight:"bold",color:"green"}} >PLATINIUM SPONSER</h4>
                        <div class="spn-1">
                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp bounceInUp-19" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S3.jpeg" />
                                    <div class="card-block">

                                        {/* <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4> */}

                                        <div class="card-text">
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p> */}
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        {/* <small>$ 170</small> */}
                                        <a href="https://www.trlkrosaki.com/" class="pull-right">More Info</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp bounceInUp-19" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262 .h-262-19" src="images/S2.jpeg" />
                                    <div class="card-block">

                                        {/* <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4> */}

                                        <div class="card-text">
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p> */}
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        {/* <small>$ 170</small> */}
                                        <a href="https://www.imerys.com/" class="pull-right">More Info</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div style={{width:"0rem"}}>
                            <div class="vertical_dotted_line "></div>
                        </div > */}
                        <h4 style={{display:"flex",justifyContent:"center",fontWeight:"bold",color:"green",marginTop:"1.5rem"}}>SILVER SPONSER</h4>
                        <div class="spn-1">
                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp bounceInUp-19" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262 h-262-19" src="images/S1.jpeg" />
                                    <div class="card-block">

                                        {/* <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4> */}

                                        <div class="card-text">
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p> */}
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        {/* <small>$ 170</small> */}
                                        <a href="https://www.adityabirla.com/" class="pull-right">More Info</a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp bounceInUp-19" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S4.jpeg" />
                                    <div class="card-block">

                                        {/* <h4 class="card-title ">Lorem Ipsum Dolor Site Amet</h4> */}

                                        <div class="card-text ">
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p> */}
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        {/* <small>$ 170</small> */}
                                        <a href="https://www.elkem.com/" class="pull-right">More Info</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>



            <section class="testimonials text-center mybg-music">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow fadeInUp fadeInUp-19">
                            <h3 class="title-heading text-center font-weight-bold">MRITTIKA GALLERY 2019</h3>
                            {/* <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G1.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G2.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G3.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G4.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G5.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G6.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G7.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G8.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G9.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G10.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G11.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/G12.jpg" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            

            {/* Technical session */}

            <div class="guest"> 

                <div class="guest-cards" >
                    <h3 class="text-center font-weight-bold"  style={{marginTop:"5rem",marginBottom:"3rem"}}>TECHNICAL<span class="bg-main"> SESSION</span></h3>
                    {/* <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>Plenary Lectures/Invited Lectures </h5> */}
                    <div class="col-md-6 card-effect " style={{}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design competition-design-19 competition-design-19-a" style={{height:"25rem ",width:"62rem",marginLeft:"-8rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                
                                {/* <strong class="d-inline-block mb-2 text-primary">Ceramic</strong> */}
                                <br />
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Plenary Lectures</a>
                                </h4>
                                <br />
                                <p>
                                    Industrial delegates are invited for the same to share their words of
                                    wisdom on the current affairs related to their firm or to the concerned
                                    agenda the firm is working on: with a base solely contemplating on
                                    ceramic industry within a window of around half an hour. Lectures
                                    proposed for the aforementioned issue is on the basis of accountable
                                    registrations. Owing to the time precincts, the earliest of the registered
                                    delegates shall be entertained.
                                </p>

                                {/* <h4 class="mb-0">
                                    <a class="text-dark" href="#">Contributory Lectures </a>
                                </h4>
                                <br />
                                <p>
                                    Industry delegates/Academic Experts who wish to present their ongoing work
                                    /Research paper are also welcome to contribute to the conference with a base
                                    solely contemplating on the ceramic industry within a window of around half an
                                    hour. Lectures proposed for the aforementioned issue are based on accountable
                                    registrations.
                                </p> */}

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Panel discussions</a>
                                </h4>
                                <br />
                                <p>
                                    Industrial delegates are also cordially welcomed to be a part of the panel
                                    within a two-hour window per discussion in a conference of tentatively 10
                                    panellists (liable to changes depending on registrations). The agenda
                                    might include topics from both basic (refractory, glass etc.) and advanced
                                    ceramics (nano ceramics etc.) that inculcates on going agendas the firm
                                    might be working on.
                                </p>

                                {/* <h4 class="mb-0">
                                    <a class="text-dark" href="#">Poster Presentations(open to all categories)</a>
                                </h4>
                                <br />
                                <p>
                                    Industry Delegates/Academic Experts/Research Scholars/Students can present
                                    their research/project work in the form of a poster. The presenter can explain to
                                    the audience their topic and based on the satisfaction level of the audience, cash
                                    prizes/goodies will be provided.
                                </p> */}

                                
                            </div>
                            {/* <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" ,marginTop:"5.6rem"}} /> */}
                        </div>
                    </div>

                </div>
            </div>

            {/* student session */}

            <div class="guest"> 

                <div class="guest-cards" >
                    <h3 class="text-center font-weight-bold student-session-19"  style={{marginTop:"5rem",marginBottom:"3rem"}}>STUDENT'S<span class="bg-main"> SESSION</span></h3>
                    {/* <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>Plenary Lectures/Invited Lectures </h5> */}
                    <div class="col-md-6 card-effect " style={{}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design competition-design-19 competition-design-19-b" style={{height:"30rem ",width:"62rem",marginLeft:"-8rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                
                                {/* <strong class="d-inline-block mb-2 text-primary">Ceramic</strong> */}
                                <br />
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Paper/Poster Presentation</a>
                                </h4>
                                <br />
                                <p>
                                    Students (B. Tech and M. Tech only) from all across the country are
                                    invited to present their paper/poster/presentation related to ceramic
                                    science/engineering. A time window of 10 minutes will be given to present
                                    the same and will be judged by a panel of experts. Cash prizes worth
                                    Rupees 8,000 will be provided to top three entries. Interested students can
                                    register by sending the summary of the work on the student chapter’s
                                    official email id incersnitr@gmail.com
                                </p>

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Model/Product Presentation</a>
                                </h4>
                                <br />
                                <p>
                                    Teams and individuals can present their ceramic based models during the
                                    event. Model or product may be in working or static condition. Originality
                                    should be maintained and kept in mind while developing models. Prizes
                                    worth thirteen thousand rupees will be awarded to top thirteen models or
                                    products.
                                </p>

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Quiz</a>
                                </h4>
                                <br />
                                <p>
                                    Ceramic science/engineering based technical questions will be asked,
                                    maximum of five members can form a team and we will permit at most 5
                                    teams. Early bird registration is advised. Prizes worth eight thousand
                                    rupees will be awarded to the top two teams.
                                </p>

                                {/* <h4 class="mb-0">
                                    <a class="text-dark" href="#">Poster Presentations(open to all categories)</a>
                                </h4>
                                <br />
                                <p>
                                    Industry Delegates/Academic Experts/Research Scholars/Students can present
                                    their research/project work in the form of a poster. The presenter can explain to
                                    the audience their topic and based on the satisfaction level of the audience, cash
                                    prizes/goodies will be provided.
                                </p> */}

                                
                            </div>
                            {/* <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" ,marginTop:"5.6rem"}} /> */}
                        </div>
                    </div>

                </div>
            </div>

            {/* for brochure of 2019 */}
            
            <div style={{height:"4rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <a style={{marginTop:"10px"}} href={Brochure} download >
                    <button type="button" class="btn btn-primary btn-join" >Brochure 2019</button>
                </a>
            </div>
            

            <div class="social_media_part">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        {/* <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Siddhartha </span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti </span>
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


        </div></>);
}

export default Mritika1