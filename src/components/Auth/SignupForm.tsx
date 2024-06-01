// src/components/Auth/SignupForm.tsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext) || {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup?.(email, password);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
