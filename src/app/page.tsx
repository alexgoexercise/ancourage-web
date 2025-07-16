"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  Header,
  HeroSection,
  AboutSection,
  ESBSection,
  CoursesSection,
  TeachersSection,
  StudentWorksSection,
  WorkshopSection,
  LocationSection,
} from "../components";

export const dynamic = "force-static";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <ESBSection />
        <CoursesSection />
        <TeachersSection />
        <StudentWorksSection />
        <WorkshopSection />
        <LocationSection />
      </main>
    </div>
  );
}
