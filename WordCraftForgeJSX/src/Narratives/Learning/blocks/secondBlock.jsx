import { Table, TableCell, TableRow, WidthType,Paragraph, TextRun, ShadingType} from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
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
          columnSpan : 2,
          children: [coloredText("Academic Year", true, 22)],
        }),
        new TableCell({
          columnSpan : 2,
          children: [coloredText("", false, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("College, School, Learning Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("College, School, Unit Role", true, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Council Membership", true, 22)],
        })
     
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Ex. Business and Management", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Associate Dean", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Regular", false, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Ex. Education", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Professor", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Chair", false, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Ex. Fashion and Design", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Department Chair", false, 22)],
        }),
        new TableCell({
          width: { size: "33%", type: "PERCENTAGE" },
          children: [coloredText("Alternate", false, 22)],
        }),
      ],
    }),
  ],
});

export default function secondBlock(userData) {
    let institution = userData.reportingUnit.institution;
  

  return [newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE ASSESSMENT ROLES OF KEY STAKEHOLDERS.`,
      true,
      22
    ),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `At ${institution}’s, assessment is a collaborative enterprise among faculty members, staff, and leadership in coordination with the ADD THE CORRECT NAME HERE Office of Assessment and in agreement with Policy `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `on institutional effectiveness. The assessment role of faculty, chairs, deans, oversight committees, and others is very active. Responsible individuals take on different albeit substantive functions evidenced in the assessment plan completed at the beginning of the first year of the standardized assessment process. At the end of that year, those individuals submit the assessment report, which is also submitted at the end of each year of the`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE YEARS OF THE ASSESSMENT CYCLE HERE-`,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `-reporting cycle. Both the assessment plan and the assessment report follow all guidelines established by ${institution} with the sole aim of exemplifying the institutional standardized assessment process.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    plainText(
      `Faculty from academic departments and staff from learning experience units are key to the process. Besides their regular responsibilities in teaching, research, service, and administrative functions, some faculty and staff act as “assessment coordinators” or “designees” as appointed in some areas to submit the assessment plan at the beginning of the cycle and the subsequent assessment report at the end of year within the cycle. Assessment coordinators convene formal meetings and informal conversations to determine the most appropriate learning goals and outcomes according to the nature of the discipline and best practices in the field.  `,
      false,
      22
    ),
    newLine,
    plainText(
      `In consultation with their peers, assessment coordinators define the alignment between the outcomes and relevant strategic priorities to evidence simultaneously how the outcomes inform any major initiative. Coordinators and peers identify the courses within each academic program and the responsibilities within the learning experience units to implement the student learning outcomes and apply valid and reliable assessment methods in support of student performance in comparison with established thresholds.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Department chairs and learning experience unit supervisors monitor the assessment process very closely. They provide all information related to the functional aspects of the unit. Like the coordinators, department chairs and unit supervisors complete the functional goals and outcomes, the strategic alignments to priorities, and list all types of evidence and types of thresholds. Finally, they discuss the outcome implementation results along with the decided improvement strategies in preparation for the next reporting period. `,
      false,
      22
    ),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `College or school deans and other senior leadership members have a very significant role in the assessment process, as well. They supervise the assessment process within their assigned areas of responsibility by ensuring that academic departments and responsible individuals submit all required reports and pieces of evidence. Deans and senior leadership receive updates from the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE CORRECT NAME HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `Office of Assessment and sometimes serve as the liaison with this office in matters of accreditation and assessment. Some deans and senior leaders participate in training and workshops sponsored by the office.`,
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
          text: `At ${institution}, the assessment of academic programs and of learning experiences abides by the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE CORRECT NAME HERE OF THE Learning Assessment Council’s `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `guidelines as published in the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE CORRECT NAME HERE OF THE Learning Assessment Handbook. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `This handbook specifies ${institution}'s assessment model, council bylaws, cycle, report elements in addition to charts, figures, templates (e.g. reports, rubrics, etc.), and other appropriate details. `,
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
          text: `As a point of additional, although related information, members representing all administrative units, academic programs, and support services meet `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE MEETING FREQUENCY HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `monthly, and when needed, in one of the councils listed below per their type of membership:`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    // add a table here
    table,
    newLine,
    textItem(0,`Administrative Assessment Council`, false, 22),
    textItem(0,`Learning Assessment Council`, false, 22),
    textItem(0,`Support Service Assessment Council`, false, 22),

    new Paragraph({
      children: [
        new TextRun({
          text: `Each `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Council `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `is led by a member, invites guest speakers, and sponsors a variety of training and workshops such as `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `LIST THREE KEY RELATED AREAS HERE LIKE accreditation, assessment, planning, and others.`,
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

    new Paragraph({
      children: [
        new TextRun({
          text: `All assessment-related stakeholders (i.e., faculty, chairs, councils, deans, staff, etc.) discuss the data obtained from the implementation of student learning outcomes at different stages for appropriate actions. `,
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
          text: `illustrates the role of chairs, deans, faculty, and staff in the Learning Assessment Council for the last `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE EXACT NUMBER OF YEARS HERE three `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `years. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
    coloredText(`TABLE X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    coloredText(`ADD THE TITLE OF THE ACTUAL TABLE HERE`, false, 22),
    newLine,
    plainText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    table, 
    newLine,
    coloredText(`EXPLAIN COUNCIL MEMBERSHIP HERE BY TALKING ABOUT THE NUMBER OF PROFESSORS, NUMBER OF AREAS REPRESENTED, NUMBER OF REGULAR MEMBERS, NUMBER OF UNDERGRADUATE STUDENTS, NUMBER OF GRADUATE STUDENTS, ETC.`, false, 22)
    
  ];
}
