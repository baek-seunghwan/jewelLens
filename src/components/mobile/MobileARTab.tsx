import { useState } from "react";
import { Camera, MapPin, ChevronRight, Star, Clock, CheckCircle2, QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { motion } from "motion/react";

export function MobileARTab() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const steps = [
    { number: 1, title: "지점 선택", description: "가까운 촬영 지점을 선택하세요" },
    { number: 2, title: "예약하기", description: "원하는 시간대를 예약하세요" },
    { number: 3, title: "AR 촬영", description: "무인 기기로 360도 촬영" },
    { number: 4, title: "업로드", description: "자동으로 상품 등록 완료" },
  ];

  const locations = [
    {
      name: "강남점",
      address: "서울특별시 강남구 테헤란로 123",
      isPremium: true,
      specs: ["주얼리 전 규격", "시계 전 규격", "프리미엄 액세서리"],
      hours: "09:00 - 22:00",
      available: true,
      waitTime: "즉시 이용 가능",
      distance: "1.2km",
    },
    {
      name: "홍대점",
      address: "서울특별시 마포구 홍익로 45",
      isPremium: false,
      specs: ["시계 특화", "중형 주얼리"],
      hours: "10:00 - 21:00",
      available: true,
      waitTime: "15분 대기",
      distance: "3.8km",
    },
    {
      name: "명동점",
      address: "서울특별시 중구 명동길 78",
      isPremium: false,
      specs: ["주얼리 특화", "소형 액세서리"],
      hours: "10:00 - 21:00",
      available: false,
      waitTime: "예약 마감",
      distance: "2.5km",
    },
    {
      name: "판교점",
      address: "경기도 성남시 분당구 판교역로 234",
      isPremium: false,
      specs: ["시계 전문", "럭셔리 워치"],
      hours: "10:00 - 20:00",
      available: true,
      waitTime: "즉시 이용 가능",
      distance: "12.3km",
    },
  ];

  return (
    <div className="pb-20 pt-16">
      {/* Hero Section */}
      <div className="px-4 py-6 liquid-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl rotate-12 mx-auto mb-4 flex items-center justify-center pulse-glow jewel-shimmer">
            <Camera className="w-10 h-10 text-white -rotate-12" />
          </div>

          <h1 className="text-2xl mb-2 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            AR 360도 촬영
          </h1>

          <p className="text-sm text-muted-foreground mb-6">
            무인 촬영 기기로 프리미엄 액세서리를
            <br />
            완벽하게 증명하세요
          </p>

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <QrCode className="w-4 h-4 mr-2" />
            QR 코드 스캔하기
          </Button>
        </div>
      </div>

      {/* Steps */}
      <div className="px-4 py-6">
        <h2 className="text-lg mb-4">촬영 절차</h2>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 glass rounded-xl p-4 jewel-shimmer"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm mb-0.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="px-4 py-6">
        <h2 className="text-lg mb-4">촬영 가능 지점</h2>
        <div className="space-y-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-4 transition-all active:scale-[0.98] ${
                  location.isPremium
                    ? 'glass-strong crystal-border pulse-glow'
                    : 'glass crystal-border'
                } ${
                  selectedLocation === location.name
                    ? 'ring-2 ring-purple-600'
                    : ''
                }`}
                onClick={() => setSelectedLocation(location.name)}
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
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm">{location.name}</h3>
                        {location.isPremium && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-[10px] px-1.5 py-0.5">
                            <Star className="w-2.5 h-2.5 mr-0.5" />
                            프리미엄
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{location.distance}</p>
                    </div>
                  </div>

                  {location.available ? (
                    <Badge variant="outline" className="border-green-300 text-green-700 text-[10px] px-2 py-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 mr-0.5" />
                      {location.waitTime}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-red-300 text-red-700 text-[10px] px-2 py-0.5">
                      마감
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-3">{location.address}</p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">운영시간:</span>
                    <span>{location.hours}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {location.specs.map((spec, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className={`text-[10px] px-2 py-0.5 ${
                          location.isPremium ? 'border-purple-300 text-purple-700' : ''
                        }`}
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full h-9"
                  disabled={!location.available}
                  variant={location.available ? "default" : "outline"}
                >
                  {location.available ? '예약하기' : '예약 마감'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="px-4 py-6">
        <div className="glass-strong rounded-2xl p-4 crystal-border">
          <h3 className="text-sm mb-2">💡 촬영 팁</h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <span>•</span>
              <span>제품을 깨끗하게 닦아서 가져오세요</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>순정 박스와 인증서를 함께 준비하세요</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>촬영은 약 5-10분 정도 소요됩니다</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>촬영 후 즉시 상품이 등록됩니다</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
