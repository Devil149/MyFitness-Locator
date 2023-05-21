import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchOwner = () => {
  const [allowner, setAllOwners] = useState([]);

  const retrieveAllOwner = async () => {
    console.log("hitting retrieveAllOwner");
    const response = await axios.get(
      "http://localhost:8080/api/admin/allowners"
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllOwners = async () => {
      console.log("Fetching all owners here");
      const allOwner = await retrieveAllOwner();
      if (allOwner) {
        setAllOwners(allOwner);
      }
    };
    getAllOwners();
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
          <h4>All Owners</h4>
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
                  <th scope="col">Photo</th>
                  <th scope="col">Fitness Center Name</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">State</th>
                  {/* <th scope="col">Membership</th> */}
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

export default SearchOwner;
