import React from 'react';
import Navbar from '../../Navbar';
import "react-multi-carousel/lib/styles.css";
import Footer from '../Footer/Footer';
import './PresentationCompetitions.css';
import comp1 from "../../images/PresentationCompetation/comp1.jpeg";
import comp2 from "../../images/PresentationCompetation/comp2.jpeg";
import comp3 from "../../images/PresentationCompetation/comp3.jpeg";
import comp4 from "../../images/PresentationCompetation/comp4.jpeg";
import comp5 from "../../images/PresentationCompetation/comp5.jpeg";
import comp6 from "../../images/PresentationCompetation/comp6.jpeg";
import comp7 from "../../images/PresentationCompetation/comp7.jpeg";
import comp8 from "../../images/PresentationCompetation/comp8.jpeg";
import comp9 from "../../images/PresentationCompetation/comp9.png";

const Events1 = () => {
    return (<>
        <Navbar />
        <div >
            <div class="container">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

                <h3 class="pb-3 mb-4 border-bottom">
                    PRESENTATIONS
                </h3>


                {/* New 2023 */}
                <h4 class="" style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>PPT PRESENTATION COMPETITION 22-23</h4>
                <div class="col-md-6 " >
                    <div class="card text-white flex-md-row shadow-sm h-md-250 PCdesign">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                            <h6 class="mb-0">
                                <a class="text-white" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-3</a>
                            </h6>
                            <div class="mb-1 text-white-50 small">Dec 20</div>
                            <p class="card-text mb-auto text-white" >Ceramics made with Clay</p>
                            <p class="card-text mb-auto text-white" >Ceramics are objects made from clay that have been fired at high temperatures to... </p>
                            <a class="btn btn-outline-light btn-sm mt-4" role="button" href="https://www.youtube.com/watch?v=u71UwFbXewc">Continue watching</a>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp9} style={{ width: "200px", padding: '8px' }} />
                    </div>
                </div>

                {/* old ppt */}
                <h4 class="PC2" style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>PPT PRESENTATION COMPETITION 20-22</h4>
                <div class="d-flex flex-wrap ">
                    <div class="col-md-6 card-effect " >
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 PCdesign2" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto" >Silicon Sphere</p>
                                <p class="card-text mb-auto">"silicon sphere- An interesting approach to redefine the kilogram!!"</p>
                                <a class="btn btn-outline-primary btn-sm mt-4" role="button" href="https://youtu.be/zAelZDceB14">Continue watching</a>
                            </div>

                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp1} style={{ width: "200px", padding: '8px' }} />

                        </div>
                    </div>

                    <div class="col-md-6 card-effect ">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 PCdesign3" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Ceramic tempered Glass</p>
                                <p class="card-text mb-auto">Tempered glass- Ceramic's wonders of glasses
                                    used by world's leading tech...</p>
                                <a class="btn btn-outline-success btn-sm mt-4" href="https://youtu.be/4xUInIdO8I0">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp2} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>

                    <div class="col-md-6 card-effect ">
                        <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 PCdesign2" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Metamaterials</p>
                                <p class="card-text mb-auto">Meta materials- Super Advanced Modelled ceramics
                                    for sophisticated uses in...</p>
                                <a class="btn btn-outline-primary btn-sm mt-4" role="button" href="https://youtu.be/kZqFgkqj_QQ">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp3} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>
                    <div class="col-md-6 card-effect ">
                        <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 PCdesign3" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-dark" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-1</a>
                                </h6>
                                <div class="mb-1 text-muted small">Aug 30</div>
                                <p class="card-text mb-auto">Conductive Ceramics</p>
                                <p class="card-text mb-auto">CONDUCTIVE CERAMICS- Traditional use of ceramics as
                                    traditional insulators to be...</p>
                                <a class="btn btn-outline-success btn-sm mt-4" href="https://youtu.be/04WUCfsfRSY">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp4} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap ">
                    <div class="col-md-6 ">
                        <div class="card text-white  flex-md-row mb-4 shadow-sm h-md-250 PCdesign" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{ color: "white" }}>PZT</p>
                                <p class="card-text mb-auto" style={{ color: "white" }}>"PZT- A highly smart Ceramic based lead material made up of Pervoskite ."</p>
                                <a class="btn btn-outline-light btn-sm mt-4" role="button" href="https://youtu.be/2AYpTP9XBVU" >Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp5} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 PCdesign4" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" >Cereamics in aerospace</p>
                                <p class="card-text mb-auto">Uses of Ceramics in Aerospace- The various uses of ceramics
                                    in the space...</p>
                                <a class="btn btn-outline-light btn-sm mt-4" href="https://youtu.be/KHoAPQDb94c">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp6} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>

                    <div class="col-md-6 " >
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 PCdesign" >
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{ color: "white" }}>Application of Ceramics in Electronics</p>
                                <p class="card-text mb-auto" style={{ color: "white" }}>"app of ceramics in electronics- ceramics used in microcomponents ..."
                                </p>
                                <a class="btn btn-outline-light btn-sm mt-4" role="button" href="https://youtu.be/cC4Ic--uNLY">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp7} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 PCdesign4" >
                            <div class="card-body d-flex flex-column align-items-start shadow-effect">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="https://www.instagram.com/nitr_incers/">Online Presentastion Competition-2</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto">Ceramics in Electronics</p>
                                <p class="card-text mb-auto">"ceramics in electronics- The vast use of Ceramics in various minor and major..."
                                </p>
                                <a class="btn btn-outline-light btn-sm mt-4" href="https://youtu.be/KA-fuWdq1UU">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src={comp8} style={{ width: "200px", padding: '8px' }} />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    </>
    )
}

export default Events1