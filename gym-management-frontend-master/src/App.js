import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import AddTrainerForm from "./UserComponent/AddTrainerForm";
import AllTrainers from "./UserComponent/AllTrainers";
import AddCustomerForm from "./UserComponent/AddCustomerForm";
import AddPackageForm from "./PackageComponent/AddPackageForm";
import AllPackage from "./PackageComponent/AllPackage";
import BMI from "./pages/BMI";
import AdminLoginForm from "./UserComponent/AdminLoginForm";
import OwnerLoginForm from "./UserComponent/LoginOwner";
import CustomerLoginForm from "./UserComponent/CustomerLoginForm";
import SearchCustomer from "./UserComponent/SearchCustomer";
import CustomerMembership from "./MembershipComponent/CustomerMembership";
import AddMembership from "./MembershipComponent/AddMembership";
import MyMembership from "./MembershipComponent/MyMembership";
import CustomerProfile from "./UserComponent/CustomerProfile";
import UpdateCustomerDetails from "./UserComponent/UpdateCustomerDetails";
import UpdateCustomerProfile from "./UserComponent/UpdateCustomerProfile";
import CustomerForgetPassword from "./UserComponent/CustomerForgetPassword";
import CustomerChangePassword from "./UserComponent/CustomerChangePassword";
import AddGymownerForm from "./UserComponent/FitnessCenterOwnershipform";
import BookAppointmentForm from "./UserComponent/BookingDetails";
import SearchOwner from "./UserComponent/SearchOwner";
import FeedbackList from "./UserComponent/Feedback";
import LoadOwners from "./UserComponent/LoadOwnerCustomer";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SeeAppointment from "./UserComponent/SeeAppointment";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/bmi/calculator" element={<BMI />} />
        <Route path="trainer/register" element={<AddTrainerForm />} />
        <Route path="trainer/all" element={<AllTrainers />} />
        <Route path="customer/register" element={<AddCustomerForm />} />
        <Route path="customer/login" element={<CustomerLoginForm />} />
        <Route path="package/add" element={<AddPackageForm />} />
        <Route path="package/all" element={<AllPackage />} />
        <Route path="owner/login" element={<OwnerLoginForm />} />
        <Route path="admin/login" element={<AdminLoginForm />} />
        <Route path="admin/customer/search" element={<SearchCustomer />} />
        <Route path="admin/membership/add" element={<AddMembership />} />
        <Route path="customer/membership/" element={<MyMembership />} />
        <Route path="customer/profile/" element={<CustomerProfile />} />
        <Route path="owner/register" element={<AddGymownerForm />} />
        <Route path="/booking" element={<BookAppointmentForm />} />
        <Route path="admin/owner/search" element={<SearchOwner />} />
        <Route path="admin/feedback" element={<FeedbackList />} />
        <Route path="customer/allowners" element={<LoadOwners />} />
        <Route path="career" element={<Career />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="allbookings" element={<SeeAppointment />} />
        <Route
          path="/admin/customer/membership/:clientId"
          element={<CustomerMembership />}
        />
        <Route
          path="customer/profile/updatedetails"
          element={<UpdateCustomerDetails />}
        />
        <Route
          path="customer/profile/update"
          element={<UpdateCustomerProfile />}
        />
        <Route
          path="customer/forgetpassword/"
          element={<CustomerForgetPassword />}
        />
        <Route
          path="customer/changepassword/"
          element={<CustomerChangePassword />}
        />
      </Routes>
    </div>
  );
}

export default App;
