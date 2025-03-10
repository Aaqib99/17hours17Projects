import { Table, TableCell, TableRow, WidthType, Paragraph, TextRun, ShadingType} from "docx";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

const emptyRow = new TableRow({
    children: [
      new TableCell({
        width: { size: "35%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "15%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "25%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "25%", type: "PERCENTAGE" },
        children : []
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
          width: { size: "35%", type: "PERCENTAGE" },
          children: [coloredText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [coloredText("Date", true, 22)],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [coloredText("Meeting Agenda", true, 22)],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [coloredText("Meeting Minute", true, 22)],
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
            width: { size: "35%", type: "PERCENTAGE" },
            children: [coloredText("Learning Experience Unit", true, 22)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [coloredText("Date", true, 22)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [coloredText("Meeting Agenda", true, 22)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [coloredText("Meeting Minute", true, 22)],
          }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
  ],
});
export default function sixthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [ newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE ANALYSIS OF ASSESSMENT RESULTS.`,
      true,
      22
    ),
    newLine,
    
    plainText(
      `At ${institution}, faculty from academic programs and responsible individuals from learning experience units analyze all assessment data. In formal and informal meetings, faculty and responsible individuals discuss at their areas all planned assessment activities and their inclusion in the corresponding syllabi and learning experience documentation. During the semester, they make formative decisions on syllabus modifications that enhance teaching and learning or adapt the learning experience process.`,
      false,
      22
    ),
    newLine,
    plainText(
      `In informal and formal conversations, faculty identify program and course strengths and weaknesses like their counterparts at learning experience units do. Central to this is the determination of gaps between professional expectations and current learning opportunities within the academic programs and learning experience units. Moreover, these analyses may unveil other problems beyond the control of the faculty and responsible individuals such as new disciplinary trends or trend displacement within the profession. Consequently, both faculty members within the academic departments and responsible individuals within the learning experience units collaborate to recommend improvement strategies to enhance student teaching and learning and to sustain any successes already evidenced.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} adopted Figure  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `as the graphical representation of its approach to the periodic analysis of assessment activities and collected data. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
    coloredText(`Figure X`, false, 22),
    coloredText(`ADD THE TITLE OF THE FIGURE`, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `As noticed in Figure, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `the analysis of assessment activities and the outcome results is an iterative process at ${institution}. The aim is to have a solid process rich in collaborations and specific improvements that seek to respond to all weaknesses detected and foster student strengths while enhancing the academic programs and student development at the learning experience units. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`Figure X`, false, 22),
    coloredText(`ADD THE TITLE OF THE FIGURE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `This process evidences the systematic engagement of faculty from academic programs, staff from learning experience units, and other direct and indirect stakeholders in the evaluation of student performance, the collection of valid and reliable data, and in the enhancement of the course content within academic programs and the continuous growth within learning experience units. Table  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists some meetings held at academic programs and learning experience units to analyze the collected data. Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `includes the dates and links to the meeting agenda and meeting minutes.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    table,
    newLine,
    tableTwo,
    newLine,
  ];
}
