import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

export function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "전체" },
    { id: "service", label: "서비스 이용" },
    { id: "ar", label: "AR 촬영" },
    { id: "payment", label: "결제/환불" },
    { id: "account", label: "계정/회원" },
  ];

  const faqs = [
    {
      id: 1,
      category: "service",
      question: "JewelLens는 어떤 서비스인가요?",
      answer: "JewelLens는 AR 기술을 활용하여 고가의 주얼리, 시계, 아이폰 등의 중고거래에서 완전한 투명성과 신뢰를 제공하는 프리미엄 중고거래 플랫폼입니다. 전국 거점의 무인 AR 촬영 기기를 통해 제품을 360도로 촬영하고 인증합니다.",
    },
    {
      id: 2,
      category: "ar",
      question: "AR 촬영은 어떻게 진행되나요?",
      answer: "가까운 JewelLens 지점을 방문하여 무인 AR 촬영 ��스에서 제품을 촬영하시면 됩니다. 촬영은 약 5-10분 정도 소요되며, 제품을 360도로 회전시켜 모든 면을 고화질로 촬영합니다. 촬영 완료 후 즉시 AR 뷰어로 확인하실 수 있습니다.",
    },
    {
      id: 3,
      category: "ar",
      question: "AR 촬영 비용은 얼마인가요?",
      answer: "기본 AR 촬영은 제품 등록 시 무료로 제공됩니다. 크리에이터 회원의 경우 월 10회까지 무료 촬영이 가능하며, 추가 촬영은 건당 5,000원의 비용이 발생합니다.",
    },
    {
      id: 4,
      category: "service",
      question: "어떤 제품을 판매할 수 있나요?",
      answer: "주얼리(반지, 목걸이, 팔찌 등), 명품 시계, 프리미엄 스마트폰(아이폰), 명품 가방 등 고가의 프리미엄 제품을 판매하실 수 있습니다. 각 지점마다 지원하는 제품 크기가 다를 수 있으니 사전에 확인해 주세요.",
    },
    {
      id: 5,
      category: "payment",
      question: "결제는 어떻게 진행되나요?",
      answer: "신용카드, 체크카드, 계좌이체, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다. 안전한 거래를 위해 에스크로 시스템을 통해 결제가 진행되며, 구매 확정 후 판매자에게 대금이 지급됩니다.",
    },
    {
      id: 6,
      category: "payment",
      question: "환불 정책은 어떻게 되나요?",
      answer: "제품 수령 후 7일 이내에 반품 신청이 가능합니다. AR 촬영 시점과 실물이 다른 경우 100% 환불이 가능하며, 단순 변심의 경우 배송비를 제외한 금액이 환불됩니다. 단, 제품 상태가 변경된 경우 환불이 제한될 수 있습니다.",
    },
    {
      id: 7,
      category: "account",
      question: "회원가입은 필수인가요?",
      answer: "제품 구경은 비회원도 가능하지만, 구매 및 판매를 위해서는 회원가입이 필수입니다. 간편하게 이메일 또는 소셜 계정(카카오, 네이버, 구글)으로 가입하실 수 있습니다.",
    },
    {
      id: 8,
      category: "service",
      question: "크리에이터 마켓은 무엇인가요?",
      answer: "크리에이터 마켓은 전문 판매자를 위한 프리미엄 스토어 서비스입니다. 본인만의 브랜드 스토어를 운영하고, 다양한 혜택과 마케팅 지원을 받으실 수 있습니다. 누적 거래액과 평점에 따라 크리에이터 등급이 부여됩니다.",
    },
    {
      id: 9,
      category: "ar",
      question: "AR 촬영 가능한 제품 크기는?",
      answer: "강남점은 소형(~10cm), 중형(~30cm), 대형(~50cm) 모든 규격을 지원합니다. 잠실점과 센텀시티점은 소형과 중형 제품 촬영이 가능합니다. 각 지점의 지원 규격은 지점 찾기 페이지에서 확인하실 수 있습니다.",
    },
    {
      id: 10,
      category: "payment",
      question: "판매 수수료는 얼마인가요?",
      answer: "일반 회원은 거래액의 5%, 크리에이터 회원은 3%의 수수료가 부과됩니다. 신규 크리에이터의 경우 첫 3개월간 수수료가 면제되며, 등급이 높아질수록 더 낮은 수수료가 적용됩니다.",
    },
  ];

  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
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
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white">자주 묻는 질문</span>
            </div>
            <h1 className="text-5xl text-white mb-4">FAQ</h1>
            <p className="text-xl text-gray-400 mb-8">
              자주 묻는 질문과 답변을 확인하세요
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="궁금한 내용을 검색하세요"
                className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-purple-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-all"
                  >
                    <div className="flex-1 flex items-center gap-4">
                      <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/30 flex-shrink-0">
                        Q
                      </Badge>
                      <span className="text-lg text-white">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="flex gap-4">
                            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/30 flex-shrink-0 h-fit">
                              A
                            </Badge>
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-2">
                원하는 답변을 찾지 못하셨나요?
              </h3>
              <p className="text-gray-400 mb-6">
                1:1 문의를 통해 자세한 답변을 받아보세요
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full transition-all">
                1:1 문의하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
