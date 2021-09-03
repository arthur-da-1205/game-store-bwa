import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";
import SidebarMenu from "./SidebarMenu";

export default function SidebarMember() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <ProfileInfo />
        {/* Menu */}
        <SidebarMenu />
        <div className="sidebar-footer pt-73 pe-30">
          <Footer />
        </div>
      </div>
    </section>
  );
}
