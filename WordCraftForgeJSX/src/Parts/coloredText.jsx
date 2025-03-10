import { Paragraph, TextRun, ShadingType } from "docx";

function coloredText(text, bold, fontSize) {
  return new Paragraph({
    children: [
      new TextRun({
        font: "Calibri",
        bold: bold,
        text: text,
        size: fontSize,
        shading: {
          type: ShadingType.SOLID,
          color: "#30D5C8",
        },
      }),
    ],
  });
}

export default coloredText;
