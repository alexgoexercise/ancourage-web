import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/ancourage-door.jpg"
              alt="Ancourage Door"
              width={600}
              height={400}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>Not Just a Tuition Centre</h2>
            <p>
              At Ancourage, we believe that every student is unique, and so should their learning journey be. That's why we've embraced the innovative ESB method to create personalised educational experiences that truly resonate.
            </p>
            <p>
              Unlike traditional tuition centres, our approach goes beyond simply teaching; we aim to understand each student's individual experiences, harness their strengths, and build on their beliefs about learning. By doing so, we empower our students to take charge of their education, fostering a deeper connection to the material and enhancing their confidence.
            </p>
            <p>
              Join us at Ancourage, a MOE-Registered Academy, and discover a transformative learning environment where tailored support meets academic excellence.
            </p>
            <Link href="/about" className={styles.CourseMoreButton}>
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 