import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gangnamImage from "figma:asset/12a5fe44a170292bd540a3403de640683de067c6.png";
import jamsilImage from "figma:asset/75b2794f6194e5caa94d318ddb7bc4105506d0e6.png";
import centumImage from "figma:asset/97d26fc60e22d8f9c0e1cd2d6c30814236380f40.png";

export function Locations() {
  const locations = [
    {
      name: "강남 플래그십",
      subtitle: "JewelLens Studio Gangnam",
      description: "JewelLens의 모든 것을 경험하는 공간",
      image: gangnamImage,
      tag: "FLAGSHIP",
    },
    {
      name: "잠실 라운지",
      subtitle: "JewelLens Jamsil",
      description: "일상의 품격을 높이는 프리미엄 공간",
      image: jamsilImage,
      tag: "LOUNGE",
    },
    {
      name: "센텀시티 라운지",
      subtitle: "JewelLens Centum City",
      description: "부산의 프리미엄 액세서리 거래 허브",
      image: centumImage,
      tag: "LOUNGE",
    },
  ];

  return (
    <section id="lounge" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">오프라인 지점</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            가치를 경험하는 공간
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            서울의 주요 거점에서 JewelLens의 프리미엄 서비스와 '신뢰'를 직접 만나보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group h-96 cursor-pointer"
            >
              <ImageWithFallback
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/50 transition-all duration-300"></div>
              
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest text-white/70 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  {location.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {location.subtitle && (
                  <p className="text-xs tracking-wider text-gray-400 mb-1 uppercase">{location.subtitle}</p>
                )}
                <h3 className="text-2xl text-white mb-1">{location.name}</h3>
                <p className="text-gray-300 mb-4">{location.description}</p>
                <div className="flex items-center gap-2 text-purple-400 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span>전체 지점 보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}