import { lazy, Suspense } from "react";
import HomeBrowse from "./HomeBrowse";
import HomeCard from "./HomeCard";
import HomeFurniture from "./HomeFurniture";
const HomeProducts = lazy(() => import("./HomeProducts"));
import HomeSlider from "./HomeSlider";
import Loader from "../../UI/Loader";
import ErrorBoundary from "../../UI/ErrorBoundary";

const Home = () => {
  return (
    <>
      {/* card section */}
      <HomeCard />

      {/* home browse section */}
      <HomeBrowse />

      {/* home products section */}
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <HomeProducts />
        </Suspense>
      </ErrorBoundary>

      {/* home slider section */}
      <HomeSlider />

      {/* funiro furniture section */}
      <HomeFurniture />
    </>
  );
};

export default Home;
