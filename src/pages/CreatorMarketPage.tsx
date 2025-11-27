import { motion } from "motion/react";
import { Star, TrendingUp, Users, Sparkles, Play } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CreatorMarketPage() {
  const creators = [
    {
      id: 1,
      name: "럭셔리 하우스",
      category: "주얼리 전문",
      followers: "12.5K",
      items: 48,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjY5Njk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    {
      id: 2,
      name: "타임피스 컬렉터",
      category: "시계 컬렉션",
      followers: "8.2K",
      items: 32,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587836374062-d60895c4c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjI2OTY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    {
      id: 3,
      name: "프리미엄 가젯",
      category: "전자기기",
      followers: "15.8K",
      items: 56,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
    },
    {
      id: 4,
      name: "빈티지 셀렉트",
      category: "빈티지 컬렉션",
      followers: "6.5K",
      items: 28,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjI2OTY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: false,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "수수료 0원",
      description: "첫 3개월 판매 수수료 무료",
    },
    {
      icon: Users,
      title: "전용 스토어",
      description: "나만의 브랜드 스토어 운영",
    },
    {
      icon: Sparkles,
      title: "AR 지원",
      description: "무료 AR 촬영 서비스 제공",
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
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white">Creator Market</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-white mb-6"
            >
              당신의 컬렉션을
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                세상에 공유하세요
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              크리에이터 마켓에서 여러분의 프리미엄 컬렉션을 전시하고 판매하세요.
              <br />
              AR 인증으로 신뢰를 더하고, 전문 판매자로 성장할 수 있습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                크리에이터 신청하기
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="w-4 h-4 mr-2" />
                소개 영상 보기
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">
              크리에이터 혜택
            </h2>
            <p className="text-xl text-gray-400">
              JewelLens 크리에이터만의 특별한 혜택
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">
              인기 크리에이터
            </h2>
            <p className="text-xl text-gray-400">
              신뢰받는 크리에이터들의 컬렉션을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all hover:-translate-y-2">
                  {/* Creator Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {creator.verified && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white border-none">
                          <Star className="w-3 h-3 mr-1" />
                          인증됨
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Creator Info */}
                  <div className="p-5">
                    <h3 className="text-xl text-white mb-1">{creator.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{creator.category}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{creator.followers}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{creator.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20">
                      {creator.items}개 상품 보기
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl text-white mb-4">
                지금 크리에이터로 시작하세요
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                여러분의 컬렉션을 전 세계와 공유하고 수익을 창출하세요
              </p>
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-8">
                크리에이터 신청하기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
