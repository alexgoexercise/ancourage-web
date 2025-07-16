import Image from "next/image";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../app/page.module.css";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

// Student work images with descriptive alt text
const studentWorks = [
  { src: "/sw1.jpg", alt: "Intricate pencil sketch by a student, featuring expressive lines and creative composition, created as part of an art program at Ancourage Academy in Bishan." },
  { src: "/sw2.jpg", alt: "Colorful student painting of sunflowers with expressive brushwork and vibrant tones, created during an art class at Ancourage Academy in Bishan." },
  { src: "/sw3.jpg", alt: "Watercolor painting of purple lilies in a green glass vase, student artwork from Ancourage Academy Bishan" },
  { src: "/sw4.jpg", alt: "A vibrant, student-created portrait of a mermaid, featuring bright colors and whimsical oceanic details, displayed at Ancourage Academy in Bishan." },
  { src: "/sw5.jpg", alt: "Pencil still life drawing by student from Ancourage Academy Bishan showcasing wine bottle, apple, knife, and glass on draped surface" },
  { src: "/sw6.jpg", alt: "Vibrant acrylic painting of strawberries in a glass cup with reflections and bold colors, created by a student from Ancourage Academy in Bishan." },
  { src: "/sw7.jpg", alt: "Colourful acrylic still life painting by student at Ancourage Academy Bishan featuring red jug, striped vase with daisies, and fruits on table" },
  { src: "/sw8.jpg", alt: "Vibrant dragon head painting under a starry night sky, student artwork from Ancourage Academy Bishan" },
  { src: "/sw9.jpg", alt: "Vibrant student painting of a chicken portrait in acrylic on yellow background, created at Ancourage Academy Bishan art class" },
  { src: "/sw10.jpg", alt: "Portrait of a young Black girl in white headband with three antique-style dolls, student artwork from Ancourage Academy Bishan" },
  { src: "/sw11.jpg", alt: "Intricate pencil sketch by a student, featuring expressive lines and creative composition, created as part of an art program at Ancourage Academy in Bishan." },
  { src: "/sw12.jpg", alt: "Charcoal portrait of a girl by student at Ancourage Academy Bishan Art Enrichment Program" }
];

export default function StudentWorksSection() {
  return (
    <section className={styles.studentsWorksSection}>
      <div className={styles.container}>
        <AnimatedSectionTitle>Student's Works</AnimatedSectionTitle>              
      </div>
      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          className={styles.studentsWorksSwiper}
          loop={true}
        >
          {studentWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <figure className={styles.swiperSlideInner}>
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={1902}
                  height={2560}
                  className={styles.swiperSlideImage}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 2000 }}
          className={styles.studentsWorksSwiper}
          loop={true}
        >
          {studentWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <figure className={styles.swiperSlideInner}>
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={1902}
                  height={2560}
                  className={styles.swiperSlideImage}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
} 