"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalculator, FaFlask, FaLanguage, FaPalette } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  // NEW: Teachers data
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

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.siteLogo}>
            <Image
              src="/ancourage-logo.jpg"
              alt="Ancourage Logo"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#courses">Classes</Link>
              </li>
              <li>
                <Link href="#arts">Arts</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation Dropdown */}
          <nav className={`${styles.mobileNavigation} ${mobileMenuOpen ? styles.active : ''}`}>
            <ul>
              <li>
                <Link href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link href="#courses" onClick={() => setMobileMenuOpen(false)}>Classes</Link>
              </li>
              <li>
                <Link href="#arts" onClick={() => setMobileMenuOpen(false)}>Arts</Link>
              </li>
              <li>
                <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
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
                  alt="Book Bisual"
                  width={1000}
                  height={2000}
                  className={styles.heroVisual}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
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
                  At Ancourage, we believe that every student is unique, and so should their learning journey be. That’s why we’ve embraced the innovative ESB method to create personalised educational experiences that truly resonate.
                </p>
                <p>
                  Unlike traditional tuition centres, our approach goes beyond simply teaching; we aim to understand each student’s individual experiences, harness their strengths, and build on their beliefs about learning. By doing so, we empower our students to take charge of their education, fostering a deeper connection to the material and enhancing their confidence.
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

        {/* ESB Section */}
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

        {/* Courses Section */}
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

        {/* Teachers Section */}
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

        {/* Student's works section */}
        <section className={styles.studentsWorksSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Student's Works</h2>              
          </div>
          {isMobile? (
                      <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 2000 }}
                      className={styles.studentsWorksSwiper}
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
                    </Swiper>)
        }
        </section>

        {/* Workshop Section */}
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

        {/* Location Section */}
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
      </main>

    </div>
  );
}
