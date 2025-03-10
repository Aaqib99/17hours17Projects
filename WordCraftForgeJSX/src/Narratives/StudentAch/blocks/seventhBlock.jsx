import ethnicTable from "../Tables/ethnicTable";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";

import { Paragraph, TextRun, ShadingType } from "docx";


const seventhBlock = (userData) => {
  let institution = userData.reportingUnit.institution;

  let results = userData.ethnicData.goals[0].results.ethnic.combined;
  let ethnicDiversityTable = ethnicTable(results);

  let link = userData.ethnicData.goals[0].link;
  let question93 = userData.ethnicData.goals[0].source;
  let question94 =
    userData.ethnicData.goals[0].expectedGoal;
  let question95 =
    userData.ethnicData.goals[0].baselineData;
  let question96 =
    userData.ethnicData.goals[0].implementData;
  let question97 = userData.ethnicData.goals[0].outcomeMet;
  let question98 =
    userData.ethnicData.goals[0].improvementEntireData;
  let question99 =
    userData.ethnicData.goals[0].improvementDisaggregatedData;

      if (userData.ethnicData.goals[0].goalLabel === '') {
        return [plainText(``, false, 22)]
    }
    let newLine = plainText(``, false, 22);

  return [
    newLine,
    coloredText(`ADD A SUB-HEADING THAT SUMMARIZES STUDENT ETHNIC DIVERSITY.`, true, 24),
    newLine,
    plainText(
      `All student ethnic diversity data and rates are accessible to the public at the following link:  `,
      false,
      22
    ),
    newLine,
    plainText(link, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} uses the data from ${question93} as the source to the passing of combined licensing examinations along with  `,
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
          text: `The institution selected ${question94} as the self-established threshold for combined enrollment rates. A team of senior administrators identified these thresholds in close collaboration with the `,
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
          text: `This team also agreed to establish the combined enrollment baseline data at ${question95} `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: `The implementation results indicated that the combined student ethnic diversity ${question96} from `,
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
          text: `Therefore, ${institution} ${question97} the outcome. Table `,
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
    ethnicDiversityTable,
    newLine,
    plainText(
      `To address these results, ${institution} implemented ${question98} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question99}.`,
      false,
      22
    ),

    newLine,
  ];
};

export default seventhBlock;
