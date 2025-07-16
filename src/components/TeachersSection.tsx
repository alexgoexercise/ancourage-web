import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

const teachers = [
  {
    name: "Min",
    image: "/teacher1.jpg",
    bio: "Tutor Min specialises in English Language, Literature, History, Mathematics, Additional Mathematics.",
  },
  {
    name: "Karl",
    image: "/teacher2.jpg",
    bio: "Tutor Karl specialises in English Language, Mathematics, Science, Physics, Chemistry and Biology.",
  },
  {
    name: "Angie",
    image: "/teacher3.jpg",
    bio: "Tutor Angie specialises in Fine Arts, Digital Arts, Arts and Crafts.",
  },
];

export default function TeachersSection() {
  return (
    <section className={styles.teachersSection}>
      <div className={styles.teachersContainer}>
        <div className={styles.teachersIntro}>
          <p>
            We pride ourselves on our team of dedicated educators, each bringing years of teaching experience and a wealth of knowledge to the classroom. Our educators have worked with a diverse range of students, tailoring their teaching methods to meet individual needs and learning styles.
          </p>
          <p>
            Whether it is mastering complex concepts or building confidence, our teachers are committed to guiding each student on their unique educational journey.
          </p>
        </div>
        <div className={styles.teachersGrid}>
          {teachers.map((t) => (
            <div key={t.name} className={styles.teacherCard}>
              <Image
                src={t.image}
                alt={t.name}
                width={200}
                height={180}
                className={styles.teacherImage}
              />
              <h3>{t.name}</h3>
              <p>{t.bio}</p>
              <Link href="/about" className={styles.learnMoreButton}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 