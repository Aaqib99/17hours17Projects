import { Paragraph, Table, TableCell, TableRow, TextRun, WidthType, ShadingType} from "docx";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
import textItem from "../../../Parts/textItem";

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
          width: { size: "33%", type: "PERCENTAGE" },
          children: [plainText("Administrative Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [plainText("Implementation Results", true, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [plainText("Decided Improvement", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
  ],
});

export default function thirdBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE DETERMINATION OF MEETING EXPECTATIONS.`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, setting thresholds to measure administrative units’ performance serves various purposes equally aligned with their unique missions following that of the institution. For instance, administrative units establish minimum levels of achievement (See CAOOL definitions) and set self-imposed guidelines for high quality performance in support of the students’ experience. Setting thresholds for expectations has helped administrative units set norms that facilitate the identification of areas for improvement thus increasing their attention to the comparison of their expected and observed performances. The ultimate purpose, however, is to strengthen the unit’s value to ${institution} and all faculty, staff, and students. `,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution} can determine whether administrative units meet stated expectations (i.e., goals and outcomes) from a previous reporting period. The standardized assessment process requires all administrative units to establish two types of thresholds (i.e., direct, and indirect). Both thresholds compare expected performance in the current reporting period with observed performance in the previous reporting period.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Upon implementing the outcome, administrative units collect data on this implementation. They engage in conversations and internal discussions regarding the strengths and weaknesses of the said implementation to brainstorm decisions on subsequent implementations of the outcome. Simultaneously, they determine the thresholds achieved and not achieved. Based on this data, the administrative unit identifies any priorities address later as stated in the assessment plan and, again, discussed in the assessment report.`,
      false,
      22
    ),
    newLine,
    // add funcitonal outocomes here
    plainText(
      `At the core of determining how administrative units meaningfully achieve or not any self-imposed expectations are the primary objectives of demonstrating a disposition to continuous improvement. In doing so, administrative units assemble a list of accomplished programs, services, and activities shared with leadership in support of their initiatives. `,
      false,
      22
    ),
    newLine,
    plainText(
      `Administrative units report their accomplishments considering strategic initiatives set forth by senior leadership in general. After comparing both performances, each administrative unit determines the level of accomplishments of their outcomes. Administrative units utilize this reporting opportunity to influence and advocate for budgetary considerations and fund allocations during yearly budgetary conversations.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text  : `For this narrative, both the list of the ten administrative units that clicked “Yes” on the question regarding having met the outcome and `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
        new TextRun({
          text  : `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold : false, 
          font : "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
          size : 22

        }),
        new TextRun({
          text  : `only intend to illustrate these specific portions of the narrative. Some examples of administrative units that evidenced having met the outcomes are provided here: `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
      ]
    }),
    newLine,
    // LIST TEN ADMINISTRATIVE UNITS THAT CLICKED “YES” ON THE QUESTION REGARDING HAVING MET THE OUTCOME.

    /////////////////////////////////////////////
    textItem(0,`Office of Vehicle Fleet and Management`, false, 24),
    textItem(0,`Office of Student Safety and Support`, false, 24),
    textItem(0,`9. Office of Corporate Philanthropy`, false, 24),


    ////////////////////////////////////////////


    newLine,
    new Paragraph({
      children  :[
        new TextRun ({
          text  : `Administrative units at ${institution} use implementation results to decide and later make functional improvements to programs, services, and activities. `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
        new TextRun ({
          text  : `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold : false, 
          font : "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
          size : 22,
        }),
        new TextRun ({
          text  : `lists some administrative units that have improved their operations and performance based on findings from the outcome implementation results. `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
      ]
    }),
  
    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    coloredText(`LOOK AT THIS TABLE`, false, 22),

    // ADD the table here
    table,

    newLine,
    new Paragraph({
      children  :[
        new TextRun ({
          text  : `For this narrative,  `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
        new TextRun ({
          text  : `Table X, ADD THE TITLE OF THE TABLE HERE, `,
          bold : false, 
          font : "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
          size : 22,
        }),
        new TextRun ({
          text  : `is a brief list that illustrates this specific portion of the narrative. `,
          bold : false, 
          font : "Calibri",
          size : 22

        }),
      ]
    }),
  ];
}
