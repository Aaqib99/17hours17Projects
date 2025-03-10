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

const TwoCompact = (userData, type) => {
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
        new Table({
          width: {
            size: "100%",
            type: "PERCENTAGE",
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    centeredText(userData.reportingUnit.reportingYear, true, 24),
                  ],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [centeredText(upcomingYear, true, 24)],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [centeredText(nextUpcomingYear, true, 24)],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    centeredText(
                      `Implementation Results per Reporting Period`,
                      true,
                      24
                    ),
                  ],
                  columnSpan: 3,
                }),
              ],
            }),

            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    outcome.implementationResultOne !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultOne}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultTwo !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultTwo}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultThree !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultThree}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultFour !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultFour}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultFive !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultFive}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultSix !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultSix}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultSeven !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultSeven}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultEight !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultEight}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultNine !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultNine}`,
                          false,
                          24
                        )
                      : emptyLine,
                    outcome.implementationResultTen !== ""
                      ? textItem(
                          0,
                          `${outcome.implementationResultTen}`,
                          false,
                          24
                        )
                      : emptyLine,
                  ],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText("", true, 24)],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText(``, true, 24)],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    centeredText(
                      `Did the unit meet the outcome? Yes or No.`,
                      true,
                      24
                    ),
                  ],
                  columnSpan: 3,
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    outcome.outcomeMet === "1"
                      ? centeredText("Yes", false, 24)
                      : newLine,
                    outcome.outcomeMet === "0"
                      ? centeredText("No", false, 24)
                      : newLine,
                  ],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText("", true, 24)],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText(``, true, 24)],
                }),
              ],
            }),

            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    centeredText(
                      `Improvement Strategies for Next Reporting Period`,
                      true,
                      24
                    ),
                  ],
                  columnSpan: 3,
                }),
              ],
            }),

            new TableRow({
              children: [
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [
                    outcome.improveOne !== ""
                      ? plainText(`${outcome.improveOne}`, false, 24)
                      : emptyLine,
                  ],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText("", true, 24)],
                }),
                new TableCell({
                  width: { size: "33%", type: "PERCENTAGE" },
                  children: [plainText(``, true, 24)],
                }),
              ],
            }),
          ],
        }),
      ];

      allTables.push(...temp);
    });
  });

  return allTables;
};

export default TwoCompact;
