import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Downloads the CV content as a PDF file
 * @param filename The name of the PDF file to download
 */
export const downloadCVAsPDF = async (filename: string = "Sander_Breivik_CV.pdf"): Promise<void> => {
  const input = document.getElementById("cv-content");
  const downloadBtn = document.getElementById("downloadBtn");
  
  if (!input) {
    console.error("CV content element not found");
    return;
  }

  const originalColor = input.style.color;
  const originalDisplay = downloadBtn?.style.display;
  
  input.style.color = "black";
  if (downloadBtn) {
    downloadBtn.style.display = "none";
  }

  try {
    const canvas = await html2canvas(input, { scale: 2 });
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

    pdf.save(filename);
  } finally {
    input.style.color = originalColor;
    if (downloadBtn) {
      downloadBtn.style.display = originalDisplay || "inherit";
    }
  }
};
