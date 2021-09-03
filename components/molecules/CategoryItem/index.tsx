import Image from "next/image";

export default function CategoryItem(props: CategoryItemProps) {
  const { title1, title2, icon, totalSpent } = props;

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">
            {title1}
            <br /> {title2}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{totalSpent}</p>
        </div>
      </div>
    </div>
  );
}

interface CategoryItemProps {
  title1: string;
  title2: string;
  icon: "ic-game-desktop" | "ic-game-mobile";
  totalSpent: string;
}
