import React from 'react';
import Brochure from '../../images/brochure2019.pdf';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './Mrittika2023.css'
import { Prof , ExecuitveMember, TitleS, GoldSilverS, Gallary23 } from './Mrittika2023Data';


const Mritika = () => {

    return (<>
        <Navbar />
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div class="">
                <img class="M23mobile" src="images/MRITTIKA2.0-banner.png" alt="suraj" />
            </div>

            {/* New add */}
            <div className="d-flex justify-center flex-column align-items-center p-5">
                <h1>MRITTIKA 2.0</h1>
                <div className="text-justify">
                    <p>The 2nd annual session (MRITTIKA 2.0) of the Indian Ceramic
                        Society, the student chapter of NIT Rourkela, aims to bring
                        together leading professionals from academia and industries,
                        research scholars, students, and exhibitors to share knowledge,
                        and exchange ideas on various aspects of ceramic science &
                        technology. This national-level conference aims to cover recent
                        advances in the field of structural and engineering ceramics,
                        covering a wider gamut of industrial applications with the target
                        audience including professionals and students who wish to pursue
                        a career in research and development or join the industry. The 3-
                        day national conference will provide the right platform for
                        delegates to address the larger audience on multiple thematic
                        areas and ignite the young minds. Eminent faculties & industry
                        experts will enlighten the sessions by sharing their knowledge on
                        the current trend and future aspects of ceramics. Early career
                        professionals are also encouraged to share their work during the
                        conference. The 3-day national conference will also include
                        exciting sessions on entrepreneurship along with a PowerPoint
                        karaoke and quiz competition.
                    </p>
                </div>
            </div>

            <section class="container d-flex flex-column text-center p-5" >
                <div class="col-md-12 wow fadeInUp">
                    <h2 class="font-weight-bold">CONVENOR</h2>
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Ritwik.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Prof. Ritwik Sarkar</h6>
                                <h6 style={{ color: "green" }}><strong>Convenor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Pratihar.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Prof. Swadesh Kumar Pratihar</h6>
                                <h6 style={{ color: "green" }}><strong>Convenor</strong></h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professor */}
                <div class="col-md-12 wow fadeInUp">
                    <h2 class="font-weight-bold">OUR PROFESSORS</h2>
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    {/* <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Bibhuti.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Bibhuti Bhusan Nayak</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Debashish.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Debashish Sarkar</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Japes.jpeg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Japes Bera</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Ritwik.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Ritwik Sarkar</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Santanu_bhat.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Santanu Bhattacharyya</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Pratihar.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Swadesh Kumar Pratihar</h6>
                                <h6 style={{ color: "green" }}><strong>Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/santanu_behera.jpg" alt="Incers"/>
                            <div class="card-block" >
                                <h6 class="card-title text-center">Santanu Kumar Behera</h6>
                                <h6 style={{ color: "green" }}><strong>Associate Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/ranabrata.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Ranabrata Mazumder</h6>
                                <h6 style={{ color: "green" }}><strong>Associate Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Pal.jpg" alt="Incers"/>

                            <div class="card-block">
                                <h6 class="card-title text-center">Sumit Kumar Pal</h6>
                                <h6 style={{ color: "green" }}><strong>Associate Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Partha.jpg" alt="Incers"/>

                            <div class="card-block">
                                <h6 class="card-title text-center">Partha Saha</h6>
                                <h6 style={{ color: "green" }}><strong>Assistant Professor </strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Sudip.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Sudip Dasgupta</h6>
                                <h6 style={{ color: "green" }}><strong>Assistant Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/sunipa.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Sunipa Bhattachatyya</h6>
                                <h6 style={{ color: "green" }}><strong>Assistant Professor</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Arindum.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Arindam Paul</h6>
                                <h6 style={{ color: "green" }}><strong>Assistant Professor </strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/Arun.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Arun Chowdhury</h6>
                                <h6 style={{ color: "green" }}><strong>Assistant Professor</strong></h6>
                            </div>
                        </div>
                    </div> */}

{
                            Prof.map((data, index)=>{
                                return(
                                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                                    <div class="card" style={{ height: "295px", width: "100%" }}>
                                    <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src={data.img} alt="Incers"/>
                                    <div class="card-block">
                                            <h6 class="card-title text-center">{data.name}</h6>
                                            <h6 style={{ color: "green" }}><strong>{data.des}</strong></h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                </div>
            </section>

            {/* Executive Members */}
            <section class="container d-flex flex-column text-center p-4" >
                <div class="col-md-12 wow fadeInUp">
                    <h2 class="font-weight-bold">EXECUTIVE MEMBERS</h2>
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    {/* <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/DP.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Deepsikha Brahma</h6>
                                <h6 style={{ color: "green" }}><strong>Chairperson</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/PM2.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Partha Mishra</h6>
                                <h6 style={{ color: "green" }}><strong>Vice-Chairperson</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/RD.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Rittwik Devdatta Das</h6>
                                <h6 style={{ color: "green" }}><strong>Secretory</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/AS.png" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Aashay</h6>
                                <h6 style={{ color: "green" }}><strong>Joint Secretory</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/PKS.jpeg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Pratyush Kundu</h6>
                                <h6 style={{ color: "green" }}><strong>Treasurer</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/JM.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Jyotishman Mohanty</h6>
                                <h6 style={{ color: "green" }}><strong>BR 2nd Year</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/SK.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Summit Kumar Oram</h6>
                                <h6 style={{ color: "green" }}><strong>BR 3rd Year</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                        <div class="card" style={{ height: "295px", width: "100%" }}>
                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src="images/U.jpg" alt="Incers"/>
                            <div class="card-block">
                                <h6 class="card-title text-center">Uday</h6>
                                <h6 style={{ color: "green" }}><strong>BR 4th Year</strong></h6>
                            </div>
                        </div>
                    </div> */}
                    {
                            ExecuitveMember.map((data, index)=>{
                                return(
                                    <div class="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center p-4 rounded">
                                        <div class="card" style={{ height: "295px", width: "100%" }}>
                                            <img style={{ height: "220px", width: "100%" }} class="img-fluid object-fit-cover" src={data.img} alt="Incers"/>
                                                <div class="card-block">
                                                    <h6 class="card-title text-center">{data.name}</h6>
                                                    <h6 style={{ color: "green" }}><strong>{data.des}</strong></h6>
                                                </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </section>

            <div class="d-flex justify-content-center" >
                <a href="https://docs.google.com/spreadsheets/d/1sgN1HQ8HXODLbOcXS6YR5HDRbOcIELPi/edit?usp=share_link&ouid=114663105164561446283&rtpof=true&sd=true" title="Go to Our Student Members List">
                    <button type="button" class="btn btn-primary" style={{ width: "15rem", fontSize: "1.2rem" }}>Our Student Members</button>
                </a>
            </div>

            {/* new sponsers 2023 */}
            <section class="container p-4" >
                <div class="d-flex flex-wrap">
                    <div class="col-md-12 mx-auto wow fadeInUp">
                        <h3 class="text-center font-weight-bold">MRITTIKA SPONSERS 2023</h3>
                        <p class=" text-center">To become a better you, remember to be grateful to people who have contributed to making you who you are today"</p>
                    </div>
                </div>
                <h3 class="font-weight-bold p-4">TITLE SPONSERS</h3>
                <div class="d-flex flex-wrap">
                    {/* <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp " data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/TSP1.png" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://mahakoshalrefractories.com/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp " data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/TSP2.png" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://www.trlkrosaki.com/" class="pull-right">More Info</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/TSP3.png" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://aaryametallurgicals.com/management/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/TSP4.png" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://www.hindalco.com/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div> */}
                    {
                            TitleS.map((data, index)=>{
                                return(
                                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card hover">
                                            <img class="card-img-top mt-3" src={data.img} alt="Incers"/>
                                            <div class="card-footer">
                                                <a href={data.link} class="pull-right">More Info</a>
                                            </div>
                                    </div>
                                    </div>
                                )
                            })
                        }
                </div>

                <h3 class="font-weight-bold p-4">GOLD SPONSERS/SILVER SPONSERS</h3>
                <div class="d-flex flex-wrap">
                    {/* <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/TSP5.jpeg" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://www.sarvesh.com/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/GSP1.jpeg" alt="Incers" />
                            <div class="card-footer">
                                <a href="https://www.elkem.com/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/SSP.jpeg" alt="Incers"/>
                            <div class="card-footer">
                                <a href="https://www.calderys.com/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="card hover">
                            <img class="card-img-top mt-3" src="images/SSP2.jpeg" alt="Incers"/>
                            <div class="card-footer">
                                <a href="http://www.maithanceramic.in/" class="pull-right">More Info</a>
                            </div>
                        </div>
                    </div> */}
                    
                        {
                            GoldSilverS.map((data, index)=>{
                                return(
                                    <div class="col-sm-6 col-md-4 col-lg-3 p-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card hover">
                                            <img class="card-img-top mt-3" src={data.img} alt="Incers"/>
                                            <div class="card-footer">
                                                <a href={data.link} class="pull-right">More Info</a>
                                            </div>
                                    </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </section>
        </div>


        {/* GUEST SECTION */}
        <section class="d-flex p-5 text-center mybg-music">
            <div class="container ">
                <div class="d-flex flex-wrap">
                    {/* <div class="col-md-12">
                        <h3 class="text-center font-weight-bold text-white" >MRITIKA GALLERY 2023</h3>
                    </div>
                </div>
                <div class="d-flex flex-wrap">
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M23box">
                            <img class="img-fluid" src="images/coming.jpg" alt="Incers"/>
                        </div>
                    </div>
                </div> */}
                {
                            Gallary23.map((data, index)=>{
                                return(
                                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 overflow-hidden wow bounceInUp" data-wow-duration="1.4s">
                                        <div class="M23box">
                                        <img class="img-fluid" src={data.img} alt="Incers"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>


        {/* Premritika events */}
        <div className='container p-4'>
            <h3 class="text-center font-weight-bold mb-3" >PRE-MRITIKA EVENTS</h3>
            <div class="col-md-12 card-effect">
                <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 M23design">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="mb-3" >
                            <a class="text-dark" href="https://www.instagram.com/nitr_incers/">BOX CRICKET</a>
                        </h4>
                        <strong class="d-inline-block mb-2 text-primary">"Jo khel dil ko itna bhaye usko dekhe bina kese raha jaye"</strong>
                        <p className='text-justify'>
                            MRITTIKA 2.0 brings you one of those
                            exciting game which is loved by everyone and played by anyone, Cricket in the small pitch played
                            by less players but watched by much people "Box cricket". <br /><br />
                            Gear up everyone to see the short format
                            of cricket with boys and girls in a combined team of 7 players each, a huge crowd of NITR to watch
                            out you so make your preparation at a fantastic level so that you can win awards and goodies worth
                            1k  and felicitation ceremony for the players also so that you can have a memorable evening to have
                            fun and test of your sportsmanship too.
                        </p>
                        <a class="btn btn-outline-primary btn-sm" role="button" href="https://docs.google.com/forms/d/e/1FAIpQLSdfYmbdtr1Qc-r7Yv6ghAdQ8NBQkSIBuBDbW57rh8o6SLS3wg/viewform?usp=sf_link">Register Here</a>
                    </div>
                    <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail" src="images/BC.png" style={{ width: "230px", height: "250px", marginTop: "3rem" }} />
                </div>
            </div>
            <div class="col-md-12 card-effect">
                <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 M23design">
                    <div class="card-body d-flex flex-column align-items-start">
                        <h4 class="mb-3">
                            <a class="text-dark" href="https://www.instagram.com/nitr_incers/">BADMINTON </a>
                        </h4>
                        <strong class="d-inline-block mb-2 text-primary">"Challenge yourself and others in the ultimate badminton battle!"</strong>
                        <p className='text-justify'>
                            Come and join us for a day of fun as Mrittika'23 brings you the sport of badminton
                            where you will be competing in singles. The competition will start with elimination
                            rounds where only the best players will advance to the finals. At the end of the event,
                            winners will be awarded with rewards and goodies worth ₹1k. <br /><br />
                            So, don't miss out on the electric atmosphere as players battle it out for victory.
                        </p>
                    </div>
                    <img class="card-img-right flex-auto d-none d-lg-block p-2" alt="Thumbnail" src="images/BC1.png" style={{ width: "200px", height: "250px", marginTop: "0.5rem" }} />
                </div>
            </div>
        </div>


        {/* Theme  */}
        <div class="container p-4" style={{ backgroundColor: "#F3F3EA" }}>
            <h3 class="text-center font-weight-bold" >THEME OF THE CONFERENCE</h3>
            <div class="d-flex flex-wrap" >
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


        {/* Technical session */}
        <div class="container p-4">
            <h3 class="text-center font-weight-bold ">TECHNICAL SESSION</h3>
            <div class="d-flex flex-wrap flex-row" >
                <div class="col-md-12 card-effect ">
                    <div class="card flex-md-row shadow-sm h-md-250 M23design" >
                        <div class="card-body d-flex flex-column align-items-start text-justify p-4">
                            <h4 class="mb-3">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Plenary Lectures/Invited Lectures </a>
                            </h4>
                            <p>
                                Industry delegates/Academic Experts are invited for the same to share their words
                                of wisdom on the current affairs related to their ongoing work/Research: with a
                                base solely contemplating on the ceramic industry within a window of around half
                                an hour. Lectures proposed for the aforementioned issue are based on accountable
                                registrations.
                            </p>
                            <h4 class="mb-3">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Contributory Lectures </a>
                            </h4>
                            <p>
                                Industry delegates/Academic Experts who wish to present their ongoing work
                                /Research paper are also welcome to contribute to the conference with a base
                                solely contemplating on the ceramic industry within a window of around half an
                                hour. Lectures proposed for the aforementioned issue are based on accountable
                                registrations.
                            </p>
                            <h4 class="mb-3">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Panel discussions</a>
                            </h4>
                            <p>
                                Industry delegates/Academic Experts are also cordially welcomed to be a part of
                                the panel within a two-hour window per discussion in a conference of tentatively 10
                                panellists (liable to changes depending on registrations). The agenda might include
                                topics from both basic (refractory, glass etc.) and advanced ceramics (nanoceramics
                                etc.) that inculcate ongoing agenda the firm might be working on.
                            </p>
                            <h4 class="mb-0">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Poster Presentations(open to all categories)</a>
                            </h4>
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
        </div>


        {/* Fun eventa */}
        <div class="container">
            <h3 class="text-center font-weight-bold mb-3" >FUN EVENTS</h3>
            <div class="d-flex flex-wrap">
                <div class="col-md-12 card-effect" >
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 M23design ">
                        <div class="card-body d-flex flex-column align-items-start">
                            <h4 class="mb-3">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">PowerPoint Karaoke</a>
                            </h4>
                            <p>A fun PowerPoint Karaoke event to challenge both the author of the slide and the presenter to
                                improve their communication skills. Submit or Present a Slide (or Both!)</p>
                            <p> &emsp; Create a PowerPoint side with a contribution to your research or a materials science-related topic. <br />
                                &emsp;Don't be too serious! Popular science topics aren't the point; we're looking for the funniest story or best &emsp; design! <br />
                                &emsp;Topics can range from your actual research to something silly, such as the use of rubber ducks. Be sure &emsp;to keep it simple <br />
                                &emsp;so that anyone can present, and keep it clean—inappropriate content will not be accepted.</p>
                            <p>During the event, presenters will be assigned a random slide out of the pool of the submitted slides by the authors. Presenters will have five minutes to prepare a two-minute (maximum) presentation.
                                Winners will be selected by anonymous audience voting. Goodies will be awarded to the best three authors and presenters.</p><br />
                            <a class="btn btn-outline-primary btn-sm" role="button" href="https://forms.gle/CF8nhscUMEvhgQx69">Register Here</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 card-effect" >
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250 M23design">
                        <div class="card-body d-flex flex-column align-items-start">
                            <h4 class="mb-3">
                                <a class="text-dark" href="https://www.instagram.com/nitr_incers/">QUIZ (Mega Hunt Game)</a>
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
                                whether they survived all the levels or were eliminated in any particular level.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center mb-3">
            <a href={Brochure} download >
                <button type="button" class="btn btn-primary" >Brochure 2019</button>
            </a>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <a href="/mritika1">
                <button class="btn btn-primary" >Visit Mrittika 2019</button>
            </a>
        </div>
        <Footer />
    </>);
}

export default Mritika
