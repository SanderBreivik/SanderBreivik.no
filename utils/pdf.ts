import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Downloads the CV content as a PDF file
 * @param filename The name of the PDF file to download
 */
export const downloadCVAsPDF = async (filename: string = "Sander_Breivik_CV.pdf"): Promise<void> => {
  const input = document.getElementById("cv-content");

  if (!input) {
    throw new Error("CV content element was not found.");
  }

  const originalColor = input.style.color;
  const hadPdfModeClass = input.classList.contains("pdfMode");
  const hiddenElements = Array.from(document.querySelectorAll<HTMLElement>("[data-pdf-hide='true']"));
  const originalDisplays = hiddenElements.map((element) => element.style.display);

  input.style.color = "black";
  input.classList.add("pdfMode");
  hiddenElements.forEach((element) => {
    element.style.display = "none";
  });

  try {
    const scale = Math.max(2, Math.min(window.devicePixelRatio || 1, 3));
    const canvas = await html2canvas(input, {
      scale,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight,
    });

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const printableWidth = pageWidth - margin * 2;
    const printableHeight = pageHeight - margin * 2;
    const pxPerMm = canvas.width / printableWidth;
    const pageHeightPx = Math.floor(printableHeight * pxPerMm);

    let renderedHeightPx = 0;
    let pageIndex = 0;

    while (renderedHeightPx < canvas.height) {
      const sliceHeightPx = Math.min(pageHeightPx, canvas.height - renderedHeightPx);
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeightPx;

      const context = pageCanvas.getContext("2d");
      if (!context) {
        throw new Error("Failed to create canvas context while generating PDF.");
      }

      context.drawImage(
        canvas,
        0,
        renderedHeightPx,
        canvas.width,
        sliceHeightPx,
        0,
        0,
        canvas.width,
        sliceHeightPx,
      );

      const pageImage = pageCanvas.toDataURL("image/jpeg", 0.95);
      if (pageIndex > 0) {
        pdf.addPage();
      }

      const renderedHeightMm = sliceHeightPx / pxPerMm;
      pdf.addImage(pageImage, "JPEG", margin, margin, printableWidth, renderedHeightMm, undefined, "FAST");
      renderedHeightPx += sliceHeightPx;
      pageIndex += 1;
    }

    pdf.setProperties({
      title: "Sander Breivik CV",
      subject: "Curriculum Vitae",
      author: "Sander Breivik",
    });

    pdf.save(filename);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("An unknown error occurred while generating the PDF.");
  } finally {
    input.style.color = originalColor;
    if (!hadPdfModeClass) {
      input.classList.remove("pdfMode");
    }
    hiddenElements.forEach((element, index) => {
      element.style.display = originalDisplays[index] || "";
    });
  }
};
