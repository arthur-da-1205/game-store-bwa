import React from "react";
import SidebarMember from "../../../components/organisms/Member/SidebarMember";
import TransactionsContent from "../../../components/organisms/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SidebarMember activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
