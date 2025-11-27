import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      content: "1588-0000",
      subContent: "평일 09:00 - 18:00",
    },
    {
      icon: Mail,
      title: "이메일 문의",
      content: "support@jewellens.com",
      subContent: "24시간 접수 가능",
    },
    {
      icon: MapPin,
      title: "본사 주소",
      content: "서울시 강남구 테헤란로 123",
      subContent: "JewelLens 본사",
    },
  ];

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
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white">1:1 문의</span>
            </div>
            <h1 className="text-5xl text-white mb-4">1:1 문의</h1>
            <p className="text-xl text-gray-400">
              궁금하신 사항을 남겨주시면 신속하게 답변 드리겠습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl text-white mb-6">문의하기</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        이름 *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">
                        이메일 *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        연락처
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        placeholder="010-0000-0000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-white">
                        문의 유형 *
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                        required
                      >
                        <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="service">서비스 이용</SelectItem>
                          <SelectItem value="ar">AR 촬영</SelectItem>
                          <SelectItem value="payment">결제/환불</SelectItem>
                          <SelectItem value="account">계정/회원</SelectItem>
                          <SelectItem value="etc">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">
                      제목 *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      placeholder="문의 제목을 입력하세요"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      문의 내용 *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={8}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                      placeholder="문의하실 내용을 자세히 작성해 주세요"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    문의 전송하기
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl text-white mb-6">연락처 정보</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.subContent}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl text-white mb-4">운영 시간</h3>
                <div className="space-y-2 text-gray-300">
                  <p>평일: 09:00 - 18:00</p>
                  <p>토요일: 10:00 - 17:00</p>
                  <p className="text-gray-500">일요일 및 공휴일 휴무</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-3xl p-8">
                <h3 className="text-xl text-white mb-2">빠른 답변</h3>
                <p className="text-gray-400 text-sm mb-4">
                  평균 1시간 이내 답변
                </p>
                <p className="text-gray-300 text-sm">
                  급한 문의사항은 전화 문의를 이용해 주세요.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
