import { Camera, MapPin, BadgeCheck, Scan } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
            주요 기능 및 특징
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JewelLens만의 혁신적인 기술로 안전하고 투명한 거래 경험을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute inset-0 prism-gradient rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative glass-strong crystal-border rounded-3xl p-8 shadow-lg jewel-shimmer">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">AR 촬영을 통한 완벽한 신뢰</h3>
                  <p className="text-muted-foreground">
                    전국 주요 거점에 설치된 무인 기기에서 제품을 360도로 고화질 촬영합니다. 
                    AR 데이터와 고유 일련번호를 통해 제품의 상태를 투명하게 공개하고, 
                    믿을 수 있는 거래 환경을 조성합니다.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758611970424-27a99a1d7f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUiUyMHRlY2hub2xvZ3klMjBmdXR1cmlzdGljfGVufDF8fHx8MTc2MDQyODQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AR Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute inset-0 prism-gradient rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative glass-strong crystal-border rounded-3xl p-8 shadow-lg jewel-shimmer">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">지점별 맞춤형 촬영 규격</h3>
                  <p className="text-muted-foreground">
                    지역별 특성에 맞춰 촬영 규격을 차별화합니다. 
                    <strong className="text-foreground"> 강남점</strong>은 가장 다양한 크기의 촬영 규격을 제공하여 
                    주얼리부터 시계, 기타 고급 액세서리까지 폭넓게 커버합니다.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">강남점</span>
                    <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded-full">프리미엄</span>
                  </div>
                  <p className="text-sm text-muted-foreground">모든 액세서리 규격 지원 (주얼리, 시계, 기타 프리미엄 액세서리)</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">홍대점 / 명동점 / 판교점</span>
                    <span className="text-xs px-2 py-1 bg-slate-600 text-white rounded-full">특화</span>
                  </div>
                  <p className="text-sm text-muted-foreground">특정 제품군 특화 (시계 전문 / 주얼리 전문)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute inset-0 prism-gradient rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative glass-strong crystal-border rounded-3xl p-8 shadow-lg jewel-shimmer">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">JewelLens 공식 인증</h3>
                  <p className="text-muted-foreground">
                    촬영을 완료한 모든 제품에는 JewelLens의 공식 인증 마크가 부여됩니다. 
                    플랫폼 내에서 인증 뱃지로 표시되어, 구매자가 안심하고 제품을 선택할 수 있게 돕습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm mb-1">인증번호: JL-2025-AB1234</p>
                  <p className="text-xs text-muted-foreground">촬영일: 2025년 10월 14일</p>
                  <p className="text-xs text-muted-foreground">촬영지점: 강남점</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative group">
            <div className="absolute inset-0 prism-gradient rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative glass-strong crystal-border rounded-3xl p-8 shadow-lg jewel-shimmer">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Scan className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">생생한 AR 뷰</h3>
                  <p className="text-muted-foreground">
                    구매자는 AR 뷰를 통해 미세한 스크래치나 디테일 등 제품의 모든 면을 
                    실제로 보는 것처럼 확인할 수 있어, 후회 없는 구매 결정을 내릴 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605360048368-4b1c33c10936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHByaXNtJTIwbGlnaHR8ZW58MXx8fHwxNzYwNDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Glass Prism Effect"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
