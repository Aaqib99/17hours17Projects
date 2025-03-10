import { Table, TableCell, TableRow, WidthType, Paragraph, TextRun, ShadingType} from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredText from "../../../Parts/coloredText";
let newLine = plainText("", false, 22);
import para from "../../../Parts/Para";


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
  let emptyRow2 = new TableRow({
    children: [
      new TableCell({
        width: { size: "25%", type: "PERCENTAGE" },
        children :[plainText(`B.S. in Mechanical Engineering`, false,22)]

    }),

    new TableCell({
        width: { size: "20%", type: "PERCENTAGE" },
        children :[plainText(`Undergraduate`, false,22)]

    }),
    new TableCell({
        width: { size: "40%", type: "PERCENTAGE" },
        children :[plainText(`NASA`, false,22)]

    }),
    new TableCell({
        width: { size: "15%", type: "PERCENTAGE" },
        children :[plainText(`2022-08-25`, false,22)]

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
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Academic Program", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [plainText("Academic Level", true, 22)],
        }),
        new TableCell({
          width: { size: "40%", type: "PERCENTAGE" },
          children: [plainText(`Accrediting Organization or Agency`, true, 22)],
        }),
        new TableCell({
          width: { size: "15%", type: "PERCENTAGE" },
          children: [plainText("Date of Last Review", true, 22)],
        }),
      ],
    }),
    emptyRow2,
    emptyRow2,
    emptyRow2,
  ],
});


export default function eleventhBlock(userData) {
    let institution = userData.reportingUnit.institution;

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES DISTANCE EDUCATION.`,
      true,
      22
    ),
    newLine,
    plainText(
      `Distance Education at ${institution} complies with the same requirements of high excellence as those followed by face-to-face academic programs. Distance Education constantly engages in self-assessment to ensure adherence to best practices in today’s technology-mediated world. It constantly trains faculty members on how best approaches and online learning.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Like any other area, distance education implements result-based improvement according to its own strategic initiatives in agreement with those at other institutional levels to inform ${institution}’s mission statement.
      `,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children :[
        new TextRun({
          text: `Distance Education is member of professional organizations such as `,
          bold: false,
          size: 22,
          font: "Calibri",
        }),
        new TextRun({
          text: `ADD ORGANIZATION’S NAMES HERE. BRIEFLY MENTION TWO OR THREE MAJOR TENETS OF THESE ORGANIZATIONS.`,
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
      ]
    }),
    newLine,
    new Paragraph({
      children :[
        new TextRun({
          text: `The sampling methodology of ${institution}’s distance education programs includes a subset of `,
          bold: false,
          size: 22,
          font: "Calibri",
        }),
        new TextRun({
          text: `ADD THE NUMBER OF DISTANCE EDUCATION PROGRAMS HERE`,
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `selected according to the following criteria:`,
          bold: false,
          size: 22,
          font: "Calibri"
        }),
      ]
    }),

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
    new Paragraph({
      children :[
        new TextRun({
          text: `However, the reviewer can access all learning assessment reports through the Comprehensive Report Document (CRD). Also, `,
          bold: false,
          size: 22,
          font: "Calibri",
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF TH TABLE HERE, `,
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists the units whose learning assessment reports are included in the Comprehensive Report Document.`,
          bold: false,
          size: 22,
          font: "Calibri"
        }),
      ]
    }),
    newLine,
    coloredText(`Table X`, false,22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false,22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    // add a table here
    plainText("School of Social Sciences                        Reporting Period", true, 22),
    newLine,
    table,
    newLine,
    coloredText(`ADD A SUB-HEADING THAT SUMMARIZES PROGRAMMATIC ACCREDITATION OF DISTANCE EDUCATION PROGRAMS`, false, 22),
    newLine,
    new Paragraph({
      children :[
        
        new TextRun({
          text: `Table X, ADD THE TITLE OF TH TABLE HERE, `,
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `lists all academic programs accredited by professional organizations and agencies and that are delivered via distance education at ${institution}.`,
          bold: false,
          size: 22,
          font: "Calibri"
        }),
      ]
    }),
    newLine,
    coloredText(`Table X`, false,22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false,22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    plainText("College of Mechanical Engineering" , false, 22),
    tableTwo,
    newLine,
  ];
}
