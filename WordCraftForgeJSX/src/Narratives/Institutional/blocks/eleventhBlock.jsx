import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function eleventhBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT LISTS LINKS TO SOME INSTITUTIONAL ASSESSMENT REPORTS`,
      true,
      22
    ),
    newLine,
    plainText(
      `As a summary of this narrative, ${institution} presents some examples of how institutional effectiveness has led to continuous improvement. For additional examples of how planning and evaluation permeate from senior leadership to units across the institution, see attached the following comprehensive documents:`,
      false,
      22
    ),
    newLine,
    textItem(0,`Alignment of Divisional and the Institutional Strategic Plans – Functional Section or ADISP-FS`, false, 22),
    textItem(0,`Alignment of Major Areas and Divisional Strategic Plans – Functional Section or AMADSP-FS`, false, 22),
    textItem(0,` Alignment of Office/Unit/Department and Major Areas Strategic Plans - Functional Section or AOUDMASP-FS`, false, 22),

      newLine,
    plainText(
      `The examples below are part of the Alignment of Divisional and Institutional Strategic Plans – Functional (ADISP-FS), which aligns the implementation results of the administrative units and improvement strategies at the divisional levels with the goals of the institutional strategic plan for the last five years. In AMDISP, reviewers find the alignment with the following structure:
      `,
      false,
      22
    ),
    newLine,
        plainText(`Top row: Selected Strategic Plan`, false,22),
        plainText(`Second top row: Strategic Plan Goal Number and Statements`, false,22),
        plainText(`First Row: Major Division’s Name`, false,22),
        plainText(`Second Row: Yearly Implementation Results and Improvement Strategies `, false,22),

    plainText(
      `The examples below evidence the assessment report structure followed by major divisions and other key units including implementation results and improvement strategies:`,
      false,
      22
    ),
    newLine,
    coloredText(`Major Division:`, true,22),
    coloredText(`Reporting Unit:`, true,22),
    newLine,

      new Paragraph({
        children: [
          new TextRun({
            text: `During the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `PREVIOUS REPORTING YEAR `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `, the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `UNIT `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `adopted the functional outcome `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Staff implemented `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `DIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `to assess the performance of the unit. Results indicated that `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME RESULTS OF HAVING IMPLEMENTED F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

          new TextRun({
            text: `To address those results, the unit decided to implement the following improvement strategies in the subsequent year: `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `LIST THREE RESULT-BASED IMPROVEMENT STRATEGIES. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Overall, the staff considered the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
         

          new TextRun({
            text: `RESULTS OF INDIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

           new TextRun({
            text: `highly satisfactory.`,
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
            text: `During the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `SUBSEQUENT REPORTING YEAR `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `, the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: ` UNIT `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `adopted the same functional outcome `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Staff implemented `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `DIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `to assess the performance of the unit. Results indicated that `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME RESULTS OF HAVING IMPLEMENTED F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

          new TextRun({
            text: `To address those results, the unit decided to implement the following improvement strategies in the subsequent year: `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `LIST THREE RESULT-BASED IMPROVEMENT STRATEGIES.`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Overall, the staff considered the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
         

          new TextRun({
            text: `RESULTS OF INDIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

           new TextRun({
            text: `highly satisfactory. `,
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
            text: `During the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `SUBSEQUENT REPORTING YEAR `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `, the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `UNIT `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `adopted the same functional outcome `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Staff implemented `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `DIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `to assess the performance of the unit. Results indicated that `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME RESULTS OF HAVING IMPLEMENTED F1.1. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

          new TextRun({
            text: `To address those results, the unit decided to implement the following improvement strategies in the subsequent year: `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `LIST THREE RESULT-BASED IMPROVEMENT STRATEGIES. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `Overall, the staff considered the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
         

          new TextRun({
            text: `RESULTS OF INDIRECT EVIDENCE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),

           new TextRun({
            text: `highly satisfactory.`,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,
  ];
}
