import Hero from "./Hero";
import FeaturedEstates from "./FeaturedEstates";
import ImmersiveStats from "./ImmersiveStats";
import PropertyViewer from "./PropertyViewer";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import InquiryForm from "./InquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedEstates />
      <ImmersiveStats />
      <PropertyViewer />
      <WhyChooseUs />
      <Testimonials />
      <InquiryForm />
    </>
  );
}