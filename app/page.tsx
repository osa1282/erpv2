import { LoginForm } from '@/components/login-form';
import { LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col items-center space-y-2">
          <LayoutDashboard className="w-12 h-12 text-blue-500" />
          <h2 className="text-3xl font-bold text-gray-900">ERP System</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}