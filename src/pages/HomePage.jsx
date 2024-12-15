import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings isHome={true} />
    </>
  );
};

export default HomePage;
