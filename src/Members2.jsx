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
const Members2 = () => {
    return (
        <><div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}

            <section class="our-webcoderskull padding-lg">
                

            
                <div class="container">
                
                    <div style={{height:"240px"}}><div class="row heading heading-icon">
                        <h2 style={{marginTop:"50px"}}>FOUNDERS</h2>
                    </div></div>
                 
                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                <figure><img src="images/SIS.jpg" class="img-responsive" alt="" /></figure>
                                <h3>Shivam Sharma </h3>
                                <p></p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    <li><a href="https://instagram.com/blac._.knight?utm_medium=copy_link"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/shivam-sharma-86a130179/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                <figure><img src="images/TK.jpg" class="img-responsive" alt="" /></figure>
                                <h3>Tanay Kumar</h3>
                                <p></p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    <li><a href="https://instagram.com/the_tanay_kumar_show?utm_medium=copy_link "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/tanay-kumar-898694142/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        
                      
                        
                    </ul>
                </div>
            </section> 

            
            {/* update new */}
            <section class="our-webcoderskull padding-lg">
            <div class="container">
                
                <div ><div class="row heading heading-icon">
                    <h2 style={{marginTop:"50px"}}>MENTORS 20-21</h2>
                </div></div>
             
                <ul class="row">
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SN.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Siddhartha Nanda</h3>
                                    {/* <p>Web Developer</p> */}
                                    {/* <h4>Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/siddhartha_2008_nanda/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/siddhartha-nanda-2000/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SS.jpg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                    <h3>Sakti Swarup Mohapatra</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Vice Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/sakti__26/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/mohapatrasakti/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/DP.jpg" class="img-responsive" style={{objectFit:"cover" ,backgroundRepeat:"no-repeat"}} alt="" /></figure>
                                    <h3>Deepshikha Brahma</h3> */}
                                    {/* <p>Freelance Developer</p> */}
                                    {/* <h4>Secretary</h4>
                                    <ul class="follow-us clearfix"> */}
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        {/* <li><a href="https://instagram.com/deepsikha_brahma?utm_medium=copy_link "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/deepsikha-brahma-b8b5751b1"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li> */}
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/RP.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Riyali Priya</h3>
                                    {/* <p>Freelance Developer</p> */}
                                    {/* <h4>joint Secretary</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/riyali-priya-465a7520b"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/IP.jpeg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Ipsita patra</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Treasurer</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/ipso._?utm_medium=copy_link "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/ipsita-patra-577393218"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/NK.jpeg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Naveen kumar Yadav</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>3rd yr Branch Representative</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/_kumar__.n.a.v.e.e.n/ "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/naveen-kumar-yadav-b815211b5 "><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                </ul>
            </div>
            </section>
                 <section class="our-webcoderskull padding-lg">
                

            
                    <div class="container">
                        <div class="row heading heading-icon">
                            <h2>EC BODY 20-21</h2>
                        </div>
                        <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/Me-N.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Nihar</h3>
                                    {/* <p>Web Developer</p> */}
                                    {/* <h4>Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/siddhartha_2008_nanda/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/siddhartha-nanda-2000/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/Me-A.jpg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                    <h3>Achint</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Vice Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/sakti__26/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/mohapatrasakti/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/DP.jpg" class="img-responsive" style={{objectFit:"cover" ,backgroundRepeat:"no-repeat"}} alt="" /></figure>
                                    <h3>Deepshikha Brahma</h3> */}
                                    {/* <p>Freelance Developer</p> */}
                                    {/* <h4>Secretary</h4>
                                    <ul class="follow-us clearfix"> */}
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        {/* <li><a href="https://instagram.com/deepsikha_brahma?utm_medium=copy_link "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/deepsikha-brahma-b8b5751b1"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li> */}
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/Me-Ni.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Nithin</h3>
                                    {/* <p>Freelance Developer</p> */}
                                    {/* <h4>joint Secretary</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/riyali-priya-465a7520b"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/Me-An.jpeg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Ankita</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Treasurer</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/ipso._?utm_medium=copy_link "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/ipsita-patra-577393218"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/Me-B.jpeg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Biswajit</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>3rd yr Branch Representative</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/_kumar__.n.a.v.e.e.n/ "><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/naveen-kumar-yadav-b815211b5 "><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> 
                 <section class="our-webcoderskull padding-lg">
                

            
                    <div class="container">
                        <div class="row heading heading-icon">
                            <h2>DEVELOPMENT TEAM 20-21</h2>
                        </div>
                        <ul class="row">
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/PKS.jpeg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Pratyush Kundu</h3>
                                    {/* <p>Web Developer</p> */}
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/_pratyush_kundu_/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/pratyush-kundu-130894201/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/JS.jpeg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                    <h3>Jagrit Sahu</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/___king_of_mirzapur___/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/jagrit-sahu-575609202/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/AK.jpeg" class="img-responsive" style={{objectFit:"cover" ,backgroundRepeat:"no-repeat"}} alt="" /></figure>
                                    <h3><a href="http://www.webcoderskull.com/">Amrit kalash</a></h3>
                                    {/* <p>Freelance Developer</p> */}
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/amrit_kalash/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/amrit-kalash-a712b7219/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SoK.jpg" class="img-responsive" style={{objectFit:"cover" ,backgroundRepeat:"no-repeat"}} alt="" /></figure>
                                    <h3><a href="http://www.webcoderskull.com/">Sourav Kumar</a></h3>
                                    {/* <p>Freelance Developer</p> */}
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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

export default Members2;