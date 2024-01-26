
import React, { useState } from 'react';
import { LoginForm, RegisterForm } from '@/components';
import { useAuth } from '@context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Home: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleLoginSuccess = (token: string) => {
    login(token);
    router.push('/category');
  };

  const handleRegisterSuccess = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, user!</p>
          <p><Link href="/category">Go to Category</Link></p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          {isLogin ? (
            <>
              <LoginForm onLoginSuccess={handleLoginSuccess} />
              <p>
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)}>Register</button>
              </p>
            </>
          ) : (
            <>
              <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)}>Login</button>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;