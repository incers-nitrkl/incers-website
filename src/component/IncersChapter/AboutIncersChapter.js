import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './AboutIncersChapter.css'

const AboutIncersChapter = () => {

    return (<>
        <Navbar />
        <div >
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div>
                <div>
                    <img src="images/MRITTIKA2.0-bg.png " className='mobile' alt="suraj" />
                </div>
                {/* <div class="container">
                    <div class="col-md-12 text-center">
                        <a class="btn btn-primary btn-join" href="#">JOIN THE COMMUNITY</a><br/>
                        <a href="https://docs.google.com/spreadsheets/d/1sgN1HQ8HXODLbOcXS6YR5HDRbOcIELPi/edit?usp=share_link&ouid=114663105164561446283&rtpof=true&sd=true" title="Go to Our Student Members List">
                            <button type="button" class="btn btn-primary mt-5" style={{ width: "15rem", fontSize: "1.2rem" }}>Our Student Members</button>
                        </a>
                    </div>
                </div> */}
            </div>

            {/* GUEST SECTION */}
            <div>
                <div class="container p-4">
                    <div class="d-flex flex-wrap"></div>
                    <div class="col-md-12" style={{ textAlign: "justify" }}>
                        <h1 class='text-success' style={{ fontSize: "27px", borderBottom: "1px solid green" }}>ABOUT</h1>
                        <p >
                            The Indian Ceramic Society (InCerS) incubated the student chapter at the department of ceramic engineering, NIT Rourkela
                            in the year 2017 with the aim to 'calcinate' the ever-evolving raw interest in materials and their properties, and its
                            active members has been bestowed with the best student's chapter for its outstanding contribution during the 86th Annual
                            General Meeting held at Indian Institute of Technology, Varanasi, 8-9 December 2022. The InCerS student chapter at NIT Rourkela
                            has successfully organized the 1st National Conference (MRITTIKA 1.0) in the year 2019, comprising multiple events, including
                            quiz competitions, model presentations, and paper presentation. The session was graced by industry professionals, scientists
                            and eminent personalities from TRL Krosaki, Kerneos aluminate, Aditya Birla Insulators, Tata steel, NALCO, CGCRI and many more.
                            The brainstorming sessions organized by students brought up hefty goodies for exceptionally performing candidates.
                        </p>
                        <p >
                            National Institute of Technology (NIT), Rourkela was founded as Regional Engineering College, Rourkela in 1961. It is a
                            prestigious Institute with a reputation for excellence at both undergraduate and postgraduate levels, fostering the spirit
                            of national integration among the students, a close interaction with industry and a strong emphasis on research, both basic
                            and applied. It's consistently ranked within the TOP 20 engineering institutes for 5 consecutive years as per MOE's NIRF,
                            Govt. of India and has retained a good world ranking among its peer Institutes. The city of Rourkela is a bustling industrial
                            town, cosmopolitan by nature and is well connected to all parts of the country by road, rail & air. It is en route the
                            Howrah-Mumbai main line of the South-Eastern Railway. Nesting amidst greenery on all sides. NIT campus is approximately 7km
                            from Rourkela railway station. The nearest airports are Rourkela, Jharsuguda, Ranchi, Kolkata and Bhubaneswar.
                        </p>
                    </div>
                </div>


                <div class="container p-4">
                    <h1 class="text-center font-weight-bold " >GUEST LECTURE</h1>
                    <h2 class='text-success p-4 mt-5' style={{ fontSize: "22px" }}>GUEST LECTURE-1</h2>
                    <div class="col-md-12 card-effect">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 WTdesign">
                            <div class="card-body d-flex flex-column align-items-start" style={{ textAlign: "justify" }}>
                                <strong class="d-inline-block mb-2 text-primary">Industry Academia Interaction Session</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Dr. Birendra Prasad</a>
                                </h6>
                                <br />
                                <p class="card-text mb-4" >
                                    Indian Ceramic Society, Student Chapter NIT Rourkela  conducted an informative symposium. This offline session
                                    highlighted a plethora of information on the Refractory product manufacturing- The current scenario. The chief
                                    guest , Mr. Birendra Prasad ,plant head at Dalmia- OCL (Rajgangpur unit) & Head of Dalmia research Institute
                                    enunciated about the aforementioned topic.
                                </p>
                                <p class="card-text mb-auto">
                                    Insights-Refractory products are materials that can withstand high temperatures, corrosion, and erosion. They are used
                                    in industries such as steel, cement, glass, and petrochemicals, where high temperatures and harsh environments are common.
                                    Advanced technologies such as computer-aided design, automated mixing, and firing control systems are used to optimize
                                    production efficiency and product quality.
                                </p>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block p-2 mt-5" alt="Thumbnail [200x250]" src="images/GL-1.png" style={{ width: "200px", height: "250px" }} />
                        </div>
                    </div>

                    <h2 class='text-success p-4' style={{ fontSize: "22px" }}>GUEST LECTURE-2</h2>
                    <div class="col-md-12 card-effect">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 WTdesign">
                            <div class="card-body d-flex flex-column align-items-star" style={{ textAlign: "justify" }}>
                                <strong class="d-inline-block mb-2 text-primary">Industry Academia Interaction Session</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="#">Dr. Govind Pahari</a>
                                </h6>
                                <br />
                                <p class="card-text mb-4">
                                    The Department of Ceramic Engineering and InCerS (Indian Ceramic Society), NIT Rourkela Chapter
                                    organized its 2nd "Invited Guest lecture" on "High Voltage Porcelain Insulators manufacturing technique and various
                                    testing processes" on 12th of November, 2022 (3:30 PM onwards) during the INNOVISION, largest techno-management fest
                                    of Eastern India organized by NIT Rourkela.
                                </p>
                                <p class="card-text mb-auto">
                                    The invited lecture was graced by our esteemed Speaker- Dr. Gobinda Pahari, Asst. Vice President, Functional Head Operations,
                                    Aditya Birla Insulators. The idea of conducting the guest lecture is to make students aware of the working and demonstration
                                    of several industrial processes.
                                </p>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block mt-5" alt="Thumbnail [200x250]" src="images/GG-11.png" style={{ width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Premritika events */}
            <div class="d-flex justify-content-center m-4">
                <a href="/mritika">
                    <button class="btn btn-primary" style={{ marginTop: "0rem" }}>Visit Mrittika 2023</button>
                </a>
            </div>
            <Footer />
        </div >
    </>);
}

export default AboutIncersChapter
