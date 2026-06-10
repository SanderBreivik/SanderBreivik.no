// pages/CV.tsx
import React, { useState, useCallback } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/CV.module.scss";
import { ThemeProvider } from "next-themes";
import { getDecodedEmail } from "../utils/email";
import { downloadCVAsPDF } from "../utils/pdf";

const CV = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const decodedEmail = getDecodedEmail();

  const revealEmail = useCallback(() => {
    setEmailRevealed(true);
  }, []);

  const handleDownloadPDF = useCallback(async () => {
    setIsDownloading(true);
    setDownloadError(null);

    try {
      await downloadCVAsPDF("Sander_Breivik_CV_NO.pdf");
    } catch (error) {
      console.error(error);
      setDownloadError("Noe gikk galt under PDF-generering. Prøv igjen.");
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <ThemeProvider enableSystem={true}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div id="cv-content" className={styles.cvContent}>
            <header>
              <h1>Sander Breivik</h1>
              <p className={styles.contactLine}>
                <span className={styles.screenOnlyEmail}>
                  {emailRevealed ? (
                    <a href={`mailto:${decodedEmail}`}>{decodedEmail}</a>
                  ) : (
                    <button
                      onClick={revealEmail}
                      className={styles.inlineRevealBtn}
                    >
                      Klikk for å vise e-post
                    </button>
                  )}
                </span>
                <span className={styles.pdfOnlyEmail}>{decodedEmail}</span>
                <span data-pdf-hide="true">
                  |{" "}
                  <a
                    href="https://linkedin.com/in/sanderbreivik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                </span>
                | <a href="tel:96044636">96044636</a>
              </p>
              <div className={styles.actions} data-pdf-hide="true">
                <button
                  onClick={handleDownloadPDF}
                  className={styles.downloadBtn}
                  disabled={isDownloading}
                >
                  {isDownloading ? "Genererer PDF..." : "Last ned som PDF"}
                </button>
              </div>
              {downloadError && (
                <p className={styles.errorText}>{downloadError}</p>
              )}
            </header>

            <section>
              <h2>Om</h2>
              <p>
                Jeg er en fullstack-utvikler som brenner for å bygge
                brukervennlige systemer med brukeropplevelse i sentrum. Bosatt i
                Øygarden utenfor Bergen, Norge.Jeg har en Bachelor of Science i
                informatikk fra NTNU i Trondheim. Med erfaring i .NET, Angular,
                React, React Native, Python, Java, SQL og Figma, har jeg jobbet
                hos ACOS AS siden 2019, med fokus på å konvertere en
                Windows-applikasjon til en multi-tenant mikroservice-arkitektur.
                Nå er jeg ansatt hos Frende Skadeforsikring, hvor jeg primært
                jobber med .NET (F#) og React på deres nettbutikk for
                forsikringer.
              </p>
            </section>

            <section>
              <h2>Yrkeserfaring</h2>

              <h3>Fullstack-utvikler</h3>
              <p>Frende Skadeforsikring, Bergen</p>
              <i>November 2025 – nåværende</i>
              <p>
                Jobber som fullstack-utvikler på Frende sin digitale
                forsikringsbutikk, hvor kunder kan kjøpe og administrere
                forsikringer på nett. Løsningen er en del av Frende sin
                kundevendte plattform og består av både frontend-flyter og
                backend-tjenester knyttet til blant annet prising, validering,
                produktkonfigurasjon og integrasjoner.
              </p>
              <p>
                Jeg jobber primært med .NET, F#, React og TypeScript. Arbeidet
                mitt består av videreutvikling og vedlikehold av nettbutikken,
                inkludert backend-logikk, domenevalidering, mapping av
                forsikringsprodukter og dekninger, samt frontend-funksjonalitet
                i kjøpsflyten. Rollen krever forståelse for komplekse
                forsikringsregler og at forretningskrav omsettes til tydelige og
                robuste tekniske løsninger.
              </p>
              <p>
                Jeg har også jobbet med automatiserte tester, feilsøking på
                tvers av miljøer og analyse av feil i bygg- og testpipelines.
                Dette innebærer blant annet å identifisere forskjeller mellom
                testmiljøer og bidra til mer stabile releaser gjennom bedre
                diagnostikk og testdekning.
              </p>

              <h3>Fullstack-utvikler</h3>
              <p>ACOS AS, Straume</p>
              <i>November 2019 – November 2025</i>
              <p>
                Jobbet som fullstack-utvikler med modernisering av en
                eksisterende Windows-applikasjon til en webbasert løsning bygget
                på en multi-tenant mikroservice-arkitektur. Prosjektet handlet
                om å flytte funksjonalitet fra en eldre desktop-løsning over til
                en mer skalerbar og vedlikeholdbar plattform med moderne
                webteknologi.
              </p>
              <p>
                Arbeidet mitt var hovedsakelig knyttet til .NET, Angular,
                AngularJS, TypeScript og SQL. Jeg bidro både på frontend og
                backend, med utvikling av nye funksjoner, videreutvikling av
                eksisterende funksjonalitet og tilpasning av løsningen til en
                arkitektur hvor flere kunder kunne bruke samme plattform på en
                sikker og strukturert måte.
              </p>
              <p>
                Rollen innebar gradvis modernisering av eldre kode, integrasjon
                mellom nye og eksisterende tjenester, og tett samarbeid med
                andre utviklere for å sikre at løsningen kunne videreutvikles
                over tid uten å miste viktig funksjonalitet fra den opprinnelige
                applikasjonen.
              </p>
            </section>

            <section>
              <h2>Utdanning</h2>
              <h3>Bachelor of Science i informatikk</h3>
              <i>NTNU Gløshaugen, 2016-2019</i>
              <p>
                Fokuserte på databaser, algoritmer, objektorientert
                programmering, operativsystemer, webutvikling, menneske-maskin
                interaksjon, informasjonshenting og programvareutvikling.
              </p>
              <h3>Studieforberedende med teknologi</h3>
              <i>Sotra Videregående Skole, Bildøy, 2013-2016</i>
              <p>
                Forberedt for høyere utdanning innen teknologi- og ingeniørfag,
                med dekning av generelle studieforberedende fag og nødvendige
                ferdigheter for ingeniør- og teknologistudier.
              </p>
            </section>

            <section>
              <h2>Tekniske ferdigheter</h2>
              <ul>
                <li>.NET (C#)</li>
                <li>TypeScript/JavaScript</li>
                <li>Angular + AngularJS</li>
                <li>React + React Native</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
              <h2>Andre</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Jira</li>
                <li>Office 365</li>
                <li>Photoshop</li>
                <li>UX</li>
                <li>Scrum</li>
                <li>Zendesk</li>
              </ul>
            </section>

            <section>
              <h2>Aktiviteter og interesser</h2>
              <ul>
                <li>Fridykking</li>
                <li>Reise</li>
                <li>Matlaging</li>
                <li>Gitar</li>
                <li>Fotografering</li>
                <li>Videoredigering</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default CV;
