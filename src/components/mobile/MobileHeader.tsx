import { Bell, Settings } from "lucide-react";
import { Button } from "../ui/button";

interface MobileHeaderProps {
  title?: string;
  showActions?: boolean;
}

export function MobileHeader({ title = "JewelLens", showActions = true }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-strong border-b border-white/20 safe-area-inset-top">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg rotate-45 opacity-90 jewel-shimmer shadow-lg"></div>
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{title}</span>
        </div>
        
        {showActions && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
