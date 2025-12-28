'use client'
import { Button, TextField } from 'packages-shared-ui';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    // TODO: call your API
    console.log({ email, password, remember });
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />


           <TextField
            label="Tracking Code"
            value={ ''}
            onChange={(e)=> ("trackCode")}
            disabled={false}
            placeholder="Enter tracking/reference code"
            error={'بدون ارور'}
          />

        </div>

        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Remember me</span>
          </label>
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button
          label="Sign In"
          variant="primary"
          type="submit"
          className="w-full"
        />

        <p className="text-center text-sm mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
