import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddGymownerForm = () => {
  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [gymowner, setGymowner] = useState({
    gymname: "",
    name: "",
    emailId: "",
    contact: "",
    password: "",
    pin: "",
    address: "",
    city: "",
    state: "",
    pic: "",
  });

  const handleUserInput = (e) => {
    setGymowner({ ...gymowner, [e.target.name]: e.target.value });
  };

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("pic", selectedPhoto);
    formData.append("gymname", gymowner.gymname);
    formData.append("name", gymowner.name);
    formData.append("emailId", gymowner.emailId);
    formData.append("contact", gymowner.contact);
    formData.append("password", gymowner.password);
    formData.append("pin", gymowner.pin);
    formData.append("address", gymowner.address);
    formData.append("city", gymowner.city);
    formData.append("state", gymowner.state);

    axios
      .post("http://localhost:8080/api/owner/register", formData)
      .then((resp) => {
        console.log("here register success");
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log("here register failed");
        console.log("Error", error);
        toast.error("Failed to Register Owner!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div class="mt-4 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 class="card-title">Register Owner</h5>
          </div>
          <div class="card-body">
            <form class="row g-3 text-color-1" onSubmit={saveTrainer}>
              <div class="col-md-6">
                <label for="name" class="form-label">
                  Fitness Center Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="gymname"
                  name="gymname"
                  onChange={handleUserInput}
                  value={gymowner.gymname}
                  required
                />
                <br />
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={gymowner.name}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="emailId" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={gymowner.emailId}
                  required
                />
                <br />
                <label for="contact" class="form-label">
                  Contact No
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={gymowner.contact}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={gymowner.password}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="pin" class="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="pin"
                  name="pin"
                  onChange={handleUserInput}
                  value={gymowner.pin}
                  required
                />
              </div>

              <div class="col-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  onChange={handleUserInput}
                  value={gymowner.address}
                  required
                />
              </div>
              <div class="col-6">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={gymowner.city}
                  required
                />
              </div>
              <div class="col-6">
                <label for="state" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  name="state"
                  onChange={handleUserInput}
                  value={gymowner.state}
                  required
                />
              </div>

              <div class="col-12">
                <label for="pic" class="form-label">
                  Select Fitness Center Photo
                </label>
                <input
                  input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="pic"
                  onChange={(e) => setSelectedPhoto(e.target.files[0])}
                />
              </div>

              <div class="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Register Owner"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGymownerForm;
