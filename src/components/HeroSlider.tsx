import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [progress, setProgress] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const goToNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [goToNext]);

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

      {/* Arrow Navigation */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots + Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group flex items-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`relative h-1 rounded-full overflow-hidden transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-white/30' : 'w-6 bg-white/20 hover:bg-white/30'
            }`}>
              {index === currentSlide && (
                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
              {index !== currentSlide && (
                <div className="absolute inset-0 bg-white/40 rounded-full" />
              )}
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/0 group-hover:text-white/80 transition-all whitespace-nowrap">
              {slide.title}
            </span>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-mono">
        <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}