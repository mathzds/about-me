import React from "react";

import ProfileCard from "@/components/profile/profile";
import Header from "@/components/header/header";

import { useDisableWebFeatures } from "@/hooks/disableWebFeatures";

export default function Home() {
  useDisableWebFeatures();
  return (
    <div className=" container mx-auto p-4">
      <Header />
      <ProfileCard />
    </div>
  );
}
