import {
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  ShadingType,
  WidthType,
} from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredText from "../../../Parts/coloredText";
import para from "../../../Parts/Para";
let newLine = plainText("", false, 22);

let emptyRow =   new TableRow({
  children: [
    new TableCell({
      width: { size: "25%", type: "PERCENTAGE" },
      children :[plainText(`B.S. in Economics`, false,22)]
  }),
  new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children :[plainText(`x`, false,22)]

  }),
  new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children :[]
  }),
  new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children :[]
  }),
  new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children :[]
  }),
  new TableCell({
      width: { size: "15%", type: "PERCENTAGE" },
      children :[plainText(`x`, false,22)]

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
          children: [plainText("College/School", true, 22)],
          columnSpan: 1,
        }),
        new TableCell({
          columnSpan: 5,
          children: [plainText("Reporting Period", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("2018-2019", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("2019-2020", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("2020-2021", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("2021-2022", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("2022-2023", true, 22)],
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
          columnSpan: 1,
          children: [plainText("College/School", true, 22)],
        }),
        new TableCell({
          columnSpan: 5,
          children: [plainText("Reporting Period", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Learning Experience Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Term 1", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Term 2", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Term 3", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Term 4", true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Term 5", true, 22)],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    emptyRow,
  ],
});

export default function eighthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE SAMPLING METHODOLOGY.`,
      true,
      22
    ),
    newLine,
    plainText(
      `This portion of the narrative explains the methodology used by ${institution} to draw a representative sample of the learning assessment reports that exemplify the appropriate quality of the assessment process standardized across the institution.`,
      false,
      22
    ),
    newLine,
    plainText(
      `INSTITUTION’s academic and learning experience profiles include a universe of ADD TOTAL NUMBER OF ACADEMIC PROGRAMS ONLY programs managed by ADD TOTAL NUMBER OF ACADEMIC DEPARTMENTS academic departments. These departments are housed at ADD TOTAL NUMBER OF COLLEGES colleges and ADD THE TOTAL NUMBER OF SCHOOLS schools.
      `,
      false,
      22
    ),
    newLine,
    plainText(
      `There are also ADD TOTAL NUMBER OF LEARNING EXPERIENCE UNITS learning experience units. These units are housed at These departments are housed at ADD TOTAL NUMBER OF AREAS areas across the institution.
      `,
      false,
      22
    ),
    newLine,
    plainText(
      `It is important to remember academic programs refer to the structured credentialing to obtain a certificate or a degree according to a set of courses, while learning experience units refer to the nontraditional spaces in which students complement their educational development as part of the requirements of the chosen academic programs. Colleges and schools house academic programs, while learning experiences are offered at colleges, schools, and other nontraditional teaching areas such as offices.`,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution} defines sampling as the systematic process applied to select a random and representative number of academic program and learning experience reports (i.e., sample) that validly and reliably reflect the characteristics of the standardized assessment process observed in all submitted academic program and learning experience reports (i.e., population). That is, the sample is a representative subset of the population. ${institution} favors a judgmental sampling methodology that yields a sample size without drawing any inferences on the quality of the academic program assessment reports.`,
      false,
      22
    ),
    newLine,
    plainText(
      `With this sampling methodology, ${institution} ensures its accreditation agency that the adopted assessment process is successfully in place, supported with evidentiary documentation, and regularly monitored for internal compliance for appropriateness with best practices. Although there are various statistical approaches to select the appropriate c size, ${institution} adopted the following method to determine it according to its mission, values, and situational context.`,
      false,
      22
    ),
    newLine,
    plainText(
      `For the sake of space due to the consider length that academic program and learning experience reports take, ${institution} presents here just 12 academic reports and 12 learning experience reports.`,
      false,
      22
    ),
    newLine,
    plainText(`Academic Program`, true, 22),
    para("Colleges: ", "ADD THE NUMBER HERE"),
    coloredText(`List the college here`, false, 22),
    para("Certificates: ", "ADD THE NUMBER HERE"),
    coloredText(`List the certificates here`, false, 22),
    para("Undergraduates included: ", "ADD THE NUMBER HERE"),
    coloredText(`List the undergraduates here`, false, 22),
    para("Graduates : ", "ADD THE NUMBER HERE"),
    coloredText(`List the graduates here`, false, 22),
    para("Programmatic accreditations : ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the certificate, undergraduate, and graduate academic programs here.
    `,
      false,
      22
    ),

    para("Distance education: ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the distance academic programs here.
    `,
      false,
      22
    ),
    para("Disciplines included", " ADD THE NUMBER HERE."),
    coloredText(`List the disciplines here`, false, 22),

    newLine,

    para("Schools: ", "ADD THE NUMBER HERE"),
    coloredText(`List the schools here.`, false, 22),
    para("Certificates: ", "ADD THE NUMBER HERE"),
    coloredText(`List the certificates here`, false, 22),

    para("Undergraduates included: ", "ADD THE NUMBER HERE"),
    coloredText(`List the undergraduates here`, false, 22),
    para("Graduates: ", "ADD THE NUMBER HERE"),
    coloredText(`List the graduates here`, false, 22),
    para("Programmatic accreditations: ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the certificate, undergraduate, and graduate academic programs here.
    `,
      false,
      22
    ),
    para("Distance education: ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the distance academic programs here.
    `,
      false,
      22
    ),

    para(`Disciplines included: ADD THE NUMBER HERE.`),
    coloredText("List the disciplines here", false, 22),

    newLine,
    plainText(`Learning Experience Units`, true, 22),
    newLine,
    para("Colleges: ", "ADD THE NUMBER HERE"),
    coloredText(`List the college here`, false, 22),
    para("Programmatic accreditations : ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the certificate, undergraduate, and graduate academic programs here.
    `,
      false,
      22
    ),
    para("Disciplines included", " ADD THE NUMBER HERE."),
    coloredText(`List the disciplines here`, false, 22),
    newLine,
    
    para("Schools: ", "ADD THE NUMBER HERE"),
    coloredText(`List the schools here`, false, 22),
    para("Programmatic accreditations : ", "ADD THE NUMBER HERE"),
    coloredText(
      `List the certificate, undergraduate, and graduate academic programs here.
    `,
      false,
      22
    ),
    para("Disciplines included", " ADD THE NUMBER HERE."),
    coloredText(`List the disciplines here`, false, 22),

    new Paragraph({
      children: [
        new TextRun({
          text: "However, the reviewer can access all learning assessment reports through the Comprehensive Report Document (CRD). Also, ",
          bold: false,
          size: 22,
          font: "Calibri",
        }),
        new TextRun({
          text: "Table X, ADD THE TITLE OF TH TABLE HERE, ",
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: "lists the units whose learning assessment reports are included in the Comprehensive Report Document.",
          bold: false,
          size: 22,
          font: "Calibri"
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
  ];
}
