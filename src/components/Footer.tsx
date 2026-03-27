import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Newsletter Banner */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl text-white mb-2">새로운 소식을 받아보세요</h3>
              <p className="text-gray-500">매주 엄선된 프리미엄 상품 소식과 특별 혜택을 전해드립니다.</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 w-full md:w-72 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 whitespace-nowrap">
                구독
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="logo-icon"></div>
              <span className="text-2xl gradient-text">JewelLens</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-xs leading-relaxed">
              AR 기술로 중고 프리미엄 액세서리 거래의 투명성을 혁신합니다. 보이지 않던 것까지 보여드립니다.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", icon: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" },
                { label: "YouTube", icon: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" },
                { label: "Twitter", icon: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm text-white mb-4 uppercase tracking-wider">플랫폼</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-500 hover:text-white transition-colors text-sm">플랫폼 소개</Link></li>
              <li><Link to="/locations" className="text-gray-500 hover:text-white transition-colors text-sm">지점 찾기</Link></li>
              <li><Link to="/marketplace" className="text-gray-500 hover:text-white transition-colors text-sm">중고거래</Link></li>
              <li><Link to="/creator-market" className="text-gray-500 hover:text-white transition-colors text-sm">크리에이터 마켓</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm text-white mb-4 uppercase tracking-wider">고객지원</h4>
            <ul className="space-y-3">
              <li><Link to="/notice" className="text-gray-500 hover:text-white transition-colors text-sm">공지사항</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-white transition-colors text-sm">1:1 문의</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">이용약관</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">개인정보처리방침</Link></li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-sm text-white mb-4 uppercase tracking-wider">앱 다운로드</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-[10px] text-gray-500">Download on the</div>
                  <div className="text-sm">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <div className="text-[10px] text-gray-500">GET IT ON</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2026 JewelLens. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <span>사업자등록번호: 000-00-00000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
