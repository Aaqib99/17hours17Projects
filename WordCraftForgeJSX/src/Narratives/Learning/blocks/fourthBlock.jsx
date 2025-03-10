import { Table, TableCell, TableRow, WidthType, Paragraph, TextRun, ShadingType } from "docx";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);

const emptyRow = new TableRow({
  children: [
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [],
    }),
    new TableCell({
      width: { size: "66.67%", type: "PERCENTAGE" },
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
          width: { size: "66.67%", type: "PERCENTAGE" },
          children: [plainText("Student Learning Outcome", true, 22)],
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
          width: { size: "66.67%", type: "PERCENTAGE" },
          children: [plainText("Student Learning Outcome", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
  ],
});


export default function fourthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES STUDENT LEARNING OUTCOMES AS MEASURABLE STATEMENTS.`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, all administrative units participate in the standardized assessment process aligned with the mission of the institutional mission and the reporting unit. Part of this process includes the formulation of administrative outcome statements aligned with the institutionally adopted approach. The model that ${institution} chose to write outcome statements is the CAOOL Method, which is a variation of Nino’s COOL Method created by Dr. Pedro Nino as mentioned in Giannina R. Baker’s case study entitled North Carolina A&T State University: A Culture of Inquiry (NILOA, February 2012, p. 4,). The CAOOL method is advantageous in that it not only defines the five key elements of outcomes but also specifies the sequence of those elements within the statement per se. CAOOL consists of the following: `,
      false,
      22
    ),
    newLine,
    plainText(
      `Central to CAOOL is the specification of key discernible elements within any outcome statement. These elements are a condition or resources given, the agent or action doer, the observable behavior or expected performance, the object produced or tangible evidence, and the level of achievement or threshold to meet. ${institution} applies the SMART Principle to strengthen CAOOL outcome statements. With SMART, the institution ensures specific and measurable deliverables that are attainable and relevant to the expected performance sought in the students under given time constraints.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Since each academic program and learning experience unit draft relevant student learning outcomes, all expectations of student performance are equally and automatically aligned with professional standards. `,
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
          text: `lists some examples of student learning outcomes stated in measurable terms by academic programs and learning experience units according to the CAOOL Method.`,
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
          text: `is a brief list that illustrates this specific portion of the narrative. However, the linked Learning Assessment Report Master Document includes all the learning assessment reports from both the academic programs and the learning experience units. These reports evidence all elements (e.g., outcomes, strategic alignment, types of evidence, types of thresholds implementation results, and decided improvement strategies) according to best practices in the field.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    
    new Paragraph({
      children: [
        new TextRun({
          text: `Responsible individuals or their designees participate in assessment training opportunities that include topics such as the writing of student learning outcomes in measurable terms. For instance, in the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `SEMESTER AND THE YEAR HERE, the ADD THE CORRECT NAME HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `Office of Assessment sponsored the workshop entitled `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NAME OF THE ASSESSMENT WORKSHOP HERE. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `The content of the workshop discussed `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THREE TOPICS DISCUSSED DURING THIS WORKSHOP AS RELATED TO STUDENT LEARNING OUTCOME STATEMENTS.`,
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
    plainText(
      `Responsible individuals also participated in targeted professional development through the Yuli & Yeli Software by Nembero Software Systems & Technology, which is the company contracted by INSTITUTION to host the entire assessment management and archival system, including evidence repository, report templates, and other accreditation-related products. All training focused on key elements and processes related to accreditation in general and assessment in higher education in particular.
    `,
      false,
      22
    ),
    newLine,
  ];
}
