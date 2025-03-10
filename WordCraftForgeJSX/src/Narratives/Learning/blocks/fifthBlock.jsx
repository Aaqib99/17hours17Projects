import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, ShadingType} from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

const para = (text, text2, text3) => {

  return new Paragraph({
    bullet: {level:0},
    children: [
      new TextRun({
        text: text,
        bold: false,
        font: "Calibri",
        size: 22,
      }),
      new TextRun({
        text: text2,
        bold: false,
        font: "Calibri",
        size: 22,
        shading: {
          type: ShadingType.SOLID,
          color: "#30D5C8",
        },
      }),
      new TextRun({
        text: text3,
        bold: false,
        font: "Calibri",
        size: 22,
      }),
    ],
  });
};

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
let emptyRow2 = new TableRow({
  children: [
    new TableCell({
      width: { size: "40%", type: "PERCENTAGE" },
      children: [],
    }),
    new TableCell({
      width: { size: "60%", type: "PERCENTAGE" },
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
          width: { size: "40%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "40%", type: "PERCENTAGE" },
          children: [plainText("Learning Experience Unit", true, 22)],
        }),
      ],
    }),
    emptyRow2,
    emptyRow2,
    emptyRow2,
  ],
});

export default function fifthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE TYPES OF ASSESSMENT ACTIVITIES AS EVIDENCE OF LEARNING.`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution} students engage in a variety of assessment activities to evidence the knowledge acquired, the skills developed, the dispositions displayed, and the attitudes manifested during their academics. To measure that evidence on student performance against established thresholds, faculty from academic programs and supervisory staff from learning experience units administer assessments and tools aligned with best practices in the profession and with current applications outside the classroom. In essence, ${institution} ensures that students are professionally prepared for what many employers are looking for during hiring.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Among the learning opportunities that ${institution} offers to all students are internships, laboratory experiences, practicums, research, student teaching, and others. These opportunities ensure that students develop competencies and are job ready from day one before or after graduation. ${institution} tracks student performance and progress in those opportunities through:`,
      false,
      22
    ),
    newLine,
    para(
      ` Diagnostic assessments such as `,
      `MENTION HERE SOME EXAMPLES OF THIS TYPE OF ASSESSMENT IN WHICH STUDENTS PARTICIPATE`,
      `. The purpose of these experiences is to determine students' initial strengths and weaknesses or their baseline preparation and competencies.`
    ),
    para(
      `Formative assessments such as`,
      ` MENTION HERE SOME EXAMPLES OF THIS TYPE OF ASSESSMENT IN WHICH STUDENTS PARTICIPATE`,
      `. The purpose of these experiences is to monitor student learning during the teaching process and at selected milestones as evidence of their progressive development of knowledge, skills, and dispositions.
      `
    ),
    para(
      `Summative assessments such as`,
      ` MENTION HERE SOME EXAMPLES OF THIS TYPE OF ASSESSMENT IN WHICH STUDENTS PARTICIPATE`,
      `. The purpose of these experiences is to make decisions regarding student learning experiences at various intervals of their academics. It also allows faculty to adapt the progression of the content while ensuring student progress according to the scope and sequence of that content.
      `
    ),
    textItem(0,
      `Other assessment practices (e.g., criterion-referenced, ipsative, norm-referenced, etc.) based on comparative metrics such as selected behavioral constructs, from one stage to another, and against selected and normed groups.
      `,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
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
          text: `lists some examples of the administered direct and indirect evidence to measure the level of student performance in meeting the outcome. `,
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
    // add a table here
    table,
    newLine,
    tableTwo,
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
          text: `is a brief list that illustrates this specific portion of the narrative. However, the linked Learning Assessment Report Master Document includes all the learning assessment reports submitted by academic programs and learning experience units. These reports evidence all elements (e.g., outcomes, strategic alignment, types of evidence, types of thresholds implementation results, and decided improvement strategies).`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `On its part, `,
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
          text: `lists some academic programs and learning experience units clicked “Yes” on the question regarding having met the student learning outcome.`,
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
    tableThree,
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Please, notice that `,
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
          text: `lists random examples of the academic programs and learning experience units that clicked “Yes” on the question regarding having met the outcome. The linked Learning Assessment Report Master Document includes the entire learning assessment reports in which the reviewer can find tangible evidence of the submitted reports housed with Yuli & Yeli Software by Nembero Software Systems & Technology, the assessment management and archival system contracted by ${institution}.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
  ];
}
