import { Paragraph, TextRun,ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function firstBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(`ADD A HEADING THAT SUMMARIZES THE DEFINITION OF OUTCOMES AS MEANINGFUL MEASUREMENT STATEMENTS.`, true,24),
    newLine,
    plainText(
      `At ${institution}, all administrative units participate in the standardized assessment process aligned with the mission of the institutional mission and the reporting unit. Part of this process includes the formulation of administrative outcome statements aligned with the institutionally adopted approach. The ${institution} uses the S.M.A.R.T. model to write outcome statements. `,
      false,
      24
    ),
    newLine,
    plainText(`An example of an outcome statement is “After reviewing the last reporting period data, the Office of University Services and Repairs will be able to survey all customers electronically upon completing the service request.”`, false, 24),
    newLine,

    new Paragraph({
      children  :[
        new TextRun({
          text : `The standardized assessment process allows the tracking of all administrative outcomes during `,
          bold : false, 
          font : 'Calibri',
          size : 22
        }),
        new TextRun({
          text : `ADD THE NUMBER OF YEARS HERE-`,
          bold : false, 
          font : 'Calibri',
          size : 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text : `year reporting period, thus enabling ${institution} to get verifiable information on how administrative units measure their progress toward the achievement of the self-imposed outcomes. This approach also helps those units to reflect on:`,
          bold : false, 
          font : 'Calibri',
          size : 22
         
        }),

      ]
    }),
    newLine,
    textItem(0, `Doing what they said to be doing.`, false, 22),
    textItem(
      0,
      `The quality of their programs, services, and activities.`,
      false,
      22
    ),
    textItem(
      0,
      `Decisions to reorient those programs, services, and activities toward more effective operations.`,
      false,
      22
    ),
    newLine,
    plainText(
      `At the end of each year, administrative units submit assessment reports rich in actionable information corresponding to the previous implementation period. Therefore, administrative units can go beyond that information to measure the impact of their programs, services, and activities.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Through the Nembero Solutions and Consulting, which is the company contracted by ${institution} to host the entire assessment management and archival system, the institution has been able to generate and secure reliable administrative assessment reports. Yuli and Yeli offer evidence repository services, report templates, training workshops, conferences, and other accreditation-related products, administrative units can capture quality and mature data for continuous improvement.`,
      false,
      22
    ),
    newLine,
  ];
}
