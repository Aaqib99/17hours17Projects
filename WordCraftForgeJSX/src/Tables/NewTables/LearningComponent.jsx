import plainText from "../../Parts/plainText";
import textItem from "../../Parts/textItem";
import findUpcomingYear from "../../HelperFunctions/findUpcomingYear";
import indentText from "../../Parts/indentText";
import HorizontalRule from "../../Parts/HorizontalRule";
import CoursesTable from "../CoursesTable";
import StrategicAlignment from "./Parts/StrategicAlignment";

let newLine = plainText(``, false, 22);
export const LearningComponent = (userData, type) => {
  console.log("Data in functional component", userData);

  let allComponents = [];
  let upcomingYear = findUpcomingYear(userData.reportingUnit.reportingYear);
  console.log("Next year", upcomingYear);
  let typeName = "Learning";

  let goals = userData.learningGoals;

  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      let temp = [
        plainText(
          `${typeName} Goal ${type}${index + 1}: ${entry.label} `,
          true,
          23
        ),
        plainText("", false, 18),
        plainText(
          `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
          false,
          22
        ),
        HorizontalRule(),
        indentText(
          `${typeName} Outcome ${type}${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          22
        ),
        plainText("", false, 20),
        indentText(
          `The ${userData.reportingUnit.office} will be able to ${outcome.outcomeStatement}.`,
          false,
          22
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
          `Types of Evidence ${type}${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel} `,
          true,
          22
        ),
        plainText("", true, 20),
        indentText(
          "The pieces of evidence of the outcome implementation are the following:",
          false,
          22
        ),
        plainText("", true, 20),
        indentText("Direct Evidence", true, 22),
        outcome.directMeasureOne !== ""
          ? textItem(0, `${outcome.directMeasureOne}`, false, 22)
          : newLine,
        outcome.directMeasureTwo !== ""
          ? textItem(0, `${outcome.directMeasureTwo}`, false, 22)
          : newLine,
        outcome.directMeasureThree !== ""
          ? textItem(0, `${outcome.directMeasureThree}`, false, 22)
          : newLine,
        plainText("", false, 20),
        indentText("Indirect Evidence", true, 22),
        outcome.indirectMeasureOne !== ""
          ? textItem(0, `${outcome.indirectMeasureOne}`, false, 22)
          : newLine,
        outcome.indirectMeasureTwo !== ""
          ? textItem(0, `${outcome.indirectMeasureTwo}`, false, 22)
          : newLine,
        outcome.indirectMeasureThree !== ""
          ? textItem(0, `${outcome.indirectMeasureThree}`, false, 22)
          : newLine,
        HorizontalRule(),

        indentText(
          `Types of Thresholds ${type}${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          22
        ),
        plainText("", false, 20),
        indentText(
          "The levels of performance in the implementation of the outcome are the following:",
          false,
          22
        ),
        plainText("", false, 20),
        indentText("Threshold for the Direct Evidence", true, 22),

        textItem(0, `Qualitative`, false, 22),
        outcome.directQualitativeOne !== ""
          ? textItem(1, `${outcome.directQualitativeOne}`, false, 22)
          : newLine,

        outcome.directQualitativeTwo !== ""
          ? textItem(1, `${outcome.directQualitativeTwo}`, false, 22)
          : newLine,
        outcome.directQualitativeThree !== ""
          ? textItem(1, `${outcome.directQualitativeThree}`, false, 22)
          : newLine,

        textItem(0, `Quantitative`, false, 22),
        outcome.directQuantitativeOne !== ""
          ? textItem(1, `${outcome.directQuantitativeOne}`, false, 22)
          : newLine,
        outcome.directQuantitativeTwo !== ""
          ? textItem(1, `${outcome.directQuantitativeTwo}`, false, 22)
          : newLine,
        outcome.directQuantitativeThree !== ""
          ? textItem(1, `${outcome.directQuantitativeThree}`, false, 22)
          : newLine,

        plainText("", false, 20),
        indentText("Threshold for Indirect Evidence", true, 22),
        textItem(0, `Qualitative`, false, 22),
        outcome.indirectQualitativeOne !== ""
          ? textItem(1, `${outcome.indirectQualitativeOne}`, false, 22)
          : newLine,
        outcome.indirectQualitativeTwo !== ""
          ? textItem(1, `${outcome.indirectQualitativeTwo}`, false, 22)
          : newLine,
        outcome.indirectQualitativeThree !== ""
          ? textItem(1, `${outcome.indirectQualitativeThree}`, false, 22)
          : newLine,

        textItem(0, `Quantitative`, false, 22),
        outcome.indirectQuantitativeOne !== ""
          ? textItem(1, `${outcome.indirectQuantitativeOne}`, false, 22)
          : newLine,
        outcome.indirectQuantitativeTwo !== ""
          ? textItem(1, `${outcome.indirectQuantitativeTwo}`, false, 22)
          : newLine,
        outcome.indirectQuantitativeThree !== ""
          ? textItem(1, `${outcome.indirectQuantitativeThree}`, false, 22)
          : newLine,
        HorizontalRule(),

        indentText(
          `Implementation Results ${type}${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          22
        ),
        plainText("", false, 22),
        indentText(
          "The implementation of the outcome during the current reporting period resulted in the following:",
          false,
          22
        ),

        ...CoursesTable(outcome.courses),
        plainText("", false, 22),
        outcome.implementationResultOne !== ""
          ? textItem(0, `${outcome.implementationResultOne}`, false, 22)
          : newLine,
        plainText("", false, 22),

        indentText(
          `The ${userData.reportingUnit.office} utilized last reporting period result-based improvement in the implementation of the outcome during the current reporting period in the following ways:`,
          false,
          22
        ),
        plainText("", false, 22),
        indentText(`${outcome.utilizedQuestion}`, false, 22),

        plainText(``, false, 22),
        outcome.outcomeMet === "1"
          ? indentText(
              "Meeting the outcome: Yes, the results indicated that the obtained results were at or above the thresholds.",
              false,
              22
            )
          : plainText("", false, 22),
        outcome.outcomeMet === "0"
          ? indentText(
              "Meeting the outcome: No, the results indicated that the obtained results were below the thresholds.",
              false,
              22
            )
          : plainText("", false, 22),
        plainText("", false, 22),
        outcome.comments !== ""
          ? textItem(0, `${outcome.comments}`, false, 18)
          : newLine,
        HorizontalRule(),
        indentText(
          `Supporting Attachments ${type}${index + 1}.${outcomeIndex + 1}: ${
            entry.label
          } – ${outcome.outcomeLabel}`,
          true,
          22
        ),
        HorizontalRule(),
        indentText(
          `Decided Improvement Strategies ${type}${index + 1}.${
            outcomeIndex + 1
          }: ${entry.label} – ${outcome.outcomeLabel}`,
          true,
          22
        ),
        plainText("", false, 20),
        indentText(
          "The improvement strategies for implementation the next reporting period are the following:",
          false,
          22
        ),
        outcome.improveOne !== ""
          ? textItem(0, `${outcome.improveOne}`, false, 22)
          : newLine,
        outcome.improveTwo !== ""
          ? textItem(0, `${outcome.improveTwo}`, false, 22)
          : newLine,
        outcome.improveThree !== ""
          ? textItem(0, `${outcome.improveThree}`, false, 22)
          : newLine,
        plainText("", false, 20),
        plainText("", false, 20),
        plainText("", false, 20),
        plainText("", false, 20),
      ];
      allComponents.push(...temp);
    });
  });
  console.log(allComponents);
  return allComponents;
};
