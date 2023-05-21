import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookAppointmentForm = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    contact: "",
    date: "",
    age: "",
    sex: "",
  });

  const handleUserInput = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const saveAppointment = () => {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("emailId", user.emailId);
    formData.append("contact", user.contact);
    formData.append("date", user.date);
    formData.append("age", user.age);
    formData.append("sex", user.sex);

    axios
      .post("http://localhost:8080/api/customer/booking", formData)
      .then((resp) => {
        console.log("here apponitment success");
        toast.success("Appointment booked Successfully!!!", {
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
        console.log("here appointment failed");
        console.log("Error", error);
        toast.error("Failed to book appointment!", {
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
            <h5 class="card-title">Book Appointment</h5>
          </div>
          <div class="card-body">
            <form class="row g-3 text-color-1" onSubmit={saveAppointment}>
              <div class="col-md-6">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={user.name}
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
                  value={user.emailId}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="contact" class="form-label">
                  Contact No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="date" class="form-label">
                  Date of Appointment
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="dd/mm/yyyy"
                  id="date"
                  name="date"
                  onChange={handleUserInput}
                  value={user.date}
                  required
                />
              </div>
              <div class="col-6">
                <label for="age" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                  required
                />
              </div>

              <div class="col-6">
                <label for="sex" class="form-label">
                  Select Sex
                </label>
                <select
                  name="sex"
                  onChange={handleUserInput}
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div class="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Book Appointment"
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

export default BookAppointmentForm;
