import { Paragraph, Table, TableCell, TableRow, TextRun, WidthType, ShadingType } from "docx";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

let table = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Administrative Unit", false, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Submitted Report?", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Submission Date?", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Submitted Support Report", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Submission Date", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
  ],
});
export default function sixthBlock(userData) {
    let institution = userData.reportingUnit.institution;
  

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE ADMINISTRATIVE UNITS WITH BOTH PLANNING AND EVALUATION PROCESSES.
      `,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}’s, units with combined administrative and student support functions also provide data on their accomplishments in both areas. The unit discusses the implementation of administrative outcomes, their results, and improvement strategies along with a discussion of the same elements for the student support functions. The administrative assessment report collects information on how the administrative units implement the selected outcome. In consequence, student support functions are included under this requirement. `,
      false,
      22
    ),
    newLine,
    plainText(
      `On the other hand, units with administrative and student learning functions also report on those two areas. That is, they complete both the administrative assessment report and the learning assessment report. While the former discusses the unit’s performance on operational aspects, the latter explains students’ performance to evidence the knowledge acquired and the skills during their experience in the academic programs. The administrative unit is an intra-institutional cooperation site for student internships, practicums, research, and laboratory experiences in coordination with faculty members responsible for monitoring students’ performance at authorized locations outside the classroom. `,
      false,
      22
    ),
    newLine,
    plainText(
      `At the core of a combined report is the determination of how administrative units efficiently manage regular functions (i.e., administrative assessment report) and student-related activities (i.e., learning assessment report) to complement classroom experiences. ${institution} considers that having units with administrative and student support functions strengthens our commitment to developing students professionally competent and job ready from day one before and after graduation.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Like any other student cooperating sites, intra-institutional units with dual administrative and student support functions track student performance and progress through diagnostic, formative, and summative assessments. These units diagnose and later assess student performance at various points of their experience to share later structured reports on student strengths, weaknesses, areas for growth, and outstanding competencies. These units also shared these findings with responsible faculty members and with staff to engage in self-improvement actions, as well.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children : [
        new TextRun( {
          text : `Table X, ADD THE TITLE OF THE TABLE HERE, `,
          bold : false, 
          font : "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun( {
          text : `briefly lists some units with administrative and student support functions.`,
          bold : false, 
          font : "Calibri",
          size: 22
        }),
      ]
    }),
    
    newLine,
  coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
  coloredText(`LOOK AT THIS TABLE`, false, 22),
  coloredText(`Table X`, false,22),
    newLine,
    // add a table here
    table,
    newLine,
  
  ];
}
