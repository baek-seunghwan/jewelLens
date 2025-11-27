import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { MarketplacePage } from "./pages/MarketplacePage";
import { LocationsPage } from "./pages/LocationsPage";
import { CreatorMarketPage } from "./pages/CreatorMarketPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { NoticePage } from "./pages/NoticePage";
import MobileApp from "./MobileApp";

const MOBILE_BREAKPOINT = 768;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render until we know if mobile or not
  if (isMobile === null) {
    return null;
  }

  // Show mobile app on mobile devices
  if (isMobile) {
    return <MobileApp />;
  }

  // Show desktop web on larger screens
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/creator-market" element={<CreatorMarketPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}