import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { createClient } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string, accessToken: string) => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-0427a8d6/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email, password, name }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Sign up error:', data.error);
        setError(data.error || 'Sign up failed');
        setLoading(false);
        return;
      }

      // After successful signup, sign in
      const supabase = createClient();
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error('Sign in error after signup:', signInError.message);
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (signInData.session?.access_token) {
        onSuccess(email, signInData.session.access_token);
        onClose();
      }
    } catch (err) {
      console.error('Sign up exception:', err);
      setError('An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error('Sign in error:', signInError.message);
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (data.session?.access_token) {
        onSuccess(email, data.session.access_token);
        onClose();
      }
    } catch (err) {
      console.error('Sign in exception:', err);
      setError('An error occurred during sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-zinc-900/95 to-black/95 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl text-white mb-2">
            {isSignUp ? '회원가입' : '로그인'}
          </h2>
          <p className="text-gray-400">
            {isSignUp
              ? 'JewelLens 계정을 만들어보세요'
              : 'JewelLens에 오신 것을 환영합니다'}
          </p>
        </div>

        <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-white">
                이름
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                placeholder="홍길동"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-white">
              이메일
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white">
              비밀번호
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            {loading ? '처리 중...' : isSignUp ? '회원가입' : '로그인'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isSignUp ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 회원가입'}
          </button>
        </div>
      </div>
    </div>
  );
}
