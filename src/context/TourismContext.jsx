import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const TourismContext = createContext();

const TourismContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const tourismApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
  });

  const navigate = useNavigate();

  const tourismValue = {
    loading,
    setLoading,
    tourismApi,
    navigate,
  };
  return (
    <TourismContext.Provider value={tourismValue}>
      {children}
    </TourismContext.Provider>
  );
};
export default TourismContextProvider;
