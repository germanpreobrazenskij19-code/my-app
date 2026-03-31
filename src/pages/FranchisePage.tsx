import React from "react";
import Navbar from "@/components/Navbar";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseBenefits from "@/components/franchise/FranchiseBenefits";
import FranchiseNumbers from "@/components/franchise/FranchiseNumbers";
import FranchiseSteps from "@/components/franchise/FranchiseSteps";
import FranchiseForm from "@/components/franchise/FranchiseForm";
import Footer from "@/components/Footer";

export default function FranchisePage() {
  return (
    <>
      <Navbar />
      <FranchiseHero />
      <FranchiseBenefits />
      <FranchiseNumbers />
      <FranchiseSteps />
      <FranchiseForm />
      <Footer />
    </>
  );
}