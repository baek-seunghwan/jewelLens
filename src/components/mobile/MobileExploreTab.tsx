import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function MobileExploreTab() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "전체", count: 677 },
    { id: "watch", name: "시계", count: 234 },
    { id: "jewelry", name: "주얼리", count: 189 },
    { id: "phone", name: "스마트폰", count: 156 },
    { id: "accessory", name: "액세서리", count: 98 },
  ];

  const products = [
    {
      id: 1,
      name: "롤렉스 데이토나",
      category: "시계",
      price: "42,000,000원",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80",
      location: "강남점",
      certified: true,
    },
    {
      id: 2,
      name: "에르메스 버킨 30",
      category: "액세서리",
      price: "18,500,000원",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
      location: "강남점",
      certified: true,
    },
    {
      id: 3,
      name: "까르띠에 팬더",
      category: "시계",
      price: "32,500,000원",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
      location: "강남점",
      certified: true,
    },
    {
      id: 4,
      name: "티파니 다이아몬드 반지",
      category: "주얼리",
      price: "12,800,000원",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
      location: "명동점",
      certified: true,
    },
    {
      id: 5,
      name: "아이폰 15 Pro Max",
      category: "스마트폰",
      price: "1,680,000원",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
      location: "강남점",
      certified: true,
    },
    {
      id: 6,
      name: "오메가 씨마스터",
      category: "시계",
      price: "9,800,000원",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80",
      location: "판교점",
      certified: true,
    },
  ];

  const locations = [
    { name: "강남점", isPremium: true, distance: "1.2km" },
    { name: "홍대점", isPremium: false, distance: "3.8km" },
    { name: "명동점", isPremium: false, distance: "2.5km" },
    { name: "판교점", isPremium: false, distance: "12.3km" },
  ];

  return (
    <div className="pb-20 pt-16">
      {/* Search Header */}
      <div className="px-4 py-4 glass-strong border-b border-white/20 sticky top-16 z-30">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="브랜드, 상품명으로 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass border-white/30"
            />
          </div>
          <Button variant="outline" size="icon" className="glass border-white/30">
            <SlidersHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="w-full glass-strong rounded-none border-b border-white/20 sticky top-[120px] z-20">
          <TabsTrigger value="products" className="flex-1">상품</TabsTrigger>
          <TabsTrigger value="locations" className="flex-1">지점</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-0">
          {/* Category Pills */}
          <div className="px-4 py-4 border-b border-border overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="glass rounded-full px-4 py-2 text-sm whitespace-nowrap active:scale-95 transition-transform hover:glass-strong"
                >
                  {category.name}
                  <span className="ml-1.5 text-xs text-muted-foreground">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="glass-strong rounded-2xl overflow-hidden active:scale-95 transition-transform shadow-sm"
                >
                  <div className="relative aspect-square jewel-shimmer">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.certified && (
                      <div className="absolute top-2 left-2">
                        <Badge className="glass-dark text-white border-none text-[10px] px-1.5 py-0.5">
                          AR인증
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="text-sm mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-purple-600 mb-1">{product.price}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-green-500"></span>
                      {product.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="locations" className="mt-0">
          <div className="p-4 space-y-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className={`p-4 rounded-2xl ${
                  location.isPremium ? 'glass-strong crystal-border pulse-glow' : 'glass crystal-border'
                } jewel-shimmer active:scale-[0.98] transition-transform`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      location.isPremium 
                        ? 'bg-gradient-to-br from-purple-500 to-blue-600' 
                        : 'bg-gradient-to-br from-slate-400 to-slate-600'
                    }`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-0.5">{location.name}</h3>
                      <p className="text-xs text-muted-foreground">{location.distance}</p>
                    </div>
                  </div>
                  {location.isPremium && (
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-[10px] px-2 py-0.5">
                      <Star className="w-2.5 h-2.5 mr-1" />
                      프리미엄
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 h-9">
                    경로 안내
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 h-9">
                    상세 정보
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
