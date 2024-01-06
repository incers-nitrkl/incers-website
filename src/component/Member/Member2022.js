import React from "react";
import Navbar from "../../Navbar";
import "./Member.css";
import Footer from "../Footer/Footer";
import { DevMember22, ECMember22, Member22 } from "./MemberData22";

const Members22 = () => {
  return (
    <>
      <Navbar />

      <div>
        <section>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
              <h1 class="text-center h1-text">
                <span>Founder</span>{" "}
              </h1>
              {Member22.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                        alt="Incers"
                        class="background"
                      />
                      <img src={data.img} alt="Incers" class="profile" />
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
              <h1 class="text-center h1-text">
                <span>EC Body</span>{" "}
              </h1>
              {ECMember22.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://www.nitrkl.ac.in/assets/images/gallery/1.jpg"
                        alt="Incers"
                        class="background"
                      />
                      <img src={data.img} alt="Incers" class="profile" />
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
              <h1 class="text-center h1-text">
                <span>Development Team</span>{" "}
              </h1>
              {DevMember22.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                        alt="Incers"
                        class="background"
                      />
                      <img src={data.img} alt="Incers" class="profile" />
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

export default Members22;
