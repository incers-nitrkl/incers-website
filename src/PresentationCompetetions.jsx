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

const Events1 = () => {
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
    //         {/* <div className="gallery_div_placement" >

    //         </div> */}
    //         <div className="family1">
    //             {/* <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
    //                 <div id="flash_inside">
    //                     <h1 style={{ color: "#000" }} class="underline">FLASHBACK FRIDAY</h1>
    //                 </div>
    //             </div> */}


    //             <div id="gallerydiv">
    //             <h1 id="heading">PRESENTATION COMPETITIONS</h1>
    //                 <div id="paragraph" style={{ textAlign: "justify" }}>
    //                     <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

    //                         To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
    //                     </p>
    //                 </div>
    //             </div>
    //             {functiondeal()}
    //         </div>
    const functionnav = ()=>{
        const widths = 700
        if(window.screen.width <= widths){
            return(<>
                 <div class="top_div ">
                <div>
                    {/* <div id="logo" style={{ cursor: "pointer",marginLeft:"2.5rem" }}> */}
                        <img src="images/pics.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} />
                    {/* </div> */}
                </div>
                <Navbar />
            </div>
            </>)
        }
            else{
                return <Navbar />
            }
        }
    return<>
        <div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}
            <div class="container container-1">
                {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link> */}
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
            <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
                <h3 class="pb-3 mb-4 font-italic border-bottom">
                    {/* PRESENTATION'S */}
                </h3>


                {/* New 2023 */}
                <h2 class="heading" style={{marginTop:"2rem",marginBottom:"1.5rem"}}>PPT PRESENTATION COMPETITION 22-23</h2>
                
                <div class="row" >
                    <div class="col-md-6 heading-1" >
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design3" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-3</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{color:"white"}}>Ceramics made with Clay</p>
                                <p class="card-text mb-auto" style={{color:"white"}}>Ceramics are objects made from clay that have been fired at high temperatures to... </p>
                                <a class="btn btn-outline-light btn-sm" style={{marginTop:"1rem"}} role="button" href="https://www.youtube.com/watch?v=u71UwFbXewc">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp9.png" style={{  marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>

                {/* old ppt */}
                <h2 class="heading" style={{marginTop:"2rem",marginBottom:"1.5rem"}}>PPT PRESENTATION COMPETITION 20-22</h2>
                <div class="row">
                    <div class="col-md-6 card-effect heading-1" >
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto" >Silicon Sphere</p>
                                <p class="card-text mb-auto">"silicon sphere- An interesting approach to redefine the kilogram!!"</p>
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp1.jpeg" style={{ marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                    
                    <div class="col-md-6 card-effect heading-1">
                        <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design2"style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Ceramic tempered Glass</p>
                                <p class="card-text mb-auto">Tempered glass- Ceramic's wonders of glasses 
                                used by world's leading tech...</p>
                                <a class="btn btn-outline-success btn-sm" href="https://youtu.be/4xUInIdO8I0" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block"  alt="Thumbnail [200x250]" src="images/comp2.jpeg" style={{marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 card-effect heading-1">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 competition-design" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Metamaterials</p>
                                <p class="card-text mb-auto">Meta materials- Super Advanced Modelled ceramics 
                                for sophisticated uses in...</p>
                                <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/kZqFgkqj_QQ" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp3.jpeg" style={{ marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-6 card-effect heading-1">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 competition-design2" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Conductive Ceramics</p>
                                <p class="card-text mb-auto">CONDUCTIVE CERAMICS- Traditional use of ceramics as 
                                traditional insulators to be...</p>
                                <a class="btn btn-outline-success btn-sm" href="https://youtu.be/04WUCfsfRSY" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp4.jpeg" style={{ marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 heading-1">
                        <div class="card text-white  flex-md-row mb-4 shadow-sm h-md-250 competition-design3" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{color:"white"}}>PZT</p>
                                <p class="card-text mb-auto" style={{color:"white"}}>"PZT- A highly smart Ceramic based lead material made up of Pervoskite ."</p>
                                <a class="btn btn-outline-light btn-sm" role="button" href="https://youtu.be/2AYpTP9XBVU" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp5.jpeg" style={{ marginTop:"0.7rem",width: "200px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-6 heading-1">
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design4" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" >Cereamics in aerospace</p>
                                <p class="card-text mb-auto">Uses of Ceramics in Aerospace- The various uses of ceramics 
                                in the space vehicles...</p>
                                <a class="btn btn-outline-light btn-sm" href="https://youtu.be/KHoAPQDb94c" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp6.jpeg" style={{ marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 heading-2" >
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design3" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{color:"white"}}>Application of Ceramics in Electronics</p>
                                <p class="card-text mb-auto" style={{color:"white"}}>"app of ceramics in electronics- ceramics used in microcomponents of electronics"
                                </p>
                                <a class="btn btn-outline-light btn-sm" role="button" href="https://youtu.be/cC4Ic--uNLY" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp7.jpeg" style={{marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                    <div class="col-md-6 heading-2">
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design4" style={{height:"17rem"}}>
                            <div class="card-body d-flex flex-column align-items-start shadow-effect">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto">Ceramics in Electronics</p>
                                <p class="card-text mb-auto">ceramics in electronics- The vast use of Ceramics in various minor and major...
                                </p>
                                <a class="btn btn-outline-light btn-sm" href="https://youtu.be/KA-fuWdq1UU" style={{marginTop:"1rem"}}>Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp8.jpeg" style={{ marginTop:"0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>

                    
            
                    {/* <div class="col-md-6">
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design4">
                            <div class="card-body d-flex flex-column align-items-start shadow-effect">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto">Ceramics in Electronics</p>
                                <a class="btn btn-outline-light btn-sm" href="https://youtu.be/KA-fuWdq1UU">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp8.jpeg" style={{ width: "200px", height: "250px" }} />
                        </div> 
                    </div> */}
                </div>

                {/* <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img class="card-img-top" src="//placeimg.com/290/180/any" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-dark btn-sm">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 border-dark">
                            <img class="card-img-top" src="//placeimg.com/290/180/any" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://www.jquery2dotnet.com/" class="btn btn-dark btn-sm">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 text-white bg-dark">
                            <img class="card-img-top" src="//placeimg.com/290/180/any" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="mt-3 pb-3 mb-4 font-italic border-bottom">
                    Image overlays
                </h3>
                <div class="row">
                    <div class="col-md-8">
                        <div class="card mb-4 bg-dark text-white">
                            <img class="card-img" src="//placeimg.com/780/270/any" alt="Card image" />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 bg-dark text-white">
                            <img class="card-img" src="//placeimg.com/250/180/any" alt="Card image" />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <h3 class="mt-3 pb-3 mb-4 font-italic border-bottom">
                    Social Cards
                </h3>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <div class="social-card-header align-middle text-center bg-facebook">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col border-right">
                                        <i class="far fa-thumbs-up text-facebook"></i>
                                        <span class="text-muted">Like</span>
                                        <div class="font-weight-bold">12K</div>
                                    </div>
                                    <div class="col">
                                        <i class="fas fa-share-alt text-facebook"></i>
                                        <span class="text-muted">Share</span>
                                        <div class="font-weight-bold">10K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <div class="social-card-header align-middle text-center bg-google-plus">
                                <i class="fab fa-google-plus-square"></i>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col border-right">
                                        <i class="fab fa-google-plus-g text-google-plus"></i>
                                        <span class="text-muted">Like</span>
                                        <div class="font-weight-bold">12K</div>
                                    </div>
                                    <div class="col">
                                        <i class="fas fa-share-alt text-google-plus"></i>
                                        <span class="text-muted">Share</span>
                                        <div class="font-weight-bold">10K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <div class="social-card-header align-middle text-center bg-twitter">
                                <i class="fab fa-twitter-square"></i>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col border-right">
                                        <i class="fab fa-twitter text-twitter"></i>
                                        <span class="text-muted">Tweet</span>
                                        <div class="font-weight-bold">12K</div>
                                    </div>
                                    <div class="col">
                                        <i class="fas fa-share-alt text-twitter"></i>
                                        <span class="text-muted">Share</span>
                                        <div class="font-weight-bold">10K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <div class="social-card-header align-middle text-center bg-pinterest">
                                <i class="fab fa-pinterest-square"></i>
                            </div>
                            <div class="card-body text-center">
                                <div class="row">
                                    <div class="col border-right">
                                        <i class="fab fa-pinterest-p text-pinterest"></i>
                                        <span class="text-muted">Pin</span>
                                        <div class="font-weight-bold">12K</div>
                                    </div>
                                    <div class="col">
                                        <i class="fas fa-share-alt text-pinterest"></i>
                                        <span class="text-muted">Share</span>
                                        <div class="font-weight-bold">10K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <h3 class="mt-3 pb-3 mb-4 font-italic border-bottom">
                    More Cards
                </h3> */}
                {/* <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right d-inline-flex share"><i class="fas fa-share-alt text-primary"></i></a></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="float-right">Read more <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-sm btn-info float-right">Read more <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-sm btn-info float-right">Read more <i class="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <hr />
                {/* <a href="http://www.jquery2dotnet.com/" class="mx-auto pb-3 text-center">
                    <img alt="jQuery 2 DotNet" class="rounded mx-auto d-block" height="52px;" src="http://1.bp.blogspot.com/-z27K-NYYSi4/Vsg9Mdl1A_I/AAAAAAAAEbo/SbDbMENIiVQ/s1600-r/jQuery2DotNet.png" style={{display: "block", width="208px"}}/>
                </a> */}
            </div>

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
    </div></>
}

        export default Events1