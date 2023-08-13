// import React from 'react';
// import Navbar from './Navbar';
// const functionnav = ()=>{
//     const widths = 700
//     if(window.screen.width <= widths){
//         return(<>
//              <div class="top_div">
//             <div>
//                 <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo_new.png" style={{ height: "58px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
//             </div>
//             <Navbar />
//         </div>
//         </>)
//     }
//         else{
//             return <Navbar />
//         }
//     }
// const About = () => {
//     return (
//         <><div class="main_div">
//             {/* <div class="top_div">
//                 <div>
//                     <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
//                 </div>
//                 <Navbar />
//             </div> */}
//             {functionnav()}
//             <div className="gallery">
//                 {/* <div className="memory">
//                     <h1 id="heading">ABOUT NITR ICS</h1>
//                 </div>
//                 <div id="paragraphmemo" style={{ textAlign: "justify" }}>
//                     <p>The Indian Ceramic Society (ICS) team, here at NIT Rourkela provides a forum for delegates from the field of ceramics and material science to exchange thoughts and ideas and to provide exposure to ceramic and material science students or those interested in the same field.NITR ICS collects experiences and words of wisdom from successful ceramists, industrialists and material scientists and shares with the audience via “Flashback Friday”. A conglomeration of important events in their journey from college to where they are now, their experiences and words of wisdom from successful ceramists, industrialists, and material scientists, are shared fortnightly through a label “Flashback Friday”.
//                         The club releases a weekly dose of Ceramic and Material science updates every Monday through the label “Monday Matter”.All the latest known and unknown realms of Material Science are brought out to the people to make their Monday an interesting one. Online/Offline technical sessions on various topics related to new research topics, latest materials are discussed by the expert professionals belonging to the field of Material Science.
//                         The Scientific Writing team and other interested persons will be engaged in online/offline presentation competitions where they will present on their areas of interest. These Presentation competitions will enhance their skills and boost up their confidence level to participate in several competitions.
//                         .</p>
//                 </div> */}
//                 {/* <App /> */}
//                 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
//                 <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
//                 <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//                 <section class="about-us py-5 " id="about-us">
//                     <div class="container mt-5 mt-5-about">
//                         <div class="row">
//                             <div class="col-md-8" style={{ textAlign: "justify" }}>
//                                 <h1 class='text-success'>Welcome!</h1>
//                                 <h2>Know More About Us</h2>
//                                 <hr />
//                                 <p>The Indian Ceramic Society (ICS) team, here at NIT Rourkela provides a forum for delegates from the field of ceramics and material science to exchange thoughts and ideas and to provide exposure to ceramic and material science students or those interested in the same field.NITR ICS collects experiences and words of wisdom from successful ceramists, industrialists and material scientists and shares with the audience via “Flashback Friday”. A conglomeration of important events in their journey from college to where they are now, their experiences and words of wisdom from successful ceramists, industrialists, and material scientists, are shared fortnightly through a label “Flashback Friday”.
//                                     The club releases a weekly dose of Ceramic and Material science updates every Monday through the label “Monday Matter”.All the latest known and unknown realms of Material Science are brought out to the people to make their Monday an interesting one. Online/Offline technical sessions on various topics related to new research topics, latest materials are discussed by the expert professionals belonging to the field of Material Science.
//                                     The Scientific Writing team and other interested persons will be engaged in online/offline presentation competitions where they will present on their areas of interest. These Presentation competitions will enhance their skills and boost up their confidence level to participate in several competitions.
//                                     .</p>

//                             </div>
//                             <div class="col-md-3">
//                                 <img id='col-img' src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg" style={{ height: "450px" }} alt="" />
//                             </div>
//                         </div>
//                     </div>
                    
//                 </section>
                
//                 {/* <section class="about-us py-5 " id="about-us">
//                     <div class="container mt-5">
//                         <div class="row">
//                             <div class="col-md-8" style={{ textAlign: "justify" }}>
//                                 <h1 class='text-success'>Welcome!</h1>
//                                 <h2>Know More About Us</h2>
//                                 <hr />
//                                 <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

// To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
// </p>

//                             </div>
//                             <div class="col-md-3">
//                                 <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section class="about-us py-5 " id="about-us">
//                     <div class="container mt-5">
//                         <div class="row">
//                             <div class="col-md-8" style={{ textAlign: "justify" }}>
//                                 <h1 class='text-success'>Welcome!</h1>
//                                 <h2>Know More About Us</h2>
//                                 <hr />
//                                 <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
//                             Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
//                             NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
//                             To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.</p>
//                             </div>
//                             <div class="col-md-3">
//                                 <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}
//                 <div id="gallerydiv" style={{height:"35rem",marginBottom:"5rem"}}>
//                     <h2 id="heading" style={{ marginLeft: "90px" }}>INDUCTEES AND ORIENTATION</h2>
//                     {/* <div id="paragraph" style={{ textAlign: "justify" }}>
//                         <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
//                             Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
//                             NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
//                             To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.</p>
//                     </div> */}
//                     <div class='induct-para' style={{marginLeft:"5.5rem",marginRight:"3rem"}}>
//                         <p>"When others melt, we just warm up." With this saying, NITR ICS commenced their Orientation programme with live streaming on their Youtube Channel at 10:15 AM on 24th July 2021.

//                         The speakers of the session were the executive team members. The programme included brief ideas on the application of Ceramics, achievements and events of the club, information on Departmental facilities and Professors and the Internship and Placement statistics of the Ceramic Department.</p>
//                     </div>
//                     <div>
//                         <iframe id="induct-yt" width="800" height="400" style={{ marginLeft: "18%" ,marginTop:"30px"}} src="//www.youtube.com/embed/EziokCQ4aHU">
//                         </iframe>
//                     </div>
//                 </div>

//                 {/* <div id="gallerydiv" style={{height:"35rem"}}>
//                     <h2 id="heading" style={{ marginLeft: "90px" }}>INDUCTEES AND ORIENTATION</h2>
//                     <div class='induct-para' style={{marginLeft:"5.5rem",marginRight:"3rem"}}>
//                         <p>Maturing temperatures for ceramics lie between 900-1350 degrees celsius.
//                         That’s as hot as molten lava."When others melt, we just warm up", with this saying, NITR ICS welcomes all the material science enthusiasts to taste the materials and explore their ingredients.
//                         This club will not only focus on Material Science but will also mold your thinking towards Materials. We also welcome all the individuals having proficiency in Web development, Scientific Writing and designing. 
//                         </p>
//                     </div>
//                     <div>
//                         <iframe id="induct-yt" width="800" height="400" style={{ marginLeft: "18%" ,marginTop:"30px"}} src="//www.youtube.com/embed/EziokCQ4aHU">
//                         </iframe>
//                     </div>
//                 </div> */}
                
//                 <div id="gallerydiv" style={{height:"45rem !important"}}>
//                     <h2 id="heading" style={{ marginLeft: "90px" }}>DEPARTMENT VISIT</h2>
//                     {/* <div id="paragraph" style={{ textAlign: "justify" }}>
//                         <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

//                             To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
//                         </p>
//                     </div> */}
//                     <div class='induct-para' style={{marginLeft:"5.5rem",marginRight:"3rem"}}>
//                         <p>A visiting to our ceramics department is an incredibly enriching experience. From exploring the process of creating a ceramic piece to admiring the skill and craftsmanship that goes into research, it's a fascinating journey through the world of material science. Whether you're a beginner or an experienced ceramicist, the department provides a unique opportunity to learn and create in a supportive and creative environment.</p>
//                     </div>
//                     <div>
//                         <iframe id="induct-yt" width="800" height="400" style={{ marginLeft: "18%" ,marginTop:"30px"}} src="//www.youtube.com/embed/4P5MOOXSzZM">
//                         </iframe>
                        
//                     </div>
//                 </div>

                
//                 <div id='club' style={{marginTop:"8rem",marginLeft:"5rem",marginRight:"5rem",marginBottom:"3rem",paddingLeft:"5rem",paddingRight:"0rem"}}>
//                     <h2 style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"",marginBottom:"2rem"}}><u>InCerS NITR Teams</u></h2>
//                     <h3 style={{color:"green"}}>Core Team</h3>
//                     <p style={{textAlign:"justify"}}> The core team comprises the elected members of the club who hold various responsibilities of the club. The core team comprises the executive
//                          body with some team heads who work diligently to arrange and execute various  activities of the club.
//                         Led by Deepsikha Brahma , final year, Chairperson , InCerS NITR , the club has tread a path to victory. The other executive members include 
//                         Partha Mishra (Vice Chairperson), Rittwik Das (Secretary), Aashay Magarde (Joint secretary), Summit Ku. Oram (BR 3rd year), Jyotishman Mohanty 
//                         ( BR 2nd year), Pentakotta Uday Kumar (BR 4th year), Pratyush Kundu ( Treasurer). Under the guidance of Deepsikha Brahma, numerous events and guest 
//                         lectures are organized in the dept. and in college fests. The responsibility of the core team is to distribute work among team members and  check for 
//                         their learning in the process</p>
//                     <h3 style={{color:"green"}}>Design Team</h3>
//                     <p style={{textAlign:"justify"}}> A team of immensely talented individuals having an ample knowledge of lines, curves and colour scheme comprises the very hard working design team. 
//                         Led by Summit ku. Oram , BR 3rd Year and the design head of InCerS NITR, the main responsibility of the team is too create posters for different 
//                         festivals, banners and time stamp posters for different guest lectures and create posters for various club events all around the globe. The team 
//                         has achieved great feats and had worked meticulously for making MRITTIKA 2.0 a grand success. The contribution of Aashay Magarde and Summit Ku. Oram 
//                         in the symposium was immense as they along with Anshu Sharma guided the second years with the requirements for posters , banners, i cards and certificate
//                         preparation. Design team is the most hardworking and diligent team of the club working hard day and night by creating beautiful posters for the club.</p>
//                     <h3 style={{color:"green"}}>Content Team</h3>
//                     <p style={{textAlign:"justify"}}>The content team creates engaging and high-quality content that attracts the readers and at the same time gives them the perfect information. The content
//                          is in the form of social media posts, minutes of meeting, drafting Flashback Fridays and many more. Led by Ritwik Das , secretary of InCerS NITR and also 
//                          the content head of the club , guided the content team in distributing the caption for social media posts , drafting Flashback Fridays and various other 
//                          content work. The main responsibility of the content team is to prepare the content for design and website design team for various banners, posters and
//                           caption snippets. One of the main rememberence of the symposium MRITTIKA 2.0 is it's Souvenir. The responsibility of preparing the content for souvenir 
//                           is on the shoulders of content team.</p>
//                     <h3 style={{color:"green"}}>Development Team</h3>
//                     <p style={{textAlign:"justify"}}>The website design team plays a critical role in creating a successful online presence for our InCerS NITR club . The website design team is responsible for 
//                         creating a website that provides a positive user experience. This means designing a website that is easy to navigate, visually appealing, and responsive on 
//                         different devices. The website design team ensures that the website reflects the club's identity and it's values. They create a unique design that sets the 
//                         website apart from the others and helps build recognition. The team guided by Pratyush Kundu, Jagrith Sahu , with developers Suraj and Udit create and 
//                         maintain the website for InCers and all the information regarding MRITTIKA 2.0 is updated in the website. All the year round activities and events are updated 
//                         in the website.</p>
//                 </div>
//             {/* </div>
//             <h2 id="heading" style={{marginTop:"21rem",marginBottom:"-15rem", marginLeft: "90px" }}>FLASHBACK FRIDAY</h2>
//             <div style={{marginTop:"16rem",marginBottom:"-18rem", marginLeft:"5.5rem",marginRight:"3rem"}}>
//                 <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.</p>
//             </div>
//             <div class="container" style={{marginTop:"260px",marginBottom:"10px"}}>
//                 <div class="embed-responsive embed-responsive-16by9">
//                     <iframe style={{transform:"scale(0.7)"}} class="embed-responsive-item" src="//www.youtube.com/embed/EIfB_z3K0mE"></iframe></div>
//             </div> */}

//             <div className="social_media_part">

//                 <footer>
//                     <div class="top_header">
//                         <section>
//                             <span><i class="fa fa-map-marker"></i></span>
//                             <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
//                         </section>
//                         {/* <section>
//                             <span><i class="fa fa-phone"></i></span>
//                             <span>Deepsikha Brahma</span>
//                             <span><i class="fa fa-phone"></i></span>
//                             <span>Partha Mishra</span>
//                         </section> */}
//                         <section>
//                             <span><i class="fa fa-envelope"></i></span>
//                             <span>incersnitr@gmail.com</span>
//                         </section>
//                     </div>
//                     <span class="border-shape"></span>
//                     <div class="bottom_content">
//                         <section>
//                             <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
//                             <a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
//                             <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
//                         </section>
//                         <section>
//                             <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
//                             <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
//                             <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
//                             <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
//                             <a href="/mritika" style={{ fontSize: "1.1rem" }}>Mrittika 2.0</a>
//                             <a href="/aboutincerschapter" style={{ fontSize: "1.1rem" }}>Incers-about</a>
//                         </section>
//                     </div>
//                     <div class="copyright">
//                         Copyright © 2023 INCERSNITR - All rights reserved
//                     </div>
//                 </footer>
//             </div>
//             </div>
//         </div></>);
// }

// export default About;