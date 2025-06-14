import React from 'react';
import { LoginForm } from '@/components/login-form';

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <LoginForm />
    </div>
  );
}