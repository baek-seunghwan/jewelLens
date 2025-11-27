import { useState } from "react";
import { motion } from "motion/react";
import { Eye, BadgeCheck, Sparkles, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ProductModal } from "../ProductModal";
import iphoneImage1 from "figma:asset/b8009f23e6a5dbb2b388950757d95dc9afca62bd.png";
import iphoneImage2 from "figma:asset/e06ee4157618871e6d031311908e27141e42c998.png";
import iphoneImage3 from "figma:asset/4352991b4ec2a70ad873906aa256d52d0da36e48.png";

export function MobileHomeTab() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "롤렉스 서브마리너",
      category: "럭셔리 시계",
      price: "15,800,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
      condition: "최상급",
      certificationId: "JL-2025-RO1234",
      captureDate: "2025년 11월 3일",
      description: "블랙 다이얼, 세라믹 베젤, 2023년식",
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
        "https://images.unsplash.com/photo-1606404933733-15ae6857881b?w=800&q=80",
      ],
      details: [
        { label: "브랜드", value: "롤렉스" },
        { label: "모델", value: "서브마리너 데이트" },
        { label: "레퍼런스", value: "126610LN" },
        { label: "케이스", value: "41mm" },
      ],
    },
    {
      id: 2,
      name: "아이폰 17 Pro Max",
      category: "프리미엄 스마트폰",
      price: "1,680,000원",
      certified: true,
      location: "강남점",
      image: iphoneImage1,
      condition: "최상급",
      certificationId: "JL-2025-IP7890",
      captureDate: "2025년 11월 4일",
      description: "티타늄 내추럴, 1TB, 배터리 100%",
      images: [
        iphoneImage1,
        iphoneImage2,
        iphoneImage3,
      ],
      details: [
        { label: "용량", value: "1TB" },
        { label: "색상", value: "티타늄 내추럴" },
        { label: "배터리", value: "100%" },
      ],
    },
    {
      id: 3,
      name: "까르띠에 러브 브레이슬릿",
      category: "럭셔리 주얼리",
      price: "8,900,000원",
      certified: true,
      location: "명동점",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      condition: "상급",
      certificationId: "JL-2025-CT5678",
      captureDate: "2025년 11월 2일",
      description: "18K 옐로우 골드, 사이즈 17",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      ],
      details: [
        { label: "브랜드", value: "까르띠에" },
        { label: "재질", value: "18K 옐로우 골드" },
        { label: "사이즈", value: "17" },
      ],
    },
  ];

  const categories = [
    { name: "시계", icon: "⌚", count: 234 },
    { name: "주얼리", icon: "💎", count: 189 },
    { name: "스마트폰", icon: "📱", count: 156 },
    { name: "액세서리", icon: "👜", count: 98 },
  ];

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="pb-20 pt-16">
      {/* Hero Section */}
      <div className="px-4 pt-6 pb-8 liquid-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs text-purple-900">AR 기술로 투명성을 혁신합니다</span>
          </div>

          <h1 className="text-2xl mb-2 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            프리미엄 액세서리,
            <br />
            완벽하게 증명합니다
          </h1>

          <p className="text-sm text-muted-foreground mb-4">
            AR 무인 촬영 기기로 360도 고화질 촬영
          </p>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Eye className="w-4 h-4 mr-2" />
            AR 촬영 시작하기
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">카테고리</h2>
          <Button variant="ghost" size="sm" className="text-purple-600">
            전체보기
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform jewel-shimmer"
            >
              <div className="text-2xl">{category.icon}</div>
              <span className="text-xs">{category.name}</span>
              <span className="text-[10px] text-muted-foreground">{category.count}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg">지금 인기있는 상품</h2>
        </div>

        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden active:scale-[0.98] transition-transform"
              onClick={() => handleProductClick(product)}
            >
              <div className="flex gap-3 p-3">
                {/* Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden jewel-shimmer">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="glass-dark text-white border-none text-[10px] px-1.5 py-0.5">
                      <BadgeCheck className="w-2.5 h-2.5 mr-0.5" />
                      AR
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5">{product.category}</p>
                      <h3 className="text-sm line-clamp-1">{product.name}</h3>
                    </div>
                    <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0.5 border-green-300 text-green-700">
                      {product.condition}
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-purple-600">{product.price}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-green-500"></span>
                      {product.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Quick Cards */}
      <div className="px-4 py-6">
        <h2 className="text-lg mb-4">왜 JewelLens인가요?</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="glass rounded-xl p-3 text-center jewel-shimmer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs mb-1">360° AR</p>
            <p className="text-[10px] text-muted-foreground">세밀한 확인</p>
          </div>

          <div className="glass rounded-xl p-3 text-center jewel-shimmer">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BadgeCheck className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs mb-1">공식 인증</p>
            <p className="text-[10px] text-muted-foreground">신뢰 보장</p>
          </div>

          <div className="glass rounded-xl p-3 text-center jewel-shimmer">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs mb-1">전국 지점</p>
            <p className="text-[10px] text-muted-foreground">편리한 촬영</p>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
