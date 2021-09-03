import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function SidebarItem(props: SidebarItemProps) {
  const { title, icon, active, href } = props;
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
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
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
  href: string;
}
