import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import retentionTable from "../Tables/retentionTable";
import { Paragraph, TextRun, ShadingType } from "docx";

let newLine = plainText("", false, 22);

const fifthBlock = (userData) => {
  let institution = userData.reportingUnit.institution;

  let results = userData.retentionData.goals[0].results.sequence.combined;
  let retenTable = retentionTable(results);

  let link = userData.retentionData.goals[0].link;
  let question77 = userData.retentionData.goals[0].source;
  let question78 = userData.retentionData.goals[0].expectedGoal;
  let question79 = userData.retentionData.goals[0].baselineData;
  let question80 = userData.retentionData.goals[0].implementData;
  let question81 = userData.retentionData.goals[0].outcomeMet;
  let question82 = userData.retentionData.goals[0].improvementEntireData;
  let question83 = userData.retentionData.goals[0].improvementDisaggregatedData;

    if (userData.retentionData.goals[0].goalLabel === '') {
      return [plainText(``, false, 22)]
  }

  return [
    newLine,
    coloredText(`ADD A SUB-HEADING THAT SUMMARIZES RETENTION DATA.`, true, 24),
    newLine,
    plainText(
      `All retention data and rates are accessible to the public at the following link: `,
      false,
      22
    ),
    newLine,
    plainText(link, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} uses the data from ${question77} as the source to explain combined retention data and semester sequence along with `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `STATE ANY OTHER ADDITIONAL DATA SOURCE IF NEEDED. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `The institution selected ${question78} as the self-established threshold for combined enrollment rates. A team of senior administrators identified these thresholds in close collaboration with the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `MENTION HERE THE AREAS THAT MET TO CHOOSE THE THRESHOLDS. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `These individuals analyzed various research sources to identify the thresholds to include `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA, PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `This team also agreed to establish the combined enrollment baseline data at ${question79} `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: `Combined retention data and semester sequence ${question80} from `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `WHAT NUMBER AND PERCENTAGE to WHAT NUMBER AND PERCENTAGE. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `Therefore, ${institution} ${question81} the outcome. Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: ` X, ADD THE TITLE OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates those enrollment category. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText("Table X", false, 22),
    newLine,
    coloredText("ADD THE TITLE OF THE TABLE HERE", false, 22),
    newLine,
    retenTable,
    newLine,
    plainText(
      `To address these results, ${institution} implemented ${question82} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question83}.`,
      false,
      22
    ),
    newLine,
    coloredText(
      `SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`,
      false,
      22
    ),

    newLine,
  ];
};

export default fifthBlock;
