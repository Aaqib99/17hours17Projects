import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import { Table, TableRow, TableCell, BorderStyle } from "docx";



export const ColumnFunctional = (userData, type) => {


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
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Goal Statement`, true, 24)],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Outcome Statement`, true, 24)],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Direct and Indirect Evidence`, true, 24)],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Direct and Indirect Threshold`, true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(`Implementation Results`, true, 24)],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Improvement Strategies`, true, 24)],
              })
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [  plainText(
                    `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
                    false,
                    24
                  )],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(
                    `The ${userData.reportingUnit.office} will be able to ${outcome.outcomeStatement}.`,
                    false,
                    24
                  ),],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [ plainText('Direct Evidence:', true, 24),outcome.directMeasureOne !== ""
                ? plainText( `${outcome.directMeasureOne}`, false, 24)
                : emptyLine,
              outcome.directMeasureTwo !== ""
                ? plainText( `${outcome.directMeasureTwo}`, false, 24)
                : emptyLine,
              outcome.directMeasureThree !== ""
                ? plainText( `${outcome.directMeasureThree}`, false, 24)
                : emptyLine,
                plainText('Indirect Evidence:', true,24),
                outcome.indirectMeasureOne !== ""
                ? plainText( `${outcome.indirectMeasureOne}`, false, 24)
                : emptyLine,
              outcome.indirectMeasureTwo !== ""
                ? plainText( `${outcome.indirectMeasureTwo}`, false, 24)
                : emptyLine,
              outcome.indirectMeasureThree !== ""
                ? plainText( `${outcome.indirectMeasureThree}`, false, 24)
                : emptyLine,



            ]

              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [plainText(`Direct Threshold:`, true, 24), 
                outcome.directMeasureOneTarget !== ""
                ? plainText( `${outcome.directMeasureOneTarget}`, false, 24)
                : emptyLine,
              outcome.directMeasureTwoTarget !== ""
                ? plainText( `${outcome.directMeasureTwoTarget}`, false, 24)
                : emptyLine,
              outcome.directMeasureThreeTarget !== ""
                ? plainText( `${outcome.directMeasureThreeTarget}`, false, 24)
                : emptyLine,

                plainText(`Indirect Threshold:`, true, 24),

                outcome.indirectMeasureOneTarget !== ""
                ? plainText( `${outcome.indirectMeasureOneTarget}`, false, 24)
                : emptyLine,
              outcome.indirectMeasureTwoTarget !== ""
                ? plainText( `${outcome.indirectMeasureTwoTarget}`, false, 24)
                : emptyLine,
              outcome.indirectMeasureThreeTarget !== ""
                ? plainText( `${outcome.indirectMeasureThreeTarget}`, false, 24)
                : emptyLine,

            ],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [outcome.implementationResultOne !== ""
                ? plainText( `${outcome.implementationResultOne}`, false, 24)
                : emptyLine,
              outcome.implementationResultTwo !== ""
                ? plainText( `${outcome.implementationResultTwo}`, false, 24)
                : emptyLine,
              outcome.implementationResultThree !== ""
                ? plainText( `${outcome.implementationResultThree}`, false, 24)
                : emptyLine,
              outcome.implementationResultFour !== ""
                ? plainText( `${outcome.implementationResultFour}`, false, 24)
                : emptyLine,
              outcome.implementationResultFive !== ""
                ? plainText( `${outcome.implementationResultFive}`, false, 24)
                : emptyLine,
              outcome.implementationResultSix !== ""
                ? plainText( `${outcome.implementationResultSix}`, false, 24)
                : emptyLine,
              outcome.implementationResultSeven !== ""
                ? plainText( `${outcome.implementationResultSeven}`, false, 24)
                : emptyLine,
              outcome.implementationResultEight !== ""
                ? plainText( `${outcome.implementationResultEight}`, false, 24)
                : emptyLine,
              outcome.implementationResultNine !== ""
                ? plainText( `${outcome.implementationResultNine}`, false, 24)
                : emptyLine,
              outcome.implementationResultTen !== ""
                ? plainText( `${outcome.implementationResultTen}`, false, 24)
                : emptyLine,],
              }),
              new TableCell({
                width: { size: "16%", type: "PERCENTAGE" },
                children: [         outcome.improveOne !== ""
                ? plainText(`${outcome.improveOne}`, false, 24)
                : emptyLine,],
              })
            ],
          }),
        ],
      });
      allTables.push(table);
    });
  });
  return allTables;
};
