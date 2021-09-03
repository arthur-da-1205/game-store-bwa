import Image from "next/image";
import CategoryItem from "../../../molecules/CategoryItem";

export default function Category() {
  return (
    <div className="main-content">
      <div className="row">
        <CategoryItem
          title1="Game"
          title2="Desktop"
          icon="ic-game-desktop"
          totalSpent="Rp. 18.050.000"
        />
        <CategoryItem
          title1="Game"
          title2="Mobile"
          icon="ic-game-mobile"
          totalSpent="Rp. 18.050.000"
        />
        <CategoryItem
          title1="Other"
          title2="Games"
          icon="ic-game-desktop"
          totalSpent="Rp. 18.050.000"
        />
      </div>
    </div>
  );
}
