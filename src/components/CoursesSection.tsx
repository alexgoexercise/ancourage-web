import { FaCalculator, FaFlask, FaLanguage, FaPalette } from "react-icons/fa";
import styles from "../app/page.module.css";

const courses = [
  {
    title: "Mathematics",
    description:
      "From Basic Mathematics, Elementary Math (EMath), Additional Math (AMath) to H1/H2/H3 Math.",
    icon: <FaCalculator />,
  },
  {
    title: "Sciences",
    description:
      "From primary all the way up to JC, we offer both combined sciences and pure sciences. Covering Physics, Chemistry, and Biology.",
    icon: <FaFlask />,
  },
  {
    title: "Languages",
    description:
      "From Basic English and Chinese, to Higher Level Mother Tongue, GP, Literature, and Creative Writing.",
    icon: <FaLanguage />,
  },
  {
    title: "Fine Arts",
    description:
      "Weekend enrichment and holiday workshops covering drawing, painting, digital art and more.",
    icon: <FaPalette />,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Courses We Offer</h2>
        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <div key={course.title} className={styles.courseItem}>
              <div className={styles.courseIcon}>{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 