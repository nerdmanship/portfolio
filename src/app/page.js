import Link from 'next/link';
import styles from "./page.module.css";
import Project from './components/Project';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Hello World</h1>
      </section>
      <section className={styles.content}>
        <Link href="/about">About Me →</Link>
      </section>
      <section className={styles.content}>
        <Project 
          title="Interactive Animation"
          description="CSS Animation experiment"
          type="codepen"
          id="ZLoyPG"
          thumbnail="/projects/thumbnail-droid.png"

        />
      </section>
    </>
  );
}
