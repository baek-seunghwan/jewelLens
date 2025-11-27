import { motion } from "motion/react";
import { Smartphone, QrCode, Gift, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import googlePlayImage from "figma:asset/1c3cf626f954733983680405036acf72b26fb030.png";

export function AppDownload() {
  const benefits = [
    {
      icon: Smartphone,
      title: "모바일에서 더 편리하게",
      description: "언제 어디서나 AR 뷰를 확인하고 실시간 거래가 가능합니다",
    },
    {
      icon: CheckCircle2,
      title: "빠른 인증 프로세스",
      description: "앱에서 간편하게 본인인증 후 즉시 거래를 시작하세요",
    },
    {
      icon: Gift,
      title: "신규 회원 혜택",
      description: "첫 거래 수수료 면제 및 AR 촬영 무료 쿠폰 제공",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "앱 다운로드",
      description: "Google Play 또는 App Store에서 JewelLens 앱을 다운로드하세요",
    },
    {
      number: "02",
      title: "회원가입 및 인증",
      description: "간편한 본인인증으로 안전한 거래 환경을 만들어드립니다",
    },
    {
      number: "03",
      title: "제품 촬영 예약",
      description: "가까운 지점을 선택하고 방문 시간을 예약하세요",
    },
    {
      number: "04",
      title: "AR 촬영 & 등록",
      description: "무인 기기에서 촬영 후 자동으로 제품이 등록됩니다",
    },
  ];

  return (
    <section className="py-24 liquid-bg overflow-hidden relative">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full blur-3xl opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4 pulse-glow"
          >
            <Smartphone className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-900">모바일 앱 출시</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent"
          >
            지금 앱을 다운로드하고
            <br />
            거래를 시작하세요
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            JewelLens 앱으로 더 편리하고 안전한 프리미엄 액세서리 거래를 경험하세요
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Left: App Download */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-12 crystal-border jewel-shimmer">
              <h3 className="text-3xl mb-6">
                프리미엄 거래의 시작,
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  JewelLens 앱
                </span>
              </h3>
              
              <p className="text-muted-foreground mb-8">
                모바일 앱에서만 제공되는 특별한 혜택을 누리세요.
                지금 다운로드하면 첫 거래 수수료 면제!
              </p>

              {/* Download Buttons */}
              <div className="space-y-4 mb-8">
                <a 
                  href="#" 
                  className="block hover:scale-105 transition-transform"
                >
                  <img 
                    src={googlePlayImage} 
                    alt="Google Play에서 다운로드" 
                    className="h-14 w-auto"
                  />
                </a>
                <a 
                  href="#" 
                  className="block hover:scale-105 transition-transform"
                >
                  <div className="h-14 bg-black rounded-xl flex items-center justify-center px-6">
                    <svg className="w-8 h-8 text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/70">Download on the</div>
                      <div className="text-xl text-white">App Store</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* QR Code */}
              <div className="glass rounded-2xl p-6 inline-block">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm mb-1">QR 코드 스캔</p>
                    <p className="text-xs text-muted-foreground">
                      모바일로 스캔하여
                      <br />
                      바로 다운로드하세요
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 crystal-border hover:shadow-xl transition-all duration-300 jewel-shimmer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How to Start */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl mb-4">거래 시작 방법</h3>
            <p className="text-muted-foreground">
              단 4단계로 안전하고 투명한 거래를 시작할 수 있습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
                )}

                <div className="glass-strong rounded-2xl p-6 crystal-border hover:shadow-xl transition-all duration-300 jewel-shimmer relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg pulse-glow">
                    <span className="text-sm">{step.number}</span>
                  </div>

                  <div className="mt-4">
                    <h4 className="mb-3">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl mx-auto crystal-border jewel-shimmer">
            <h3 className="text-2xl md:text-3xl mb-4">
              지금 바로 시작하세요
            </h3>
            <p className="text-muted-foreground mb-8">
              신규 가입 고객에게 첫 거래 수수료 면제와 AR 촬영 무료 쿠폰을 드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
              >
                무료 회원가입
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 glass border-2"
              >
                자세히 알아보기
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
