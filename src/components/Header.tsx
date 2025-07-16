"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
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
  );
} 