import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-4">JewelLens</h3>
            <p className="text-gray-400">투명함을 켜다.</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg text-white mb-4">플랫폼</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">플랫폼 소개</Link></li>
              <li><Link to="/locations" className="text-gray-400 hover:text-white transition-colors">지점 찾기</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-white transition-colors">중고거래</Link></li>
              <li><Link to="/creator-market" className="text-gray-400 hover:text-white transition-colors">크리에이터 마켓</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg text-white mb-4">고객지원</h4>
            <ul className="space-y-2">
              <li><Link to="/notice" className="text-gray-400 hover:text-white transition-colors">공지사항</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">1:1 문의</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg text-white mb-4">앱 다운로드</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">App Store</span>
              </a>
              <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          &copy; 2025 JewelLens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
