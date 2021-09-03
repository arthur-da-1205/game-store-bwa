import SidebarItem from "../../molecules/SidebarItem";

export default function SidebarMenu() {
  return (
    <div className="menus">
      <SidebarItem title="Overview" icon="ic-overview-member" active />
      <SidebarItem title="Transactions" icon="ic-transactions-member" />
      <SidebarItem title="Messages" icon="ic-messages-member" />
      <SidebarItem title="Card" icon="ic-card-member" />
      <SidebarItem title="Rewards" icon="ic-rewards-member" />
      <SidebarItem title="Settings" icon="ic-settings" />
      <SidebarItem title="Logout" icon="ic-logout" />
    </div>
  );
}
