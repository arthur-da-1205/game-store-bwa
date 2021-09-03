import SidebarItem from "../../../molecules/SidebarItem";

export default function SidebarMenu() {
  return (
    <div className="menus">
      <SidebarItem
        title="Overview"
        icon="ic-overview-member"
        active
        href="/member"
      />
      <SidebarItem
        title="Transactions"
        icon="ic-transactions-member"
        href="/member/transactions"
      />
      <SidebarItem title="Messages" icon="ic-messages-member" href="/member" />
      <SidebarItem title="Card" icon="ic-card-member" href="/member" />
      <SidebarItem title="Rewards" icon="ic-rewards-member" href="/member" />
      <SidebarItem
        title="Settings"
        icon="ic-settings"
        href="/member/edit-profile"
      />
      <SidebarItem title="Logout" icon="ic-logout" href="/member" />
    </div>
  );
}
