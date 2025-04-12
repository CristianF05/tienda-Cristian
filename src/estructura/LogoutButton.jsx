import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"; // ".." sube un nivel desde "estructura" a "src"
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
