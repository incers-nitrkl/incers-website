import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Navbar1 from './Navbar1';
import App1 from './App1';
import App from './App';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { SliderData } from './component/SliderData';
import { SliderData1 } from './component/SliderData1';
import { Box, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import img from './images/img4.jpg'


const useStyles = makeStyles({
    image: {
        height: 380,
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
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    // }
};
const width1 = window.screen.width;
console.log(width1);

const Apps = () => {
    const classes = useStyles();
    const functiondeal1 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <>
            <div className='flash-card-1'>
            <div className='flash-card'>
                <a href="https://www.instagram.com/p/CDS1J9vFbij/" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF1.jpg" alt="mypic" />

                        <h4 id="proff1" style={{ color: "#000" }}>Prof.Shantanu behera</h4>
                        <p id="para" style={{ color: "#000" }}>Dr Shantanu K Behera is an Associate Professor in the Department of Ceramic
                            Engineering at NIT Rourkela. Dr Behera an alumnus of NIT Rourkela, and has
                            performed his doctoral work at Lehigh University, Bethlehem, USA, and post
                            doctoral work at University of Colorado at Boulder, USA.
                        </p>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CEI5jnlFMcP/" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF2.png" alt="mypic" />

                        <h4 id="proff1" style={{ color: "#000" }}>Ranjan Das</h4>
                        <p id="para" style={{ color: "#000" }}>Completing PhD and MBA simultaneously from Drexel University, Dr. Ranjan Dash showed that there are no bounds to the zeal of learning and accomplishing one's ambitions.


                        </p>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CE_3lEvFcMb/" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF3.png" alt="mypic" />

                        <h4 id="proff1" style={{ color: "#000" }}>Dr.Beda Mohanty</h4>
                        <p id="para" style={{ color: "#000" }}>A person with a unique perspective, who saw opportunities even in the most challenging times, eventually pursued 3 Post Doctoral Researches in University of Arkansas (2013-14), Rutgers University (2010-13) and North Dakota State University (2009-10) .
                        </p>
                    </div>
                </a>
            </div>

            {/* new card added 4 and 5 */}
                {/* <div className='flash-card'>    
                    <a href="https://www.instagram.com/p/CGHED3elid2/?utm_source=ig_web_copy_link" style={{ textDecoration: "none" }}>
                        <div className="img_1">
                            <img id="peacock" src="images/FF4.jpg" alt="mypic" />

                            <h4 id="proff1" style={{ color: "#000" }}>Mr.Shiv Kiran</h4>
                            <p id="para" style={{ color: "#000" }}>Learning essential life values along the way to success further accelerates the process. Mr. Shiv Kiran V. is someone who accepts the shortcomings and works tirelessly to improve it.
                            </p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/CJgJbgnF_9w/?utm_source=ig_web_copy_link" style={{ textDecoration: "none" }}>
                        <div className="img_1">
                            <img id="peacock" src="images/FF5.jpg" alt="mypic" />

                            <h4 id="proff1" style={{ color: "#000" }}>Prof.Anshu Gaur</h4>
                            <p id="para" style={{ color: "#000" }}>Combination of just the right amount of determination and practicality can lead us anywhere we want and Prof. Anshu Gaur is one of the best examples having this quality. Read on to find more about the outlook and journey of Prof. Anshu Gaur, batch of 1999.
                            </p>
                        </div>
                    </a>
                </div> */}


                </div>
                </>

        }
        else {
            return <>
                <a href="/blog" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF1.jpg" alt="mypic" />

                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF2.png" alt="mypic" />
                    </div>
                </a>
                <a href="/blog2" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF3.png" alt="mypic" />

                    </div>
                </a></>
        }
    }
    const functiondeal2 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <><a href="https://www.instagram.com/p/CCkm_4zFWC9/" style={{ textDecoration: "none" }}>
                <div className="img_2">
                    <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
                    <p id="para1" style={{ color: "#000" }}>Oil spillage in water is a major environmental issue which takes years to clean up. Many methods are available to remove the oil from surface but now we have a material which is much more efficient and easier to use.
                        Say hello to a super-hydrophobic material that repels water unlike anything else you have ever seen before, in Monday Matter Post.
                    </p>
                </div>
            </a>
                <a href="https://www.instagram.com/p/CC2itWVlEyy/" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                        <p id="para1" style={{ color: "#000" }}>Faster and efficient energy storage devices and materials used for the same are on the rise. Catering to the specific properties required for various application requires major breakthroughs in their development. One such development is a Ceramic Electrolyte Sheet which will be used in Next-Generation Rechargable Batteries.


                        </p>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/CDJRzw0lpLH/" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                        <p id="para1" style={{ color: "#000" }}>Cement is the most widely used commodity after water. But to make cement, refractories are required. To improve the quality of lime kiln refractories for more efficient production of cement, here is an effort by Mr. Abhipshit Kumar, B. Tech. 2018 batch, former employee at TRL Krosaki Refractories Ltd. and currently enrolled in M.Tech. in IISc.
                        </p>
                    </div>
                </a></>
        }
        else {
            return <><a href="/blog1" style={{ textDecoration: "none" }}>
                <div className="img_2">
                    <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
                </div>
            </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                    </div>
                </a></>
        }
    }
    const functiondeal3 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <>
                <div className="logo_part">
                    <h2>NITR ICS</h2>
                    <h3 style={{ display: "flex", flexDirection: "column", marginLeft: "-550px", color: "orange", marginTop: "40px" }}><span>Address:NIT ROURKELA </span><span>Pin-Code:769001</span></h3>
                    <div className="img_3">
                        <a href="">
                            <i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i class="fa fa-instagram"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <h3 style={{ display: "flex", flexDirection: "column", color: "orange", marginTop: "40px", marginRight: "-500px" }}><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Siddharth Nanda Sir:92732709727</span><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Sakti Swaroop Sir:792347979</span></h3>
                </div>
            </>
        }
        else {
            return <>
                <div className="logo_part">
                    <div className="img_3">
                        <a href="">
                            <i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://www.linkedin.com/company/incers-nitr"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </>

        }
    }

    const functiondeal = () => {
        const width2 = 700;
        if (window.screen.width <= width2) {
            return <App1 />
        }
        else {
            return <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper} >
                                <img src={product.image} className={classes.image} />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
        }
    }
    const functiondeals = () => {
        const width2 = 700;
        if (window.screen.width <= width2) {
            return <App />
        }
        else {
            return <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData1.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
        }
    }
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
                return <Navbar/>
            }
        }
    return (
        <><div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo." style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {/* <Navbar /> */}
            {functionnav()}
            <div className="gallery_div">
                <img style={{width:"100%",height: "500px",borderRadius:"0px"}} src="images/incers_newlogo_1.jpg" alt="image" srcset="" />
                {/* <div>
                    <h1 className="headingname">WELCOME TO NITR ICS</h1>
                </div>  */}
            </div>

            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <section class="about-us py-5 " id="about-us">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-12" style={{ textAlign: "justify",marginBottom:"-7.3rem" }}>
                            <h1 class='text-success' style={{ fontSize: "27px" }}>OUR OBJECTIVES</h1>
                            {/* <h2>Know More About Us</h2> */}
                            <hr />
                            <p>
                                To provide a platform for delegates and professionals from the fields of material science and technology to gather and advance their knowledge and ideas about the materials.
                                It also works to provide exposure to students on material science & technology and to assist them throughout their journey in this field.
                            </p>

                        </div>
                        {/* <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div> */}
                    </div>
                </div>
            </section>
            <section class="about-us py-5 " id="about-us">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-12" style={{ textAlign: "justify" }}>
                            <h1 class='text-success' style={{ fontSize: "27px" }}>FLASHBACK FRIDAY</h1>
                            {/* <h2>Know More About Us</h2> */}
                            <hr />
                            <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

                                To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                            </p>

                        </div>
                        {/* <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div> */}
                    </div>
                </div>
            </section>
            <div className="family1">
                <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside">
                        <h2 style={{ color: "#000" }} class="underline">FLASHBACK FRIDAY</h2>
                    </div>
                </div>

                <div className="image_div_1">
                    {functiondeal1()}
                </div>
                {/* <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside">
                        <h2 style={{ color: "#000" }} class="underline">MORE ON THIS.....</h2>
                    </div>
                </div> */}
                <div style={{margin:"0 -30px"}}>
                    {functiondeal()}
                </div>
                <section class="about-us py-5 " id="about-us">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px" }}>MONDAY MATTER</h1>
                                {/* <h2>Know More About Us</h2> */}
                                <hr />
                                <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
                                    Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
                                    NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
                                    To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.</p>

                            </div>
                            {/* <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div> */}
                        </div>
                    </div>
                </section>

                <div className="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside" style={{ marginBottom: "40px" }}>
                        <h2 style={{ color: "#000" }} class="underline">MONDAY MATTER</h2>
                    </div>
                </div>

                <div className="image_div_2">
                    {functiondeal2()}
                </div>

                {/* <div className="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside1">
                        <h2 style={{ color: "#000" }} class="underline">MORE ON THIS....</h2>
                    </div>
                </div> */}
                <div style={{margin:"0 -30px"}}>
                    {functiondeals()}
                </div>

                <section class="about-us py-5 " id="about-us">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px" }}>INCERS NITR</h1>
                                {/* <h2>Know More About Us</h2> */}
                                <hr />
                                <p>Indian Ceramic Society (InCerS) is a non-profit organization established in 1928 under the guidance of Pandit Madan Mohan Malviya with an objective of establishing a network & relationship among all material enthusiasts, industrial professionals and any other people connected to this field.
                                    The primary objective of InCerS is to promote advancement in ceramic science, arts and technologies, by bringing into close contact those who are engaged in these pursuits, publishing scientific and technical books and journals, holding annual sessions, discussions, meetings, symposia and exhibitions on the subjects of interest. InCerS, NITR is the student chapter of Indian Ceramic Society which organizes annual events like Mrittika. To be a part of InCerS student chapter one needs to pay a membership amount.  Being a part of InCerS student chapter has many benefits like getting huge amount of funds to organize events like MRITTIKA whose budget is more than the annual tech fest of NITR
                                    NITR-ICS is the student chapter of InCerS at NIT Rourkela with a total strength of
                                    50+ active members. The club is presided over by Shivam Sharma (3rd year B Tech
                                    student) from the Department of Ceramic Engineering, NIT Rourkela. Prof.
                                    Shantanu Behera from the Department of Ceramic Engineering who is an esteemed
                                    alumnus of NIT Rourkela as well as the current Associate Dean of Alumni
                                    relations is the club faculty advisor. The club comes under the Technical society of
                                    SAC and is responsible for organising fests and sessionals related to materials
                                    science.
                                </p>

                            </div>
                            {/* <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>


            <div className="social_media_part">

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
                            <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
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
        </div></>);
}

export default Apps;