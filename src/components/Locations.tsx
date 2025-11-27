import { ImageWithFallback } from "./figma/ImageWithFallback";
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
    },
    {
      name: "잠실 라운지",
      subtitle: "JewelLens Jamsil",
      description: "일상의 품격을 높이는 프리미엄 공간",
      image: jamsilImage,
    },
    {
      name: "센텀시티 라운지",
      subtitle: "JewelLens Centum City",
      description: "부산의 프리미엄 액세서리 거래 허브",
      image: centumImage,
    },
  ];

  return (
    <section id="lounge" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            가치를 경험하는 공간
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            서울의 주요 거점에서 JewelLens의 프리미엄 서비스와 '신뢰'를 직접 만나보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden group h-96"
            >
              <ImageWithFallback
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                {location.subtitle && (
                  <p className="text-sm text-gray-400 mb-1">{location.subtitle}</p>
                )}
                <h3 className="text-2xl text-white">{location.name}</h3>
                <p className="text-gray-300 mt-1">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}