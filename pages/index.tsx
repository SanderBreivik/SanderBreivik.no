import { ThemeProvider, useTheme } from "next-themes";

import {
  FaExternalLinkAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaSteamSquare,
  FaGithubSquare,
  FaFile,
} from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profilePicture from "../images/profile.webp";
import Sparkles from "./sprakles";
import Features from "../components/Features";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  const randomSites = [
    "https://longdogechallenge.com/",
    "https://checkboxrace.com/",
    "https://onesquareminesweeper.com/",
    "http://heeeeeeeey.com/",
    "http://corndog.io/",
    "https://binarypiano.com/",
    "https://mondrianandme.com/",
    "https://puginarug.com",
    "http://floatingqrcode.com/",
    "https://checkboxolympics.com/",
    "https://alwaysjudgeabookbyitscover.com",
    "https://thatsthefinger.com/",
    "https://cant-not-tweet-this.com/",
    "https://cursoreffects.com",
    "http://eelslap.com/",
    "http://www.staggeringbeauty.com/",
    "http://burymewithmymoney.com/",
    "https://smashthewalls.com/",
    "https://jacksonpollock.org/",
    "http://endless.horse/",
    "http://drawing.garden/",
    "https://www.trypap.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.movenowthinklater.com/",
    "http://www.rrrgggbbb.com/",
    "http://www.koalastothemax.com/",
    "http://www.everydayim.com/",
    "http://randomcolour.com/",
    "http://cat-bounce.com/",
    "http://chrismckenzie.com/",
    "https://thezen.zone/",
    "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
    "http://ninjaflex.com/",
    "http://ihasabucket.com/",
    "http://corndogoncorndog.com/",
    "http://www.hackertyper.com/",
    "https://pointerpointer.com",
    "http://imaninja.com/",
    "http://www.partridgegetslucky.com/",
    "http://www.ismycomputeron.com/",
    "http://www.nullingthevoid.com/",
    "http://www.muchbetterthanthis.com/",
    "http://www.yesnoif.com/",
    "http://lacquerlacquer.com",
    "http://potatoortomato.com/",
    "http://iamawesome.com/",
    "https://strobe.cool/",
    "http://thisisnotajumpscare.com/",
    "http://doughnutkitten.com/",
    "http://crouton.net/",
    "http://corgiorgy.com/",
    "http://www.wutdafuk.com/",
    "http://unicodesnowmanforyou.com/",
    "http://chillestmonkey.com/",
    "http://scroll-o-meter.club/",
    "http://www.crossdivisions.com/",
    "http://tencents.info/",
    "https://boringboringboring.com/",
    "http://www.patience-is-a-virtue.org/",
    "http://pixelsfighting.com/",
    "http://isitwhite.com/",
    "https://existentialcrisis.com/",
    "http://onemillionlols.com/",
    "http://www.omfgdogs.com/",
    "http://oct82.com/",
    "http://chihuahuaspin.com/",
    "http://www.blankwindows.com/",
    "http://tunnelsnakes.com/",
    "http://www.trashloop.com/",
    "http://www.ascii-middle-finger.com/",
    "http://spaceis.cool/",
    "http://www.doublepressure.com/",
    "http://www.donothingfor2minutes.com/",
    "http://buildshruggie.com/",
    "http://buzzybuzz.biz/",
    "http://yeahlemons.com/",
    "http://wowenwilsonquiz.com",
    "https://thepigeon.org/",
    "http://notdayoftheweek.com/",
    "http://www.amialright.com/",
    "https://greatbignothing.com/",
    "https://zoomquilt.org/",
    "https://dadlaughbutton.com/",
    "https://remoji.com/",
    "http://papertoilet.com/",
    "https://loopedforinfinity.com/",
    "https://www.bouncingdvdlogo.com/",
    "https://findtheinvisiblecow.com/",
  ];

  function getRandomSite() {
    return randomSites[Math.floor(Math.random() * randomSites.length)];
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CookieConsent buttonStyle={{ color: "black", background: "white" }}>
          This site uses cookies to enhance the user experience.
        </CookieConsent>
        <main className={styles.main}>
          <div className={styles.dogEar}>
          </div>
              <a className={styles.dogEarInner} title="View source code" href="https://github.com/SanderBreivik/SanderBreivik.no">
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
            I am a full-stack developer with a passion for creating{" "}
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
            <a
              href="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h3>CV</h3>
              <FaFile size={48} />
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <a href="mailto:me@sanderbreivik.no">Send me an email,&nbsp;</a>
          <a href="tel:004796044636"> give me a call&nbsp;</a>
          <a href="" onClick={() => window.open(getRandomSite())}>
            or do nothing at all...&nbsp;
            <FaExternalLinkAlt />
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}
