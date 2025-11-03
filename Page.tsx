import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Kayal.AI</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#">الرئيسية</a>
          <a href="#">الخدمات</a>
          <a href="#">أخرى</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>مرحباً بك في Kayal.AI</h2>
        <p>
          استكشف مستقبل الإبداع مع الذكاء الاصطناعي: توليد صور، تعديلها وتحويلها إلى 3D بشكل احترافي.
        </p>

        <div className={styles.services}>
          <div className={styles.service}>
            <img src="/section_icon2.png" alt="3D Converter" />
            <h3>3D Converter</h3>
          </div>
          <div className={styles.service}>
            <img src="/section_icon3.png" alt="الخدمات" />
            <h3>الخدمات</h3>
          </div>
          <div className={styles.service}>
            <img src="/KayalAI_logo.png" alt="أخرى" />
            <h3>أخرى</h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 Kayal.AI | جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
