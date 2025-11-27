import { Button } from "./ui/button";
import { Sparkles, Eye, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden liquid-bg">
      {/* Liquid Glass Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-40 float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full blur-3xl opacity-40 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl opacity-30 float-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-yellow-300 to-pink-400 rounded-full blur-3xl opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Crystal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 jewel-shimmer pulse-glow">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-900">AR 기술로 투명성을 혁신합니다</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            프리미엄 액세서리,
            <br />
            완벽하게 증명합니다
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AR 무인 촬영 기기를 통한 360도 고화질 촬영으로
            <br />
            주얼리와 시계 거래의 신뢰를 만듭니다
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
              AR 촬영 시작하기
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              상품 둘러보기
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-6 shadow-lg jewel-shimmer hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">360° AR 뷰</h3>
              <p className="text-sm text-muted-foreground">미세한 스크래치까지 생생하게</p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg jewel-shimmer hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">공식 인증</h3>
              <p className="text-sm text-muted-foreground">JewelLens 인증 마크 부여</p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg jewel-shimmer hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">지점별 특화</h3>
              <p className="text-sm text-muted-foreground">제품 특성에 맞는 규격</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
