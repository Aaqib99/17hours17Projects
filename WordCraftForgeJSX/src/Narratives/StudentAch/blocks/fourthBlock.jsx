import {Paragraph, TextRun, ShadingType, Table, TableRow, TableCell, WidthType} from 'docx'
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import academicTable from '../Tables/academicTable';
import jobStatusTable from '../Tables/jobStatusTable';
import popInTable from '../Tables/popInTable';
import popCitiesTable from '../Tables/popularCitiesTable';
import popOutTable from '../Tables/popOutTable';




export default function fourthBlock(userData) {

    let results = userData.jobPlacementData.goals[0].results.academic.combined;
    let acadTable = academicTable(results, userData.jobPlacementData.goals[0].results.academic);
    let jobStatusResults = userData.jobPlacementData.goals[0].results.jobStatus.combined;
    let jobTable = jobStatusTable(jobStatusResults);
    let popInResults = userData.jobPlacementData.goals[0].results.popularFieldsIn;
    let popularStatesIn = popInTable(popInResults,userData.jobPlacementData.goals[0].results.popularFieldsIn);
    let popOutResults = userData.jobPlacementData.goals[0].results.popularFieldsOut;
    let popularStatesOut = popOutTable(popOutResults,userData.jobPlacementData.goals[0].results.popularFieldsOut)
    let popCitiesResults = userData.jobPlacementData.goals[0].results.popularCities;
    let popularCities = popCitiesTable(popCitiesResults, userData.jobPlacementData.goals[0].results.popularCities)


    
    let institution = userData.reportingUnit.institution;



    let link = userData.jobPlacementData.goals[0].results.academic.link;
    let question42 = userData.jobPlacementData.goals[0].results.academic.source;
    let question43 = userData.jobPlacementData.goals[0].results.academic.expectedGoal;
    let question44 = userData.jobPlacementData.goals[0].results.academic.baselineData;
    let question45 = userData.jobPlacementData.goals[0].results.academic.implementData;
    let question46 = userData.jobPlacementData.goals[0].results.academic.outcomeMet;
    let question47 = userData.jobPlacementData.goals[0].results.academic.improvementEntireData;
    let question48 = userData.jobPlacementData.goals[0].results.academic.improvementDisaggregatedData;

  let question49 = userData.jobPlacementData.goals[0].results.jobStatus.expectedGoal;
  let question50 = userData.jobPlacementData.goals[0].results.jobStatus.baselineData;
  let question51 = userData.jobPlacementData.goals[0].results.jobStatus.implementData;
  let question52 = userData.jobPlacementData.goals[0].results.jobStatus.outcomeMet;
  let question53 = userData.jobPlacementData.goals[0].results.jobStatus.improvementEntireData;
  let question54 = userData.jobPlacementData.goals[0].results.jobStatus.improvementDisaggregatedData;

  let question55 = userData.jobPlacementData.goals[0].results.popularFieldsIn.expectedGoal;
  let question56 = userData.jobPlacementData.goals[0].results.popularFieldsIn.baselineData;
  let question57 = userData.jobPlacementData.goals[0].results.popularFieldsIn.implementData;
  let question58 = userData.jobPlacementData.goals[0].results.popularFieldsIn.outcomeMet;
  let question59 = userData.jobPlacementData.goals[0].results.popularFieldsIn.improvementEntireData;
  let question60 = userData.jobPlacementData.goals[0].results.popularFieldsIn.improvementDisaggregatedData;


  let question61 = userData.jobPlacementData.goals[0].results.popularFieldsOut.expectedGoal;
  let question62 = userData.jobPlacementData.goals[0].results.popularFieldsOut.baselineData;
  let question63 = userData.jobPlacementData.goals[0].results.popularFieldsOut.implementData;
  let question64 = userData.jobPlacementData.goals[0].results.popularFieldsOut.outcomeMet;
  let question65 = userData.jobPlacementData.goals[0].results.popularFieldsOut.improvementEntireData;
  let question66 = userData.jobPlacementData.goals[0].results.popularFieldsOut.improvementDisaggregatedData;


  let question67 = userData.jobPlacementData.goals[0].results.popularCities.expectedGoal;
  let question68 = userData.jobPlacementData.goals[0].results.popularCities.baselineData;
  let question69 = userData.jobPlacementData.goals[0].results.popularCities.implementData;
  let question70 = userData.jobPlacementData.goals[0].results.popularCities.outcomeMet;
  let question71 = userData.jobPlacementData.goals[0].results.popularCities.improvementEntireData;
  let question72 = userData.jobPlacementData.goals[0].results.popularCities.improvementDisaggregatedData;
  let question73 = userData.jobPlacementData.goals[0].results.popularCities.titleOfReport;
  let question74 = userData.jobPlacementData.goals[0].results.popularCities.officialNameOfPub;
  let question75 = userData.jobPlacementData.goals[0].results.popularCities.dateOfPub;


  let newLine = plainText("", false, 22);

  let labels = []


  userData.jobPlacementData.goals.map(item => {

    let temp;

    temp= [
        textItem(item.goalLabel, false, 22)
    ]
    labels.push(...temp)



  })

  if (userData.jobPlacementData.goals[0].goalLabel === '') {
    return [plainText(``, false, 22)]
}

  return [
    newLine,
    coloredText(`ADD A SUB-HEADING THAT SUMMARIZES JOB PLACEMENT.`, true, 24),
    newLine,
    plainText(
      `All job placement data and rates are accessible to the public at the following link: `,
      false,
      22
    ),
    newLine,
    plainText(link, false,22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} uses the data from ${question42} as the source to explain job placement and combined academic level along with `,
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
          text: `The institution selected ${question43} as the self-established threshold for combined enrollment rates. A team of senior administrators identified these thresholds in close collaboration with the `,
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
          text: `This team also agreed to establish the combined enrollment baseline data at ${question44} `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),


    new Paragraph({
      children: [
        new TextRun({
          text: `The implementation results indicated that the combined enrollment rates and combined academic levels ${question45} from `,
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
          text: `Therefore, ${institution} ${question46} the outcome. Table `,
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
    coloredText('Table X', false, 22),
    newLine,
    coloredText('ADD THE TITLE OF THE TABLE HERE', false, 22),
    newLine,
    acadTable,
    newLine,
    plainText(`To address these results, ${institution} implemented ${question47} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question48}.`, false, 22),
    newLine,
    coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `For combined job placement status (e.g., full-time, part-time, internships, etc.), the institution selected ${question49} as the self-established threshold for this category. Senior administrators selected these thresholds based on `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA, PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `and in close collaboration with the `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: ` MENTION HERE THE AREAS THAT MET TO CHOOSE THE THRESHOLDS. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `This team established the baseline data at ${question50}. `,
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
            text: `The results indicated that these rates ${question51} from `,
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
            text: `Therefore, ${institution} ${question52} the outcome. Table `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `X, ADD THE TITLE OF THE TABLE HERE, `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `illustrates these enrollment rates. `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,


    coloredText(`Table X`, false, 22),
    newLine,
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    jobTable,
    newLine,
    plainText(`${institution} implemented ${question53} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question54}.`, false, 22),
    newLine,
    coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),
    newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `For most popular fields or industries and in-state locations, the institution selected ${question55} as the expected goal. The selection of these thresholds considered `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA, PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `and in close collaboration with the  `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION HERE THE AREAS THAT MET TO CHOOSE THE THRESHOLDS `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `This baseline data ${question56}.
             `,
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
            text: `The results indicated that these rates ${question57} from `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `WHAT NUMBER AND PERCENTAGE to WHAT NUMBER AND PERCENTAGE.`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `Therefore, ${institution} ${question58} the outcome. Table  `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: ` X, ADD THE TITLE OF THE TABLE HERE,  `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `illustrates those enrollment rates.`,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,
      coloredText(`Table X`, false,22),
      newLine,
      coloredText(`ADD THE TITLE OF THE TABLE HERE`, false,22),
      newLine,
      popularStatesIn,
      newLine,

      plainText(`${institution} implemented ${question59} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question60}.`, false, 22),
      newLine, 
      coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

      newLine,
      new Paragraph({
        children: [
          new TextRun({
            text: `For most popular fields or industries and out-state locations, the institution selected ${question61} as the expected goal based on `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `and in close collaboration with the `,
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
            text: `This baseline data ${question62}`,
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
            text: `The results indicated that these rates ${question63} from `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `WHAT NUMBER AND PERCENTAGE to WHAT NUMBER AND PERCENTAGE.`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `Therefore, ${institution} ${question64} the outcome. Table  `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: ` X, ADD THE TITLE OF THE TABLE HERE,  `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `illustrates those enrollment rates.`,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,
      popularStatesOut,
      newLine,

      plainText(`${institution} implemented ${question65} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question66}.`, false, 22),
      newLine, 
      coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

      newLine,

      new Paragraph({
        children: [
          new TextRun({
            text: `For most popular cities and states, the expected goal was ${question67} according to `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC.`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `and in close collaboration with the `,
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
            text: `This baseline data ${question68}`,
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
            text: `The results indicated that these rates ${question69} from `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `WHAT NUMBER AND PERCENTAGE to WHAT NUMBER AND PERCENTAGE.`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `Therefore, ${institution} ${question70} the outcome. ${institution} implemented ${question71} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question72}.
            `,
            bold: false,
            font: "Calibri",
            size: 22,
          })
        ],
      }),
      newLine,
      popularCities,
      newLine,
      question73 !== '' ? plainText(`For an overview of comprehensive job placement information, data, rates, testimonials, and other details, please refer to the report entitled ${question73} published by the ${question74} on ${question75}`, false,22) : plainText(``, false, 22),
      newLine

  ];
}
