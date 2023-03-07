import React from 'react';
import Navbar from './Navbar';
import Brochure from './images/brochure2019.pdf';


const Events3 = () => {

    return (<>

        <div className='main_div'>
            {/* <div class="top_div">
                    <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                    </div>
                    <Navbar />
                </div> */}

            <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                <div class="container">
                    <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/mritika_logo.png" style={{ height: "65px", width: "65px", background: "100% 100%", borderRadius: "0px", padding: "0px" ,marginLeft:"-180px",marginTop:"-1rem"}} /></div>
                    </div>
                    <h3 style={{marginRight:"-48rem"}}>InCerS NITR</h3>
                    <a class="navbar-brand" href="/">
                        <button class="btn btn-primary" style={{marginRight:"-30rem"}}>Home</button>
                    </a>
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
                            <a class="btn btn-primary btn-join" href="#" style={{marginTop:"12rem"}}>JOIN THE COMMUNITY</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrgZlgyceJlhRZhBOYVHXJXWGV-V6NZbli0DKgS-E6ARCr_A/viewform" title="Go to Registration Form" >
                                <button type="button" class="btn btn-primary" style={{marginTop:"20rem",marginBottom:"1rem",width:"13rem",marginLeft:"-12.4rem",fontWeight:"bold",fontSize:"1.2rem"}}>Register Here</button>
                            </a>
                            {/* <p>suraj</p> */}
                            <br />
                            <a href="https://docs.google.com/document/d/1T6DjZZsHYflBi5Wr3VZnujt5EzYUa3KiZaqeuRzwj7E/edit?usp=sharing" title="Go to Brochure" style={{fontWeight:"bold",fontSize:"1.2rem"}}>Go to Brochure</a>
                        </div>
                        
                        <div class="col-md-12 text-center mt-5">
                            <div class="scroll-down" >
                                <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  New comments */}

            {/* <section class="testimonials" id="gobottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="big-img">
                                <img src="images/CR.jpg" class="img-fluid" />
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="inner-section wow fadeInUp">
                                <h3>Follow the <span class="bg-main">Next Event</span></h3>
                                <br />
                                <p class="text-justify">The Indian Ceramic Society student chapter of NITR conducted a two day conference, Mrittika  2019 from 06 April 2019 to 07 April 2019.

                                    It involves various sessions starting from paper presentations  to quizzes and lectures on various domains of ceramics.</p>

                                <div class="linear-grid">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s" >
                                            <img src="images/NITR.webp" class="img-thumbnail" />
                                        </div>
                                        <div class=" col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="images/G8.jpeg" class="img-thumbnail" />
                                        </div>
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="images/G4.jpeg" class="img-thumbnail" />
                                        </div>
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>  */}


            {/* New add */}

            <div class="mritika-about">
                <div class="about-2023" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                    <h1 style={{marginLeft:"-4rem"}}>ABOUT</h1>
                    
                    <a  href="/mritika1">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Visit Mrittika 2019</h4></button>
                    </a>
                </div>
                <div class="about-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit eius nihil 
                        nesciunt molestiae earum odit quam laborum. Vero provident expedita laudantium aliquid accusamus 
                        tempore magni in! At, recusandae a voluptatum molestiae dicta officiis voluptates nulla qui consequatur
                        incidunt distinctio accusamus, doloribus facere animi nobis. Vero omnis repellat harum doloribus unde 
                        similique fugit porro ut in quia. Aliquam fugit, fuga iusto vitae dicta aspernatur mollitia beatae
                        obcaecati dignissimos minus possimus, adipisci repellendus accusamus ex. Iste at eos perferendis 
                        harum adipisci?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit eius nihil 
                        nesciunt molestiae earum odit quam laborum. Vero provident expedita laudantium aliquid accusamus 
                        tempore magni in! At, recusandae a voluptatum molestiae dicta officiis voluptates nulla qui consequatur
                        incidunt distinctio accusamus, doloribus facere animi nobis. Vero omnis repellat harum doloribus unde 
                        similique fugit porro ut in quia. Aliquam fugit, fuga iusto vitae dicta aspernatur mollitia beatae
                        obcaecati dignissimos minus possimus, adipisci repellendus accusamus ex. Iste at eos perferendis 
                        harum adipisci?
                    </p>
                </div>
                {/* <div class="faculty-advisor">
                    <p>cards</p>
                </div> */}
                <div class="executive-members">
                    <section class="testimonials text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp"style={{marginBottom:"2rem"}}>
                                    <h3 class="text-center font-weight-bold">EXECUTIVE<span class="bg-main">MEMBERS</span></h3>
                                </div>
                            </div>

                            {/* Executive Cards */}
                            <div class="row">

                                <div  style={{ height:"230px" ,width:"200px",marginLeft:"3rem"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height: "150px" ,width:"120px", marginLeft:"3rem"}} src="images/DP.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Deepsikha Brahma</h6>
                                            <h6 style={{color:"green"}}><strong>Chairperson</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height: "150px" ,width:"120px", marginLeft:"3rem"}} src="images/PM.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Partha Mishra</h6>
                                            <h6 style={{color:"green"}}><strong>Vice-Chairperson</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/RD.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Rittwik Devdatta Das</h6>
                                            <h6 style={{color:"green"}}><strong>Secretory</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/AS.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Aashya Sanjay</h6>
                                            <h6 style={{color:"green"}}><strong>Joint Secretory</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/PKS.jpeg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Pratyush Kundu</h6>
                                            <h6 style={{color:"green"}}><strong>Treasurer</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px", marginTop:"1rem", marginLeft:"16rem"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/JM.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Jyotishman Mohanty</h6>
                                            <h6 style={{color:"green"}}><strong>BR 2nd Year</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px",marginTop:"1rem"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/SK.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Summit Kumar Orma</h6>
                                            <h6 style={{color:"green"}}><strong>BR 3rd Year</strong></h6>

                                        </div> 
                                    </div>
                                </div>

                                <div  style={{ height:"230px" ,width:"200px",marginTop:"1rem"}}  data-wow-duration="1.4s">
                                    <div class="card" style={{ height: "230px" ,width:"200px"}}>
                                        <img class="card-img-top" style={{ height:"150px" ,width:"120px", marginLeft:"3rem"}} src="images/U.jpg" />
                                        <div class="card-block">

                                            <h6 class="card-title text-center">Uday</h6>
                                            <h6 style={{color:"green"}}><strong>BR 4th Year</strong></h6>

                                        </div> 
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </section>
                </div>
                

                <div class="student-members">
                <a href="https://docs.google.com/spreadsheets/d/1sgN1HQ8HXODLbOcXS6YR5HDRbOcIELPi/edit?usp=share_link&ouid=114663105164561446283&rtpof=true&sd=true" title="Go to Our Student Members List">
                    <button type="button" class="btn btn-primary" style={{width:"15rem",fontSize:"1.2rem"}}>Our Student Members</button>
                </a>

                
                </div>
            </div>
            

            {/* new sponsers 2023 */}
            <div>
            <section class="testimonials bg-light" id="marketplace">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto wow fadeInUp">
                            <h3 class="text-center font-weight-bold">MRITTIKA<span class="bg-main"> SPONSERS 2023</span> </h3>
                            <p class=" text-center">To become a better you, remember to be grateful to people who have contributed to making you who you are today"</p>
                        </div>
                    </div>


                    <div class="row sponsers">
                        <h3 style={{marginLeft:"-55rem"}} class="text-center font-weight-bold">GOLD<span class="bg-main"> SPONSERS</span></h3>
                        <div class="sponsers1"> 
                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S1.jpeg" />
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S2.jpeg" />
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
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

                         {/* Add new   silver                 */}

                         <div class="col-md-8 mx-auto wow fadeInUp"style={{marginBottom:"1rem", marginTop:"3rem"}}>
                            <h3 style={{marginLeft:"-55rem"}} class="text-center font-weight-bold">SILVER<span class="bg-main"> SPONSERS</span></h3>
                        </div>
                        <div class="sponsers1"> 
                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S1.jpeg" />
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S2.jpeg" />
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
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

                            <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
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

                    </div>

                </div>
            </section>
            </div>

            {/* <section class="testimonials mybg-events1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow fadeInUp">
                            <h3 class="title-heading text-center" style={{color:"#3DBE29",fontSize:"2.4rem"}}>MRITTIKA EVENTS 2019</h3>
                            <p class="myp text-center" style={{color:"",fontWeight:"bold",fontSize:"1.4rem"}}>The Indian Ceramic Society student chapter of NITR conducted a two day conference, Mrittika  2019 from 06 April 2019 to 07 April 2019.

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
            </section> */}


        {/* GUEST SECTION */}
        <div class="guest">
            <h3 class="text-center font-weight-bold" >GUEST<span class="bg-main"> SECTION</span></h3>

            <div class="about-2023">
                    <h3 style={{marginLeft:"-62rem"}}>ABOUT</h3>
                    {/* <a  href="/">
                        <button class="btn btn-primary" style={{marginRight:"0rem"}}><h4>Mrittika 2019</h4></button>
                    </a> */}
            </div>
            <div class="about-content" style={{paddingLeft:"14rem",paddingRight:"12rem"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit eius nihil 
                    nesciunt molestiae earum odit quam laborum. Vero provident expedita laudantium aliquid accusamus 
                    tempore magni in! At, recusandae a voluptatum molestiae dicta officiis voluptates nulla qui consequatur
                    incidunt distinctio accusamus, doloribus facere animi nobis. Vero omnis repellat harum doloribus unde 
                    similique fugit porro ut in quia. Aliquam fugit, fuga iusto vitae dicta aspernatur mollitia beatae
                    obcaecati dignissimos minus possimus, adipisci repellendus accusamus ex. Iste at eos perferendis 
                    harum adipisci?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit eius nihil 
                    nesciunt molestiae earum odit quam laborum. Vero provident expedita laudantium aliquid accusamus 
                    tempore magni in! At, recusandae a voluptatum molestiae dicta officiis voluptates nulla qui consequatur
                    incidunt distinctio accusamus, doloribus facere animi nobis. Vero omnis repellat harum doloribus unde 
                    similique fugit porro ut in quia. Aliquam fugit, fuga iusto vitae dicta aspernatur mollitia beatae
                    obcaecati dignissimos minus possimus, adipisci repellendus accusamus ex. Iste at eos perferendis 
                    harum adipisci?
                </p>
            </div>

            <section class="testimonials text-center ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow fadeInUp">
                            
                            <h3 class="text-center font-weight-bold" >GUEST<span class="bg-main"> GALLERY </span></h3>
                            {/* <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-1.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-2.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-3.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-4.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-5.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-6.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-7.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-8.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-9.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-10.jpeg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-11.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/GG-12.png" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div class="guest-cards">
            <h3 class="text-center font-weight-bold" >GUEST<span class="bg-main"> LECTURE </span></h3>
                <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-1</h5>
                <div class="col-md-6 card-effect " style={{}}>
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Name: </a>
                            </h6>
                            {/* <div class="mb-1 text-muted small">Aug 30</div> */}
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p><p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" ,marginTop:"5.6rem"}} />
                    </div>
                </div>

                <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-2</h5>    
                <div class="col-md-6 card-effect" style={{marginBottom:"3rem"}}>
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Name:</a>
                            </h6>
                            {/* <div class="mb-1 text-muted small">Aug 30</div> */}
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p><p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/GG-11.png" style={{ width: "200px", height: "250px",marginTop:"5.6rem" }} />
                    </div>
                </div>
                
                {/* <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-3</h5>
                <div class="col-md-6 card-effect">
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Name: </a>
                            </h6>
                            
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p><p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comming-soon.jpg" style={{ width: "200px", height: "250px",marginTop:"5.6rem" }} />
                    </div>
                </div>

                <h5 style={{marginLeft:"-50rem",marginBottom:"3rem",marginTop:"2rem"}}>GUEST LECTURE-4</h5>
                <div class="col-md-6 card-effect">
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design cards-1">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                            <h6 class="mb-0">
                                <a class="text-dark" href="#">Name: </a>
                            </h6>
                            
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <p class="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quaerat 
                            minima consectetur repudiandae, quibusdam vitae eligendi ratione tenetur eos doloremque hic eius dolorum 
                            ducimus deleniti minus! Perspiciatis repellat amet quam!</p>
                            <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comming-soon.jpg" style={{ width: "200px", height: "250px",marginTop:"5.6rem" }} />
                    </div>
                </div> */}


            </div>
        </div>



{/* 
            <section class="testimonials text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto wow fadeInUp">
                            <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">TIKA</span> CONNECT</h3>
                            <p class=" text-center">There was a common platform for students , scientists, and industrialists to contribute to the development of ceramics..</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" style={{ height: "270px" }} src="images/SN.jpg" />
                                <div class="card-block"> */}

                                    {/* <h4 class="card-title text-center">SIDDHARTHA NANDA</h4>

                                    <div class="card-text text-center">
                                        <div class="social-icons"> */}
                                            {/* <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a> */}
                                        {/* </div>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <h6><strong>Chairperson</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card"> */}
                                {/* <img class="card-img-top" style={{ height: "270px" }} src="data:image/png;base64,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" />
                                <div class="card-block"> */}

                                    {/* <h4 class="card-title text-center">SAKTI SWAROOP</h4> */}

                                    {/* <div class="card-text text-center">
                                        <div class="social-icons">
                                            <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div class="card-footer text-center">
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                </div> */}
                            {/* </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" style={{ height: "270px" }} src="data:image/png;base64,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" />
                                <div class="card-block"> */}

                                    {/* <h4 class="card-title text-center">SOMDEB GANGULY</h4> */}

                                    {/* <div class="card-text text-center">
                                        <div class="social-icons">
                                            <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                                {/* <div class="card-footer text-center">
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                </div> */}
                            {/* </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" style={{ height: "270px" }} src="images/SS.jpg" />
                                <div class="card-block">

                                    <h4 class="card-title text-center">SAKTI SWARUP MOHAPATRA</h4>

                                    <div class="card-text text-center">
                                        <div class="social-icons"> */}
                                            {/* <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a> */}
                                        {/* </div>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <h6><strong>Vice-Chairperson</strong></h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section class="testimonials text-center mybg-music">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow fadeInUp">
                            
                            <h3 class="text-center font-weight-bold" style={{color:"white"}}>MRITIKA<span class="bg-main"> GALLERY 2023</span></h3>
                            {/* <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
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
            </section>

            <div class="brochure19">
                <a href={Brochure} download >
                    <button type="button" class="btn btn-primary" >Brochure 2019</button>
                </a>
                
                <a  href="/mritika1">
                        <button class="btn btn-primary" style={{marginTop:"1rem"}}>Visit Mrittika 2019</button>
                </a>
            </div>


            {/* New comments */}
            {/* <section class="testimonials text-center ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto wow fadeInUp">
                            <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">TIKA</span> FEATURED EVENT</h3>

                            <p class=" text-center"> <strong>“Our response to an event is more important than the event itself.”</strong></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-6 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="big-img-3">
                                <img src="https://images.pexels.com/photos/167480/pexels-photo-167480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-6 mt-4">
                            <div class="my-right-text wow fadeInUp">

                                <p class="text-justify font-italic">
“All work and no play makes Jack a dull boy”
This saying goes well with Mrittika as well. Apart from all the exciting and insightful lectures, the Mrittika organizing team went ahead with organizing a fun event Teka Teki in collaboration with Chitraang. 
In the game, the participants were supposed to arrange tiles in a pattern. The student who did it the fastest received earphones as a gift. 
Besides this, a cultural night which was scheduled to happen on the night of 6th April but unfortunately got canceled owing to the rough weather. 
</p>

                                <a href="#" class="link-color">Event</a>
                                <p class="text-muted">Teka - Teki </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}



            <div class="social_media_part">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Deepsikha Brahma</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Partha Mishra</span>
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
                        Copyright © 2021 NITRICS - All rights reserved
                    </div>
                </footer>
            </div>


        {/* </div> */}
        </>);
}

export default Events3
