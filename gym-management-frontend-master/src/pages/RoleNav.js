import HeaderCustomer from "./HeaderCustomer";
import HeaderAdmin from "./HeaderAdmin";
import HeaderNormal from "./HeaderNormal";
import HeaderOwner from "./HeaderOwner";

const RoleNav = () => {
  const user = sessionStorage.getItem("active-user");
  console.log(user + "Now lets take header decision!!!");

  if (user === "Admin") {
    return <HeaderAdmin />;
  } else if (user === "Customer") {
    return <HeaderCustomer />;
  } else if (user == "Owner") {
    return <HeaderOwner />;
  } else {
    return <HeaderNormal />;
  }
};

export default RoleNav;
