import { TextRun, Paragraph, ShadingType } from "docx";

function coloredTextItem(level, text, bold, size) {

  return new Paragraph({
    bullet: { level: level },
    children: [
      new TextRun({
        text: `${text}`,
        size: size,
        bold: bold,
        font: "Calibri",
        shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
      })
    ],
  });
}

export default coloredTextItem;