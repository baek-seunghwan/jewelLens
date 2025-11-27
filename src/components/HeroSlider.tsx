import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "투명함을 켜다",
      description: "AR 뷰어로 미세한 스크래치까지. 프리미엄 중고거래의 새로운 기준을 만나보세요.",
      cta: "AR로 모든 것 확인하기",
      link: "/marketplace",
      image: "https://images.unsplash.com/photo-1666374796260-6f9d3af1e3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNsb3NldXB8ZW58MXx8fHwxNzYyNjUxMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "가치를 경험하는 공간",
      description: "강남 플래그십 라운지를 비롯한 오프라인 지점에서 JewelLens의 모든 것을 경험하세요.",
      cta: "가까운 라운지 찾기",
      link: "/locations",
      image: "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBsb3VuZ2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI2OTY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "내 손안의 쇼룸",
      description: "매장 방문 없이, AR 가상 착용으로 나에게 꼭 맞는 주얼리를 찾아보세요.",
      cta: "가상 착용 경험하기",
      link: "/marketplace",
      image: "https://images.unsplash.com/photo-1459550532302-ba13832edcdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZpcnR1YWwlMjByZWFsaXR5JTIwcGhvbmV8ZW58MXx8fHwxNzYyNjk2ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl text-white mb-4 max-w-4xl"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-lg px-8 transition-all"
                onClick={() => navigate(slides[currentSlide].link)}
              >
                {slides[currentSlide].cta}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}