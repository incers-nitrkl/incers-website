import React from 'react';
import Navbar from '../../Navbar';
import "react-multi-carousel/lib/styles.css";
import Footer from '../Footer/Footer';

const Events1 = () => {
    return (<>
        <Navbar />
        <div class="main_div">
            <div class="container container-1">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
                <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
                <h3 class="pb-3 mb-4 font-italic border-bottom">
                    {/* PRESENTATION'S */}
                </h3>


                {/* New 2023 */}
                <h2 class="heading" style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>PPT PRESENTATION COMPETITION 22-23</h2>

                <div class="row pc1" >
                    <div class="col-md-6 heading-1" >
                        <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design3" style={{ height: "17rem" }}>
                            <div class="card-body d-flex flex-column align-items-start">
                                <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                <h6 class="mb-0">
                                    <a class="text-white" href="#">Online Presentastion Competition-3</a>
                                </h6>
                                <div class="mb-1 text-white-50 small">Dec 20</div>
                                <p class="card-text mb-auto" style={{ color: "white" }}>Ceramics made with Clay</p>
                                <p class="card-text mb-auto" style={{ color: "white" }}>Ceramics are objects made from clay that have been fired at high temperatures to... </p>
                                <a class="btn btn-outline-light btn-sm" style={{ marginTop: "1rem" }} role="button" href="https://www.youtube.com/watch?v=u71UwFbXewc">Continue watching</a>
                            </div>
                            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp9.png" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                        </div>
                    </div>

                    {/* old ppt */}
                    <h2 class="heading-3 PC2" style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>PPT PRESENTATION COMPETITION 20-22</h2>
                    <div class="row">
                        <div class="col-md-6 card-effect heading-1" >
                            <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                    </h6>
                                    <div class="mb-1 text-muted small">Aug 30</div>
                                    <p class="card-text mb-auto" >Silicon Sphere</p>
                                    <p class="card-text mb-auto">"silicon sphere- An interesting approach to redefine the kilogram!!"</p>
                                    <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/zAelZDceB14" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp1.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>

                        <div class="col-md-6 card-effect heading-1">
                            <div class="card flex-md-row mb-4 shadow-sm h-md-250 competition-design2" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                    </h6>
                                    <div class="mb-1 text-muted small">Aug 30</div>
                                    <p class="card-text mb-auto">Ceramic tempered Glass</p>
                                    <p class="card-text mb-auto">Tempered glass- Ceramic's wonders of glasses
                                        used by world's leading tech...</p>
                                    <a class="btn btn-outline-success btn-sm" href="https://youtu.be/4xUInIdO8I0" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp2.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 card-effect heading-1">
                            <div class="card border-primary flex-md-row mb-4 shadow-sm h-md-250 competition-design" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-primary">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                    </h6>
                                    <div class="mb-1 text-muted small">Aug 30</div>
                                    <p class="card-text mb-auto">Metamaterials</p>
                                    <p class="card-text mb-auto">Meta materials- Super Advanced Modelled ceramics
                                        for sophisticated uses in...</p>
                                    <a class="btn btn-outline-primary btn-sm" role="button" href="https://youtu.be/kZqFgkqj_QQ" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp3.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                        <div class="col-md-6 card-effect heading-1">
                            <div class="card border-success flex-md-row mb-4 shadow-sm h-md-250 competition-design2" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-success">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-dark" href="#">Online Presentastion Competition-1</a>
                                    </h6>
                                    <div class="mb-1 text-muted small">Aug 30</div>
                                    <p class="card-text mb-auto">Conductive Ceramics</p>
                                    <p class="card-text mb-auto">CONDUCTIVE CERAMICS- Traditional use of ceramics as
                                        traditional insulators to be...</p>
                                    <a class="btn btn-outline-success btn-sm" href="https://youtu.be/04WUCfsfRSY" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp4.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 heading-1">
                            <div class="card text-white  flex-md-row mb-4 shadow-sm h-md-250 competition-design6" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                    </h6>
                                    <div class="mb-1 text-white-50 small">Dec 20</div>
                                    <p class="card-text mb-auto" style={{ color: "white" }}>PZT</p>
                                    <p class="card-text mb-auto" style={{ color: "white" }}>"PZT- A highly smart Ceramic based lead material made up of Pervoskite ."</p>
                                    <a class="btn btn-outline-light btn-sm" role="button" href="https://youtu.be/2AYpTP9XBVU" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp5.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                        <div class="col-md-6 heading-1">
                            <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design4" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                    </h6>
                                    <div class="mb-1 text-white-50 small">Dec 20</div>
                                    <p class="card-text mb-auto" >Cereamics in aerospace</p>
                                    <p class="card-text mb-auto">Uses of Ceramics in Aerospace- The various uses of ceramics
                                        in the space vehicles...</p>
                                    <a class="btn btn-outline-light btn-sm" href="https://youtu.be/KHoAPQDb94c" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp6.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 heading-2" >
                            <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design6" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                    </h6>
                                    <div class="mb-1 text-white-50 small">Dec 20</div>
                                    <p class="card-text mb-auto" style={{ color: "white" }}>Application of Ceramics in Electronics</p>
                                    <p class="card-text mb-auto" style={{ color: "white" }}>"app of ceramics in electronics- ceramics used in microcomponents of electronics"
                                    </p>
                                    <a class="btn btn-outline-light btn-sm" role="button" href="https://youtu.be/cC4Ic--uNLY" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp7.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                        <div class="col-md-6 heading-2">
                            <div class="card text-white flex-md-row mb-4 shadow-sm h-md-250 competition-design4" style={{ height: "17rem" }}>
                                <div class="card-body d-flex flex-column align-items-start shadow-effect">
                                    <strong class="d-inline-block mb-2 text-white">Ceramic</strong>
                                    <h6 class="mb-0">
                                        <a class="text-white" href="#">Online Presentastion Competition-2</a>
                                    </h6>
                                    <div class="mb-1 text-white-50 small">Dec 20</div>
                                    <p class="card-text mb-auto">Ceramics in Electronics</p>
                                    <p class="card-text mb-auto">ceramics in electronics- The vast use of Ceramics in various minor and major...
                                    </p>
                                    <a class="btn btn-outline-light btn-sm" href="https://youtu.be/KA-fuWdq1UU" style={{ marginTop: "1rem" }}>Continue watching</a>
                                </div>
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="images/comp8.jpeg" style={{ marginTop: "0.7rem", width: "200px", height: "250px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        </>
    )
}

export default Events1