import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/img/shoplogo.png";
import background from '../assets/img/petshop.png';
import '../App.css';



  const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`; 
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = ''; 
      document.body.style.backgroundSize = ''; 
    };
  }, 
[]
);

  const handleCheckboxChange = () => {
      setShowPassword(!showPassword);
    };

  const LoginButton = () => {
    if (username === 'admin' && password === 'admin') {
      alert("Login Successful");
      navigate('/');
    } else {
      alert("Invalid Username and password! Please try again.")
    }
  };

  return (
    <div style={styles.container}>
      <p>Admin Login</p>
        <div style={styles.logoContainer}>
          <img src={logo} className="logo" alt="Pet Shop Logo" style={styles.logo} />
        </div>
          <h2 style={styles.heading}>PET SHOP MANAGEMENT SYSTEM</h2>
        <form style={styles.form} className='mt-5'>
        <label style={styles.label}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} placeholder='username'/>
        </label>
        <br />
        <label style={styles.label}>
           Password:
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder='password'
          />
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleCheckboxChange}
            style={{ marginRight: '5px' }}/>
          Show Password
        </label>
        <br /><br />
        <button className='mt-2' type="button" onClick={LoginButton} style={styles.button}>
          Login
        </button><br></br>
      </form>
    </div>
 
  );
};


const styles = {

  container: {
    color: 'white',
    width: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid white',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    marginLeft: '-750px', 
  },

  heading: {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',  
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    marginBottom: '10px',
    fontSize: '16px',
  },

  input: {
    color:'black',
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '18px',
    backgroundColor: '#DCDCDC',
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  logo: {
    width: '190px', 
    height: 'auto', 
  },

  button: {
    backgroundColor: '#6A5ACD ',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    marginTop: '10px',
  }, 
};


export default LoginForm;