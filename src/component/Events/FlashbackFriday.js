import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './FlashbackFriday.css'
import { FlashbackFriday23, FlashbackFriday22 } from './FlashbackFridayData';

const Events3 = () => {

    return (<>
        <Navbar />
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div>
                <img class="" src="images/FF-banner.png" alt="suraj" className='FFmobile' />
            </div>

            {/* New add */}
            <div class="d-flex flex-column flex-wrap mt-4">
                <div class="d-flex justify-content-center " >
                    <h2 style={{ fontSize: "2.5rem" }}>FLASHBACK FRIDAY</h2>
                </div>
                <div class="text-justify px-5 py-4">
                    <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once
                        thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood
                        backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success,
                        while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way
                        to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain
                        reasons. To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from
                        successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a
                        conglomeration of important events in their journey from college to where they are now. All the information will be
                        shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                    </p>
                </div>

                {/* FlashBack Friday video  */}
                <div class="container" style={{ marginTop: "-5%" }}>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe style={{ transform: "scale(0.8)" }} class="" title='Flashback Friday' src="//www.youtube.com/embed/EIfB_z3K0mE"></iframe></div>
                </div>
            </div>

            <div >
                <section class="container p-0">
                    <div class="d-flex flex-wrap">
                        <h3 class="text-center font-weight-bold" style={{ margin: "1rem" }}>FLASHBACK<span class=""> INTERVIEWS</span></h3>
                    </div>

                    {/* Executive Cards HOVER EFFECT */}
                    <h3 class="d-flex flex-wrap" style={{ margin: "1.5rem", marginLeft: '10%' }}>INTERVIEW 2022-23</h3>
                    <div class="d-flex flex-wrap justify-content-center">

                        {
                            FlashbackFriday23.map((data, index)=>{
                                return(
                                    <div class="card hover m-3" data-wow-duration="1.4s">
                                        <a href={data.instagram}>
                                        <img class="card-img-top" style={{ height: "230px", width: "200px" }} src={data.img} alt='Incers'/>
                                        </a>
                                    </div>
                                )
                            })
                        }

                        

                    </div>


                    <h3 class="d-flex flex-wrap" style={{ margin: "1.5rem", marginLeft: '10%' }}>INTERVIEW 2021-22</h3>
                    <div class="d-flex flex-wrap justify-content-center">


                        {
                            FlashbackFriday22.map((data, index)=>{
                                return(
                                    <div class="card hover m-3" data-wow-duration="1.4s">
                                        <a href={data.instagram}>
                                        <img class="card-img-top" style={{ height: "230px", width: "200px" }} src={data.img} alt='Incers'/>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
            <Footer />
        </div>
    </>);
}

export default Events3
