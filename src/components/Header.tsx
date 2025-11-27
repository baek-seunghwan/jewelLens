import { Button } from "./ui/button";
import { Search, User, Menu, LogOut } from "lucide-react";
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="logo-icon"></div>
              <span className="text-2xl gradient-text">JewelLens</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                플랫폼 소개
              </Link>
              <Link to="/locations" className="text-sm text-gray-300 hover:text-white transition-colors">
                지점 찾기
              </Link>
              <Link to="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                거래 시작하기
              </Link>
              <Link to="/creator-market" className="text-sm text-gray-300 hover:text-white transition-colors">
                크리에이터 마켓
              </Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                고객지원
              </Link>
            </nav>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-gray-300 hover:text-white">
              <Search className="w-5 h-5" />
            </Button>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-white"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">로그아웃</span>
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsAuthModalOpen(true)}
              >
                로그인
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}