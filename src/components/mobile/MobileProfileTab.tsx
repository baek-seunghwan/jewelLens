import { User, Heart, ShoppingBag, Camera, Settings, Bell, HelpCircle, LogOut, ChevronRight, BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

export function MobileProfileTab() {
  const stats = [
    { label: "판매 중", value: 3, icon: ShoppingBag },
    { label: "관심 상품", value: 12, icon: Heart },
    { label: "AR 촬영", value: 5, icon: Camera },
  ];

  const menuItems = [
    {
      category: "내 활동",
      items: [
        { icon: ShoppingBag, label: "판매 내역", badge: "3" },
        { icon: Heart, label: "관심 상품", badge: "12" },
        { icon: Camera, label: "촬영 기록", badge: "5" },
      ],
    },
    {
      category: "설정",
      items: [
        { icon: Settings, label: "설정" },
        { icon: Bell, label: "알림 설정" },
        { icon: HelpCircle, label: "고객센터" },
      ],
    },
  ];

  const recentProducts = [
    {
      id: 1,
      name: "롤렉스 서브마리너",
      price: "15,800,000원",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80",
      status: "판매중",
      views: 124,
    },
    {
      id: 2,
      name: "아이폰 15 Pro Max",
      price: "1,680,000원",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
      status: "판매중",
      views: 89,
    },
    {
      id: 3,
      name: "까르띠에 러브 브레이슬릿",
      price: "8,900,000원",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
      status: "판매중",
      views: 156,
    },
  ];

  return (
    <div className="pb-20 pt-16">
      {/* Profile Header */}
      <div className="px-4 py-6 liquid-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20 border-2 border-white/30 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl">김주얼</h2>
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-[10px] px-2 py-0.5">
                  <BadgeCheck className="w-2.5 h-2.5 mr-0.5" />
                  인증회원
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">jewel.kim@example.com</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass rounded-xl p-3 text-center jewel-shimmer">
                  <Icon className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                  <p className="text-lg mb-0.5">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* My Products */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">내 상품</h2>
          <Button variant="ghost" size="sm" className="text-purple-600">
            전체보기
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="space-y-3">
          {recentProducts.map((product) => (
            <Card key={product.id} className="glass-strong p-3 flex gap-3 active:scale-[0.98] transition-transform">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 jewel-shimmer">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm line-clamp-1">{product.name}</h3>
                  <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0.5 border-green-300 text-green-700 whitespace-nowrap">
                    {product.status}
                  </Badge>
                </div>
                <p className="text-purple-600 mb-2">{product.price}</p>
                <p className="text-[10px] text-muted-foreground">조회수 {product.views}회</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-6">
        {menuItems.map((section, sectionIndex) => (
          <div key={section.category} className={sectionIndex > 0 ? "mt-6" : ""}>
            <h3 className="text-sm text-muted-foreground mb-3">{section.category}</h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center justify-between p-4 glass rounded-xl active:scale-[0.98] transition-transform hover:glass-strong"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="px-4 py-6">
        <Button variant="outline" className="w-full glass border-red-200 text-red-600 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          로그아웃
        </Button>
      </div>

      {/* App Info */}
      <div className="px-4 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          JewelLens v1.0.0
          <br />
          © 2025 JewelLens. All rights reserved.
        </p>
      </div>
    </div>
  );
}
