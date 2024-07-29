// pages/CV.tsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/CV.module.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ThemeProvider } from "next-themes";

const CV = () => {
  const downloadPDF = () => {
    const input = document.getElementById("cv-content");
    const downloadBtn = document.getElementById("downloadBtn");
    input.style.color = "black";
    downloadBtn.style.display = "none";
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Sander_Breivik_CV.pdf");
      input.style.color = "inherit";
      downloadBtn.style.display = "inherit";
    });
  };

  return (
    <ThemeProvider enableSystem={true}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            id="cv-content"
            className={styles.cvContent}
            style={{ padding: "1rem" }}
          >
            <header>
              <h1>Sander Breivik</h1>
              <p>
                <a href="mailto:me@sanderbreivik.no">me@sanderbreivik.no</a> |{" "}
                <a
                  href="https://linkedin.com/in/sanderbreivik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                | <a type="tel">96044636</a>
              </p>
              <button onClick={downloadPDF} id="downloadBtn" className={styles.downloadBtn}>
                Last ned som PDF
              </button>
            </header>

            <section>
              <h2>Om</h2>
              <p>
                Jeg er en fullstack-utvikler som brenner for å bygge
                brukervennlige systemer med brukeropplevelse i sentrum. Bosatt
                i Øygarden utenfor Bergen, Norge.Jeg har en Bachelor of Science
                i informatikk fra NTNU i Trondheim. Med erfaring i .NET, Angular, React,
                React Native, Python, Java, SQL og Figma, har jeg jobbet hos
                ACOS AS siden 2019, med fokus på å konvertere en
                Windows-applikasjon til en multi-tenant
                mikroservice-arkitektur.
              </p>
            </section>

            <section>
              <h2>Yrkeserfaring</h2>
              <h3>Fullstack-utvikler</h3>
              <p>ACOS AS, Straume</p>
              <i>November 2019 – Nåværende</i>
              <ul>
                <li>Primært jobbet med .NET og Angular.</li>
                <li>Brukt SQL og Figma til prototyping.</li>
                <li>
                  Konverterte en Windows-applikasjon til en multi-tenant
                  mikroservice-arkitektur.
                </li>
              </ul>
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
