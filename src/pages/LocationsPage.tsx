import { Locations } from "../components/Locations";

export function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl text-white mb-4">지점 찾기</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            전국 주요 도심에 위치한 JewelLens 라운지를 방문하세요
          </p>
        </div>
      </div>
      <Locations />
    </div>
  );
}
