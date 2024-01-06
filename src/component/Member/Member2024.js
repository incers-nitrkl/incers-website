import React from "react";
import Navbar from "../../Navbar";
import "./Member.css";
import Footer from "../Footer/Footer";
import { DevMember24, ECMember24, Member24, Mentor24 } from "./MemberData24.js";

const Members24 = () => {
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
              {Member24.map((data, index) => {
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
                <span>Mentor</span>{" "}
              </h1>
              {Mentor24.map((data, index) => {
                return (
                  <div class="col-md-4 col-lg-3 m-4">
                    <div class="card profile-card-1 flex-row">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/NIT_Rourkela_Colour_Logo.svg/1200px-NIT_Rourkela_Colour_Logo.svg.png"
                        alt="Incers"
                        class="background"
                      />
                      <img
                        src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000"
                        alt="Incers"
                        class="profile"
                      />
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
              {ECMember24.map((data, index) => {
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
              {DevMember24.map((data, index) => {
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
      <Footer />
      </div>
    </>
  );
};

export default Members24;
