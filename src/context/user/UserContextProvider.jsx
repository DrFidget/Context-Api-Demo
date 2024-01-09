import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

import React from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/Users");
        // console.log(response.data);
        setUser(response.data); // Corrected variable name
        setLoading(false);
        setError("");
      } catch (error) {
        setError(error);
        setLoading(false);
        setUser([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
