import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { SliderData } from './component/SliderData';
import { SliderData1 } from './component/SliderData1';
import { Box, makeStyles } from "@material-ui/core";

import App1 from './App1';
const useStyles = makeStyles({
    image: {
        height: 500,
        width: 320,
    },
    wrapper: {
        padding: "55px 55px",
    },
})
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1100 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1100, min: 602 },
        items: 2
    },

};

const Events = () => {
    //   const classes = useStyles();
    // const functiondeal1 = () => {
    //     const width2 = 700;
    //     if (window.screen.width >= width2) {
    //         return <>
    //             <a href="/blog" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF1.jpg" alt="mypic" />

    //                     <h2 id="proff1" style={{ color: "#000" }}>Proff.Shantanu T behera</h2>
    //                     <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                         quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                         reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                     </p>
    //                 </div>
    //             </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF2.png" alt="mypic" />

    //                     <h2 id="proff1" style={{ color: "#000" }}>Proff.Ranjan Das</h2>
    //                     <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                         quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                         reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                     </p>
    //                 </div>
    //             </a>
    //             <a href="/blog2" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF3.png" alt="mypic" />

    //                     <h2 id="proff1" style={{ color: "#000" }}>Proff.Beda Mohanty</h2>
    //                     <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                         quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                         reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                     </p>
    //                 </div>
    //             </a></>

    //     }
    //     else {
    //         return <>
    //             <a href="/blog" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF1.jpg" alt="mypic" />

    //                 </div>
    //             </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF2.png" alt="mypic" />

    //                 </div>
    //             </a>
    //             <a href="/blog2" style={{ textDecoration: "none" }}>
    //                 <div className="img_1">
    //                     <img id="peacock" src="images/FF3.png" alt="mypic" />

    //                 </div>
    //             </a></>
    //     }
    // }
    // const functiondeal2 = () => {
    //     const width2 = 700;
    //     if (window.screen.width >= width2) {
    //         return <><a href="/blog1" style={{ textDecoration: "none" }}>
    //             <div className="img_2">
    //                 <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
    //                 <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                     quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                     reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                 </p>
    //             </div>
    //         </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_2">
    //                     <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
    //                     <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                         quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                         reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                     </p>
    //                 </div>
    //             </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_2">
    //                     <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
    //                     <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
    //                         quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
    //                         reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
    //                     </p>
    //                 </div>
    //             </a></>
    //     }
    //     else {
    //         return <><a href="/blog1" style={{ textDecoration: "none" }}>
    //             <div className="img_2">
    //                 <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
    //             </div>
    //         </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_2">
    //                     <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
    //                 </div>
    //             </a>
    //             <a href="/blog1" style={{ textDecoration: "none" }}>
    //                 <div className="img_2">
    //                     <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
    //                 </div>
    //             </a></>
    //     }
    // }
    // const functiondeal3 = () => {
    //     const width2 = 700;
    //     if (window.screen.width >= width2) {
    //         return <>
    //             <div className="logo_part">
    //                 <h2>NITR ICS</h2>
    //                 <h3 style={{ display: "flex", flexDirection: "column", marginLeft: "-550px", color: "orange", marginTop: "40px" }}><span>Address:NIT ROURKELA </span><span>Pin-Code:769001</span></h3>
    //                 <div className="img_3">
    //                     <a href="">
    //                         <i className="fa fa-facebook"></i></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i class="fa fa-instagram"></i></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin"></i></a>
    //                 </div>
    //                 <h3 style={{ display: "flex", flexDirection: "column", color: "orange", marginTop: "40px", marginRight: "-500px" }}><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Siddharth Nanda Sir:92732709727</span><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Sakti Swaroop Sir:792347979</span></h3>
    //             </div>
    //         </>
    //     }
    //     else {
    //         return <>
    //             <div className="logo_part">
    //                 <div className="img_3">
    //                     <a href="">
    //                         <i className="fa fa-facebook"></i></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i className="fa fa-instagram"></i></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://www.linkedin.com/company/incers-nitr"><i className="fa fa-linkedin"></i></a>
    //                 </div>
    //             </div>
    //         </>

    //     }
    // }

    // const functiondeal = () => {
    //     const width2 = 700;
    //     if (window.screen.width <= width2) {
    //         return <App1 />
    //     }
    //     else {
    //         return <Carousel
    //             swipeable={false}
    //             draggable={false}
    //             responsive={responsive}
    //             centerMode={true}
    //             infinite={true}
    //             autoPlay={true}
    //             autoPlaySpeed={1500}
    //             keyBoardControl={true}
    //             showDots={false}
    //             containerClass="carousel-container"
    //             // removeArrowOnDeviceType={["tablet", "mobile"]}
    //             dotListClass="custom-dot-list-style"
    //             itemClass="carousel-item-padding-40-px">
    //             {
    //                 SliderData.map(product => {
    //                     return (<a href={product.reciever}>
    //                         <Box textAlign="center" className={classes.wrapper}>
    //                             <img src={product.image} className={classes.image} />
    //                         </Box>
    //                     </a>)
    //                 })
    //             }
    //         </Carousel>
    //     }
    // }
    // const functiondeals = () => {
    //     const width2 = 700;
    //     if (window.screen.width <= width2) {
    //         return <App1 />
    //     }
    //     else {
    //         return <Carousel
    //             swipeable={false}
    //             draggable={false}
    //             responsive={responsive}
    //             centerMode={true}
    //             infinite={true}
    //             autoPlay={true}
    //             autoPlaySpeed={1500}
    //             keyBoardControl={true}
    //             showDots={false}
    //             containerClass="carousel-container"
    //             // removeArrowOnDeviceType={["tablet", "mobile"]}
    //             dotListClass="custom-dot-list-style"
    //             itemClass="carousel-item-padding-40-px">
    //             {
    //                 SliderData1.map(product => {
    //                     return (<a href={product.reciever}>
    //                         <Box textAlign="center" className={classes.wrapper}>
    //                             <img src={product.image} className={classes.image} />
    //                         </Box>
    //                     </a>)
    //                 })
    //             }
    //         </Carousel>
    //     }
    // }
    // return (
    //     <><div class="main_div">
    //         <div class="top_div">
    //             <div>
    //                 <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
    //             </div>
    //             <Navbar />
    //         </div>
    //         <div className="gallery_div_placement"  style={{marginBottom:"50px"}}>

    //         </div>
    //         <div className="gallery_placement">
    //         {/* <div className="family1"> */}
    //             {/* <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
    //                 <div id="flash_inside">
    //                     <h1 style={{ color: "#000" }} class="underline">FLASHBACK FRIDAY</h1>
    //                 </div>
    //             </div> */}


    //             <div id="gallerydiv">
    //             <h1 id="heading" style={{}}>PLACEMENT DIARIES</h1>
    //                 <div id="paragraph" style={{ textAlign: "justify" }}>
    //                     <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

    //                         To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
    //                     </p>
    //                 </div>
    //             </div>
    //             {functiondeal()}
    //         </div>

    //         <div class="social_media_part">
    //             <footer>
    //                 <div class="top_header">
    //                     <section>
    //                         <span><i class="fa fa-map-marker"></i></span>
    //                         <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
    //                     </section>
    //                     <section>
    //                         <span><i class="fa fa-phone"></i></span>
    //                         <span>Siddharth Nanda +91 8093308828</span>
    //                         <span><i class="fa fa-phone"></i></span>
    //                         <span>Sakti Swaroop +91 9337318011</span>
    //                     </section>
    //                     <section>
    //                         <span><i class="fa fa-envelope"></i></span>
    //                         <span>incersnitr@gmail.com</span>
    //                     </section>
    //                 </div>
    //                 <span class="border-shape"></span>
    //                 <div class="bottom_content">
    //                     <section>
    //                         <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
    //                         <a href="#"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
    //                         <a href="#"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
    //                         {/* <a href="#"><i class="fa fa-telegram"></i></a> */}
    //                     </section>
    //                     <section>
    //                         <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
    //                         <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
    //                         <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
    //                         <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
    //                     </section>
    //                 </div>
    //                 <div class="copyright">
    //                     Copyright © 2021 NITRICS - All rights reserved
    //                 </div>
    //             </footer>
    //         </div>
    //   </div></>)
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
    return <>

        <div className='main_div'>
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}
            {/* 
                    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                        <div class="container">
                            <a class="navbar-brand" href="/">
                        <h3 class="my-heading ">NITR<span class="bg-main">ICS</span></h3>
                    </a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars mfa-white"></span>
                    </button> */}
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
            <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>

            {/* <div id="main">
                                <a href="javascript:void(0)" class="openNav"><span class="fa fa-bars" onclick="openNav()"></span></a>
                            </div> */}



            {/* <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                        <ul class="mob-ul">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">About</a></li>

                            <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Groups</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Music</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Marketplace</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Featured Artists</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Register</a></li>


                        </ul>
                    </div> */}


            {/* <div class="collapse navbar-collapse" id="navbarResponsive">
                        <form class="form-inline my-2 my-lg-0 col-md-7">
                            <input class="myform-control mr-sm-2" type="search" placeholder="find peoples, instruments, bands and more..." aria-label="Search" />
                            <button class="btn btn-light"><i class="fa fa-search"></i></button>
                        </form>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-link">
                                <a class="btn btn-primary btn-block btn-login" href="#">Login</a>
                            </li>
                            <li class="nav-link">
                                <a class="btn btn-primary btn-block btn-register" href="#">Register</a>
                            </li>

                        </ul>
                    </div> */}

            {/* </div>
                    </nav> */}


            <header class="masthead text-white ">
                <div class="overlay"></div>
                <div class="container slider-top-text">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3 class="my-heading">PLACEMENT<span class="">DIARIES</span></h3>
                            <p class="myp-slider text-center" style={{fontSize:"18px"}}>Your dream job does not exist. You must CREATE IT.</p>
                            <p class="myp text-center">SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p>
                            <a class="btn btn-primary btn-join" href="#">WE ARE PLACED</a>

                        </div>
                        <div class="col-md-12 text-center mt-5">
                            <div class="scroll-down">
                                <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="testimonials" id="gobottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="big-img">
                                <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/28/w900X450/NIT_Rourkela_EPS.jpg?w=400&dpr=2.6" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="inner-section wow fadeInUp">
                                <h3>Follow the <span class="bg-main">DRIVE WITH US</span></h3>
                                <br />
                                <p class="text-justify">Keeping all the matter aside, Placements are the things that are most looked upon!
Reputed core companies such as Aditya Birla Group, Tata Steel, Reliance Industries, MPR Refractories, Vedanta, Saint- Gobain, Piramal and JSW Steel visit the campus and place students!
Not only that, many reputed non- core companies such as ZS Associates, Wipro, EXL, Infosys, Tredence, Tata, HCL, iQuanti, BYJU’s and ICICI bank also visit the campus and place many students.</p>

                                <div class="linear-grid">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s" >
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiKWm349nx4exnOpzY-E3oxnk4fuvHVJEDQ&usqp=CAU"/>
                                        </div>
                                        <div class=" col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="https://www.jainuniversity.ac.in/uploads/blog/db2b1c69fc63b1eb89a6ad774b1b8cb0.jpg" class="img-thumbnail" />
                                        </div>
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="data:image/jpeg;base64,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" class="img-thumbnail" />
                                        </div>
                                        <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                            <img src="data:image/jpeg;base64,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" class="img-thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="testimonials mybg-events">

                        <div class="container">

                            <div class="row">
                                <div class="col-md-12 wow fadeInUp">
                                    <h3 class="title-heading text-center">MRITIKA EVENTS</h3>
                                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div class="row wow slideInLeft" data-wow-duration="3s">
                                <div class="col-md-4 mb-3">
                                    <div class="big-img2">
                                        <img src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />
                                    </div>

                                </div>
                                <div class="col-md-8">
                                    <div class="inner-section">
                                        <div class="my-grid">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-4 mb-3">

                                                    <img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>
                                                <div class="col-sm-6 col-md-8 mb-3 ">

                                                    <img src=" https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>

                                                <div class="col-md-8 mb-3">
                                                    <div class="text-block">
                                                        <h5 class="events-heading">Lorem ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                        <p class="myp-font">contrary to popular belief, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book and more recently with desktop publishing software like Aldus PageMaker.</p>
                                                    </div>
                                                </div>
                                                <div class=" col-md-4 ">

                                                    <img src="https://images.pexels.com/photos/1150837/pexels-photo-1150837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>
                                            </div>
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
                            <h3 class="title-heading text-center font-weight-bold">OUR RECRUTERS</h3>
                            <p class="myp text-center">Reputed core companies such as Aditya Birla Group, Tata Steel, Reliance Industries, MPR Refractories, Vedanta, Saint- Gobain, Piramal and JSW Steel visit the campus and place students!
Not only that, many reputed non- core companies such as ZS Associates, Wipro, EXL, Infosys, Tredence, Tata, HCL, iQuanti, BYJU’s and ICICI bank also visit the campus and place many students.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Nation with Namo.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Tata steel.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Saint Gobain.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/ICICI1.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Aditya.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/TATACLIQ.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Somany.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/krosaki.jfif" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/glass.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/Jsw.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/itc.png" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class="music-gal item box">
                                <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                    <img class="img-fluid" src="images/QQQ.png" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="testimonials text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto wow fadeInUp">
                            <h3 class="text-center font-weight-bold">PLACEMENT<span class="bg-main">HOLDERS</span> DIARY</h3>
                            <p class=" text-center"> <bold>Your talent determines what you can do</bold> </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" src="images/Munmi Das (MPR).jpg" style={{ height: "300px" }} />
                                <div class="card-block">

                                    <h4 class="card-title text-center">Munmi Das </h4>
                                </div>
                                <div class="card-footer text-center">
                                    <h5><strong>MPR Refractories Placed </strong></h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" src="images/Ankita Banerjee (MPR).jpg" style={{ height: "300px" }} />
                                <div class="card-block">

                                    <h4 class="card-title text-center">Ankita Banerjee</h4>

                                </div>
                                <div class="card-footer text-center">
                                <h5><strong>MPR Refractories Placed </strong></h5>
                                

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div class="card">
                                <img class="card-img-top" src="images/Suraj Bhan Singh (MPR).jpg" style={{ height: "300px" }} />
                                <div class="card-block">

                                    <h4 class="card-title text-center">Suraj Bhan Singh</h4>


                                </div>
                                <div class="card-footer text-center">
                                <h5><strong>MPR Refractories Placed </strong></h5>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top" src="images/Sidhanta Kumar Parija (Tata cliq).jpg" style={{ height: "300px" }} />
                                    <div class="card-block">

                                        <h4 class="card-title text-center">Sidhanta Kumar Parija</h4>

                                    </div>
                                    <div class="card-footer text-center">
                                        <h5><strong> TATA CLIQ Placed</strong></h5>

                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                <div class="card">
                                    <img class="card-img-top" src="images/Polukonda Chinmaya ( Tata cliq(.jpg" style={{ height: "300px" }} />
                                    <div class="card-block">

                                        <h4 class="card-title text-center">Polukonda Chinmaya</h4>


                                    </div>
                                    <div class="card-footer text-center">
                                    <h5><strong> TATA CLIQ Placed</strong></h5>
                                    


                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </section>

            {/* <section class="testimonials text-center mybg-music">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 wow fadeInUp">
                                    <h3 class="title-heading text-center font-weight-bold">MRITIKA LATEST MUSIC</h3>
                                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section> */}

            {/* <section class="testimonials bg-light" id="marketplace">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp">
                                    <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">IKA</span> SPONCERS</h3>
                                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title ">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text ">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

            {/* <section class="testimonials text-center ">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp">
                                    <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">IKA</span> FEATURED EVENT</h3>
                                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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

                                        <p class="text-justify font-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

                                        <a href="#" class="link-color">SAKTI</a>
                                        <p class="text-muted">Lorem Ipsum Dolor Sit Amet</p>
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
                            <span>Siddhartha  8093308828</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti   9337318011</span>
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


        </div></>
}

export default Events
