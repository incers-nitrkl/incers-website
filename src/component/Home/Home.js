import React from 'react';
import Navbar from "../../Navbar";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { SliderData } from './SliderData';
import { SliderData1 } from './SliderData1';
import { Box, makeStyles } from "@material-ui/core";
import "./Home.css";
import Footer from '../Footer/Footer';
import { MaterialsUnlocked23 } from '../Events/MaterialsUnlockedData';


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

};

const Apps = () => {
    const classes = useStyles();

    const functiondeal1 = () => {
        return (<>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CDS1J9vFbij/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/FF1.jpg" alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>
                        Dr Shantanu K Behera is an Associate Professor in the Department of Ceramic Engineering at NIT Rourkela. Dr Behera
                        an alumnus of NIT Rourkela, and has performed his doctoral work at Lehigh University, Bethlehem, USA, and post doctoral
                        work at University of Colorado at Boulder, USA.
                    </p>
                </div>
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CEI5jnlFMcP/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/FF2.png" alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>
                        Completing PhD and MBA simultaneously from Drexel University, Dr. Ranjan Dash showed that there are no bounds to the
                        zeal of learning and accomplishing one's ambitions.
                    </p>
                </div>
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CE_3lEvFcMb/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/FF3.png" alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>
                        A person with a unique perspective, who saw opportunities even in the most challenging times, eventually pursued 3 Post
                        Doctoral Researches in University of Arkansas (2013-14), Rutgers University (2010-13) and North Dakota State University (2009-10) .
                    </p>
                </div>
            </div>
        </>)
    }

    const functiondeal2 = () => {
        return (<>
            <div class="d-flex flex-wrap justify-content-center">
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CCkm_4zFWC9/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/MM1.jpg " alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>Oil spillage in water is a major environmental issue which takes years to clean up. Many methods are available to remove the oil from surface but now we have a material which is much more efficient and easier to use.
                        Say hello to a super-hydrophobic material that repels water unlike anything else you have ever seen before, in Monday Matter Post.
                    </p>
                </div>
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CC2itWVlEyy/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/MM2.jpg" alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>
                        Faster and efficient energy storage devices and materials used for the same are on the rise. Catering to the specific properties required for various application requires major breakthroughs in their development. One such development is a Ceramic Electrolyte Sheet which will be used in Next-Generation Rechargable Batteries.
                    </p>
                </div>
                <div class="card hover m-3" style={{ width: "300px" }} data-wow-duration="1.4s">
                    <a href="https://www.instagram.com/p/CDJRzw0lpLH/">
                        <img class="card-img-top pt-3" style={{ height: "280px", width: "250px" }} src="images/MM3.jpg" alt='Incers' />
                    </a>
                    <p className='text-justify d-none d-lg-block p-4'>
                        Cement is the most widely used commodity after water. But to make cement, refractories are required. To improve the quality of lime kiln refractories for more efficient production of cement, here is an effort by Mr. Abhipshit Kumar, B. Tech. 2018 batch, former employee at TRL Krosaki Refractories Ltd. and currently enrolled in M.Tech. in IISc.
                    </p>
                </div>
            </div>
        </>)
    }


    const functiondeal3 = () => {
        return (<>
            <div class="d-flex flex-wrap justify-content-center">
                {
                    MaterialsUnlocked23.map((data, index) => {
                        return (
                            <div class="card hover m-3" data-wow-duration="1.4s">
                                <a href={data.instagram}>
                                    <img class="card-img-top" style={{ height: "280px", width: "250px" }} src={data.img} alt='Incers' />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </>)
    }

    const functiondeal = () => {
        const width1 = 700;
        const wd1 = 900;
        if (window.screen.width <= width1) {
            return;
        }
        else if (window.screen.width <= wd1) {
            return (
                <Carousel
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
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px" >
                    {
                        SliderData.map(product => {
                            return (<a href={product.reciever} >
                                <Box textAlign="center" >
                                    <img src={product.image} className={classes.image} style={{ width: "220px", height: "270px" }} alt="Incers" />
                                </Box>
                            </a>)
                        })
                    }
                </Carousel>
            )
        }
        else {
            return (
                <Carousel
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
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                    {
                        SliderData.map(product => {
                            return (<a href={product.reciever}>
                                <Box textAlign="center" className={classes.wrapper} >
                                    <img src={product.image} className={classes.image} alt="Incers" />
                                </Box>
                            </a>)
                        })
                    }
                </Carousel>
            )
        }
    }

    const functiondeals = () => {
        const width2 = 700;
        const wd2 = 900;
        if (window.screen.width <= width2) {
            return;
        }
        else if (window.screen.width <= wd2) {
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
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData1.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} style={{ width: "220px", height: "270px" }} alt="Incers" />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
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
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData1.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} alt="Incers" />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
        }
    }

    return (
        <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <Navbar />
            <div>
                <div >
                    <img style={{ width: "100%", maxHeight: "580px" }} src="images/incers_newlogo_1.jpg" alt="Incers" srcset="" />
                </div>

                <section>
                    <div class="container p-4"  >
                        <div class="d-flex flex-wrap">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>INCERS NITR</h1>
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
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container p-4" >
                        <div class="d-flex flex-wrap">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>OUR OBJECTIVES</h1>
                                <p>
                                    To provide a platform for delegates and professionals from the fields of material science and technology to gather and advance their knowledge and ideas about the materials.
                                    It also works to provide exposure to students on material science & technology and to assist them throughout their journey in this field.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container p-4">
                        <div class="d-flex flex-wrap">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>FLASHBACK FRIDAY</h1>
                                <p>
                                    Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.
                                    Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the
                                    experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris.
                                    The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that
                                    are sometimes very difficult to get owing to certain reasons.To help everyone in this regard, NITR-ICS is going to collect such
                                    experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields.
                                    It will be a conglomeration of important events in their journey from college to where they are now. All the information will be
                                    shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="image_div_1">
                        {functiondeal1()}
                    </div>
                </section>

                <div id='slider-flashback' style={{ margin: "0 10px" }}>
                    {functiondeal()}
                </div>

                <section>
                    <div class="container p-4">
                        <div class="d-flex flex-wrap">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>MONDAY MATTER</h1>
                                <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
                                    Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
                                    NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
                                    To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="image_div_2">
                        {functiondeal2()}
                    </div>
                </section>

                <div id='slider-flashback' style={{ margin: "0 10px" }}>
                    {functiondeals()}
                </div>

                <section>
                    <div class="container p-4">
                        <div class="d-flex flex-wrap">
                            <div class="col-md-12" style={{ textAlign: "justify" }}>
                                <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>MATERIALS UNLOCKED</h1>
                                <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
                                    Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
                                    NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
                                    To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-5" >
                        {functiondeal3()}
                    </div>
                </section>

                {/* floating whatsapp */}
                <a href="https://api.whatsapp.com/send?phone=916371543372" rel="noreferrer" class="floating" target="_blank">
                    <i class="fa fa-whatsapp"></i>
                </a>
                <Footer />
            </div>
        </>
    );
}

export default Apps;