import { useState } from "react";
import CurtainHero from "@/components/wedding/CurtainHero";
import NamesHero from "@/components/wedding/NamesHero";
import Countdown from "@/components/wedding/Countdown";
import Venue from "@/components/wedding/Venue";
import MenuCard from "@/components/wedding/MenuCard";
import DressCode from "@/components/wedding/DressCode";
import Gifts from "@/components/wedding/Gifts";
import Transport from "@/components/wedding/Transport";
import RSVPForm from "@/components/wedding/RSVPForm";
import ThankYou from "@/components/wedding/ThankYou";

const Index = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <CurtainHero isOpen={curtainOpen} onOpen={() => setCurtainOpen(true)} />
      <NamesHero />
      <Countdown />
      <Venue />
      <MenuCard />
      <DressCode />
      <Gifts />
      <Transport />
      <RSVPForm />
      <ThankYou />
    </div>
  );
};

export default Index;
