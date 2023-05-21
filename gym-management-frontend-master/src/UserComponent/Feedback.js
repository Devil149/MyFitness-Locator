import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/allfeedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div
        className="card form-card border-color mt-4 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "42rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>All Feedbacks</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="custom-bg-1 text-color-2 table-bordered border-color">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Message</th>
                  {/* <th scope="co1">Options</th> */}
                </tr>
              </thead>
              <tbody className="text-color-1">
                {feedbacks.map((feedback) => {
                  return (
                    <tr key={feedback.id}>
                      <td>
                        <b>{feedback.name}</b>
                      </td>
                      <td>
                        <b>{feedback.email}</b>
                      </td>
                      <td>
                        <b>{feedback.message}</b>
                      </td>

                      {/* <td>
                        <button
                          className="btn custom-bg-1 text-color btn-sm"
                          onClick={deleteUser}
                        >
                          Delete
                        </button>
                      </td> */}
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

export default FeedbackList;
