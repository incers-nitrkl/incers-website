import React from 'react';
import Brochure from '../../images/brochure2019.pdf';
import Navbar from '../../Navbar';
import './Mrittika2019.css'
import Footer from '../Footer/Footer';
import {ParticipatingInd, M19Gallery} from "./Mrittika2019Data"



const Mrittika2019 = () => {

    return (<>
        <Navbar />
        <div className=' '>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div>
                <img src="images/MM-banner.png" alt="Incers" className='MMmobile' />
            </div>

            {/* new change for about */}
            <div class="container p-4">
                <div class="col-md-12 text-justify">
                    <h1 className='d-flex justify-content-center' style={{ fontSize: "30px" }}>INCERS NITR</h1>
                    <p >
                        The Indian Ceramic Society (InCerS) opened up its student chapter for the first time at NIT
                        Rourkela in the year 2017 with the aim to 'calcinate' the ever-evolving raw interest in materials
                        and their properties and has been awarded for the Best Student's Chapter for its outstanding
                        performance in the AY 21-22.
                        The InCerS chapter of NIT Rourkela organized the 1st National Conference (MRITTIKA 1.0) in
                        the year 2019, which comprised of Quiz competition, Model presentation and Paper
                        presentation. The Session was graced by Industrial delegates, scientists and eminent
                        personalities from TRL Krosaki, Kerneos aluminate, Aditya Birla Insulators, Tata steel, NALCO,
                        CGCRI and many more. The session was a confluence of young minds, Ceramic advancements
                        and industrial big shots. The brainstorming events brought up hefty goodies for exceptionally
                        performing candidates.
                    </p>
                </div>
            </div>

            <section class="container p-4">
                <div class="d-flex flex-wrap">
                    <div class="col-md-12">
                        <h3 class="text-center">MRITTIKA EVENTS 2019</h3>
                        <p class="text-justify mb-4">
                            The Indian Ceramic Society student chapter of NITR conducted a two day conference,
                            Mrittika  2019 from 06 April 2019 to 07 April 2019. It involves various sessions starting from paper presentations
                            to quizzes and lectures on various domains of ceramics.It was attended by some of the industry’s top names,
                            including- NALCO, Tata Steel, TRL krosaki, Aditya  Birla Group, Kerneos  aluminate, CGCRI
                        </p>
                        <h5 class="">Participating Companies and industry experts</h5>
                        <p class="text-justify">
                            NALCO Tata Steel, TRL krosaki, Aditya  Birla Group, Kerneos aluminate, CGCRI.
                            Also there was a common platform for students , scientists, and industrialists to contribute to
                            the development of ceramics.
                        </p>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {/* <div class="col-sm-12 col-md-6 col-lg-6 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M19item M19box">
                            <img class="img-fluid" src="images/20190407_185026.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M19item M19box">
                            <img class="img-fluid" src="images/20190406_115551.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M19item M19box">
                            <img class="img-fluid" src="images/20190406_122141.jpg" alt="Incers"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                        <div class="M19item M19box">
                            <img class="img-fluid" src="images/20190407_152923.jpg" alt="Incers"/>
                        </div>
                    </div> */}

                        {
                            ParticipatingInd.map((data, index)=>{
                                return(
                                    <div class="col-sm-12 col-md-6 col-lg-6 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                <div class="M19item M19box">
                                <img class="img-fluid" src={data.img} alt="Incers"/>
                                </div>
                                </div>
                                )
                            })
                        }


                </div>
            </section>

            <section class="container p-4">
                <div class="d-flex flex-wrap">
                    <div class="col-md-12">
                        <h3 class="text-center font-weight-bold">MRITTIKA SPONSERS 2019</h3>
                        <p class=" text-center">To become a better you, remember to be grateful to people who have contributed to making you who you are today"</p>
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row'>
                    <div className='w-100 w-lg-50'>
                        <h4 className='d-flex justify-content-center text-success mt-4'>PLATINIUM SPONSER</h4>
                        <div className='d-flex flex-row'>
                            <div class="col-sm-6 col-md-6 col-lg-6 mt-4">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S3.jpeg" alt="Incers"/>
                                    <a href="https://www.trlkrosaki.com/" class="text-center p-2" >More Info</a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 mt-4">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S2.jpeg" alt="Incers"/>
                                    <a href="https://www.imerys.com/" class="text-center p-2">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 w-lg-50'>
                        <h4 className='d-flex justify-content-center text-success mt-4'>SILVER SPONSER</h4>
                        <div className='d-flex flex-row'>
                            <div class="col-sm-6 col-md-6 col-lg-6 mt-4">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S1.jpeg" alt="Incers"/>
                                    <a href="https://www.adityabirla.com/" class="text-center p-2" >More Info</a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 mt-4">
                                <div class="card">
                                    <img class="card-img-top h-262" src="images/S4.jpeg" alt="Incers"/>
                                    <a href="https://www.elkem.com/" class="text-center p-2">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="M19Gallery">
                <div class="container p-4">
                    <div class="col-md-12">
                        <h3 class="text-center font-weight-bold">MRITTIKA GALLERY 2019</h3>
                    </div>
                    <div class="d-flex flex-wrap">
                        {/* <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G1.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G2.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G3.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G4.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G5.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G6.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G7.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G8.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G9.jpg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G10.jpeg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G11.jpg" alt="Incers"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                            <div class=" M19item M19box">
                                <img class="img-fluid" src="images/G12.jpg" alt="Incers"/>
                            </div>
                        </div> */}

{
                            M19Gallery.map((data, index)=>{
                                return(
                                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                        <div class=" M19item M19box">
                                            <img class="img-fluid" src={data.img} alt="Incers"/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            {/* Technical session */}
            <div class="container">
                <h3 class="text-center font-weight-bold my-4">TECHNICAL SESSION</h3>
                <div class="d-flex flex-wrap" >
                    <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 M19design2" >
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-success h4">Plenary Lectures</strong>
                            <p className='text-justify'>
                                Industrial delegates are invited for the same to share their words of
                                wisdom on the current affairs related to their firm or to the concerned
                                agenda the firm is working on: with a base solely contemplating on
                                ceramic industry within a window of around half an hour. Lectures
                                proposed for the aforementioned issue is on the basis of accountable
                                registrations. Owing to the time precincts, the earliest of the registered
                                delegates shall be entertained.
                            </p>
                            <strong class="d-inline-block mb-2 text-success h4">Panel discussions</strong>
                            <p className='text-justify'>
                                Industrial delegates are also cordially welcomed to be a part of the panel
                                within a two-hour window per discussion in a conference of tentatively 10
                                panellists (liable to changes depending on registrations). The agenda
                                might include topics from both basic (refractory, glass etc.) and advanced
                                ceramics (nano ceramics etc.) that inculcates on going agendas the firm
                                might be working on.
                            </p>
                    </div>
                </div>
            </div>
        </div>

        {/* student session */}
        <div class="container">
                <h3 class="text-center font-weight-bold my-4">STUDENT'S SESSION</h3>
                <div class="d-flex flex-wrap" >
                    <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 M19design2" >
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-success h4">Paper/Poster Presentation</strong>
                            <p className='text-justify'>
                                Students (B. Tech and M. Tech only) from all across the country are
                                invited to present their paper/poster/presentation related to ceramic
                                science/engineering. A time window of 10 minutes will be given to present
                                the same and will be judged by a panel of experts. Cash prizes worth
                                Rupees 8,000 will be provided to top three entries. Interested students can
                                register by sending the summary of the work on the student chapter’s
                                official email id incersnitr@gmail.com
                            </p>
                            <strong class="d-inline-block mb-2 text-success h4">Model/Product Presentation</strong>
                            <p className='text-justify'>
                                Teams and individuals can present their ceramic based models during the
                                event. Model or product may be in working or static condition. Originality
                                should be maintained and kept in mind while developing models. Prizes
                                worth thirteen thousand rupees will be awarded to top thirteen models or
                                products.
                            </p>
                            <strong class="d-inline-block mb-2 text-success h4">Quiz</strong>
                            <p className='text-justify'>
                                Ceramic science/engineering based technical questions will be asked,
                                maximum of five members can form a team and we will permit at most 5
                                teams. Early bird registration is advised. Prizes worth eight thousand
                                rupees will be awarded to the top two teams.
                            </p>
                    </div>
                </div>
            </div>
        </div>

        
        {/* for brochure of 2019 */}
        <div className='d-flex justify-content-center'>
            <a className='m-4' href={Brochure} download >
                <button type="button" class="btn btn-primary btn-join" >Brochure 2019</button>
            </a>
        </div>
        <Footer />
    </div >
    </>);
}

export default Mrittika2019;