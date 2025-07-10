import React, { createContext, useState, useEffect } from 'react';

// Create a Context for Auth
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Use state to store the token
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading for checking stored auth
  const [authLoading, setAuthLoading] = useState(false); // Loading for login/logout operations

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        const storedUserString = localStorage.getItem("user");

        if (storedToken && storedUserString) {
          const storedUser = JSON.parse(storedUserString);

          // Optional: Verify token with your API here
          // const isValidToken = await verifyTokenWithAPI(storedToken);
          // if (isValidToken) {
          setToken(storedToken);
          setUser(storedUser);
          // } else {
          //   // Token is invalid, clear it
          //   localStorage.removeItem('token');
          //   localStorage.removeItem('user');
          // }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        // Clear potentially corrupted data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function to store token
  const loginToken = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);

    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  // Logout function to clear token
  const logoutToken = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Set auth loading (for login/register/logout operations)
  const setAuthLoadingState = (isLoading) => {
    setAuthLoading(isLoading);
  };

  return (
    <AuthContext.Provider value={{ token, user, loginToken, logoutToken, loading, authLoading, setAuthLoadingState }}>
      {children}
    </AuthContext.Provider>
  );
};
