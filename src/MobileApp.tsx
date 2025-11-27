import { useState } from "react";
import { MobileHeader } from "./components/mobile/MobileHeader";
import { MobileTabBar } from "./components/mobile/MobileTabBar";
import { MobileHomeTab } from "./components/mobile/MobileHomeTab";
import { MobileExploreTab } from "./components/mobile/MobileExploreTab";
import { MobileARTab } from "./components/mobile/MobileARTab";
import { MobileProfileTab } from "./components/mobile/MobileProfileTab";

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <MobileHomeTab />;
      case "explore":
        return <MobileExploreTab />;
      case "ar":
        return <MobileARTab />;
      case "profile":
        return <MobileProfileTab />;
      default:
        return <MobileHomeTab />;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "home":
        return "JewelLens";
      case "explore":
        return "탐색";
      case "ar":
        return "AR 촬영";
      case "profile":
        return "마이페이지";
      default:
        return "JewelLens";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <MobileHeader
        title={getHeaderTitle()}
        showActions={activeTab === "home"}
      />

      <main className="min-h-screen">{renderActiveTab()}</main>

      <MobileTabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}