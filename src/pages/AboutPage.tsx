import { motion } from "motion/react";
import { Sparkles, Eye, Shield, Zap, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const features = [
    {
      icon: Eye,
      title: "360도 AR 촬영",
      description: "미세한 스크래치까지 확인 가능한 초고화질 AR 뷰어로 제품의 모든 면을 투명하게 공개합니다.",
    },
    {
      icon: Shield,
      title: "무인 인증 시스템",
      description: "전국 거점의 무인 AR 촬영 기기로 제품 상태를 객관적으로 인증하고 기록합니다.",
    },
    {
      icon: Zap,
      title: "즉시 거래",
      description: "AR 인증 완료 후 즉시 거래 시작. 안전하고 빠른 프리미엄 중고거래를 경험하세요.",
    },
    {
      icon: Globe,
      title: "전국 네트워크",
      description: "강남, 잠실, 센텀시티 등 주요 도심에 위치한 라운지에서 직접 체험 가능합니다.",
    },
  ];

  const values = [
    {
      title: "투명성",
      description: "AR 기술로 제품의 모든 것을 투명하게 공개합니다.",
    },
    {
      title: "신뢰",
      description: "객관적인 인증 시스템으로 안전한 거래를 보장합니다.",
    },
    {
      title: "혁신",
      description: "최신 기술로 중고거래의 새로운 기준을 만듭니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white">About JewelLens</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-white mb-6"
            >
              투명함으로 신뢰를 만드는
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                프리미엄 중고거래 플랫폼
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              JewelLens는 AR 기술을 활용하여 고가의 주얼리, 시계, 아이폰 등의 중고거래에서
              <br />
              완전한 투명성과 신뢰를 제공하는 혁신적인 플랫폼입니다.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsb3VuZ2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI2OTY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="JewelLens Platform"
              className="w-full h-[500px] object-cover rounded-3xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              왜 JewelLens인가요?
            </h2>
            <p className="text-xl text-gray-400">
              AR 기술로 중고거래의 새로운 기준을 제시합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              우리의 가치
            </h2>
            <p className="text-xl text-gray-400">
              JewelLens가 추구하는 핵심 가치입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "10,000+", label: "거래 완료" },
              { value: "3", label: "전국 거점" },
              { value: "99.8%", label: "고객 만족도" },
              { value: "50억+", label: "거래액" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
