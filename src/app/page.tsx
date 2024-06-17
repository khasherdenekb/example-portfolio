import { HomeCaraousel } from "@/components/shared/carousel/home-carousel";
import { Hero } from "@/components/shared/layout/body/hero";
import { HomeVideo } from "@/components/shared/layout/body/home-video";
import { LinkCategories } from "@/components/shared/layout/body/link-categories";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCaraousel type={"header"} />
      <LinkCategories type={"category"} />
      <HomeVideo type={"header"} />
      <LinkCategories type={"program"} />
      <HomeCaraousel type={"footer"} />
    </>
  );
};

export default Home;
