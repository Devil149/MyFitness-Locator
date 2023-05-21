import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoadOwners = () => {
  const [allowner, setAllOwners] = useState([]);
  const [city, setcity] = useState("");
  const [pin, setPin] = useState("");

  const [tempcity, setTempcity] = useState("");
  const [tempPin, setTempPin] = useState("");

  const retrieveAllOwner = async () => {
    console.log("hitting retrieveAllOwner");
    const response = await axios.get(
      "http://localhost:8080/api/admin/allowners"
    );
    console.log(response.data);
    return response.data;
  };

  const retrieveAllOwnersByCity = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/customer/search/customer/city?city=" + city
    );
    console.log(response.data);
    return response.data;
  };

  const retrieveAllOwnersByPin = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/customer/search/customer/pin?pin=" + pin
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllOwners = async () => {
      console.log("entered here");
      if (city.length > 0) {
        console.log("id not null hitting this api");
        const allOwner = await retrieveAllOwnersByCity();
        if (allOwner) {
          setAllOwners(allOwner);
        }
      } else if (pin.length > 0) {
        console.log("Pincode not null hitting this api");
        const allOwner = await retrieveAllOwnersByPin();
        if (allOwner) {
          setAllOwners(allOwner);
        }
      } else {
        console.log("Fetching all owners here");
        const allOwner = await retrieveAllOwner();
        if (allOwner) {
          setAllOwners(allOwner);
        }
      }
    };
    getAllOwners();
  }, [city, pin]);

  console.log("hitting getAllOwners");

  const searchOwnerCity = (e) => {
    setcity(tempcity);
    e.preventDefault();
  };

  const searchOwnerByPin = (e) => {
    setPin(tempPin);
    e.preventDefault();
  };

  return (
    <div>
      <div
        className="card form-card border-color mt-4 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "42rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>All Fitness Center avliable</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="row">
            <div className="col">
              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    placeholder="Enter City..."
                    onChange={(e) => setTempcity(e.target.value)}
                    value={tempcity}
                    required
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn custom-bg-1 text-color mb-3"
                    onClick={searchOwnerCity}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="col">
              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    id="pin"
                    placeholder="Enter Pincode..."
                    onChange={(e) => setTempPin(e.target.value)}
                    value={tempPin}
                    required
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn custom-bg-1 text-color mb-3"
                    onClick={searchOwnerByPin}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="custom-bg-1 text-color-2 table-bordered border-color">
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">Fitness Center Name</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">State</th>
                  <th scope="col">Booking</th>
                  {/* <th scope="co1">Options</th> */}
                </tr>
              </thead>
              <tbody className="text-color-1">
                {allowner.map((customerData) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/customer/" +
                            customerData.pic
                          }
                          class="img-fluid"
                          alt="customer_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{customerData.gymname}</b>
                      </td>
                      <td>
                        <b>{customerData.name}</b>
                      </td>
                      <td>
                        <b>{customerData.emailId}</b>
                      </td>
                      <td>
                        <b>{customerData.contact}</b>
                      </td>
                      <td>
                        <b>{customerData.address}</b>
                      </td>
                      <td>
                        <b>{customerData.city}</b>
                      </td>
                      <td>
                        <b>{customerData.pin}</b>
                      </td>
                      <td>
                        <b>{customerData.state}</b>
                      </td>

                      <td>
                        <Link
                          to="/booking"
                          class="nav-link active"
                          aria-current="page"
                        >
                          <button className="btn custom-bg-1 text-color btn-sm">
                            Booking
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadOwners;
