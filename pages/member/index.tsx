import OverviewContent from "../../components/organisms/Member/OverviewContent";
import Overview from "../../components/organisms/Member/OverviewContent";
import Category from "../../components/organisms/Member/OverviewContent/Category";
import SidebarMember from "../../components/organisms/Member/SidebarMember";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SidebarMember />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <Category />
          </div>
          <OverviewContent />
        </div>
      </main>
    </section>
  );
}
