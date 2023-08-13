import React from 'react';
import Navbar from '../../Navbar';

const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div className="top_div">
            <div>
                <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo_new.png" style={{ height: "58px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
            </div>
            <Navbar />
        </div>
        </>)
    }
        else{
            return <Navbar />
        }
    }
const Contact = () => {
    return (
        <>
        <div className="main_div">
            {functionnav()}
            <section id="candy" className="our-webcoderskull padding-lg">
                <div className="container">
                    <div style={{height:"260px"}}><div className="row heading heading-icon">
                        <h2 style={{ fontSize: "30px", color: "black", fontWeight: "bolder" }}></h2>
                    </div></div>
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/BB.jpg" style={{objectFit:"cover"}} className="img-responsive" alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Prof. Bibhuti Bhusan Nayak</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: bbnayak[at]nitrkl.ac.in</p>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/DP.jpg" className="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                <h3><a href="https://www.linkedin.com/in/siddhartha-nanda-2000/">Deepsikha Brahma</a></h3>
                                <p>Department of Ceramic Engineering</p>
                                <p>mail id: deepsikhabrahma01@gmail.com</p>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/PM.jpg" className="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="#">Partha Mishra</a></h3>
                                <p>Department of Ceramic Engineering</p>
                                <p>mail id: 120CR0842@nitrkl.ac.in</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="social_media_part">
                <footer>
                    <div className="top_header">
                        <section>
                            <span><i className="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i className="fa fa-envelope"></i></span>
                            <span>incersnitr@gmail.com</span>
                        </section>
                    </div>
                    <span className="border-shape"></span>
                    <div className="bottom_content">
                        <section>
                            <a href="#"><i className="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.instagram.com/nitr_incers/"><i className="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i className="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                        </section>
                        <section>
                            <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
                            <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
                            <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
                            <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
                            <a href="/mritika" style={{ fontSize: "1.1rem" }}>Mrittika 2.0</a>
                            <a href="/aboutincerschapter" style={{ fontSize: "1.1rem" }}>Incers-about</a>
                        </section>
                    </div>
                    <div className="copyright">
                        Copyright © 2021 NITRICS - All rights reserved
                    </div>
                </footer>
            </div>
        </div>
        </>
    );
}
export default Contact;