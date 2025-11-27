import { Home, Search, Camera, User } from "lucide-react";

interface MobileTabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function MobileTabBar({ activeTab, onTabChange }: MobileTabBarProps) {
  const tabs = [
    { id: "home", icon: Home, label: "홈" },
    { id: "explore", icon: Search, label: "탐색" },
    { id: "ar", icon: Camera, label: "AR 촬영" },
    { id: "profile", icon: User, label: "마이" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-white/20 safe-area-inset-bottom">
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${
                isActive 
                  ? "text-purple-600" 
                  : "text-gray-500"
              }`}
            >
              <div className={`relative ${isActive ? "scale-110" : ""} transition-transform`}>
                <Icon className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 -z-10"></div>
                )}
              </div>
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
