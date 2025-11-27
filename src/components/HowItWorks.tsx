import { ImageWithFallback } from "./figma/ImageWithFallback";

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
    <section id="how" className="py-24 bg-[#101010]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            신뢰는 기술과 사람으로부터
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            JewelLens는 3단계의 집요한 검증 시스템을 통해 완벽한 투명성을 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <ImageWithFallback
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-400">{step.step}</span>
                <h3 className="text-2xl text-white mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
