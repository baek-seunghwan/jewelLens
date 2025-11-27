import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ARViewer } from "./ARViewer";
import { Button } from "./ui/button";
import { Heart, Share2, MessageCircle } from "lucide-react";

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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl mb-2">{product.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {product.description}
              </DialogDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl text-purple-600 mb-2">{product.price}</p>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <ARViewer product={product} />
        </div>

        <div className="flex gap-3 mt-6 pt-6 border-t">
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            구매하기
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
