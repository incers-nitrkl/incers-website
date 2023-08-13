import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div class="top_div">
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
                                    <figure><img src="" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Prabhanshu</h3>
                                    {/* <p>Web Developer</p> */}
                                    {/* <h4>Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                    <h3>Spandan</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Vice Chairperson</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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
                                    <figure><img src="" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Partha</h3>
                                    {/* <p>Freelance Developer</p> */}
                                    {/* <h4>joint Secretary</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Summit</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>Treasurer</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Uday</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    {/* <h4>3rd yr Branch Representative</h4> */}
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                </ul>
            </div>
            </section>
                 <section class="our-webcoderskull padding-lg">
                

            
                    <div class="container">
                        <div class="row heading heading-icon">
                            <h2>EC BODY 23-24</h2>
                        </div>
                        <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/RD.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Rittwik Devdatta Das</h3>
                                    {/* <p>Web Developer</p> */}
                                    <h4>Chairperson</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/rittwik__das?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/rittwik-das"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/JM.jpg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                    <h3>Jyotishman Mohanty</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Vice Chairperson</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/_.jyotishman._/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/jyotishman-mohanty-a49a31222/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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
                                    <figure><img src="images/DN.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Dibyarchana Naik</h3>
                                    {/* <p>Freelance Developer</p> */}
                                    <h4>Secretary</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/dibya_archana?igshid=NjIwNzIyMDk2Mg=="><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/dibyarchana-nayak-a7b34a230"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SA.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Swapnil Agrawal</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Treasurer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/23_swapnilagrawal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/swapnil-agrawal-1190a9238"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/AS.png" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Aashay Sanjay Magarde</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>PR Head</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/madmax.24?igshid=MzRlODBiNWFlZA=="><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/madmax24i"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/AP.jpeg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Ankit Prasad</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Design Head</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/_ankit_14__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/ankit-prasad-71175a195"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/PK.png" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Piyush Kumar</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Design Head</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/piyush2.00?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/piyush-kumar-a13044242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiD2uJTllS4mVDhxHLomO3g%3D%3D"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SKB.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Suraj Kumar Behera</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Technical Head</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/surajkb810/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/suraj-kumar-behera-b3883222b/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/AP.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Ashribad panda</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>Scientific Head</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/ashirbad_15/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/ashribad-p-7a14b0138"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Shreeya</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>PR Coordinator</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/NR.jpg" class="" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>Nitin Rai</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>PR Coordinator</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/31_nikp?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/nitin-rai-314a6a257"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/KN.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                    <h3>K Nivedita</h3>
                                    {/* <p>Freelance Web Developer</p> */}
                                    <h4>PR Coordinator</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/nive._.dita?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="http://www.linkedin.com/in/nivedita-k-6a3a47280"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> 
                 <section class="our-webcoderskull padding-lg">
                

            
                    <div class="container">
                        <div class="row heading heading-icon">
                            <h2>DEVELOPMENT TEAM 23-24</h2>
                        </div>
                        <ul class="row">
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SKB.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Suraj Kumar Behera</h3>    
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/surajkb810/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/suraj-kumar-behera-b3883222b/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/UP.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Udit Padhan</h3>    
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/yo_u_dit/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/udit-padhan-41481a222/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-12 col-md-6 col-lg-3">
                                <div class="cnt-block equal-hight" style={{height:" 349px"}}>
                                    <figure><img src="images/SSP.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                    <h3>Shiv Sundar Pradhan</h3>    
                                    <h4>Web Developer</h4>
                                    <ul class="follow-us clearfix">
                                        {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                        <li><a href="https://instagram.com/shiv_sunder_pradhan?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/shiv-sunder-1a0a81194"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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
                            <a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                            <a href="/mritika" style={{ fontSize: "1.1rem" }}>Mrittika 2.0</a>
                            <a href="/aboutincerschapter" style={{ fontSize: "1.1rem" }}>Incers-about</a>
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