import { useState } from "react";
import { Badge } from "./ui/badge";
import { BadgeCheck, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ProductModal } from "./ProductModal";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "아이폰 14 Pro Max 256GB",
      category: "스마트폰",
      price: "980,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "상급",
      certificationId: "JL-2025-IP1234",
      captureDate: "2025년 10월 12일",
      description: "스페이스 블랙 색상, 액정 및 후면 무흠, 배터리 효율 94%",
      images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1592286927505-8d4478a7e0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8aXBob25lJTIwbHV4dXJ5JTIwcGhvbmV8ZW58MXx8fHwxNzYwNDI5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1678652197858-89883a7f8cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "용량", value: "256GB" },
        { label: "색상", value: "스페이스 블랙" },
        { label: "배터리", value: "94%" },
        { label: "구입일", value: "2023년 12월" },
        { label: "액정 상태", value: "무흠" },
        { label: "후면 상태", value: "무흠" },
        { label: "네트워크", value: "잠금해제" },
      ],
    },
    {
      id: 2,
      name: "까르띠에 러브 브레이슬릿",
      category: "주얼리",
      price: "4,200,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "최상급",
      certificationId: "JL-2025-CT5678",
      captureDate: "2025년 10월 10일",
      description: "18K 옐로우 골드, 사이즈 17, 순정 박스 및 인증서 포함",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXJ0aWVyJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MDQyOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "까르띠에" },
        { label: "재질", value: "18K 옐로우 골드" },
        { label: "사이즈", value: "17" },
        { label: "무게", value: "약 30g" },
        { label: "구성품", value: "순정 박스, 인증서, 드라이버" },
        { label: "구입처", value: "공식 부티크" },
        { label: "스크래치", value: "미세한 사용감" },
      ],
    },
    {
      id: 3,
      name: "롤렉스 서브마리너",
      category: "시계",
      price: "12,800,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGRldGFpbHxlbnwxfHx8fDE3NjA0Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "상급",
      certificationId: "JL-2025-RX9012",
      captureDate: "2025년 10월 14일",
      description: "Ref. 116610LN, 2018년식, 순정 박스 및 보증서 포함",
      images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGRldGFpbHxlbnwxfHx8fDE3NjA0Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaCUyMGRldGFpbHxlbnwxfHx8fDE3NjA0Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3YXRjaCUyMGRldGFpbHxlbnwxfHx8fDE3NjA0Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1526045478516-99145907023c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3YXRjaCUyMGRldGFpbHxlbnwxfHx8fDE3NjA0Mjk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "롤렉스" },
        { label: "모델", value: "Submariner 116610LN" },
        { label: "생산년도", value: "2018년" },
        { label: "케이스", value: "스틸 40mm" },
        { label: "무브먼트", value: "자동" },
        { label: "방수", value: "300m" },
        { label: "구성품", value: "순정 박스, 보증서, 여분 링크" },
      ],
    },
    {
      id: 4,
      name: "아이폰 13 Pro 128GB",
      category: "스마트폰",
      price: "720,000원",
      certified: true,
      location: "홍대점",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      condition: "상급",
      certificationId: "JL-2025-IP3456",
      captureDate: "2025년 10월 11일",
      description: "그라파이트 색상, 측면 미세 스크래치, 배터리 효율 89%",
      images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1592286927505-8d4478a7e0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8aXBob25lJTIwbHV4dXJ5JTIwcGhvbmV8ZW58MXx8fHwxNzYwNDI5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1678652197858-89883a7f8cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "용량", value: "128GB" },
        { label: "색상", value: "그라파이트" },
        { label: "배터리", value: "89%" },
        { label: "구입일", value: "2022년 3월" },
        { label: "액정 상태", value: "무흠" },
        { label: "측면 상태", value: "미세 스크래치" },
        { label: "네트워크", value: "잠금해제" },
      ],
    },
  ];

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
            인증 완료 상품
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JewelLens AR 촬영으로 검증된 프리미엄 액세서리를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group glass-strong crystal-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 jewel-shimmer"
            >
              <div className="relative aspect-square overflow-hidden prism-gradient">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.certified && (
                  <div className="absolute top-3 right-3 glass rounded-full p-2 shadow-lg pulse-glow">
                    <BadgeCheck className="w-5 h-5 text-green-600" />
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  <Badge className="glass text-foreground border-none hover:scale-105 transition-transform">
                    {product.category}
                  </Badge>
                  <Badge className="glass border-none text-green-700">
                    {product.condition}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>{product.location} 촬영</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg text-purple-600">{product.price}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    onClick={() => handleProductClick(product)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    AR 보기
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2">
            전체 상품 보기
          </Button>
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
