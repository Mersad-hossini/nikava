import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import SupportButton from "@/components/layout/SupportButton/SupportButton";
import React from "react";
function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SupportButton />
    </>
  );
}
export default SiteLayout;