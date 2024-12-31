import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuthGuard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [user, navigate]);

  return user;
};

export default useAuthGuard;
