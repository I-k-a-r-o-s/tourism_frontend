import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const TourismContext = createContext();

const TourismContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const tourismApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
  });

  const navigate = useNavigate();

  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUser = localStorage.getItem("tourism_user");
    if (loadUser) {
      setUser(JSON.parse(loadUser));
    }
  }, []);

  // Function to save user data to state and localStorage
  const saveUserToLocalStorage = (userData) => {
    if (userData) {
      localStorage.setItem("tourism_user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("tourism_user");
    }
    setUser(userData);
  };

  const logOut = async () => {
    try {
      const { data } = await tourismApi.post("/api/users/logout");
      if (data.success) {
        saveUserToLocalStorage(null);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      //console.log("Error in logOut!:",error)
      toast.error("Failed to logout!");
    }
  };
  const tourismValue = {
    loading,
    setLoading,
    tourismApi,
    navigate,
    user,
    saveUserToLocalStorage,
    logOut,
  };
  return (
    <TourismContext.Provider value={tourismValue}>
      {children}
    </TourismContext.Provider>
  );
};
export default TourismContextProvider;
