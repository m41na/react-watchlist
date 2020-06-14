import React, { useState, useEffect } from "react";
import { fakeUser } from "../services";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(fakeUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        logout: () => {
          setAuth(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
