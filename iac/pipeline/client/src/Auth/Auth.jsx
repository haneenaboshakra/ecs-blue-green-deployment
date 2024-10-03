// src/Auth/Auth.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    const expirationTime = localStorage.getItem("expirationTime");
    if (savedAuth && expirationTime) {
      return new Date() < new Date(expirationTime);
    }
    return false;
  });

  const navigate = useNavigate();

  const login = () => {
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes(), 1800);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("expirationTime", expirationTime);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("expirationTime");
    setIsAuthenticated(false);
    navigate("/admin/login");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const expirationTime = localStorage.getItem("expirationTime");
      if (expirationTime && new Date() > new Date(expirationTime)) {
        logout();
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
