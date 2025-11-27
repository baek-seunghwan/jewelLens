import { useState } from "react";
import { motion } from "motion/react";
import { Eye, BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductModal } from "./ProductModal";

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProducts = [
    {
      id: 5,
      name: "아이폰 15 Pro Max 1TB",
      category: "프리미엄 스마트폰",
      price: "1,680,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "최상급",
      certificationId: "JL-2025-IP7890",
      captureDate: "2025년 10월 14일",
      description: "티타늄 내추럴, 완전 미개봉 급, 배터리 효율 100%",
      images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1592286927505-8d4478a7e0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8aXBob25lJTIwbHV4dXJ5JTIwcGhvbmV8ZW58MXx8fHwxNzYwNDI5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1678652197858-89883a7f8cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "용량", value: "1TB" },
        { label: "색상", value: "티타늄 내추럴" },
        { label: "배터리", value: "100%" },
        { label: "구입일", value: "2024년 11월" },
        { label: "액정 상태", value: "완벽" },
        { label: "후면 상태", value: "완벽" },
        { label: "네트워크", value: "잠금해제" },
        { label: "AppleCare+", value: "2026년 11월까지" },
      ],
    },
    {
      id: 6,
      name: "까르띠에 팬더 드 까르띠에",
      category: "럭셔리 시계",
      price: "32,500,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "최상급",
      certificationId: "JL-2025-CT1111",
      captureDate: "2025년 10월 13일",
      description: "18K 옐로우 골드, 쿼츠 무브먼트, 순정 박스 및 인증서",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "까르띠에" },
        { label: "모델", value: "Panthère de Cartier" },
        { label: "재질", value: "18K 옐로우 골드" },
        { label: "케이스", value: "27mm x 37mm" },
        { label: "무브먼트", value: "쿼츠" },
        { label: "방수", value: "30m" },
        { label: "구성품", value: "순정 박스, 인증서, 여분 링크" },
      ],
    },
  ];

  const handleProductClick = (product: typeof featuredProducts[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section className="py-24 liquid-bg overflow-hidden relative">
      {/* Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20 float-animation"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4 pulse-glow">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-900">프리미엄 추천 상품</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
            AR로 먼저 체험해보세요
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            360도 AR 뷰어로 세밀한 부분까지 확인하실 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 prism-gradient rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              
              <div className="relative glass-strong rounded-3xl overflow-hidden crystal-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden jewel-shimmer" style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))' }}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="glass-dark text-white border-none pulse-glow">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      AR 인증
                    </Badge>
                    <Badge className="glass text-green-700 border-none">
                      {product.condition}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <Button
                      size="lg"
                      className="glass-strong hover:scale-105 transition-transform"
                      onClick={() => handleProductClick(product)}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      AR 360° 뷰어 열기
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                      <h3 className="text-xl mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl text-purple-600">{product.price}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {product.location} 촬영
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handleProductClick(product)}
                    >
                      상세보기
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
