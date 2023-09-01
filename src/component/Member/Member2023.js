import React from "react";
import Navbar from "../../Navbar";
import Footer from "../Footer/Footer";
import { DevMember23, ECMember23, Member23, Mentor23 } from "./MemberData23.js";

const Members23 = () => {
  return (
    <>
      <Navbar />

      <div>
        <section>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <h1 class="text-center">
                <span>Founder</span>{" "}
              </h1>
              {Member23.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                        alt="profile-sample1"
                        class="background"
                      />
                      <img src={data.img} alt="profile-image" class="profile" />
                      <div class="card-content">
                        <h2>
                          {data.name}
                          <small>Engineer</small>
                        </h2>
                        <div class="icon-block">
                          <a href={data.instagram}>
                            <i class="fa fa-instagram"></i>
                          </a>
                          <a href={data.linkedin}>
                            {" "}
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <h1 class="text-center">
                <span>Mentor</span>{" "}
              </h1>
              {Mentor23.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/NIT_Rourkela_Colour_Logo.svg/1200px-NIT_Rourkela_Colour_Logo.svg.png"
                        alt="profile-sample1"
                        class="background"
                      />
                      <img src={data.img} alt="profile-image" class="profile" />
                      <div class="card-content">
                        <h2>
                          {data.name}
                          <small>Engineer</small>
                        </h2>
                        <div class="icon-block">
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                          <a href="#">
                            {" "}
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <h1 class="text-center">
                <span>EC Body</span>{" "}
              </h1>
              {ECMember23.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://www.nitrkl.ac.in/assets/images/gallery/1.jpg"
                        alt="profile-sample1"
                        class="background"
                      />
                      <img src={data.img} alt="profile-image" class="profile" />
                      <div class="card-content">
                        <h2>
                          {data.name}
                          <small>{data.designation}</small>
                        </h2>
                        <div class="icon-block">
                          <a href={data.instagram}>
                            <i class="fa fa-instagram"></i>
                          </a>
                          <a href={data.linkedin}>
                            {" "}
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <h1 class="text-center">
                <span>Development Team</span>{" "}
              </h1>
              {DevMember23.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                        alt="profile-sample1"
                        class="background"
                      />
                      <img src={data.img} alt="profile-image" class="profile" />
                      <div class="card-content">
                        <h2>
                          {data.name}
                          <small>{data.designation}</small>
                        </h2>
                        <div class="icon-block">
                          <a href={data.instagram}>
                            <i class="fa fa-instagram"></i>
                          </a>
                          <a href={data.linkedin}>
                            {" "}
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Members23;
