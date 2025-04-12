import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Asegúrate de que tu archivo firebase.js esté correctamente configurado
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Obtén la instancia de Firestore
const db = getFirestore();

const SignupPage = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('cliente'); // 'cliente' es el valor por defecto
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      // Crear usuario con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Ahora guarda los datos en Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: nombre,  // Aquí tomamos el valor del estado 'nombre'
        email: email,
        tipo: tipo, // Por defecto el tipo es cliente
      });

      // Redirige al usuario a la página deseada
      navigate('/'); // Aquí puedes cambiar la ruta si lo necesitas

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        <div>
          <label>Tipo de usuario:</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="cliente">Cliente</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
