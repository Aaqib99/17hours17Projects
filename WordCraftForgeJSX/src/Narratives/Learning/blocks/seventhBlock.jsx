import { Table, TableCell, TableRow, WidthType,Paragraph, TextRun, ShadingType } from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

let emptyRow = new TableRow({
  children: [
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [],
    }),
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [],
    }),
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [],
    }),
  ],
});


let table = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "10%", type: "PERCENTAGE" },
          children: [plainText("Year", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Type of Data", true, 22)],
        }),
        new TableCell({
          width: { size: "70%", type: "PERCENTAGE" },
          children: [plainText("Purpose", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "10%", type: "PERCENTAGE" },
          children: [plainText( `1`, false, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Baseline", false, 22)],
        }),
        new TableCell({
          width: { size: "70%", type: "PERCENTAGE" },
          children: [
            textItem(
              0,
              `To have a glimpse of the skills, knowledge, dispositions, and attitudes to assess further.`,
              false,
              22
            ),
            textItem(
              0,
              `To guide activities after the initial assessment.`,
              false,
              22
            ),
            textItem(
              0,
              `To identify gaps between observed and expected performances.`,
              false,
              22
            ),
            textItem(
              0,
              `To guide a diagnostic (i.e., initial) assessment.`,
              false,
              22
            ),
          ],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "10%", type: "PERCENTAGE" },
          children: [plainText( `2`, false, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Implementation", false, 22)],
        }),
        new TableCell({
          width: { size: "70%", type: "PERCENTAGE" },
          children: [
            textItem(
              0,
              `To draw conclusions about the students’ observed performance on the expected competencies mentioned in the learning outcomes.`,
              false,
              22
            ),
            textItem(
              0,
              `To identify students’ strengths and weaknesses.`,
              false,
              22
            ),
            textItem(
              0,
              `To indicate outcomes as met or not met, and reasons for any success or failure.`,
              false,
              22
            ),
            textItem(
              0,
              `To guide formative (i.e., procedural) assessment.`,
              false,
              22
            ),
          ],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "10%", type: "PERCENTAGE" },
          children: [plainText(`3`, false, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Decision", false, 22)],
        }),
        new TableCell({
          width: { size: "70%", type: "PERCENTAGE" },
          children: [
            textItem(
              0,
              `To extract behavioral patterns on solid inferences on student performance.`,
              false,
              22
            ),
            textItem(
              0,
              `To introduce improvement strategies.`,
              false,
              22
            ),
            textItem(
              0,
              `To sustain decisions on the continuance, rejection, or modification of any learning outcome.`,
              false,
              22
            ),
            textItem(
              0,
              `To guide both formative (i.e., procedural) and summative (i.e., cumulative) assessments.`,
              false,
              22
            ),
          ],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "10%", type: "PERCENTAGE" },
          children: [plainText(`4`, false, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Confirmation", false, 22)],
        }),
        new TableCell({
          width: { size: "70%", type: "PERCENTAGE" },
          children: [
            textItem(
              0,
              `To confirm or validate the decision-based strategies derived from the previous reporting period. `,
              false,
              22
            ),
            textItem(
              0,
              `To either reject or accept assumptions about the improvements in place.`,
              false,
              22
            ),
            textItem(
              0,
              `To guide summative (i.e., cumulative) assessment for final and culminating decisions.`,
              false,
              22
            ),
          ],
        }),
      ],
    }),
    
    
    
  ],
});
let tableTwo = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Implementation Results", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Decided Improvement", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
  ],
});
let tableThree = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
        children: [
          new TableCell({
            width: { size: "33.33%", type: "PERCENTAGE" },
            children: [plainText("Learning Experience Unit", true, 22)],
          }),
          new TableCell({
            width: { size: "33.33%", type: "PERCENTAGE" },
            children: [plainText("Implementation Results", true, 22)],
          }),
          new TableCell({
            width: { size: "33.33%", type: "PERCENTAGE" },
            children: [plainText("Decided Improvement", true, 22)],
          }),
        ],
      }),
      emptyRow,
      emptyRow,
      emptyRow,
  ],
});

export default function seventhBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES RESULT-BASED IMPROVEMENTS OF EDUCATIONAL PROGRAMS.`,
      true,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `At ${institution}, the assessment process responds to a `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE YEARS OF THE ASSESSMENT CYCLE HERE (EXAMPLE, 3 TO 4 YEARS IN A ROW) `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `iterative cycle. That is, each academic program and learning experience unit select a maximum of `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE MAXIMUM NUMBER OF GOALS HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `goals and `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE MAXIMUM NUMBER OF OUTCOMES PER GOAL HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `outcomes for implementation during the cycle. This approach allows INSTITUTION to track four types of results or data as presented in  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
      ],
    }),

   
    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    table,
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `As noted in Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `faculty from academic programs and responsible individuals from learning experience units engage continuously in comparative analyses of student performance. These exercises seek to determine the relative consistency and adequate validity of the data obtained each implementation year. Through this constant review, each academic program and learning experience can unveil strengths, weaknesses, and major problems not readily evident in its teaching and learning practices. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
   
    newLine,
    plainText(
      `An expected result of these exercises is to adopt recommendations for program improvement equally aligned with current and best practices in the professional field and with the scope and sequence of the curriculum. All learning assessment reports require that each academic program and learning experience units discuss how the improvement strategies decided in the previous reporting period impacted student performance in the current or subsequent reporting period. To this end, there is a discussion on the impact and any other formative assessment strategies utilized during the reporting period to enhance students’ learning opportunities.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `After this discussion and the presentation of the results corresponding to the current or subsequent reporting period, each academic program and learning experience unit take corrective actions iteratively to continue engaging in constant program improvement. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists some academic programs and learning experience units that have improved their operations and performance based on findings from the implementation results. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    tableTwo,
    newLine,
    tableThree,


    new Paragraph({
      children: [
        new TextRun({
          text: `For this narrative, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `is a brief list that illustrates this specific portion of the narrative. However, the linked Learning Assessment Report Master Document includes all the learning assessment reports with all report elements (e.g., outcomes, strategic alignment, types of evidence, types of thresholds, implementation results, and decided improvement strategies). `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
  ];
}
