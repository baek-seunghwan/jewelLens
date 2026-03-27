import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ARViewer } from "./ARViewer";
import { Button } from "./ui/button";
import { Heart, Share2, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "./ui/badge";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  images: string[];
  condition: string;
  certified: boolean;
  location: string;
  certificationId: string;
  captureDate: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
}

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border-white/10">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.certified && (
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    인증 완료
                  </Badge>
                )}
                <Badge variant="outline" className="border-white/10 text-gray-400">
                  {product.category}
                </Badge>
              </div>
              <DialogTitle className="text-2xl text-white mb-2">{product.name}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {product.description}
              </DialogDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{product.price}</p>
              <p className="text-xs text-gray-500">인증 ID: {product.certificationId}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <ARViewer product={product} />
        </div>

        <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
          <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            구매하기
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5">
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
