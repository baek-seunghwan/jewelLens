import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { RotateCw, ZoomIn, ZoomOut, Maximize2, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ARViewerProps {
  product: {
    name: string;
    images: string[];
    condition: string;
    certificationId: string;
    captureDate: string;
    location: string;
    details: {
      label: string;
      value: string;
    }[];
  };
}

export function ARViewer({ product }: ARViewerProps) {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const dragStartX = useRef(0);
  const startAngle = useRef(0);

  // 360도 뷰를 시뮬레이션하기 위한 각도별 이미지 인덱스 계산
  const getImageIndex = (angle: number) => {
    const normalizedAngle = ((angle % 360) + 360) % 360;
    const index = Math.floor((normalizedAngle / 360) * product.images.length);
    return index % product.images.length;
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    startAngle.current = currentAngle;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - dragStartX.current;
    const newAngle = startAngle.current + deltaX * 0.5; // 드래그 감도 조절
    setCurrentAngle(newAngle);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.5));
  };

  const handleAutoRotate = () => {
    let angle = currentAngle;
    const interval = setInterval(() => {
      angle += 2;
      setCurrentAngle(angle);
    }, 30);

    setTimeout(() => clearInterval(interval), 3000);
  };

  const currentImageIndex = getImageIndex(currentAngle);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* AR Viewer */}
      <div className="flex-1 flex flex-col">
        <div className="relative glass-strong rounded-2xl overflow-hidden aspect-square select-none crystal-border jewel-shimmer pulse-glow">
          {/* Image Display */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ImageWithFallback
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Angle Indicator */}
          <div className="absolute top-4 left-4 glass-dark text-white px-3 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <RotateCw className="w-4 h-4" />
              <span className="text-sm">{Math.round(((currentAngle % 360) + 360) % 360)}°</span>
            </div>
          </div>

          {/* AR Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="glass-dark text-white border-none pulse-glow">
              AR 360° 뷰
            </Badge>
          </div>

          {/* Drag Hint */}
          {!isDragging && (
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-dark text-white px-4 py-2 rounded-full text-sm pulse-glow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              ← 드래그하여 회전 →
            </motion.div>
          )}

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="glass hover:scale-110 transition-transform"
              onClick={handleAutoRotate}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="glass hover:scale-110 transition-transform"
              onClick={handleZoomIn}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="glass hover:scale-110 transition-transform"
              onClick={handleZoomOut}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentAngle((360 / product.images.length) * index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? 'border-purple-600 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info Panel */}
      <div className="lg:w-96 flex flex-col gap-4">
        {/* Certification Card */}
        <div className="glass-strong rounded-2xl p-6 crystal-border jewel-shimmer">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center pulse-glow">
              <Maximize2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-muted-foreground">JewelLens 공식 인증</h3>
              <p className="text-sm">{product.certificationId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">촬영일</p>
              <p>{product.captureDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">촬영지점</p>
              <p>{product.location}</p>
            </div>
            <div>
              <p className="text-muted-foreground">상태</p>
              <Badge variant="outline" className="border-green-300 text-green-700">
                {product.condition}
              </Badge>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="glass-strong rounded-2xl p-6 crystal-border">
          <div className="flex items-center justify-between mb-4">
            <h3>상세 정보</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {product.details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{detail.label}</span>
                <span className="text-sm">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AR Features */}
        <div className="glass-strong rounded-2xl p-6 crystal-border prism-gradient">
          <h4 className="mb-3">AR 뷰 기능</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              <span>360도 자유로운 회전</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              <span>최대 3배 확대 가능</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              <span>미세한 스크래치 확인 가능</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              <span>실시간 각도 표시</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
