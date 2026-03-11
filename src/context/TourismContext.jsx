import { createContext } from "react";

export const TourismContext = createContext();

const TourismContextProvider = ({ children }) => {
  const tourismValue = {};
  return (
    <TourismContext.Provider value={tourismValue}>
      {children}
    </TourismContext.Provider>
  );
};
export default TourismContextProvider;
