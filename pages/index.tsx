import { ThemeProvider } from "next-themes";

import {
  FaLinkedin,
  FaFacebookSquare,
  FaSteamSquare,
  FaGithubSquare,
  FaFile,
} from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import profilePicture from "../images/profile.webp";
import Sparkles from "./sprakles";
import Features from "../components/Features";
import CookieConsent from "react-cookie-consent";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "./styles/Home.module.scss";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  function toggleDropdown() {
    setDropdownVisible(!isDropdownVisible);
  }

  return (
    <ThemeProvider enableSystem={true}>
      <div className={styles.container}>
        <Head>
          <title>Sander Breivik | Full-stack developer</title>
          <meta
            name="description"
            content="Sander Breiviks personal full-stack profile"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <title>Sander Brevik</title>
        </Head>
        <CookieConsent buttonStyle={{ color: "black", background: "white" }}>
          This site uses cookies to enhance the user experience.
        </CookieConsent>
        <main className={styles.main}>
          <div className={styles.dogEar}></div>
          <a
            className={styles.dogEarInner}
            title="View source code"
            href="https://github.com/SanderBreivik/SanderBreivik.no"
          >
            <FaGithubSquare className={styles.dogEarIcon} size={40} />
          </a>
          <header className={styles.title}>
            <figure>
              <Image
                loading="eager"
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
            I am a full-stack developer based in Øygarden outside Bergen in
            Norway with a passion for creating{" "}
            <span className={styles.inline}>
              <Sparkles> beautiful </Sparkles>
            </span>{" "}
            user experiences.
          </section>
          <div className={styles.grid}>
            <a
              href="
            https://www.linkedin.com/in/sanderbreivik"
              className={styles.card}
            >
              <h3>LinkedIn</h3>
              <FaLinkedin size={48} />
            </a>
            <a
              href="
            https://www.facebook.com/sander.breivik"
              className={styles.card}
            >
              <h3>Facebook</h3>
              <FaFacebookSquare size={48} />
            </a>
            <a
              href="https://steamcommunity.com/id/commxander"
              className={styles.card}
            >
              <h3>Steam</h3>
              <FaSteamSquare size={48} />
            </a>
            <a href="https://github.com/SanderBreivik" className={styles.card}>
              <h3>GitHub</h3>
              <FaGithubSquare size={48} />
            </a>
            <div
              className={styles.card}
              style={{ position: "relative" }}
              onClick={toggleDropdown}
            >
              <h3>CV</h3>
              <FaFile size={48} />
              {isDropdownVisible && (
                <div className={styles["cv-dropdown"]}>
                  <Link href="CV-en">
                    English
                  </Link>
                  <Link href="CV-no">
                    Norwegian
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
          <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
