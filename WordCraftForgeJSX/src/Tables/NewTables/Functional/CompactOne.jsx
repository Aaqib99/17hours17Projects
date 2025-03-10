import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import plainText, { centeredText } from "../../../Parts/plainText";
import { Table, TableRow, TableCell,BorderStyle } from "docx";
import textItem from "../../../Parts/textItem";

const borders = {
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};
const border3 = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};
const border2 = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  };
  let emptyLine = plainText(``, false, 1);
  let newLine = plainText(``, false, 24);

const CompactOne = (userData, type) => {

  let upcomingYear = findUpcomingYear(userData.reportingUnit.reportingYear);
  let nextUpcomingYear = findUpcomingYear(upcomingYear);

    console.log("inside compact")
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
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(`Goal Label and Statement`, true, 24)],
                columnSpan: 2,
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [
                  plainText(
                    `${entry.label} : ${entry.goalStatement}`,
                    false,
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
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("Outcome Label and Statement", true, 24)],
                columnSpan:2
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [centeredText(userData.reportingUnit.reportingYear, true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [centeredText(upcomingYear, true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [centeredText(nextUpcomingYear, true, 24)],
              }),
            ],
          }),

          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(outcome.outcomeLabel, false, 24)],
                columnSpan:2,
                borders
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("      Implementation Results per Reporting Period", true, 24)],
                columnSpan:3
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(outcome.outcomeStatement, false, 24)],
                columnSpan:2,
                borders : border2
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
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
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(``, true, 24)],
                columnSpan:2,
                borders : border2
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("      Did the unit meet the outcome? Yes or No", true, 24)],
                columnSpan:3
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(``, true, 24)],
                columnSpan:2,
                borders : border2
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [ outcome.outcomeMet === "1"
                ? centeredText(
                    "Yes",
                    false,
                    24
                  )
                : newLine,
              outcome.outcomeMet === "0"
                ? centeredText(
                    "No",
                    false,
                    24
                  )
                : newLine,],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(``, true, 24)],
                columnSpan:2,
                borders : border2
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("      Improvement Strategies for Next Reporting Period", true, 24)],
                columnSpan:3
              }),
            ],
          }),


          new TableRow({
            children: [
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText(``, true, 24)],
                columnSpan:2,
                borders : border3
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [

                  outcome.improveOne !== ""
                    ? plainText(`${outcome.improveOne}`, false, 24)
                    : emptyLine


                ],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
              }),
              new TableCell({
                width: { size: "20%", type: "PERCENTAGE" },
                children: [plainText("", true, 24)],
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

export default CompactOne;
