import plainText, { centeredText } from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import indentText from "../../../Parts/indentText";
import { Table, TableRow, TableCell, BorderStyle } from "docx";

const borders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};
export const BoxFunctional = (userData, type) => {


  let newLine = plainText(``, false, 18);
  let emptyLine = plainText(``, false, 1);

  let allTables = [];
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
                children: [plainText(`Goal Statement ${index + 1}`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
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
                children: [
                  plainText(
                    `Outcome Statement ${index + 1}.${outcomeIndex + 1} `,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                  plainText(
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
                children: [plainText(`Direct Evidence ${index + 1}.${outcomeIndex + 1}`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                  outcome.directMeasureOne !== ""
                    ? textItem(0, `${outcome.directMeasureOne}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureTwo !== ""
                    ? textItem(0, `${outcome.directMeasureTwo}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureThree !== ""
                    ? textItem(0, `${outcome.directMeasureThree}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Indirect Evidence ${index + 1}.${outcomeIndex + 1} `, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                    outcome.indirectMeasureOne !== ""
          ? textItem(0, `${outcome.indirectMeasureOne}`, false, 24)
          : emptyLine,
        outcome.indirectMeasureTwo !== ""
          ? textItem(0, `${outcome.indirectMeasureTwo}`, false, 24)
          : emptyLine,
        outcome.indirectMeasureThree !== ""
          ? textItem(0, `${outcome.indirectMeasureThree}`, false, 24)
          : emptyLine,
                ],
              }),
            ],
          }),



          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Direct Threshold ${index + 1}.${outcomeIndex + 1}`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                    outcome.directMeasureOneTarget !== ""
                    ? textItem(0, `${outcome.directMeasureOneTarget}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureTwoTarget !== ""
                    ? textItem(0, `${outcome.directMeasureTwoTarget}`, false, 24)
                    : emptyLine,
                  outcome.directMeasureThreeTarget !== ""
                    ? textItem(0, `${outcome.directMeasureThreeTarget}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Indirect Threshold ${index + 1}.${outcomeIndex + 1} `, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                    outcome.indirectMeasureOneTarget !== ""
                    ? textItem(0, `${outcome.indirectMeasureOneTarget}`, false, 24)
                    : emptyLine,
                  outcome.indirectMeasureTwoTarget !== ""
                    ? textItem(0, `${outcome.indirectMeasureTwoTarget}`, false, 24)
                    : emptyLine,
                  outcome.indirectMeasureThreeTarget !== ""
                    ? textItem(0, `${outcome.indirectMeasureThreeTarget}`, false, 24)
                    : emptyLine,
                ],
              }),
            ],
          }),



          new TableRow({
            children: [
              new TableCell({
                width: { size: "33%", type: "PERCENTAGE" },
                children: [plainText(`Implementation Results ${index + 1}.${outcomeIndex + 1}`, true, 24)],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                    outcome.implementationResultOne !== ""
          ? textItem(0, `${outcome.implementationResultOne}`, false, 24)
          : emptyLine,
        outcome.implementationResultTwo !== ""
          ? textItem(0, `${outcome.implementationResultTwo}`, false, 24)
          : emptyLine,
        outcome.implementationResultThree !== ""
          ? textItem(0, `${outcome.implementationResultThree}`, false, 24)
          : emptyLine,
        outcome.implementationResultFour !== ""
          ? textItem(0, `${outcome.implementationResultFour}`, false, 24)
          : emptyLine,
        outcome.implementationResultFive !== ""
          ? textItem(0, `${outcome.implementationResultFive}`, false, 24)
          : emptyLine,
        outcome.implementationResultSix !== ""
          ? textItem(0, `${outcome.implementationResultSix}`, false, 24)
          : emptyLine,
        outcome.implementationResultSeven !== ""
          ? textItem(0, `${outcome.implementationResultSeven}`, false, 24)
          : emptyLine,
        outcome.implementationResultEight !== ""
          ? textItem(0, `${outcome.implementationResultEight}`, false, 24)
          : emptyLine,
        outcome.implementationResultNine !== ""
          ? textItem(0, `${outcome.implementationResultNine}`, false, 24)
          : emptyLine,
        outcome.implementationResultTen !== ""
          ? textItem(0, `${outcome.implementationResultTen}`, false, 24)
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
                children: [
                    outcome.outcomeMet === "1"
                    ? indentText(
                        "Yes, the results indicated that the obtained results were at or above the thresholds.",
                        false,
                        24
                      )
                    : newLine,
                  outcome.outcomeMet === "0"
                    ? indentText(
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
                    `Supporting Attachments ${index + 1}.${outcomeIndex + 1}`,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
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
                    `Improvement Strategies ${index + 1}.${outcomeIndex + 1}`,
                    true,
                    24
                  ),
                ],
                borders,
              }),
              new TableCell({
                width: { size: "67%", type: "PERCENTAGE" },
                children: [
                    outcome.improveOne !== ""
                    ? plainText(`${outcome.improveOne}`, false, 24)
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
