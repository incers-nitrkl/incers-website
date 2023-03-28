import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

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
            return <Navbar />
        }
    }
const Alumni = () => {
    return (
        <>
            <div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}
            <div>

                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",paddingBottom:"2rem",backgroundColor:"#f4f4d3"}}>
                    <h1 style={{marginTop:"2rem",color:"green"}}>
                        DETAILS
                    </h1>
                    <p style={{margin:"1rem 3rem 1rem 3rem",fontSize:"1.2rem"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloribus iusto eligendi distinctio,
                        recusandae ullam ducimus nisi quae explicabo cumque eaque consectetur laudantium fugit aspernatur aut 
                        dignissimos dolores aliquid eum rerum libero cum laboriosam! Fugiat veniam saepe dicta enim ad, tempore
                        error est excepturi, libero velit laudantium nihil, nemo totam? Possimus cupiditate beatae placeat velit
                        vitae ab dicta veritatis nulla eveniet! Totam consectetur fugit quis, et facere nesciunt quidem possimus
                        recusandae ex, asperiores delectus veritatis dolores numquam ipsa neque quibusdam?
                    </p>
                </div>
            </div>

            <section id="candy" class="our-webcoderskull padding-lg">
                <div class="container">
                    {/* <div style={{height:"60px"}}><div class="row heading heading-icon">
                        <h2 style={{ fontSize: "30px", color: "black", fontWeight: "bolder",display:"flex", alignItems:"center" }}> ALUMNI MEMBERS</h2>
                    </div></div> */}
                    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-2rem",marginBottom:"1rem",color:"green"}}>ALUMNI MEMBERS</h1>
                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px" ,backgroundColor:"#f4f4d3"}}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px",backgroundColor:"#f4f4d3" }}>
                                <figure><img src="images/AM1.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Abcd</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: xyz</p>
                                <p>Contact no: +91 999999999</p>
                                <p>batch: 2020</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <div class="social_media_part">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        {/* <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Deepsikha Brahma</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Partha Mishra</span>
                        </section> */}
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
        </div>
        </>
    );
}
export default Alumni;