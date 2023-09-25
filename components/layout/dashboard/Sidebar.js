import Logo from "@/components/ui/Logo";
import SidebarList from "./SidebarList";
import ProfileSection from "./ProfileSection";

const Sidebar = () => {
  return (
    <div className="h-[100%] bg-[#1C1D22] w-[278px] rounded-[8px] py-[20px] flex flex-col justify-between items-start">
      <Logo textColor="#f0f0f0" />
      <SidebarList />
      <ProfileSection />
    </div>
  );
};

export default Sidebar;
