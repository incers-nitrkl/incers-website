import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


const Footer = () => {
    return (
        <>
            {/* <div class="social_media_part PCNavbar-6">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
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
                            <a href="https://www.instagram.com/nitr_incers/"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr/mycompany/"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
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
                    <div class="copyright">
                        Copyright © 2021 NITRICS - All rights reserved
                    </div>
                </footer>
            </div> */}
            <div>
                <footer class="bg-dark text-center text-white">
                    <div class="container p-4 pb-0 ">
                        <section>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nitr_incers/" role="button">
                                <span><FaMapMarkerAlt /></span>
                                <span class="text-wrap "> NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                            </a>
                        </section>
                        <section>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nitr_incers/" role="button">
                                <span><FaEnvelope/></span>
                                <span> incersnitr@gmail.com</span>
                            </a>
                        </section>
                    </div>
                    <div class="container p-4 pb-0">
                        <section class="mb-4">
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nitr_incers/" role="button">
                                <FaFacebookSquare />
                            </a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nitr_incers/" role="button">
                                <FaTwitterSquare />
                            </a>


                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nitr_incers/" role="button">
                                <FaInstagramSquare />
                            </a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/incers-nitr/mycompany/" role="button">
                                <FaLinkedin />
                            </a>

                        </section>
                    </div>

                    <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2023 Copyright:
                        <a class="text-white " href="https://www.linkedin.com/company/incers-nitr/mycompany/"> incers.com</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer