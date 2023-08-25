import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
        <Navbar />
        <div className="main_div">
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
            <Footer/>
        </div>
        </>
    );
}
export default Contact;