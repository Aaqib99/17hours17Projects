import { TextRun, Paragraph } from "docx";

function textItem(level, text, bold, size) {
  return new Paragraph({
    bullet: { level: level },
    children: [
      new TextRun({
        text: `${text}`,
        size: size,
        bold: bold,
        font: "Calibri",
      })
    ],
  });
}
export const newBold = (level, boldText, unboldText, size) =>{
  return new Paragraph({
    bullet: { level: level },
    children: [ 
      new TextRun({
        text: `${boldText}`,
        size: size,
        bold: true,
        font: "Calibri",
      }),
      new TextRun({
        text: `${unboldText}`,
        size: size,
        bold: false,
        font: "Calibri",
      }),
    ],
  });
}

export default textItem;
