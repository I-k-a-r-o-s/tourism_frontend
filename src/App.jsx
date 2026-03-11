import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";
import Register from "./pages/Register";
import CreateListing from "./pages/CreateListing";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getlisting/:id" element={<ListingDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createlisting" element={<CreateListing />} />
      </Routes>
    </div>
  );
};
export default App;
