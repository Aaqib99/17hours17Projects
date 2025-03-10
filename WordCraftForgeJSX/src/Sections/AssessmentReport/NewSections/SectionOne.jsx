import { Paragraph, TextRun, AlignmentType, UnderlineType } from "docx";
import { NewReporter } from "../../../Tables/NewTables/Reporter";
import plainText from "../../../Parts/plainText";

export const SectionOne = (userData , type, removeTitle) => {
  console.log("data in reporting unit table", userData);
  let title;
  let newLine = plainText(``, false, 18);

  if (!removeTitle) {

    if (type === "F" ) {
      title = "Individual Functional Assessment Report"
    }
    if (type === "G") {
      title = "General Education Assessment Report"
    }
    
    if (type === "L") {
      title = "Learning Assessment Report"
    }
  } else {
    title=''
  }

  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: title,
          size: 26,
          font: "Calibri",
          bold : true
        }) ]
      }),
    newLine,
    plainText("1.Reporting Unit", true, 24),
    plainText(
      "This section provides information about the reporting unit, responsible individuals, their contact information, and the mission statement.",
      false,
      22
    ),
    newLine,
    NewReporter(userData, type),
    newLine,

    userData.reportingUnit.comments
      ? plainText("General comments, if needed: ", true, 24)
      : newLine,
    userData.reportingUnit.comments
      ? new Paragraph({
          children: [
            new TextRun({
              text: `${userData.reportingUnit.comments}`,
              underline: { type: UnderlineType.SINGLE },
              size: 24,
              font: "Calibri",
            }),
          ],
        })
      : newLine,
       newLine
  ];
};
