import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './MondayMatter.css'
import { MondayMatter23 , MondayMatter22 } from './MondayMatterData';

const Events4 = () => {
    return (<>
        <Navbar />
        <div >
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div>
                <img src="images/MM-banner.png" alt="Incers" className='MMmobile' />
            </div>

            {/* New add */}
            <div class="d-flex flex-column flex-wrap mt-4">
                <div class="d-flex justify-content-center " >
                    <h2 style={{ fontSize: "2.5rem" }}>MONDAY MATTER</h2>
                </div>
                <div class="text-justify px-5 py-4">
                    <p>Every week, you suffer from the same malady: a terrible case of the Mondays.
                        You dread that alarm going off. And no matter how many things you try—meditation,
                        reciting inspirational quotes, reading a bunch of happy quotes, you're having
                        trouble getting going. But why not think of Monday as an opportunity rather than
                        a punishment? It's a chance to start fresh. Who wants to wake up to a Monday after
                        a good weekend rest? Mondays are boring, seems longer than usual and almost everyone
                        hates it, right? It is also marked by tiredness and reluctance to start the week's
                        work. But not anymore. NITR-ICS is going to make you look forward to the Monday and
                        the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose
                        of Ceramics and Material Science updates, to keep you intrigued for the rest of the
                        week. We will be keeping you informed of all the latest, known, and unknown realms of
                        material science, making your start of the week an interesting one. To all material
                        enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed
                        to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.
                    </p>
                </div>
            </div>
            <div>
                <section class="container p-0">
                    <div class="d-flex flex-wrap">
                        <h3 class="text-center font-weight-bold" style={{ margin: "1rem" }}>MONDAY MATTER<span class=""> INTERVIEWS</span></h3>
                    </div>

                    {/* Executive Cards HOVER EFFECT */}
                    <h3 class="d-flex flex-wrap" style={{ margin: "1.5rem", marginLeft: '10%' }}>INTERVIEW 2022-23</h3>
                    <div class="d-flex flex-wrap justify-content-center">
                        {/* <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CMJPuzVlJ7e/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm1.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CKLCWNDFfT5/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm2.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CJ5OuilF7cx/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm3.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CGzorlFFf-4/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm4.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CGO3uy_FLOW/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm5.png" alt='Incers'/>
                            </a>
                            
                        </div> */}

                        {
                            MondayMatter23.map((data, index)=>{
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
                    <div class="d-flex flex-wrap justify-content-center" >
                        {/* <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CFG8jIxlHhr/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm6.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CE0wHsLF87y/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm7.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CEjCQZXFNkH/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm8.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CD-yFPklaCg/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm9.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CDhKg5lh4cr/">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm10.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CDJRzw0lpLH/?igshid=YmMyMTA2M2Y=">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm11.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CC2itWVlEyy/?igshid=YmMyMTA2M2Y=">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm12.png" alt='Incers'/>
                            </a>
                        </div>
                        <div class="card hover m-3" data-wow-duration="1.4s">
                            <a href="https://www.instagram.com/p/CCkm_4zFWC9/?igshid=YmMyMTA2M2Y=">
                                <img class="card-img-top" style={{ height: "230px", width: "200px" }} src="images/mm13.png" alt='Incers'/>
                            </a>
                        </div> */}

                        {
                            MondayMatter22.map((data, index)=>{
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

export default Events4
