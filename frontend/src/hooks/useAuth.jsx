import { useState, useEffect } from 'react';
import axios from 'axios';

const checkAuth = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post('http://localhost:4000/api/check-auth', {token});
    return response.data.success; 
  } catch (error) {
    console.error('Error checking authentication:', error);
    throw error;
  }
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuth = await checkAuth();
        setIsAuthenticated(isAuth);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;