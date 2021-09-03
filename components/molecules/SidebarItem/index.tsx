import cx from "classnames";
import Image from "next/image";

export default function SidebarItem(props: SidebarItemProps) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}

interface SidebarItemProps {
  title: string;
  icon:
    | "ic-overview-member"
    | "ic-transactions-member"
    | "ic-messages-member"
    | "ic-card-member"
    | "ic-rewards-member"
    | "ic-settings"
    | "ic-logout";
  active?: boolean;
}
