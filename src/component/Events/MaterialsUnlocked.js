import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './MaterialsUnlocked.css'
import { MaterialsUnlocked23 } from './MaterialsUnlockedData';


const Events5 = () => {
    return (<>
        <Navbar />
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <div>
                <img src="images/MU-banner.png" alt="suraj" className='MUmobile' />
            </div>

            {/* New add */}
            <div class="d-flex flex-column flex-wrap mt-4">
                <div class="d-flex justify-content-center " >
                    <h2 style={{ fontSize: "2.5rem" }}>MATERIALS UNLOCKED</h2>
                </div>
                <div class="text-justify px-5 py-4">
                    <p>Materials are at the core of all scientific research and have a profound impact on virtually every
                        aspect of modern life. They are essential to the development of new technologies, from semiconductors and
                        computer chips to advanced medical devices and renewable energy technologies. In fact, materials science is
                        a critical field of study that seeks to understand the properties and behavior of various materials, and to
                        develop new materials with unique and beneficial properties.
                    </p>
                    <p>
                        Materials science plays a significant role in a range of fields, including physics, chemistry, engineering, biology,
                        and nanotechnology. By investigating the properties of materials at the atomic and molecular level, scientists can
                        understand the underlying physical and chemical phenomena that drive their behavior. This knowledge is then applied to
                        the development of new materials with improved performance and functionality, such as stronger and more durable metals,
                        lighter and more efficient composites, and more efficient energy storage and conversion systems.
                    </p>
                    <p>
                        In summary, the study of materials is vital to advancing our understanding of the natural world and to developing new
                        technologies that can address the most pressing challenges of our time, from climate change to disease prevention and
                        treatment. As such, the importance of materials in science cannot be overstated.
                    </p>
                </div>
            </div>


            <div >
                <section class="container p-0">

                    <div class="d-flex flex-wrap">
                        <h3 class="text-center font-weight-bold" style={{ margin: "1rem" }}>MATERIALS UNLOCKED<span class=""> INTERVIEWS</span></h3>
                    </div>

                    <h3 class="d-flex flex-wrap" style={{ margin: "1.5rem", marginLeft: '5%' }}>INTERVIEW 2022-23</h3>
                    <div class="d-flex flex-wrap justify-content-center">

                        {
                            MaterialsUnlocked23.map((data, index)=>{
                                return(
                                    <div class="card hover m-3" data-wow-duration="1.4s">
                                        <a href={data.instagram}>
                                        <img class="card-img-top" style={{ height: "230px", width: "200px" }} src={data.img} alt='Incers'/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    </>);
}

export default Events5
