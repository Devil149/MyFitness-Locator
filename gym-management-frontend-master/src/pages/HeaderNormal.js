import { Link } from "react-router-dom";

const HeaderNormal = () => {
  return (
    <div>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li class="nav-item">
          <Link
            to="/owner/register"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-6">Register Owner</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/customer/register"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-6">Register Customer</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/owner/login" class="nav-link active" aria-current="page">
            <b className="text-color-6">Login Owner</b>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/admin/login" class="nav-link active" aria-current="page">
            <b className="text-color-6">Login Admin</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/customer/login"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-6">Login Customer</b>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNormal;
