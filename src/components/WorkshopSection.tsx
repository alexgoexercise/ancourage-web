import Link from "next/link";
import styles from "../app/page.module.css";

export default function WorkshopSection() {
  return (
    <section className={styles.workshopSection}>
      <div className={styles.workshopContainer}>
        <div className={styles.workshopContent}>
          <div className={styles.workshopLeft}>
            <h2 className={styles.workshopTitle}>Interested in our workshops?</h2>
          </div>
          <div className={styles.workshopRight}>
            <p className={styles.workshopDescription}>
              We Think One of Our Workshops Will Fit Your Needs <br />
              Ready to check which workshops are available? <br />
              You can click the button to see all our available workshops or you can call us for a consultation!
            </p>
            <Link href="/classes" className={styles.workshopButton}>
              Check Our Workshops
            </Link>
          </div>
        </div>
        <div className={styles.workshopBackground}>
          <span>Workshops</span>
        </div>
      </div>
    </section>
  );
} 