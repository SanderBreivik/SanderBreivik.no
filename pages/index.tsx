import { ThemeProvider, useTheme } from "next-themes";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profilePicture from "../images/profile.png";
import Sparkles from "./sprakles";
import Features from "../components/Features";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true}>
      <div className={styles.container}>
        <Head>
          <title>Sander Breivik | Full-stack developer</title>
          <meta
            name="description"
            content="Sander Breiviks personal full-stack profile"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CookieConsent buttonStyle={{ color: "black", background: "white" }}>
          This site uses cookies to enhance the user experience.
        </CookieConsent>
        <main className={styles.main}>
          <header className={styles.title}>
            <figure>
              <Image
                priority
                src={profilePicture}
                alt="Sander Breivik"
                width={400}
                height={400}
                className={styles.profile}
              />
            </figure>
            <section className={styles.titleTexts}>
              <h1>Sander Breivik</h1>
              <h2>
                <Features></Features>
              </h2>
            </section>
          </header>
          <section className={styles.description}>
            I am a full-stack developer with a passion for creating{" "}
            <span className={styles.inline}>
              <Sparkles> beautiful </Sparkles>
            </span>
            user experiences.
          </section>

          <div className={styles.grid}>
            <a
              href="
            https://www.linkedin.com/in/sanderbreivik"
              className={styles.card}
            >
              <h3>LinkedIn</h3>
              <p>
                <svg
                  role="img"
                  focusable="false"
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
                {/*  https://iconmonstr.com/linkedin-3-svg/ */}
                <svg
                  role="img"
                  focusable="false"
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
            <a
              href="https://steamcommunity.com/id/commxander"
              className={styles.card}
            >
              <h3>Steam</h3>
              <p>
                <svg
                  role="img"
                  focusable="false"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm9.594-17.183h-14c-2.761 0-5 2.239-5 5v6.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.582 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v3.587c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.678 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.754 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.4-1.077 2.4-2.401 0-1.323-1.075-2.401-2.4-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.077 2.401 2.401 2.401z" />
                </svg>
              </p>
            </a>
            <a href="https://github.com/SanderBreivik" className={styles.card}>
              <h3>GitHub</h3>
              <p>
                <svg
                  role="img"
                  focusable="false"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </p>
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>
            <a href="mailto:me@sanderbreivik.no">Send me an email</a>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
