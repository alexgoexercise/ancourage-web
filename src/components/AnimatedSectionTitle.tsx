import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../app/page.module.css';

interface AnimatedSectionTitleProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
}

export default function AnimatedSectionTitle({ 
  children, 
  className = '', 
  animationDelay = 0 
}: AnimatedSectionTitleProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLHeadingElement>({
    threshold: 0.3,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <h2
      ref={elementRef}
      className={`${styles.sectionTitle} ${styles.animatedTitle} ${className} ${
        isVisible ? styles.titleVisible : ''
      }`}
      style={{
        '--animation-delay': `${animationDelay}ms`,
      } as React.CSSProperties}
    >
      {children}
    </h2>
  );
} 