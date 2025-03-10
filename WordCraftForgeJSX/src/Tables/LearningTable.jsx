import { Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../Parts/plainText";
import textItem from "../Parts/textItem";
import boldAndUnBoldText from "../Parts/boldAndUnBoldtext";
import findUpcomingYear from "../HelperFunctions/findUpcomingYear";
import CoursesTable from "./CoursesTable";

export const LearningTable = (userData) => {
  let allTables = [];

  let upcomingYear = findUpcomingYear(userData.reporter.year);
  console.log("Received admin data");

  let goals = userData.learningGoals;

  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      let temp = new Table({
        width: {
          size: "100%",
          type: WidthType.PERCENTAGE,
        },
        rows: [
          new TableRow({
            // first row
            children: [
              new TableCell({
                children: [plainText(`Goal L${index + 1}`, true, 18)],
                rowSpan: 8,
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Goal L${index + 1}: ${entry.label}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The students in the ${userData.reporter.office} will be able to ${entry.goalStatement}.`,
                    false,
                    18
                  ),
                ],
                columnSpan: 2,
              }),
            ],
          }),
          new TableRow({
            // 2nd row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Outcome L${index + 1}.${outcomeIndex + 1}:`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } - ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The students in the ${userData.reporter.office} will be able to ${outcome.outcomeStatement}.`,
                    false,
                    18
                  ),
                ],
              }),
            ],
          }),
          new TableRow({
            // 3rd row : Relevant Alignment
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Relevant Alignment L${index + 1}.${outcomeIndex + 1}`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } - ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The ${userData.reporter.office} aligns the outcome with the following key priorities:`,
                    false,
                    18
                  ),
                  new Paragraph(""),
                  textItem(
                    0,
                    `${userData.reporter.institution} Strategic Plan: `,
                    true,
                    18
                  ),
                  boldAndUnBoldText(
                    1,
                    `Goal ${outcome.institutionGoal.number}:  `,
                    `${outcome.institutionGoal.text}`,
                    18
                  ),
                  boldAndUnBoldText(
                    2,
                    `Objective ${outcome.institutionObjective.number}: `,
                    `${outcome.institutionObjective.text}`,
                    18
                  ),
                  new Paragraph(""),
                  textItem(
                    0,
                    `${userData.reporter.division} Strategic Plan: `,
                    true,
                    18
                  ),
                  boldAndUnBoldText(
                    1,
                    `Goal ${outcome.divisionGoal.number}: `,
                    `${outcome.divisionGoal.text}`,
                    18
                  ),
                  boldAndUnBoldText(
                    2,
                    `Objective ${outcome.divisionObjective.number}: `,
                    `${outcome.divisionObjective.text}`,
                    18
                  ),
                  new Paragraph(""),
                  textItem(
                    0,
                    `${userData.reporter.college} Strategic Plan `,
                    true,
                    18
                  ),
                  boldAndUnBoldText(
                    1,
                    `Goal ${outcome.collegeGoal.number}: `,
                    `${outcome.collegeGoal.text}`,
                    18
                  ),
                  boldAndUnBoldText(
                    2,
                    `Objective ${outcome.collegeObjective.number}: `,
                    `${outcome.collegeObjective.text}`,
                    18
                  ),
                  new Paragraph(""),
                  textItem(
                    0,
                    `${userData.reporter.office} Strategic Plan`,
                    true,
                    18
                  ),
                  boldAndUnBoldText(
                    1,
                    `Goal ${outcome.programGoal.number}: `,
                    `${outcome.programGoal.text}`,
                    18
                  ),
                  boldAndUnBoldText(
                    2,
                    `Objective ${outcome.programObjective.number}: `,
                    `${outcome.programObjective.text}`,
                    18
                  ),
                ],
              }),
            ],
          }),
          new TableRow({
            // 4th row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Types of Evidence L${index + 1}.${outcomeIndex + 1}`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } – ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The students will evidence the implementation of the outcome through their participation in the following:`,
                    false,
                    18
                  ),
                  new Paragraph(""),

                  textItem(0, `Direct Evidence`, true, 18),
                  outcome.directMeasureOne !== "" &&
                    textItem(1, `${outcome.directMeasureOne}`, false, 18),
                  outcome.directMeasureTwo !== "" &&
                    textItem(1, `${outcome.directMeasureTwo}`, false, 18),
                  outcome.directMeasureThree !== "" &&
                    textItem(1, `${outcome.directMeasureThree}`, false, 18),
                  new Paragraph(""),
                  textItem(0, "Indirect Evidence", true, 18),
                  outcome.indirectMeasureOne !== "" &&
                    textItem(1, `${outcome.indirectMeasureOne}`, false, 18),
                  outcome.indirectMeasureTwo !== "" &&
                    textItem(1, `${outcome.indirectMeasureTwo}`, false, 18),
                  outcome.indirectMeasureThree !== "" &&
                    textItem(1, `${outcome.indirectMeasureThree}`, false, 18),
                ],
              }),
            ],
          }),
          new TableRow({
            // 5th row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Types of Milestones L${index + 1}.${outcomeIndex + 1}`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } - ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The ${userData.reporter.office} measures student performance in the implementation of the outcome through the following milestones:`,
                    false,
                    18
                  ),
                  new Paragraph(""),

                  textItem(0, `Milestone for Direct Measures`, true, 18),
                  outcome.directMeasureOneTarget !== "" &&
                    textItem(1, `${outcome.directMeasureOneTarget}`, false, 18),
                  outcome.directMeasureTwoTarget !== "" &&
                    textItem(1, `${outcome.directMeasureTwoTarget}`, false, 18),
                  outcome.directMeasureThreeTarget !== "" &&
                    textItem(
                      1,
                      `${outcome.directMeasureThreeTarget}`,
                      false,
                      18
                    ),
                  new Paragraph(""),
                  textItem(0, "Milestone for Indirect Measures", true, 18),
                  outcome.indirectMeasureOneTarget !== "" &&
                    textItem(
                      1,
                      `${outcome.indirectMeasureOneTarget}`,
                      false,
                      18
                    ),
                  outcome.indirectMeasureTwoTarget !== "" &&
                    textItem(
                      1,
                      `${outcome.indirectMeasureTwoTarget}`,
                      false,
                      18
                    ),
                  outcome.indirectMeasureThreeTarget !== "" &&
                    textItem(
                      1,
                      `${outcome.indirectMeasureThreeTarget}`,
                      false,
                      18
                    ),
                ],
              }),
            ],
          }),
          new TableRow({
            // 6th row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Outcome Implementation Results L${index + 1}.${
                      outcomeIndex + 1
                    }`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } – ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `During the year ${userData.reporter.year} year, students in the ${userData.reporter.office} participated in the implementation of the outcome as follows:`,
                    false,
                    18
                  ),
                  new Paragraph(""),
                  ...CoursesTable(outcome.courses),
                  new Paragraph(""),
                  outcome.implementationResultOne !== "" &&
                    textItem(
                      0,
                      `The B.A. in Mathematics decided the ${outcome.implementationResultOne}`,
                      false,
                      18
                    ),
                  new Paragraph(""),
                  outcome.comments !== "" && textItem(0, `${outcome.comments}`, false, 18),
                ],
              }),
            ],
          }),
          new TableRow({
            // 7th row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Supporting Attachments L${index + 1}.${outcomeIndex + 1}`,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: ${
                      entry.label
                    } – ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                ],
              }),
            ],
          }),
          new TableRow({
            // 8th row
            children: [
              new TableCell({
                children: [
                  plainText(
                    `Decided Improvement Strategies L${index + 1}.${
                      outcomeIndex + 1
                    } `,
                    true,
                    18
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText(
                    `Learning Outcome L${index + 1}.${outcomeIndex + 1}: $${
                      entry.label
                    } – ${outcome.outcomeLabel}`,
                    true,
                    18
                  ),
                  new Paragraph(""),
                  plainText(
                    `The ${userData.reporter.office} decided the following result-based strategies as the improvement strategies for the upcoming ${upcomingYear} reporting period:`,
                    false,
                    18
                  ),
                  new Paragraph(""),
                  outcome.improveOne !== "" &&
                    textItem(0, `${outcome.improveOne}`, false, 18),
                  outcome.improveTwo !== "" &&
                    textItem(0, `${outcome.improveTwo}`, false, 18),
                  outcome.improveThree !== "" &&
                    textItem(0, `${outcome.improveThree}`, false, 18),
                ],
              }),
            ],
          }),
        ],
      });
      allTables.push(temp);
    });
  });
  return allTables;
};
