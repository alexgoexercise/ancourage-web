import Link from "next/link";
import styles from "../app/page.module.css";

export default function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Where we are located!</h2>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            loading="lazy"
            src="https://maps.google.com/maps?q=Ancourage%20Academy%20152%20Bishan%20st%2011&t=m&z=15&output=embed&iwloc=near"
            title="Ancourage Academy 152 Bishan st 11"
          ></iframe>
        </div>
        <Link
          href="https://maps.app.goo.gl/Yc8JTC8mBS7fMcP46"
          target="_blank"
          className={styles.ctaButton}
        >
          Google Maps
        </Link>
      </div>
    </section>
  );
} 