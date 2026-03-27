import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "전문가의 1차 검증",
      description: "오프라인 라운지에 상주하는 전문 감정사가 제품의 진위와 상태를 1차로 꼼꼼하게 검수합니다.",
      image: "https://images.unsplash.com/photo-1740664651822-3a02ec12c121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBleHBlcnQlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MjY5NjkzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      step: "STEP 1",
    },
    {
      title: "AR 스튜디오 3D 스캔",
      description: "최첨단 AR 스튜디오에서 제품을 360도 스캔하여, 눈에 보이지 않는 디테일까지 담아내는 '디지털 트윈'을 생성합니다.",
      image: "https://images.unsplash.com/photo-1711837061357-57b17134bd41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMDNkJTIwc2Nhbm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjY5NjkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      step: "STEP 2",
    },
    {
      title: "AI 데이터 대조 및 인증",
      description: "생성된 디지털 트윈을 AI가 진품 데이터베이스와 대조 분석하여 2차 검증을 완료하고, '공식 인증' 뱃지를 발급합니다.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2ODQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      step: "STEP 3",
    },
  ];

  return (
    <section id="how" className="py-24 bg-[#101010] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">3단계 인증 시스템</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            신뢰는 기술과 사람으로부터
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            JewelLens는 3단계의 집요한 검증 시스템을 통해 완벽한 투명성을 보장합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines between cards (desktop) */}
          <div className="hidden md:block absolute top-28 left-[calc(33.33%+1rem)] w-[calc(33.33%-2rem)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/40 to-purple-500/40"></div>
          </div>
          <div className="hidden md:block absolute top-28 left-[calc(66.66%+1rem)] w-[calc(33.33%-2rem)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-purple-500/40 to-pink-500/40"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-white/20">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
                  
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border text-white text-xs font-mono ${
                      index === 0 ? 'bg-blue-500/20 border-blue-400/30' :
                      index === 1 ? 'bg-purple-500/20 border-purple-400/30' :
                      'bg-pink-500/20 border-pink-400/30'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-blue-400' :
                        index === 1 ? 'bg-purple-400' :
                        'bg-pink-400'
                      }`}></div>
                      {step.step}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl text-white mt-1 mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
