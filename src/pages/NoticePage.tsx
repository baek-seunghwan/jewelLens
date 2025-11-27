import { motion } from "motion/react";
import { Bell, Pin, ChevronRight } from "lucide-react";
import { Badge } from "../components/ui/badge";

export function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "센텀시티점 그랜드 오픈 안내",
      date: "2025.11.20",
      category: "지점 소식",
      isPinned: true,
      isNew: true,
      content: "부산 센텀시티에 JewelLens 신규 지점이 오픈합니다.",
    },
    {
      id: 2,
      title: "연말 프로모션 이벤트 안내",
      date: "2025.11.15",
      category: "이벤트",
      isPinned: true,
      isNew: true,
      content: "연말을 맞아 특별한 프로모션을 진행합니다.",
    },
    {
      id: 3,
      title: "AR 촬영 시스템 업그레이드 완료",
      date: "2025.11.10",
      category: "시스템",
      isPinned: false,
      isNew: true,
      content: "더욱 정밀해진 AR 촬영 시스템을 만나보세요.",
    },
    {
      id: 4,
      title: "크리에이터 마켓 정식 오픈",
      date: "2025.11.05",
      category: "서비스",
      isPinned: false,
      isNew: false,
      content: "전문 판매자를 위한 크리에이터 마켓이 오픈했습니다.",
    },
    {
      id: 5,
      title: "추석 연휴 운영 안내",
      date: "2025.10.28",
      category: "지점 소식",
      isPinned: false,
      isNew: false,
      content: "추석 연휴 기간 지점 운영 시간을 안내드립니다.",
    },
    {
      id: 6,
      title: "신규 결제 수단 추가 안내",
      date: "2025.10.20",
      category: "서비스",
      isPinned: false,
      isNew: false,
      content: "더욱 편리한 결제 수단이 추가되었습니다.",
    },
    {
      id: 7,
      title: "강남점 리뉴얼 오픈",
      date: "2025.10.15",
      category: "지점 소식",
      isPinned: false,
      isNew: false,
      content: "강남점이 새롭게 리뉴얼되어 재오픈합니다.",
    },
    {
      id: 8,
      title: "여름 시즌 특별 할인 이벤트",
      date: "2025.10.01",
      category: "이벤트",
      isPinned: false,
      isNew: false,
      content: "여름 시즌을 맞아 특별 할인 이벤트를 진행합니다.",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "지점 소식":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "이벤트":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "시스템":
        return "bg-green-500/10 text-green-400 border-green-500/30";
      case "서비스":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Bell className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white">공지사항</span>
            </div>
            <h1 className="text-5xl text-white mb-4">공지사항</h1>
            <p className="text-xl text-gray-400">
              JewelLens의 새로운 소식을 확인하세요
            </p>
          </motion.div>

          {/* Notice List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    {/* Pin Icon for Pinned Items */}
                    {notice.isPinned && (
                      <div className="flex-shrink-0">
                        <Pin className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${getCategoryColor(notice.category)} border`}>
                          {notice.category}
                        </Badge>
                        {notice.isNew && (
                          <Badge className="bg-red-500/10 text-red-400 border border-red-500/30">
                            NEW
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {notice.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-3">{notice.content}</p>
                      
                      <p className="text-sm text-gray-500">{notice.date}</p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg transition-all ${
                  page === 1
                    ? "bg-purple-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
