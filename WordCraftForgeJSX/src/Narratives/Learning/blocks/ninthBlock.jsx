import { Table, TableCell, TableRow, WidthType,Paragraph, TextRun, ShadingType } from "docx";

import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

let emptyRow =  new TableRow({
    children: [
      new TableCell({
        width: { size: "33.33%", type: "PERCENTAGE" },
        children  :[]
      }),
      new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children  :[]
      }),
      new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children  :[]
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
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Direct Evidence", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Indirect Evidence", true, 22)],
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
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Learning Experience Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Direct Evidence", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("Indirect Evidence", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow 
  ],
});


export default function ninthBlock(userData) {
    let institution = userData.reportingUnit.institution;

  return [
    newLine,
    coloredText(
      `DIVERSITY OF UTILIZED ASSESSMENT METHODS AND ACTIVITIES.`,
      true,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `At ${institution}, faculty members use a variety of assessment methods to provide a clear and thorough wider scope of students’ knowledge, skills, dispositions, and attitudes. The standardized assessment process requires academic programs and learning experience units to provide a maximum of three types of direct pieces of evidence. The purpose of this requirement is to ensure that students have diverse opportunities to evince their learning opportunities related to the chosen field of study. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists some direct and indirect evidence utilized by some academic programs and learning experience units to measure student performance against the types of direct and indirect thresholds.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`Table X`, false,22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false,22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    // add a table here
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
          text: `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `is a brief list that illustrates this specific portion of the narrative. However, the linked Learning Assessment Report Master Document includes all the learning assessment reports with all report elements (e.g. outcomes, strategic alignment, types of evidence, types of thresholds, implementation results, and decided improvement strategies).`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
  ];
}
