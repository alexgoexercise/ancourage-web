import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../app/page.module.css";

export default function ESBSection() {
  return (
    <section className={styles.esbSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Proprietary ESB Methodology</h2>
          {isMobile ? (
           <Swiper
             pagination={{ clickable: true }}
             autoplay={{ delay: 3000 }}
             modules={[Pagination, Autoplay]}
             className={styles.esbSwiper}
           >
             <SwiperSlide>
               <Image
                 src="/esb1.png"
                 alt="ESB Methodology Step 1"
                 width={900}
                 height={450}
                 className={styles.esbSlideImage}
               />
             </SwiperSlide>
             <SwiperSlide>
               <Image
                 src="/esb2.png"
                 alt="ESB Methodology Step 2"
                 width={900}
                 height={450}
                 className={styles.esbSlideImage}
               />
             </SwiperSlide>
             <SwiperSlide>
               <Image
                 src="/esb3.png"
                 alt="ESB Methodology Step 3"
                 width={900}
                 height={450}
                 className={styles.esbSlideImage}
               />
             </SwiperSlide>
           </Swiper>
         ) : (
          <Image
            className={styles.esbImage}
            src="/esb-methodology.png"
            alt="ESB Methodology Diagram"
            width={900}
            height={450}
          />
        )}
        <Link href="/about" className={styles.ctaButton}>
          More About ESB
        </Link>
      </div>
    </section>
  );
} 