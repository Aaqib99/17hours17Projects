import {
  Table,
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  ShadingType,
} from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import Evidences, {
  indirectEvidences,
  strategies,
} from "../../Functional/Parts/Evidences";
import Courses from "../../Functional/Parts/Courses";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

let emptyRow = new TableRow({
  children: [
    new TableCell({
      width: { size: "25%", type: "PERCENTAGE" },
      children: [plainText(`B.S. in Mechanical Engineering`, false, 22)],
    }),

    new TableCell({
      width: { size: "20%", type: "PERCENTAGE" },
      children: [plainText(`Undergraduate`, false, 22)],
    }),
    new TableCell({
      width: { size: "40%", type: "PERCENTAGE" },
      children: [plainText(`NASA`, false, 22)],
    }),
    new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children: [plainText(`2022-08-25`, false, 22)],
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
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Academic Level", true, 22)],
        }),
        new TableCell({
          width: { size: "34%", type: "PERCENTAGE" },
          children: [
            plainText("Accreditation Organization or Agency", true, 22),
          ],
        }),
        new TableCell({
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Date of Last review", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
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
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Learning Experience Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Academic Level", true, 22)],
        }),
        new TableCell({
          width: { size: "34%", type: "PERCENTAGE" },
          children: [
            plainText("Accreditation Organization or Agency", true, 22),
          ],
        }),
        new TableCell({
          width: { size: "22%", type: "PERCENTAGE" },
          children: [plainText("Date of Last review", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
  ],
});

function lastBlock(userData, program) {
  return [
    newLine,
    coloredText(
      `During ${userData.reportingUnit.reportingYear}, the ${program} adopted the student learning outcome LA1.1. The faculty implemented following to assess student performance.
  `,
      false,
      22
    ),
    newLine,

    ...Evidences(userData, "L"),
    newLine,
    ...Courses(userData),
    newLine,
    plainText(
      `To address those results, the program decided to implement the following improvement strategies in the subsequent year:`,
      false,
      22
    ),
    ...strategies(userData),
    newLine,
    plainText(
      `Overall, the faculty considered the following highly satisfactory.`,
      false,
      22
    ),
    ...indirectEvidences(userData),
    newLine,
  ];
}

export default function tenthBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let program = userData.reportingUnit.academicProgram;

  return [
    plainText(`Assessment for Improvement Purposes: Examples`, true, 22),
    newLine,
    plainText(
      `As a summary of this narrative, ${institution} presents 12 examples of complete assessment reports submitted by 8 academic programs and 4 by learning experience units. These 12 reports are a subset of those found in the Comprehensive Report Document (CRD). Both sets of assessment reports are structured as follows:`,
      false,
      22
    ),
    plainText(
      `1. Goal statement: Functional and learning components.`,
      false,
      22
    ),
    plainText(
      `2. Outcome statement: Functional and learning components.`,
      false,
      22
    ),
    plainText(
      `3. (Optional): Strategic alignment to critical initiatives adopted at the following levels:`,
      false,
      22
    ),
    plainText(`         a. Institutional`, false, 22),
    plainText(`         b. Divisional`, false, 22),
    plainText(`         c. College or School`, false, 22),
    plainText(`         d. Departmental`, false, 22),
    plainText(
      `4. Types of evidence (i.e., direct, and indirect evidence)`,
      false,
      22
    ),
    plainText(
      `5. Types of thresholds (i.e., direct, and indirect thresholds)`,
      false,
      22
    ),
    plainText(
      `6. Outcome implementation results along with supporting attachments`,
      false,
      22
    ),
    plainText(
      `7. Decided on improvement strategies for the next reporting term`,
      false,
      22
    ),
    newLine,
    plainText(
      `The 12 complete assessment reports sample representatively the following areas:`,
      false,
      22
    ),
    textItem(0, `COLLEGE/SCHOOL = 2 reports`, false, 22),
    textItem(0, `COLLEGE/SCHOOL = 2 reports`, false, 22),
    textItem(0, `COLLEGE/SCHOOL = 2 reports`, false, 22),
    textItem(0, `COLLEGE/SCHOOL = 2 reports`, false, 22),
    textItem(0, `Learning Experience Units = 4 reports`, false, 22),
    newLine,
    plainText(
      `Structurally, these reports present the following information in a paragraph format for the last three years as required by the accreditation agency:
      `,
      false,
      22
    ),
    newLine,
    textItem(
      0,
      `Name of the college/school followed by the name of the academic program and the academic level (i.e., bachelor, master, doctorate).
      `,
      false,
      22
    ),
    newLine,
    textItem(
      0,
      `The academic year is followed by one outcome statement, types of direct evidence, a milestone for direct evidence, implementation results, use of the previous reporting period data, and decided improvement strategies for the subsequent reporting period.
      
      `,
      false,
      22
    ),
    newLine,
    plainText(
      `What follows is the actual 8-report randomly selected sample from the academic programs 4 from the experience learning units.
   `,
      false,
      22
    ),
    newLine,
    plainText(`College/School: Academic Program`, true, 22),
    ...lastBlock(userData, program),
    newLine,
    plainText(`Learning Experiences Unit`, true, 22),
    ...lastBlock(userData, program),
    newLine,
    coloredText(
      `ADD A SUB-HEADING THAT SUMMARIZES PROGRAMMATIC ACCREDITATION`,
      true,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists all academic programs and learning experience units with programmatic accreditation.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
    coloredText(`TABLE X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    newLine,
    plainText(`LOOK AT THIS EXAMPLE`, false, 22),
    plainText("School or College", true, 22),
    table,
    newLine,
    tableTwo,
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `For this narrative, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `is a brief list that illustrates this specific portion of the narrative. However, the linked Learning Assessment Report Master Document includes all the learning assessment reports with all report elements (e.g., outcomes, strategic alignment, types of evidence, types of thresholds, implementation results, and decided improvement strategies).`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
  ];
}
