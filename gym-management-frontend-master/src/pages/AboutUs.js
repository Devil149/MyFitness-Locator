import React from "react";
import Akshay from "../images/Photos/ava-1.jpg";
import Deepu from "../images/Photos/deepu.jpg";
import Arun from "../images/Photos/ava-3.jpg";
import Shivam from "../images/Photos/ava-4.jpg";
import Ganesh from "../images/Photos/ava-5.jpg";

const AboutUs = () => {
  return (
    <div className="text-color-4 ms-5 me-5 mr-5 mt-3">
      <div className="text-color-1 mt-4">
        <h5>
          <i>Let's buid your Health together</i>
        </h5>
      </div>
      <div className="mt-3">
        <p>
          This website helps the user to find the nearest fitness centre just on
          one click by using our application named as MyFitness locator. It will
          cover all the information about the various types of fitness centre
          such as gym, yoga classes, zumba centre, karate classes, swimming
          centre, etc. the platform aims to simplify the hard work which they do
          while searching for fitness centre specially in new area, which is
          unknown to them.
        </p>
        <p>
          This platform also aims to connect the various fitness centre’s owner
          with us to take their centres globally and provide necessary platform
          to increase their business. This will help to create healthy
          competition and encourage owners to provide better facilities to
          users.
        </p>
        <p>
          This website will be the best platform for beginners who want to build
          their health, and also for the new entrepreneur to start their
          business on a large platform with minimum investment. The idea of our
          project can be cleared with a small quote as, “It comes down to how
          your customer experiences the brand – and how that brand makes a
          person feel.”
        </p>
      </div>

      <section>
        <div className="row">
          <h1>
            <u>Our Team</u>
          </h1>
        </div>

        <div className="row">
          <div className="column">
            <div className="card1">
              <div className="img-container">
                <img src={Akshay} />
              </div>
              <h3>Akshay Bhise</h3>
              <p>C DAC Mumbai</p>
            </div>
          </div>

          <div className="column">
            <div className="card1">
              <div className="img-container">
                <img src={Deepu} />
              </div>
              <h3>Deepu Singh</h3>
              <p>C DAC Mumbai</p>
            </div>
          </div>

          <div className="column">
            <div className="card1">
              <div className="img-container">
                <img src={Arun} />
              </div>
              <h3>Arun Chauhan</h3>
              <p>C DAC Mumbai</p>
            </div>
          </div>

          <div className="column">
            <div className="card1">
              <div className="img-container">
                <img src={Shivam} />
              </div>
              <h3>Shivam Singh</h3>
              <p>C DAC Mumbai</p>
            </div>
          </div>

          <div className="column">
            <div className="card1">
              <div className="img-container">
                <img src={Ganesh} />
              </div>
              <h3>Ganesh Purane</h3>
              <p>C DAC Mumbai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
