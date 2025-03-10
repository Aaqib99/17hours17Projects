import { Paragraph, TextRun } from "docx";

function boldAndUnBoldText(level, boldText, unBoldText , size) {

  return new Paragraph({
    bullet : {level : level},
    children: [
      new TextRun({ text: `${boldText}`, font: "Calibri", size: size, bold: true }),
      new TextRun({ text: `${unBoldText}`, font: "Calibri", size: size, bold: false }),
    ],
  });
}
export default boldAndUnBoldText;
