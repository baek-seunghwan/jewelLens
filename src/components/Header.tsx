import { Button } from "./ui/button";
import { Search, User, Menu, LogOut, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthModal } from "./AuthModal";
import { createClient } from "../utils/supabase/client";

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; accessToken: string } | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      
      if (data.session?.user?.email && data.session?.access_token) {
        setUser({
          email: data.session.user.email,
          accessToken: data.session.access_token,
        });
      }
    };

    checkSession();
  }, []);

  const handleAuthSuccess = (email: string, accessToken: string) => {
    setUser({ email, accessToken });
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/about', label: '플랫폼 소개' },
    { to: '/locations', label: '지점 찾기' },
    { to: '/marketplace', label: '거래 시작하기' },
    { to: '/creator-market', label: '크리에이터 마켓' },
    { to: '/contact', label: '고객지원' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="logo-icon group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col">
                <span className="text-2xl gradient-text">JewelLens</span>
                <span className="text-[10px] text-purple-400 tracking-widest uppercase -mt-1">AR 인증</span>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-400 hover:text-white hover:bg-white/10">
              <Search className="w-5 h-5" />
            </Button>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">{user.email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">로그아웃</span>
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5"
                onClick={() => setIsAuthModalOpen(true)}
              >
                로그인
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/10">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm px-4 py-3 rounded-lg transition-all ${
                    isActive(link.to)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}