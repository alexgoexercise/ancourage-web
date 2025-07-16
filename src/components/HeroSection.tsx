import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Ancourage
          </h1>
          <Image
            src="/ancourage-levels.png"
            alt="Ancourage Levels"
            width={800}
            height={350}
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h2>
              Ancourage Academy – MOE-Registered Bishan Tuition Centre Offering
              Personalised Learning from Preschool to JC, Including IP and IB
              Programmes
            </h2>
            <h2>
              <strong>Languages | Mathematics | Science | Arts</strong>
            </h2>
          </div>
          <Link
            href="https://wa.link/lrsonq"
            target="_blank"
            rel="noopener"
            className={styles.ctaButton}
          >
            Contact us
          </Link>
        </div>
        <div className={styles.heroRight}>
          <Image
              src="/book.jpg"
              alt="Book Visual"
              width={1000}
              height={2000}
              className={styles.heroVisual}
          />
        </div>
      </div>
    </section>
  );
} 