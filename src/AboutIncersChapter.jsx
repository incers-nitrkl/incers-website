import React from 'react';
import Navbar from './Navbar2';
import Brochure from './images/brochure2019.pdf';


const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div class="top_div">
            <div>
                <div id="logo" style={{ cursor: "pointer" }}><img src="images/incers-chapter-logo.png" style={{ height: "58px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
            </div>
            <Navbar />
        </div>
        </>)
    }
        else{
            return <Navbar />
        }
    }
const AboutIncersChapter = () => {

    return (<>

        <div className='main_div'>
          {/* <h3>hello</h3> */}
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
                    <img class="mrittika-img-img" src="images/MRITTIKA2.0-bg.png" alt="suraj" style={{height:"565px",width:"100%"}}/>
                </div>
                <div class="container slider-top-text">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            {/* <h3 class="my-heading">WELCOME TO MRIT<span class="bg-main">TIKA</span></h3> */}
                            {/* <p class="myp-slider text-center">Where ceramists unite and become better together</p>
                            <p class="myp text-center">SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p> */}
                            <a class="btn btn-primary btn-join down" href="#" style={{marginTop:"12rem"}}>JOIN THE COMMUNITY</a>
                            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrgZlgyceJlhRZhBOYVHXJXWGV-V6NZbli0DKgS-E6ARCr_A/viewform" title="Go to Registration Form" >
                                <button type="button" class="btn btn-primary down1" style={{marginTop:"20rem",marginBottom:"1rem",width:"13rem",marginLeft:"-12.4rem",fontWeight:"bold",fontSize:"1.2rem"}}>Register Here</button>
                            </a>
                            
                            <br />
                            <a href="https://drive.google.com/file/d/1K9asBc6asHcyO1liHbnLvg-IGLVpE1Rb/view?usp=share_link" title="Go to Brochure" style={{fontWeight:"bold",fontSize:"1.2rem"}}>Go to Brochure</a> */}
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

          {/* <div class="mritika-about">
              <div class="about-2023" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                <h1 class="top" style={{marginLeft:"1rem"}}>INCERS NITR</h1>
                
                <a  href="/mritika1">
                    <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Visit Mrittika 2019</h4></button>
                </a>
              </div>
              <div class="about-content">
                <p>The Indian Ceramic Society (InCerS) opened up its student chapter for the first time at NIT
                    Rourkela in the year 2017 with the aim to ‘calcinate' the ever-evolving raw interest in materials
                    and their properties and has been awarded for the Best Student's Chapter for its outstanding
                    performance in the AY 21-22.
                </p>
              </div>
                  
          </div>    */}

        <div  class="student-members st-member ">
            <a href="https://docs.google.com/spreadsheets/d/1sgN1HQ8HXODLbOcXS6YR5HDRbOcIELPi/edit?usp=share_link&ouid=114663105164561446283&rtpof=true&sd=true" title="Go to Our Student Members List">
                <button type="button" class="btn btn-primary incers-sm" style={{width:"15rem",fontSize:"1.2rem"}}>Our Student Members</button>
            </a>

                
        </div>


        {/* GUEST SECTION */}
        <div class="guest incers-guest">
            {/* <h3 class="text-center font-weight-bold" >GUEST<span class="bg-main"> SECTION</span></h3> */}

            <div class="about-2023 ">
                    <h3 class="gt-about incers-about" style={{marginLeft:"-62rem",paddingRight:"12px"}}>ABOUT</h3>
                    {/* <a  href="/">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Mrittika 2019</h4></button>
                    </a> */}
            </div>
            <div class="about-content " style={{textAlign:"justify" ,paddingLeft:"14rem"}}>
                <p style={{paddingRight:"8px"}}>The Indian Ceramic Society (InCerS) incubated the student chapter
                    at the department of ceramic engineering, NIT Rourkela in the year
                    2017 with the aim to 'calcinate' the ever-evolving raw interest in
                    materials and their properties, and its active members has been
                    bestowed with the best student's chapter for its outstanding
                    contribution during the 86th Annual General Meeting held at Indian
                    Institute of Technology, Varanasi, 8-9 December 2022. The InCerS
                    student chapter at NIT Rourkela has successfully organized the 1st
                    National Conference (MRITTIKA 1.0) in the year 2019, comprising
                    multiple events, including quiz competitions, model presentations,
                    and paper presentation. The session was graced by industry
                    professionals, scientists and eminent personalities from TRL
                    Krosaki, Kerneos aluminate, Aditya Birla Insulators, Tata steel,
                    NALCO, CGCRI and many more. The brainstorming sessions
                    organized by students brought up hefty goodies for exceptionally
                    performing candidates.
                </p>
                <p style={{paddingRight:"8px"}}>National Institute of Technology (NIT), Rourkela was founded as
                    Regional Engineering College, Rourkela in 1961. It is a prestigious
                    Institute with a reputation for excellence at both undergraduate
                    and postgraduate levels, fostering the spirit of national integration
                    among the students, a close interaction with industry and a strong
                    emphasis on research, both basic and applied. It's consistently
                    ranked within the TOP 20 engineering institutes for 5 consecutive
                    years as per MOE's NIRF, Govt. of India and has retained a good
                    world ranking among its peer Institutes. The city of Rourkela is a
                    bustling industrial town, cosmopolitan by nature and is well
                    connected to all parts of the country by road, rail & air. It is en
                    route the Howrah-Mumbai main line of the South-Eastern Railway.
                    Nesting amidst greenery on all sides. NIT campus is approximately
                    7km from Rourkela railway station. The nearest airports are
                    Rourkela, Jharsuguda, Ranchi, Kolkata and Bhubaneswar.
                </p>
            </div>
            


            <div class="guest-cards incers-gl">
                <h3 class="text-center font-weight-bold gl" >GUEST<span class="bg-main"> LECTURE </span></h3>
                <h5 class="gl-1" style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-1</h5>
                <div class="col-md-6 card-effect box-1" style={{}}>
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-1">
                        <div class="card-body d-flex flex-column align-items-start box-1">
                            <strong class="d-inline-block mb-2 text-primary">Industry Academia Interaction Session</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Dr. Birendra Prasad</a>
                            </h6>
                            <br />
                            {/* <div class="mb-1 text-muted small">Aug 30</div> */}
                            <p class="card-text mb-auto" >Indian Ceramic Society, Student Chapter NIT Rourkela  conducted an informative symposium. This offline session highlighted a 
                            plethora of information on the Refractory product manufacturing- The current scenario. The chief guest , Mr. Birendra Prasad ,plant head at Dalmia- OCL 
                            (Rajgangpur unit) & Head of Dalmia research Institute enunciated about the aforementioned topic.</p>
                            <p class="card-text mb-auto">Insights-Refractory products are materials that can withstand high temperatures, corrosion, and erosion. They are used in 
                            industries such as steel, cement, glass, and petrochemicals, where high temperatures and harsh environments are common. Advanced technologies such as 
                            computer-aided design, automated mixing, and firing control systems are used to optimize production efficiency and product quality.</p>
                            {/* <a class="btn btn-outline-primary btn-sm" role="button" href="https://www.instagram.com/p/CiNRhW1PmE8/">Continue watching</a> */}
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" ,marginTop:"5.6rem"}} />
                    </div>
                </div>

                <h5 class="gl-2" style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-2</h5>    
                <div class="col-md-6 card-effect box-1" style={{marginBottom:"3rem"}}>
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-1 box-1-1">
                        <div class="card-body d-flex flex-column align-items-start box-1">
                            <strong class="d-inline-block mb-2 text-primary">Industry Academia Interaction Session</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Dr. Govind Pahari</a>
                            </h6>
                            <br />
                            {/* <div class="mb-1 text-muted small">Aug 30</div> */}
                            <p class="card-text mb-auto">The Department of Ceramic Engineering and InCerS (Indian Ceramic Society), NIT Rourkela Chapter 
                            organized its 2nd "Invited Guest lecture" on "High Voltage Porcelain Insulators manufacturing technique and various 
                            testing processes" on 12th of November, 2022 (3:30 PM onwards) during the INNOVISION, largest techno-management fest 
                            of Eastern India organized by NIT Rourkela.</p>
                            <p class="card-text mb-auto">The invited lecture was graced by our esteemed Speaker- Dr. Gobinda Pahari, Asst. Vice President, Functional Head Operations, Aditya 
                            Birla Insulators. The idea of conducting the guest lecture is to make students aware of the working and demonstration of several industrial processes.</p>
                            {/* <a class="btn btn-outline-primary btn-sm" role="button" href="https://www.instagram.com/p/ClMA7K1vNi7/">Continue watching</a> */}
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GG-11.png" style={{ width: "200px", height: "250px",marginTop:"5.6rem" }} />
                    </div>
                </div>
                
                
            </div>
        </div>
                                
                                

            {/* <section class="testimonials text-center mybg-music">
                <div class="container mtg">
                    <div class="row">
                        <div class="col-md-12 wow fadeInUp">
                            
                            <h3 class="text-center font-weight-bold" style={{color:"white"}}>MRITIKA<span class="bg-main"> GALLERY 2023</span></h3>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/comming-soon.jpg" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}


            {/* Premritika events */}
            
            <div class="guest guest-new guest-new-11"> 

                {/* <div class="guest-cards" style={{marginTop:"3rem"}}>
                    <h3 class="text-center font-weight-bold" >PRE-MRITIKA<span class="bg-main"> EVENTS </span></h3>
                    
                    <div class="col-md-6 card-effect box-2 " style={{}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-2">
                            <div class="card-body d-flex flex-column align-items-start box-2">
                                <br />
                                
                                <h4 class="mb-0" >
                                    <a class="text-dark" href="#">BOX CRICKET</a>
                                </h4>
                                <br />
                                <p>"Jo khel dil ko itna bhaye usko dekhe bina kese raha jaye" <br /><br />
                                    MRITTIKA 2.0 brings you one of those 
                                    exciting game which is loved by everyone and played by anyone, Cricket in the small pitch played 
                                    by less players but watched by much people "Box cricket". <br /><br />
                                    Gear up everyone to see the short format 
                                    of cricket with boys and girls in a combined team of 7 players each, a huge crowd of NITR to watch 
                                    out you so make your preparation at a fantastic level so that you can win awards and goodies worth 
                                    1k  and felicitation ceremony for the players also so that you can have a memorable evening to have 
                                    fun and test of your sportsmanship too.</p> 
                                    <br />
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" ,marginTop:"5.6rem"}} />
                        </div>
                    </div>

                    
                    <div class="col-md-6 card-effect box-2" style={{marginBottom:"3rem"}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-2">
                            <div class="card-body d-flex flex-column align-items-start box-2">
                                <br />
                                
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">BADMINTON </a>
                                </h4>
                                <br />
                                <p>"Challenge yourself and others in the ultimate badminton battle!" <br /> <br />
                                    Come and join us for a day of fun as Mrittika’23 brings you the sport of badminton 
                                    where you will be competing in singles. The competition will start with elimination 
                                    rounds where only the best players will advance to the finals. At the end of the event,
                                    winners will be awarded with rewards and goodies worth ₹1k. <br /><br />
                                    So, don’t miss out on the electric atmosphere as players battle it out for victory.</p>
                                    <br /><br />
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GG-11.png" style={{ width: "200px", height: "250px",marginTop:"5.6rem" }} />
                        </div>
                    </div>
                </div>
            </div>
 */}

            {/* Theme  */}
            {/* <div class="theme box-5 card1" style={{backgroundColor:"#F3F3EA",marginLeft:"16rem",marginRight:"16rem",paddingTop:"3rem",paddingBottom:"0.5rem"}}>
                <h3 class="text-center font-weight-bold" >THEME OF THE<span class="bg-main"> CONFERENCE </span></h3>
                <div class="theme " style={{paddingLeft:"5rem",marginTop:"2rem",marginBottom:"5rem"}}>
                    <ol>
                        <li>
                            Current status and Future Trends in the Manufacturing of Refractories.
                        </li>
                        <li>
                            Diversified application of Refractories in Ferrous and Non-Ferrous Industries.
                        </li>
                        <li>
                            Advancements in Glass Science and Technology.
                        </li>
                        <li>
                            Sensors and Actuators
                        </li>
                        <li>
                            Ceramic Membranes and Porous Materials for desalination, water treatment &
                            purification for industrial waste disposal. 
                        </li>
                        <li>
                            BioCeramics
                        </li>
                        <li>
                            Ceramics for energy applications (Batteries, Supercapacitors, SOFC,
                            Thermoelectric, Electrocatalyst, Photocatalysts, solar cell)
                        </li>
                        <li>
                            Industry 4.0 & Lean Manufacturing concept in Ceramic Industry
                        </li>
                        <li>
                            Reduction of Carbon Footprint and emergence of green manufacturing
                        </li>
                        <li>
                            Recent Advancements in whiteware Industries
                        </li>
                        <li>
                            Magnetics and Dielectric Ceramics
                        </li>
                        <li>
                            Ceramics for building materials
                        </li>
                        <li>
                            Additive Manufacturing in Ceramics
                        </li>
                    </ol>
                </div>
            </div>
             */}

            {/* Technical session */}

            {/* <div class="guest guest-new-1"> 

                <div class="guest-cards" >
                    <h3 class="text-center font-weight-bold guest-new-2"  style={{marginTop:"5rem",marginBottom:"3rem"}}>TECHNICAL<span class="bg-main"> SESSION</span></h3>
                   
                    <div class="col-md-6 card-effect box-3 " style={{textAlign:"justify" }}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design card1 box-3 " style={{height:"41rem ",width:"62rem",marginLeft:"-8rem"}}>
                            <div class="card-body d-flex flex-column align-items-start box-3">
                                
                                
                                <br />
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Plenary Lectures/Invited Lectures </a>
                                </h4>
                                <br />
                                <p>
                                    Industry delegates/Academic Experts are invited for the same to share their words
                                    of wisdom on the current affairs related to their ongoing work/Research: with a
                                    base solely contemplating on the ceramic industry within a window of around half
                                    an hour. Lectures proposed for the aforementioned issue are based on accountable
                                    registrations.
                                </p>

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Contributory Lectures </a>
                                </h4>
                                <br />
                                <p>
                                    Industry delegates/Academic Experts who wish to present their ongoing work
                                    /Research paper are also welcome to contribute to the conference with a base
                                    solely contemplating on the ceramic industry within a window of around half an
                                    hour. Lectures proposed for the aforementioned issue are based on accountable
                                    registrations.
                                </p>

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Panel discussions</a>
                                </h4>
                                <br />
                                <p>
                                    Industry delegates/Academic Experts are also cordially welcomed to be a part of
                                    the panel within a two-hour window per discussion in a conference of tentatively 10
                                    panellists (liable to changes depending on registrations). The agenda might include
                                    topics from both basic (refractory, glass etc.) and advanced ceramics (nanoceramics
                                    etc.) that inculcate ongoing agenda the firm might be working on.
                                </p>

                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">Poster Presentations(open to all categories)</a>
                                </h4>
                                <br />
                                <p>
                                    Industry Delegates/Academic Experts/Research Scholars/Students can present
                                    their research/project work in the form of a poster. The presenter can explain to
                                    the audience their topic and based on the satisfaction level of the audience, cash
                                    prizes/goodies will be provided.
                                </p>

                                
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div> */}



            {/* Fun eventa */}

            {/* <div class="guest guest-new-1"> 

                <div class="guest-cards" style={{marginTop:"3rem"}}>
                    <h3 class="text-center font-weight-bold" >FUN<span class="bg-main"> EVENTS </span></h3>
                    
                    <div class="col-md-6 card-effect box-4" style={{}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-4">
                            <div class="card-body d-flex flex-column align-items-start box-4">
                                
                               
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">PowerPoint Karaoke</a>
                                </h4>
                                <br />
                                <p>A fun PowerPoint Karaoke event to challenge both the author of the slide and the presenter to 
                                    improve their communication skills. Submit or Present a Slide (or Both!)</p>
                                <p> &emsp; Create a PowerPoint side with a contribution to your research or a materials science-related topic. <br />
                                    &emsp;Don’t be too serious! Popular science topics aren’t the point; we’re looking for the funniest story or best &emsp; design! <br />
                                    &emsp;Topics can range from your actual research to something silly, such as the use of rubber ducks. Be sure &emsp;to keep it simple <br />
                                    &emsp;so that anyone can present, and keep it clean—inappropriate content will not be accepted.</p>
                                <p>During the event, presenters will be assigned a random slide out of the pool of the submitted slides by the authors. Presenters will have five minutes to prepare a two-minute (maximum) presentation.
                                    Winners will be selected by anonymous audience voting. Goodies will be awarded to the best three authors and presenters.</p><br />
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                            </div>
                            
                        </div>
                    </div>

                   
                    <div class="col-md-6 card-effect box-1" style={{marginBottom:"3rem"}}>
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1 box-1">
                            <div class="card-body d-flex flex-column align-items-start box-1">
                                <br />
                                
                                <h4 class="mb-0">
                                    <a class="text-dark" href="#">QUIZ (Mega Hunt Game)</a>
                                </h4>
                                <br />
                                <p>The quiz will involve some sort of gameplay where there will be different levels and each
                                    level will first begin with a storyline which will be conveyed to the participants through
                                    an audio-visual clip prepared by us followed by a series of situational-based questions.
                                    The decision whether you proceed to the next level will be determined by your
                                    performance in the former level. So basically, every story will have a situation of let's say
                                    a combat or a clash where winning or losing will ultimately depend upon their exposure
                                    to external factors like extreme temperature, acidic/basic environment, radiation etc.
                                    The winners will be judged on how accurately they chose, which will decide finally
                                    whether they survived all the levels or were eliminated in any particular level.</p>
                                    <br />
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}



            <div class="brochure19">
                {/* <a href={Brochure} download >
                    <button type="button" class="btn btn-primary" >Brochure 2019</button>
                </a> */}
                
                <a  href="/mritika">
                        <button class="btn btn-primary" style={{marginTop:"0rem"}}>Visit Mrittika 2023</button>
                </a>
            </div>



            <div class="social_media_part footer-23-rcb">
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

    </div>
</>);
}

export default AboutIncersChapter
