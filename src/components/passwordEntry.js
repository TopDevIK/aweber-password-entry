import React, { useState } from 'react';

const PasswordEntry = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validatePassword = (pwd) => {
    const errors = [];
    if (pwd.length < 6) errors.push('Password must be at least 6 characters long.');
    if (!/[A-Z]/.test(pwd)) errors.push('Password must contain at least one uppercase letter.');
    if (!/[a-z]/.test(pwd)) errors.push('Password must contain at least one lowercase letter.');
    if (!/[0-9]/.test(pwd)) errors.push('Password must contain at least one number.');
    if (!/[!@#$%^&*()_\-+=\[\]{}|:;"'<,>.]/.test(pwd)) errors.push('Password must contain at least one special character.');
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join(' '));
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Password Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Submit
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
      {success && <p className="mt-4 text-green-600 font-medium">Password is valid!</p>}
    </div>
  );
};

export default PasswordEntry;
