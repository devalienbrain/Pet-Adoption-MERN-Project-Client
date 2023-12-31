import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Categories from "./Categories/Categories";
import DonateMonthly from "./DonateMonthly/DonateMonthly";
import JoinWithUs from "./JoinWithUs/JoinWithUs";
import PetGroup from "./PetGroup";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PawsPalace Pet Place | Home</title>
      </Helmet>
      <Banner></Banner>
      <JoinWithUs></JoinWithUs>
      <PetGroup></PetGroup>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <CallToAction></CallToAction>
      <DonateMonthly></DonateMonthly>
    </div>
  );
};

export default Home;
