import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HeaderOwner = () => {
  let navigate = useNavigate();

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("active-user");
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <div>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li class="nav-item">
          <Link to="/package/add" class="nav-link active" aria-current="page">
            <b className="text-color-6">Add Package</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/admin/membership/add"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-6">Add Membership</b>
          </Link>
        </li>

        {/* <li class="nav-item">
          <Link
            to="/admin/customer/search"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-6">Search Customer</b>
          </Link>
        </li> */}

        <li class="nav-item">
          <Link to="/allbookings" class="nav-link active" aria-current="page">
            <b className="text-color-6">See Bookings</b>
          </Link>
        </li>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
          <li class="nav-item">
            <Link
              to=""
              class="nav-link active"
              aria-current="page"
              onClick={adminLogout}
            >
              <b className="text-color-6">Logout</b>
            </Link>
            <ToastContainer />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default HeaderOwner;
