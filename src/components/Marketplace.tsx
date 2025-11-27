import { useState } from "react";
import { motion } from "motion/react";
import { Eye, BadgeCheck, Heart, Filter, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductModal } from "./ProductModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Marketplace() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "티파니 T 스마일 브레이슬릿",
      category: "jewelry",
      price: "2,850,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWZmYW55JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "최상급",
      certificationId: "JL-2025-TF1234",
      captureDate: "2025년 11월 10일",
      description: "18K 옐로우 골드, 순정 박스 포함",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWZmYW55JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0aWZmYW55JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "티파니" },
        { label: "재질", value: "18K 옐로우 골드" },
        { label: "사이즈", value: "Medium" },
        { label: "구성품", value: "순정 박스, 인증서" },
      ],
    },
    {
      id: 2,
      name: "롤렉스 서브마리너",
      category: "watch",
      price: "18,900,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1587836374062-d60895c4c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xleCUyMHN1Ym1hcmluZXJ8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "상급",
      certificationId: "JL-2025-RX5678",
      captureDate: "2025년 11월 9일",
      description: "41mm, 블랙 다이얼, 오이스터 브레이슬릿",
      images: [
        "https://images.unsplash.com/photo-1587836374062-d60895c4c93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xleCUyMHN1Ym1hcmluZXJ8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyb2xleCUyMHN1Ym1hcmluZXJ8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "롤렉스" },
        { label: "모델", value: "서브마리너 124060" },
        { label: "케이스", value: "41mm" },
        { label: "무브먼트", value: "자동" },
      ],
    },
    {
      id: 3,
      name: "불가리 세르펜티 백",
      category: "jewelry",
      price: "4,200,000원",
      certified: true,
      location: "잠실점",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYmFnfGVufDF8fHx8MTc2MjY5Njk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "최상급",
      certificationId: "JL-2025-BV9012",
      captureDate: "2025년 11월 8일",
      description: "블랙 칼프스킨, 골드 하드웨어",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYmFnfGVufDF8fHx8MTc2MjY5Njk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "불가리" },
        { label: "재질", value: "칼프스킨 레더" },
        { label: "색상", value: "블랙" },
        { label: "구성품", value: "순정 박스, 더스트백" },
      ],
    },
    {
      id: 4,
      name: "다이아몬드 테니스 브레이슬릿",
      category: "jewelry",
      price: "12,500,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "최상급",
      certificationId: "JL-2025-DM3456",
      captureDate: "2025년 11월 11일",
      description: "플래티넘 950, 총 5캐럿 VVS1 등급",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyNjk2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "재질", value: "플래티넘 950" },
        { label: "다이아몬드", value: "5.0ct" },
        { label: "등급", value: "VVS1, D컬러" },
        { label: "감정서", value: "GIA 인증" },
      ],
    },
    {
      id: 5,
      name: "아이폰 15 Pro Max 1TB",
      category: "phone",
      price: "1,680,000원",
      certified: true,
      location: "강남점",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "최상급",
      certificationId: "JL-2025-IP7890",
      captureDate: "2025년 11월 10일",
      description: "티타늄 내추럴, 배터리 효율 100%",
      images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBsdXh1cnklMjBwaG9uZXxlbnwxfHx8fDE3NjA0Mjk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "용량", value: "1TB" },
        { label: "색상", value: "티타늄 내추럴" },
        { label: "배터리", value: "100%" },
        { label: "구성품", value: "순정 박스" },
      ],
    },
    {
      id: 6,
      name: "오메가 스피드마스터",
      category: "watch",
      price: "8,900,000원",
      certified: true,
      location: "센텀시티점",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVnYSUyMHdhdGNofGVufDF8fHx8MTc2MjY5Njk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      condition: "상급",
      certificationId: "JL-2025-OM1122",
      captureDate: "2025년 11월 7일",
      description: "문워치 프로페셔널, 수동 무브먼트",
      images: [
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVnYSUyMHdhdGNofGVufDF8fHx8MTc2MjY5Njk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      details: [
        { label: "브랜드", value: "오메가" },
        { label: "모델", value: "스피드마스터 문워치" },
        { label: "케이스", value: "42mm" },
        { label: "무브먼트", value: "수동" },
      ],
    },
  ];

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <section id="marketplace" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            지금 올라온 주얼리 구경하기
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AR 인증을 거친 프리미엄 아이템들을 만나보세요
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input
              placeholder="검색어를 입력하세요"
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="카테고리" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="jewelry">주얼리</SelectItem>
              <SelectItem value="watch">시계</SelectItem>
              <SelectItem value="phone">아이폰</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
            <Filter className="w-4 h-4 mr-2" />
            필터
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-purple-600/90 text-white border-none backdrop-blur-sm">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      AR 인증
                    </Badge>
                    <button className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button
                      className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20"
                      onClick={() => handleProductClick(product)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      AR 360° 보기
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <p className="text-sm text-gray-400 mb-1">
                      {product.category === "jewelry" && "주얼리"}
                      {product.category === "watch" && "시계"}
                      {product.category === "phone" && "아이폰"}
                    </p>
                    <h3 className="text-lg text-white mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-400 line-clamp-1">{product.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div>
                      <p className="text-xl text-purple-400">{product.price}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {product.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      {product.condition}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            더 많은 상품 보기
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
