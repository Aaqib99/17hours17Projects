import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import indentText from "../../../Parts/indentText";
import HorizontalRule from "../../../Parts/HorizontalRule";
import StrategicAlignment from "../Parts/StrategicAlignment";

export const FunctionalComponent = (userData, type) => {
  console.log("Data in functional component", userData);
  let newLine = plainText(``, false, 18);
  let emptyLine = plainText(``, false, 1)

  let allComponents = [];
  let upcomingYear = findUpcomingYear(userData.reportingUnit.reportingYear);
  console.log("Next year", upcomingYear, type);
  let typeName = "Functional";
  let goals = userData.adminGoals;
  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      let temp = [
        plainText(
          `${typeName} Goal ${index + 1}: ${entry.label} `,
          true,
          23
        ),
        plainText(
          `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
          false,
          24
        ),
        HorizontalRule(),
        indentText(
          `${typeName} Outcome ${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          24
        ),
        indentText(
          `The ${userData.reportingUnit.office} will be able to ${outcome.outcomeStatement}.`,
          false,
          24
        ),

        ...StrategicAlignment(
          outcome,
          type,
          index,
          outcomeIndex,
          entry,
          userData
        ),
        indentText(
          `Types of Evidence ${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel} `,
          true,
          24
        ),
        indentText(
          "The pieces of evidence of the outcome implementation are the following:",
          false,
          24
        ),
        indentText("Direct Evidence", true, 24),
        outcome.directMeasureOne !== "" ?
          textItem(0, `${outcome.directMeasureOne}`, false, 24):emptyLine,
        outcome.directMeasureTwo !== "" ?
          textItem(0, `${outcome.directMeasureTwo}`, false, 24):emptyLine,
        outcome.directMeasureThree !== "" ?
          textItem(0, `${outcome.directMeasureThree}`, false, 24):emptyLine,
        indentText("Indirect Evidence", true, 24),
        outcome.indirectMeasureOne !== "" ?
          textItem(0, `${outcome.indirectMeasureOne}`, false, 24) : emptyLine,
        outcome.indirectMeasureTwo !== "" ?
          textItem(0, `${outcome.indirectMeasureTwo}`, false, 24) : emptyLine,
        outcome.indirectMeasureThree !== "" ?
          textItem(0, `${outcome.indirectMeasureThree}`, false, 24) : emptyLine,
        HorizontalRule(),

        indentText(
          `Types of Thresholds ${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          24
        ),
        indentText(
          "The levels of performance in the implementation of the outcome are the following:",
          false,
          24
        ),
        indentText("Threshold for the Direct Evidence", true, 24),
        outcome.directMeasureOneTarget !== "" ?
          textItem(0, `${outcome.directMeasureOneTarget}`, false, 24) : emptyLine,
        outcome.directMeasureTwoTarget !== "" ?
          textItem(0, `${outcome.directMeasureTwoTarget}`, false, 24) : emptyLine,
        outcome.directMeasureThreeTarget !== "" ?
          textItem(0, `${outcome.directMeasureThreeTarget}`, false, 24) : emptyLine,
        indentText("Threshold for Indirect Evidence", true, 24),
        outcome.indirectMeasureOneTarget !== "" ?
          textItem(0, `${outcome.indirectMeasureOneTarget}`, false, 24) : emptyLine,
        outcome.indirectMeasureTwoTarget !== "" ?
          textItem(0, `${outcome.indirectMeasureTwoTarget}`, false, 24) : emptyLine,
        outcome.indirectMeasureThreeTarget !== "" ?
          textItem(0, `${outcome.indirectMeasureThreeTarget}`, false, 24) : emptyLine,
        HorizontalRule(),
        indentText(
          `Implementation Results ${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          24
        ),
        indentText(
          "The implementation of the outcome during the current reporting period resulted in the following:",
          false,
          24
        ),
        outcome.implementationResultOne !== "" ?
          textItem(0, `${outcome.implementationResultOne}`, false, 24): emptyLine,
        outcome.implementationResultTwo !== "" ?
          textItem(0, `${outcome.implementationResultTwo}`, false, 24): emptyLine,
        outcome.implementationResultThree !== "" ?
          textItem(0, `${outcome.implementationResultThree}`, false, 24): emptyLine,
        outcome.implementationResultFour !== "" ?
          textItem(0, `${outcome.implementationResultFour}`, false, 24): emptyLine,
        outcome.implementationResultFive !== "" ?
          textItem(0, `${outcome.implementationResultFive}`, false, 24): emptyLine,
        outcome.implementationResultSix !== "" ?
          textItem(0, `${outcome.implementationResultSix}`, false, 24): emptyLine,
        outcome.implementationResultSeven !== "" ?
          textItem(0, `${outcome.implementationResultSeven}`, false, 24): emptyLine,
        outcome.implementationResultEight !== "" ?
          textItem(0, `${outcome.implementationResultEight}`, false, 24): emptyLine,
        outcome.implementationResultNine !== "" ?
          textItem(0, `${outcome.implementationResultNine}`, false, 24): emptyLine,
        outcome.implementationResultTen !== "" ?
          textItem(0, `${outcome.implementationResultTen}`, false, 24): emptyLine,

        indentText(
          `The ${userData.reportingUnit.office} utilized last reporting period result-based improvement in the implementation of the outcome during the current reporting period in the following ways:`,
          false,
          24
        ),
        newLine,
        indentText(`${outcome.utilizedQuestion}`, false, 24),

        outcome.outcomeMet === "1"
          ? indentText(
              "Meeting the outcome: Yes, the results indicated that the obtained results were at or above the thresholds.",
              false,
              24
            )
          : newLine,
          newLine,
        outcome.outcomeMet === "0"
          ? indentText(
              "Meeting the outcome: No, the results indicated that the obtained results were below the thresholds.",
              false,
              24
            )
          : newLine,
        HorizontalRule(),
        indentText(
          `Supporting Attachments ${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          24
        ),
        HorizontalRule(),
        indentText(
          `Decided Improvement Strategies ${index + 1}.${
            outcomeIndex + 1
          }: ${entry.label} – ${outcome.outcomeLabel}`,
          true,
          24
        ),
        indentText(
          "The improvement strategies for implementation the next reporting period are the following:",
          false,
          24
        ),
        newLine,
        outcome.improveOne !== "" ?
          plainText(`${outcome.improveOne}`, false, 24): emptyLine,
        // outcome.improveTwo !== "" ?
        //   textItem(0, `${outcome.improveTwo}`, false, 24): emptyLine,
        // outcome.improveThree !== "" ?
        //   textItem(0, `${outcome.improveThree}`, false, 24): newLine,
        newLine,
        newLine,
        HorizontalRule()
      ];
      allComponents.push(...temp);
    });
  });
  console.log(allComponents);
  return allComponents;
};
