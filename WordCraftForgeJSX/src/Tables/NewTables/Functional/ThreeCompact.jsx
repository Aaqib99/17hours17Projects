import {
  Paragraph,
  TextRun,
  UnderlineType,
  Table,
  TableRow,
  TableCell,
} from "docx";
import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import plainText, { centeredText } from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

let emptyLine = plainText(``, true, 1);

const ThreeCompact = (userData, type) => {
  let allTables = [];

  let upcomingYear = findUpcomingYear(userData.reportingUnit.reportingYear);
  let nextUpcomingYear = findUpcomingYear(upcomingYear);

  console.log("inside compact");
  let goals = userData.adminGoals;

  let newLine = plainText(``, false, 24);
  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      let temp = [
        newLine,
        new Paragraph({
          children: [
            new TextRun({
              text: `Goal Label and Statement: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: `${entry.label} ${entry.goalStatement}`,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Outcome Label and Statement: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: `${outcome.outcomeLabel} ${outcome.outcomeStatement}`,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `${userData.reportingUnit.reportingYear} Implementation: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: `${outcome.implementationResultOne},  ${outcome.implementationResultTwo}, ${outcome.implementationResultThree}, ${outcome.implementationResultFour}, ${outcome.implementationResultFive}, ${outcome.implementationResultSix}, ${outcome.implementationResultSeven}, ${outcome.implementationResultEight}, ${outcome.implementationResultNine}, ${outcome.implementationResultTen}.`,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Improvement for Next Reporting Period: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: `${outcome.improveOne} `,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),

        new Paragraph({
          children: [
            new TextRun({
              text: `${upcomingYear} Implementation: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: ``,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Improvement for Next Reporting Period: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: ``,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),

        new Paragraph({
          children: [
            new TextRun({
              text: `${nextUpcomingYear} Implementation: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: ``,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Improvement for Next Reporting Period: `,
              size: 24,
              bold: true,
              font: "Calibri",
            }),

            new TextRun({
              text: ``,
              size: 24,
              bold: false,
              underline: { type: UnderlineType.SINGLE },
              font: "Calibri",
            }),
          ],
        }),
      ];

      allTables.push(...temp);
    });
  });

  return allTables;
};

export default ThreeCompact;
