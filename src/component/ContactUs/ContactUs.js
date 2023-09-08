import React from "react";
import Navbar from "../../Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <section>
          <div class="container">
            <div class="row">
              <h1 class="text-center">
                <span>Contact Us</span>{" "}
              </h1>
              <div class="col-md-4 card-design">
                <div class="card profile-card-1">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQGDLqtkyL845A/profile-displayphoto-shrink_800_800/0/1625829101446?e=2147483647&v=beta&t=slr4hAC1tooQP6rnizo3TgKMMT_iyRqUrY8BBGAMwMM"
                    alt="profile-sample1"
                    class="background"
                  />
                  <img src="images/BB.jpg" alt='Incers' class="profile" />
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
                  <img src="images/DP.jpg" alt='Incers' class="profile" />
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
                  <img src="images/PM.jpg" alt='Incers' class="profile" />
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
        </section>
      </div>
      <Footer />   
    </>
  );
};
export default Contact;
