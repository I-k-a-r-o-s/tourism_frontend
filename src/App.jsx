import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getlisting/:id" element={<ListingDetails />} />
      </Routes>
    </div>
  );
};
export default App;
