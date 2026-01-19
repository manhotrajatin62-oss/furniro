import HomeBrowse from "./HomeBrowse";
import HomeCard from "./HomeCard";
import HomeFurniture from "./HomeFurniture";
import HomeProducts from "./HomeProducts";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <>
      {/* card section */}
      <HomeCard />

      {/* home browse section */}
      <HomeBrowse />

      {/* home products section */}
      <HomeProducts />

      {/* home slider section */}
      <HomeSlider />

      {/* funiro furniture section */}
      <HomeFurniture />
    </>
  );
};

export default Home;
