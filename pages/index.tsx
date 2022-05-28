import { ThemeProvider, useTheme } from "next-themes";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profilePicture from "../images/profile.png";
import Sparkles from "./sprakles";
import Features from "../components/Features";
import ThemeChanger from "../components/ThemeChanger";
import useDarkMode from "use-dark-mode";

export default function Home() {
  return (
    <ThemeProvider>
      <div className={styles.darkModeToggle}>
        <ThemeChanger></ThemeChanger>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Sander Breivik | Full-stack developer</title>
          <meta
            name="description"
            content="Sander Breiviks personal full-stack profile"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.title}>
            <Image
              priority
              src={profilePicture}
              alt="Sander Breivik"
              width={400}
              height={400}
              className={styles.profile}
            />
            <div className={styles.titleTexts}>
              <h1>Sander Breivik</h1>
              <h2>
                <Features></Features>
              </h2>
            </div>
          </div>
          <></>
          <div className={styles.description}>
            I am a full-stack developer with a passion for creating{" "}
            <span className={styles.inline}>
              <Sparkles> beautiful* </Sparkles>
            </span>{" "}
            user experiences.
          </div>
          <p className={styles.asterisk}>
            * I know this is not much, but I promise I will add more in the
            future!
          </p>
          <div className={styles.grid}>
            <a
              href="
            https://www.linkedin.com/in/sanderbreivik"
              className={styles.card}
            >
              <h3>LinkedIn</h3>
              <p>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </p>
            </a>
            <a
              href="
            https://www.facebook.com/sander.breivik"
              className={styles.card}
            >
              <h3>Facebook</h3>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </p>
            </a>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
