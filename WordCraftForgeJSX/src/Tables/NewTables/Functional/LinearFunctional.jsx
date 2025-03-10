import { Table, TableRow, TableCell, BorderStyle } from "docx";
import plainText, { underlineText } from "../../../Parts/plainText";


const borders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};
export const LinearFunctional = (userData, type) => {


  let newLine = underlineText(``, false, 18);
  let emptyLine = plainText(``, false, 1);

  let allTables = [];
//   let typeName = "Functional";
  let goals = userData.adminGoals;

  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      let table = new Table({
        width: {
          size: "100%",
          type: "PERCENTAGE",
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Goal Statement ${index + 1}:`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                  underlineText(
                    `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
                    false,
                    24
                  ),
                ],
                borders,
              }),
            ],
          }),

          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `Outcome Statement ${index + 1}.${outcomeIndex + 1}: `,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                  underlineText(
                    `The ${userData.reportingUnit.office} will be able to ${outcome.outcomeStatement}.`,
                    false,
                    24
                  ),
                ],
              }),
            ],
          }),

          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Direct Evidence ${index + 1}.${outcomeIndex + 1}:`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                  outcome.directMeasureOne !== ""
                    ? underlineText(`${outcome.directMeasureOne}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureTwo !== ""
                    ? underlineText(`${outcome.directMeasureTwo}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureThree !== ""
                    ? underlineText(`${outcome.directMeasureThree}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Indirect Evidence ${index + 1}.${outcomeIndex + 1}: `, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.indirectMeasureOne !== ""
          ? underlineText(`${outcome.indirectMeasureOne}`, false, 24)
          : emptyLine,
        outcome.indirectMeasureTwo !== ""
          ? underlineText(`${outcome.indirectMeasureTwo}`, false, 24)
          : emptyLine,
        outcome.indirectMeasureThree !== ""
          ? underlineText(`${outcome.indirectMeasureThree}`, false, 24)
          : emptyLine,
                ],
              }),
            ],
          }),



          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Direct Threshold ${index + 1}.${outcomeIndex + 1}:`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.directMeasureOneTarget !== ""
                    ? underlineText(`${outcome.directMeasureOneTarget}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureTwoTarget !== ""
                    ? underlineText(`${outcome.directMeasureTwoTarget}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureThreeTarget !== ""
                    ? underlineText(`${outcome.directMeasureThreeTarget}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Indirect Threshold ${index + 1}.${outcomeIndex + 1}: `, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.indirectMeasureOneTarget !== ""
                    ? underlineText(`${outcome.indirectMeasureOneTarget}`, false, 24)
                    : emptyLine,
                  outcome.indirectMeasureTwoTarget !== ""
                    ? underlineText(`${outcome.indirectMeasureTwoTarget}`, false, 24)
                    : emptyLine,
                  outcome.indirectMeasureThreeTarget !== ""
                    ? underlineText(`${outcome.indirectMeasureThreeTarget}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),



          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Implementation Results ${index + 1}.${outcomeIndex + 1}:`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.implementationResultOne !== ""
          ? underlineText(`${outcome.implementationResultOne}`, false, 24)
          : emptyLine,
        outcome.implementationResultTwo !== ""
          ? underlineText(`${outcome.implementationResultTwo}`, false, 24)
          : emptyLine,
        outcome.implementationResultThree !== ""
          ? underlineText(`${outcome.implementationResultThree}`, false, 24)
          : emptyLine,
        outcome.implementationResultFour !== ""
          ? underlineText(`${outcome.implementationResultFour}`, false, 24)
          : emptyLine,
        outcome.implementationResultFive !== ""
          ? underlineText(`${outcome.implementationResultFive}`, false, 24)
          : emptyLine,
        outcome.implementationResultSix !== ""
          ? underlineText(`${outcome.implementationResultSix}`, false, 24)
          : emptyLine,
        outcome.implementationResultSeven !== ""
          ? underlineText(`${outcome.implementationResultSeven}`, false, 24)
          : emptyLine,
        outcome.implementationResultEight !== ""
          ? underlineText(`${outcome.implementationResultEight}`, false, 24)
          : emptyLine,
        outcome.implementationResultNine !== ""
          ? underlineText(`${outcome.implementationResultNine}`, false, 24)
          : emptyLine,
        outcome.implementationResultTen !== ""
          ? underlineText(`${outcome.implementationResultTen}`, false, 24)
          : emptyLine,
                ],
              }),
            ],
          }),




          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `Did the unit meet the outcome?`,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.outcomeMet === "1"
                    ? plainText(
                        "Yes, the results indicated that the obtained results were at or above the thresholds.",
                        false,
                        24
                      )
                    : newLine,
                  outcome.outcomeMet === "0"
                    ? plainText(
                        "No, the results indicated that the obtained results were below the thresholds.",
                        false,
                        24
                      )
                    : newLine,
                ],
              }),
            ],
          }),



          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `Supporting Attachments ${index + 1}.${outcomeIndex + 1}:`,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `Improvement Strategies ${index + 1}.${outcomeIndex + 1}:`,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                borders,
                children: [
                    outcome.improveOne !== ""
                    ? underlineText(`${outcome.improveOne}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),
        ],
      });
      allTables.push(table);
    });
  });
  return allTables;
};
