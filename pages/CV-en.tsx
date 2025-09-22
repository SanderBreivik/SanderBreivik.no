// pages/CV.tsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/CV.module.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ThemeProvider } from "next-themes";

const CV = () => {
  const getDecodedEmail = () => {
    // Base64 encoded email: me@sanderbreivik.no
    const encoded = "bWVAc2FuZGVyYnJlaXZpay5ubw==";
    return atob(encoded);
  };

  const downloadPDF = () => {
    const input = document.getElementById("cv-content");
    const downloadBtn = document.getElementById("downloadBtn");
    input.style.color = "black";
    downloadBtn.style.display = "none";
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
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
                <a href={`mailto:${getDecodedEmail()}`}>{getDecodedEmail()}</a>{" "}|{" "}
                <a
                  href="https://linkedin.com/in/sanderbreivik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" "}|{" "}<a type="tel">96044636</a>
              </p>
              <button onClick={downloadPDF} id="downloadBtn" className={styles.downloadBtn}>
                Download as PDF
              </button>
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
                architectures.
              </p>
            </section>

            <section>
              <h2>Professional Experience</h2>
              <h3>Full-stack Developer</h3>
              <p>ACOS AS, Straume</p>
              <i>November 2019 – Present</i>
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
