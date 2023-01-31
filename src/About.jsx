import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import App from './App';
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
const About = () => {
    return (
        <><div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}
            <div className="gallery">
                {/* <div className="memory">
                    <h1 id="heading">ABOUT NITR ICS</h1>
                </div>
                <div id="paragraphmemo" style={{ textAlign: "justify" }}>
                    <p>The Indian Ceramic Society (ICS) team, here at NIT Rourkela provides a forum for delegates from the field of ceramics and material science to exchange thoughts and ideas and to provide exposure to ceramic and material science students or those interested in the same field.NITR ICS collects experiences and words of wisdom from successful ceramists, industrialists and material scientists and shares with the audience via “Flashback Friday”. A conglomeration of important events in their journey from college to where they are now, their experiences and words of wisdom from successful ceramists, industrialists, and material scientists, are shared fortnightly through a label “Flashback Friday”.
                        The club releases a weekly dose of Ceramic and Material science updates every Monday through the label “Monday Matter”.All the latest known and unknown realms of Material Science are brought out to the people to make their Monday an interesting one. Online/Offline technical sessions on various topics related to new research topics, latest materials are discussed by the expert professionals belonging to the field of Material Science.
                        The Scientific Writing team and other interested persons will be engaged in online/offline presentation competitions where they will present on their areas of interest. These Presentation competitions will enhance their skills and boost up their confidence level to participate in several competitions.
                        .</p>
                </div> */}
                {/* <App /> */}
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <section class="about-us py-5 " id="about-us">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-8" style={{ textAlign: "justify" }}>
                                <h1 class='text-success'>Welcome!</h1>
                                <h2>Know More About Us</h2>
                                <hr />
                                <p>The Indian Ceramic Society (ICS) team, here at NIT Rourkela provides a forum for delegates from the field of ceramics and material science to exchange thoughts and ideas and to provide exposure to ceramic and material science students or those interested in the same field.NITR ICS collects experiences and words of wisdom from successful ceramists, industrialists and material scientists and shares with the audience via “Flashback Friday”. A conglomeration of important events in their journey from college to where they are now, their experiences and words of wisdom from successful ceramists, industrialists, and material scientists, are shared fortnightly through a label “Flashback Friday”.
                                    The club releases a weekly dose of Ceramic and Material science updates every Monday through the label “Monday Matter”.All the latest known and unknown realms of Material Science are brought out to the people to make their Monday an interesting one. Online/Offline technical sessions on various topics related to new research topics, latest materials are discussed by the expert professionals belonging to the field of Material Science.
                                    The Scientific Writing team and other interested persons will be engaged in online/offline presentation competitions where they will present on their areas of interest. These Presentation competitions will enhance their skills and boost up their confidence level to participate in several competitions.
                                    .</p>

                            </div>
                            <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg" style={{ height: "450px" }} alt="" />
                            </div>
                        </div>
                    </div>
                    
                </section>
                
                {/* <section class="about-us py-5 " id="about-us">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-8" style={{ textAlign: "justify" }}>
                                <h1 class='text-success'>Welcome!</h1>
                                <h2>Know More About Us</h2>
                                <hr />
                                <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
</p>

                            </div>
                            <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="about-us py-5 " id="about-us">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-8" style={{ textAlign: "justify" }}>
                                <h1 class='text-success'>Welcome!</h1>
                                <h2>Know More About Us</h2>
                                <hr />
                                <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
                            Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
                            NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
                            To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.</p>
                            </div>
                            <div class="col-md-3">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/06/40/cup-687147__340.jpg"  style={{height:"450px" }} alt="" />
                            </div>
                        </div>
                    </div>
                </section> */}
                <div id="gallerydiv">
                    <h2 id="heading" style={{ marginLeft: "90px" }}>MONDAY MATTER</h2>
                    <div id="paragraph" style={{ textAlign: "justify" }}>
                        <p>Every week, you suffer from the same malady: a terrible case of the Mondays. You dread that alarm going off. And no matter how many things you try—meditation, reciting inspirational quotes, reading a bunch of happy quotes, you're having trouble getting going. But why not think of Monday as an opportunity rather than a punishment? It's a chance to start fresh.
                            Who wants to wake up to a Monday after a good weekend rest? Mondays are boring, seems longer than usual and almost everyone hates it, right? It is also marked by tiredness and reluctance to start the week's work. But not anymore.
                            NITR-ICS is going to make you look forward to the Monday and the next Monday and so on. Presenting before you, "Monday Matter", your weekly dose of Ceramics and Material Science updates, to keep you intrigued for the rest of the week. We will be keeping you informed of all the latest, known, and unknown realms of material science, making your start of the week an interesting one.
                            To all material enthusiasts out there, a unique fortuity knocks at your doors. Not everyone is blessed to receive the pearl of wisdom. Give light to the heed of many others who are aspiring to know more.</p>
                    </div>
                </div>
                
                <div id="gallerydiv">
                    <h2 id="heading" style={{ marginLeft: "90px" }}>FLASHBACK FRIDAY</h2>
                    <div id="paragraph" style={{ textAlign: "justify" }}>
                        <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

                            To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container" style={{marginTop:"-180px",marginBottom:"150px"}}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/EIfB_z3K0mE"></iframe></div>
            </div>

            <div className="social_media_part">

                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Siddhartha Nanda  8093308828</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti Swarup  9337318011</span>
                        </section>
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>incersnitr@gmail.com</span>
                        </section>
                    </div>
                    <span class="border-shape"></span>
                    <div class="bottom_content">
                        <section>
                            <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
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
        </div></>);
}

export default About;