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
      await downloadCVAsPDF("Sander_Breivik_CV_EN.pdf");
    } catch (error) {
      console.error(error);
      setDownloadError("Something went wrong while generating the PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <ThemeProvider enableSystem={true}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            id="cv-content"
            className={styles.cvContent}
          >
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
                      Click to show email
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
                  </a>
                  {" "}
                </span>
                |{" "}
                <a href="tel:96044636">96044636</a>
              </p>
              <div className={styles.actions} data-pdf-hide="true">
                <button
                  onClick={handleDownloadPDF}
                  className={styles.downloadBtn}
                  disabled={isDownloading}
                >
                  {isDownloading ? "Generating PDF..." : "Download as PDF"}
                </button>
              </div>
              {downloadError && <p className={styles.errorText}>{downloadError}</p>}
            </header>

            <section>
              <h2>About</h2>
              <p>
                I am a full-stack developer passionate about building
                user-friendly systems with the user experience at the center.
                Based in Øygarden outside Bergen, Norway, I hold a Bachelor of
                Science in Informatics from NTNU in Trondheim. With experience in .NET,
                Angular, React, React Native, Python, Java, SQL, and Figma, I
                have been working at ACOS AS since 2019, focusing on converting
                Windows applications to multi-tenant, microservice
                architectures. Currently, I am employed at Frende Skadeforsikring, working
                primarily with .NET (F#) and React on their online insurance
                store. 
              </p>
            </section>

            <section>
              <h2>Professional Experience</h2>
              <h3>Full-stack Developer</h3>
              <p>Frende Skadeforsikring, Bergen</p>
              <i>November 2025 – present</i>
              <ul>
                <li>Primarily working with .NET (
                  F#) and React. </li>
                <li>
                  Working on developing and maintaining the store front of Frende.no where customers can buy insurances online.
                </li>
              </ul>
              <h3>Full-stack Developer</h3>
              <p>ACOS AS, Straume</p>
              <i>November 2019 – November 2025</i>
              <ul>
                <li>Primarily working with .NET and Angular. </li>
                <li>
                  Did a conversion of a Windows application to a multi-tenant,
                  microservice architecture.
                </li>
              </ul>
            </section>

            <section>
              <h2>Education</h2>
              <h3>Bachelor of Science in Informatics</h3>
              <i>NTNU Gløshaugen, 2016-2019</i>
              <p>
                Focused on databases, algorithms, object-oriented programming,
                operating systems, web development, human-machine interaction,
                information retrieval, and software development.
              </p>
              <h3>Study Preparatory with Technology</h3>
              <i>Sotra Videregående Skole, Bildøy, 2013-2016</i>
              <p>
                Prepared for higher education in technology and engineering,
                covering general study preparatory subjects and essential skills
                for engineering and technology studies.
              </p>
            </section>

            <section>
              <h2>Technical Skills</h2>
              <ul>
                <li>.NET (C#)</li>
                <li>TypeScript/JavaScript</li>
                <li>Angular + AngularJS</li>
                <li>React + React Native</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
              <h2>Others</h2>
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
              <h2>Activities and Interests</h2>
              <ul>
                <li>Freediving</li>
                <li>Travel</li>
                <li>Cooking</li>
                <li>Guitar</li>
                <li>Photography</li>
                <li>Video editing</li>
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
