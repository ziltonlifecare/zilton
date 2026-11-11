import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContactWidget } from "~/components/common/FloatingContactWidget";
import { FloatingWhatsAppButton } from "~/components/common/FloatingWhatsAppButton";
import { LenisProvider } from "~/components/motion/LenisProvider";
import { CustomCursor } from "~/components/motion/CustomCursor";
import { PageTransition } from "~/components/motion/PageTransition";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <LenisProvider>
      <CustomCursor />
      <div className="flex min-h-screen flex-col relative bg-[#FAFCFA] text-[#1B634E] selection:bg-[#1B634E] selection:text-[#FAFCFA]">
        <Navbar />
        <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        {/* Single consolidated floating button for instant verified enquiry */}
        <FloatingWhatsAppButton />
      </div>
    </LenisProvider>
  );
}
