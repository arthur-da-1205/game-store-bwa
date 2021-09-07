import Image from "next/image";
import CategoryItem from "../../../molecules/CategoryItem";

export default function Category() {
  return (
    <div className="main-content">
      <div className="row">
        <CategoryItem icon="ic-game-desktop" totalSpent={18050000}>
          Game <br /> Desktop
        </CategoryItem>
        <CategoryItem icon="ic-game-mobile" totalSpent={18050000}>
          Game <br /> Mobile
        </CategoryItem>
        <CategoryItem icon="ic-game-desktop" totalSpent={18050000}>
          Other <br /> Games
        </CategoryItem>
      </div>
    </div>
  );
}
