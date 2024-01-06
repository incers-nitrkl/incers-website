import React from "react";
import Navbar from "../../Navbar";
import Footer from "../Footer/Footer";
import BB from "../../images/Profrssors/Bibhuti.jpg";
import DP from "../../images/Members/member23/DP.jpg";
import PM from "../../images/Members/member23/PM.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <h1 class="text-center h1-text">
            <span>Contact Us</span>
          </h1>
          <div class="col-md-4 card-design">
            <div class="card profile-card-1">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                alt="profile-sample1"
                class="background"
              />
              <img src={BB} alt='Incers' class="profile" />
              <div class="card-content">
                <h2>
                  Prof. B.B. Nayak
                  <small>Department of ceramic Engineering</small>
                  <small>bbnayak@nitrkl.ac.in</small>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 card-design">
            <div class="card profile-card-1">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                alt="profile-sample1"
                class="background"
              />
              <img src={DP} alt='Incers' class="profile" />
              <div class="card-content">
                <h2>
                  Deepsikha Brahma
                  <small>Department of ceramic Engineering</small>
                  <small>deepsikhabrahma01@gmail.com</small>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 card-design">
            <div class="card profile-card-1">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                alt="profile-sample1"
                class="background"
              />
              <img src={PM} alt='Incers' class="profile" />
              <div class="card-content">
                <h2>
                  Partha Mishra
                  <small>Department of Ceramic Engineering</small>
                  <small>120CR0842@nitrkl.ac.in</small>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Contact;
