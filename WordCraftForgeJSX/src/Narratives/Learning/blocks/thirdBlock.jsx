import {
  Table,
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  ShadingType,
} from "docx";

import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

let newLine = plainText("", false, 22);

export default function thirdBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [newLine,
    coloredText(
      ` ADD A HEADING THAT ILLUSTRATES LEARNING ASSESSMENT AS A SYSTEMATIC AND ONGOING PROCESS.`,
      true,
      22
    ),
    newLine,
    plainText(
      `Due to the organizational structure of the assessment process at ${institution}, all related activities are systematic and ongoing. A 7-element process begins with a clear definition of selected learning goals by each academic program or learning experience unit. ${institution} defines goals as general expectations that guide the overall student learning experience in and, when appropriate, outside the classroom. Goals are ample enough to guide the learning process without being philosophically oriented. They are also narrow enough not to be a short-term activity. Although goals encompass key and substantive elements, they are not stated in measurable terms since the assessment of any adopted goals takes place through the assessment of their associated outcomes.
      `,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `The systematicity of the assessment process continues with the selection of at least `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE EXACT NUMBER OF OUTCOMES HERE two `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `outcomes per goal for a maximum of`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE EXACT NUMBER OF OUTCOMES HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `eight outcomes. Outcomes are measurable statements that specify the expected behavior to observe among students. Academic programs and learning experience units collect information on student performance by administering tools and techniques that validly and reliably address those expected behaviors. All collected information is compared with established thresholds. The assessment report allocates space for a list of the evidence administered and the thresholds desired.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    plainText(
      `The Implementation Results section of report promotes the discussion or analysis of direct and indirect information collected on student performance based on two required aspects. Each academic program or learning experience unit reports how the improvement strategies decided during a previous reporting period impacted student performance in the subsequent reporting period. Programs and units discuss student strengths and weaknesses and the impact of formative assessment on lessons and experiences. `,
      false,
      22
    ),
    plainText(
      `Within the Implementation Results section, academic programs and learning experience units attach evidentiary documentation. For instance, they include assignment instructions, assessment tools, obtained data, and given responsibilities.`,
      false,
      22
    ),
    plainText(
      `The Decided Improvement Strategies section, programs and units decide result-based actions for improvement in the subsequent reporting term after discussing strengths and weaknesses in the Implementation Results section. That is, the assessment of student learning is a continuum in which the information collected on student performance in one year serves as the springboard to decide improvement actions for implementation in the subsequent year.`,
      false,
      22
    ),
    new Paragraph({
      children: [
        new TextRun({
          text: `Figure X, ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates graphically how systematic and ongoing the assessment process at ${institution} is.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText("Figure X", false, 22),
    coloredText("ADD THE TITLE OF THE FIGURE HERE", false, 22),
    coloredText("ADD THE FIGURE HERE", false, 22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `The structural organization of the assessment reports reflects the intrinsic and continuous relations within the seven elements included in these reports. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Figure X, ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates the schedule of the assessment process at ${institution}.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText("Figure X", false, 22),
    coloredText("ADD THE TITLE OF THE FIGURE HERE", false, 22),
    coloredText("ADD THE FIGURE HERE", false, 22),
    newLine,
 
  ];
}
