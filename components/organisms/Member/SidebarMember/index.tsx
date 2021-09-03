import SidebarItem from "../../../molecules/SidebarItem";
import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";

export default function SidebarMember(props: SidebarMenuProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <ProfileInfo />
        {/* Menu */}
        <div className="menus">
          <SidebarItem
            title="Overview"
            icon="ic-overview-member"
            href="/member"
            active={activeMenu === "overview"}
          />
          <SidebarItem
            title="Transactions"
            icon="ic-transactions-member"
            href="/member/transactions"
          />
          <SidebarItem
            title="Messages"
            icon="ic-messages-member"
            href="/member"
          />
          <SidebarItem title="Card" icon="ic-card-member" href="/member" />
          <SidebarItem
            title="Rewards"
            icon="ic-rewards-member"
            href="/member"
          />
          <SidebarItem
            title="Settings"
            icon="ic-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <SidebarItem title="Logout" icon="ic-logout" href="/member" />
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <Footer />
        </div>
      </div>
    </section>
  );
}
interface SidebarMenuProps {
  activeMenu: "overview" | "transactions" | "settings";
}
