import HomeBrowse from "./HomeBrowse";
import HomeCard from "./HomeCard";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <>
      {/* card section */}
      <HomeCard />

      {/* home browse section */}
      <HomeBrowse />

      {/* home products section */}
      <HomeProducts/>
    </>
  );
};

export default Home;
