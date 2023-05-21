import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-3">MyFitness Locator</h5>

                  <p>
                    Difficulties for finding any fitness center near you not
                    now. We are here to help the people's to find the fitness
                    center according to there needs and passion. It is very easy
                    to use and we provide fitness centers like Gym, Yoga, Zumba,
                    Karathe, etc.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/about" class="text-white">
                        Click here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/contact" class="text-white">
                        Click here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/career" class="text-white">
                        Click here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Privacy policy</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/privacy" class="text-white">
                        Click here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <Link to="/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">© 2022 Copyright MyFitness Locator</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
