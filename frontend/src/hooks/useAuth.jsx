import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const checkAuth = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  try {
    const response = await axios.post('http://localhost:4000/api/check-auth', { token });
    return response.data.success === true;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshAuth = useCallback(async () => {
    setLoading(true);

    try {
      const isAuth = await checkAuth();
      setIsAuthenticated(isAuth);
    } catch (error) {
      console.error('Error checking authentication:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAuth();

    const syncAuth = () => {
      refreshAuth();
    };

    window.addEventListener('storage', syncAuth);
    window.addEventListener('auth-change', syncAuth);

    return () => {
      window.removeEventListener('storage', syncAuth);
      window.removeEventListener('auth-change', syncAuth);
    };
  }, [refreshAuth]);

  return { isAuthenticated, loading, refreshAuth };
};

export default useAuth;