import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext) || {};
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    router.push('/plans');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
