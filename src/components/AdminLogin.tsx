
import React, { useState } from 'react';
import { X, Shield, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loginAttempts, isBlocked, isAdminLoggedIn, logout } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isBlocked) {
      setError('Za dużo nieudanych prób. Spróbuj ponownie za 5 minut.');
      return;
    }

    const success = login(credentials.username, credentials.password);
    
    if (success) {
      setCredentials({ username: '', password: '' });
      onClose();
    } else {
      setError(`Nieprawidłowe dane logowania. Pozostało prób: ${3 - loginAttempts - 1}`);
      setCredentials({ username: '', password: '' });
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {isAdminLoggedIn ? 'Panel Administratora' : 'Logowanie Administratora'}
          </h2>
          <p className="text-gray-400 mt-2">
            {isAdminLoggedIn ? 'Jesteś zalogowany jako administrator' : 'Dostęp tylko dla uprawnionych osób'}
          </p>
        </div>

        {isAdminLoggedIn ? (
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <p className="text-green-400 mb-2">✓ Zalogowano pomyślnie</p>
              <p className="text-sm text-gray-400">Masz dostęp do panelu administratora</p>
            </div>
            
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              Wyloguj się
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {isBlocked && (
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <p className="text-orange-400 text-sm text-center">
                  Konto tymczasowo zablokowane. Spróbuj ponownie za 5 minut.
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                placeholder="Wprowadź login"
                disabled={isBlocked}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Hasło
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Wprowadź hasło"
                  disabled={isBlocked}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isBlocked}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
            >
              {isBlocked ? 'Zablokowane' : 'Zaloguj się'}
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Próby logowania: {loginAttempts}/3
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
