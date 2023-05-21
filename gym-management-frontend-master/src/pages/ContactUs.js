import React, { useState, useNavigate } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  //const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleUserInput = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const saveFeedback = () => {
    const formData = new FormData();
    formData.append("name", feedback.name);
    formData.append("email", feedback.email);
    formData.append("message", feedback.message);

    axios
      .post("http://localhost:8080/api/customer/feedback", formData)
      .then((resp) => {
        console.log("success");
        toast.success("Feedback Successful!!!", {
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
        console.log(" failed");
        console.log("Error", error);
        toast.error("Failed!", {
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
    <div className="container text-color-1">
      <h1>Contact Us</h1>
      <form onSubmit={saveFeedback}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={feedback.name}
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={feedback.email}
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={feedback.message}
            onChange={handleUserInput}
          ></textarea>
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactUs;
