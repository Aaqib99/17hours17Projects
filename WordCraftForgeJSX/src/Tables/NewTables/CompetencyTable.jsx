import plainText from "../../Parts/plainText";
import textItem from "../../Parts/textItem";
import indentText from "../../Parts/indentText";
import HorizontalRule from "../../Parts/HorizontalRule";
import { Paragraph, TextRun } from "docx";
import findTotalStudents from "../../Parts/findTotalStudents";

function calculatePercentage(numerator, denominator) {
  if (denominator === 0) {
    // Handle the case where the denominator is zero to avoid division by zero error
    return "Error: Denominator cannot be zero";
  }

  console.log("Numerator", typeof numerator, numerator);
  console.log("Denominator", typeof denominator, denominator);
  const percentage = (numerator / denominator) * 100;
  console.log("%%", percentage);
  return percentage;
}

export const CompetencyComponent = (reportingUnit, competencyData) => {
  console.log("Data in Competency component",  competencyData);
  let institution = reportingUnit.institution;

  let newLine = plainText("", true, 20);
  let allComponents = [];


  competencyData.outcomes.map((outcome, outcomeIndex) => {
      let grandTotalStudents = findTotalStudents(
        outcome.courses,
        "totalStudents"
      );
      let grandAtOrAbove = findTotalStudents(outcome.courses, "atOrAbove");
      let grandBelow = findTotalStudents(outcome.courses, "below");

      console.log("At percentage", grandAtOrAbove);
      console.log("below percentage", grandBelow);
      console.log("total", grandTotalStudents);

      let atPercentage = calculatePercentage(
        grandAtOrAbove,
        grandTotalStudents
      );
      let belowPercentage = calculatePercentage(grandBelow, grandTotalStudents);

      console.log("At percentage", atPercentage);
      console.log("below percentage", belowPercentage);

      let temp = [
        plainText(``, false, 22),
        plainText(`${competencyData.competencyLabel}`, true, 24),
        plainText(``, false, 22),
        new Paragraph({
          children: [
            new TextRun({
              text: `Knowledge Area: `,
              bold: true,
              font: "Calibri",
              size: 22,
            }),

            new TextRun({
              text: `${competencyData.knowledgeArea}`,
              bold: false,
              font: "Calibri",
              size: 22,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Thematic Area: `,
              bold: true,
              font: "Calibri",
              size: 22,
            }),
            new TextRun({
              text: `${competencyData.thematicArea}`,
              bold: false,
              font: "Calibri",
              size: 22,
            }),
          ],
        }),
        newLine,
        HorizontalRule(),
        plainText(
          `${competencyData.competencyLabel} `,
          true,
          23
        ),
        newLine,
        plainText(`${competencyData.competencyDefinition}.`, false, 22),
        HorizontalRule(),
        indentText(
          `Competency Outcome Statement ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          }`,
          true,
          22
        ),
        plainText("", false, 20),

        indentText(`${outcome.competencyOutcomeStatement}.`, false, 22),
        HorizontalRule(),
        indentText(
          `Types of Evidence ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          }`,
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
        outcome.directMeasureOne !== "" &&
          textItem(0, `${outcome.directMeasureOne}`, false, 22),
        outcome.directMeasureTwo !== "" &&
          textItem(0, `${outcome.directMeasureTwo}`, false, 22),
        outcome.directMeasureThree !== "" &&
          textItem(0, `${outcome.directMeasureThree}`, false, 22),
        plainText("", false, 20),
        HorizontalRule(),

        indentText(
          `Types of Thresholds ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          }`,
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
        outcome.directMeasureOneTarget !== "" &&
          textItem(0, `${outcome.directMeasureOneTarget}`, false, 22),
        outcome.directMeasureOneTarget !== "" &&
          textItem(0, `${outcome.directMeasureTwoTarget}`, false, 22),
        outcome.directMeasureOneTarget !== "" &&
          textItem(0, `${outcome.directMeasureThreeTarget}`, false, 22),
        plainText("", false, 20),
        HorizontalRule(),

        indentText(
          `Implementation Results ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          }`,
          true,
          22
        ),
        plainText("", false, 22),
        indentText(
          `Academic programs implemented the competency ${competencyData.competencyLabel} in ${
            outcome.courses.length
          }. Of the total ${grandTotalStudents} students, `,
          false,
          22
        ),
        plainText("", false, 22),

        textItem(
          1,
          `${grandAtOrAbove} (${atPercentage.toFixed()}%) evidenced strengths in ${
            outcome.courses[0].strengths
          }.`,
          false,
          22
        ),
        textItem(
          1,
          `${grandBelow} (${belowPercentage.toFixed()}%) displayed weaknesses in ${
            outcome.courses[0].weakness
          }.`,
          false,
          22
        ),
        plainText("", false, 22),
        indentText(
          `Overall, student performance could be described as ${competencyData.performance.toLowerCase()}. In fact, the performance in ${competencyData.competencyLabel} ${competencyData.performResult.toLowerCase()}. Therefore, ${institution.toLowerCase()} ${competencyData.thresholdMet.toLowerCase()} the general education outcome. To address this, ${institution.toLowerCase()} made some improvement efforts based on the entire data as follows:`,
          false,
          22
        ),

        indentText(`${competencyData.threeEffortsOne}`, false, 22),
        indentText(
          `Based on disaggregated data, ${institution} made the following improvement efforts:`,
          false,
          22
        ),
        indentText(`${competencyData.threeEffortsTwo}`, false, 22),

        HorizontalRule(),
        indentText(
          `Supporting Attachments ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          } `,
          true,
          22
        ),
        plainText(``, false, 22),
        HorizontalRule(),
        indentText(
          `Decided Improvement Strategies ${outcomeIndex + 1}: ${
            competencyData.competencyLabel
          }`,
          true,
          22
        ),
        plainText("", false, 20),
        indentText(
          `During the next reporting period, ${institution} decided to implement the following improvement efforts:`,
          false,
          22
        ),
        outcome.improvements !== "" &&
          textItem(0, `${competencyData.improvements}`, false, 22),
        plainText("", false, 20),
        plainText("", false, 20),
        plainText("", false, 20),
        plainText("", false, 20),
      ];

      allComponents.push(...temp);
    });

  return allComponents;
};
