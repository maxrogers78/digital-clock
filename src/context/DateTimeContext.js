import { createContext, useContext, useEffect, useState } from "react";

const DateTimeContext = createContext();

export const useDateTime = () => {
  return useContext(DateTimeContext);
};

export const DateTimeProvider = ({ children }) => {
  const [actualTime, setActualTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setActualTime(new Date());
    }, 1000);
  }, [actualTime]);

  return (
    <DateTimeContext.Provider value={{ actualTime }}>
      {children}
    </DateTimeContext.Provider>
  );
};
