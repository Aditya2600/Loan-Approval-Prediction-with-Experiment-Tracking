import React from "react";
import Section1 from "./InnerComponent/Home/HeroSection";
import Section2 from "./InnerComponent/Home/Section2";
import ImageSlider from "./InnerComponent/Home/ImageSlider";
import FacultyHead from "./InnerComponent/Home/FacultyHead";
import EmpoweringGrowth from "./InnerComponent/Home/EmpoweringGrowth";
import CommunityCounter from "./InnerComponent/Home/CommunityCounter";
import QuizPromotion from "./InnerComponent/Home/QuizPromotion";
import ContactForm from "./InnerComponent/Home/ContactForm";

const Home = () => {
  return (
    <>
      <Section1/>
      <Section2/>
      <ImageSlider/>
      <FacultyHead/>
      <EmpoweringGrowth/>
      <CommunityCounter/>
      <QuizPromotion/>
      <ContactForm/>
    </>
  );
};

export default Home;
