import {Paragraph, TextRun, ShadingType, Table, TableRow, TableCell, WidthType} from 'docx'
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import enrollTable from '../Tables/enrollTable';
import attendanceTable from '../Tables/attendanceTable';
import deliveruyTable from '../Tables/deliveryMode';
import genderAndAgeTable from '../Tables/genderAndAgeTable';



export default function thirdBlock(userData) {

    let results = userData.enrollmentData.goals[0].results.academic.combined;


    let attendResults = userData.enrollmentData.goals[0].results.attendance.combined;
    let attendTable = attendanceTable(attendResults)
    let deliveryResults = userData.enrollmentData.goals[0].results.deliveryMode.combined;
    let deliveryTable = deliveruyTable(deliveryResults)
    let ageResults = userData.enrollmentData.goals[0].results.ageGroup.combined;
    let ageTable = genderAndAgeTable(ageResults, userData.enrollmentData.goals[0].results.ageGroup);

    let institution = userData.reportingUnit.institution;

    if (userData.enrollmentData.goals[0].goalLabel === '') {
        return [plainText(``, false, 22)]
    }

  let question17 = userData.enrollmentData.goals[0].results.attendance.expectedGoal;
  let question18 = userData.enrollmentData.goals[0].results.attendance.baselineData;
  let question19 = userData.enrollmentData.goals[0].results.attendance.implementData;
  let question20 = userData.enrollmentData.goals[0].results.attendance.outcomeMet;
  let question21 = userData.enrollmentData.goals[0].results.attendance.improvementEntireData;
  let question22 = userData.enrollmentData.goals[0].results.attendance.improvementDisaggregatedData;

  let question23 = userData.enrollmentData.goals[0].results.deliveryMode.expectedGoal;
  let question24 = userData.enrollmentData.goals[0].results.deliveryMode.baselineData;
  let question25 = userData.enrollmentData.goals[0].results.deliveryMode.implementData;
  let question26 = userData.enrollmentData.goals[0].results.deliveryMode.outcomeMet;
  let question27 = userData.enrollmentData.goals[0].results.deliveryMode.improvementEntireData;
  let question28 = userData.enrollmentData.goals[0].results.deliveryMode.improvementDisaggregatedData;


  let question29 = userData.enrollmentData.goals[0].results.ageGroup.expectedGoal;
  let question30 = userData.enrollmentData.goals[0].results.ageGroup.baselineData;
  let question31 = userData.enrollmentData.goals[0].results.ageGroup.implementData;
  let question32 = userData.enrollmentData.goals[0].results.ageGroup.outcomeMet;
  let question33 = userData.enrollmentData.goals[0].results.ageGroup.improvementEntireData;
  let question34 = userData.enrollmentData.goals[0].results.ageGroup.improvementDisaggregatedData;


  let question35 = userData.enrollmentData.goals[0].results.ageAndAcad.expectedGoal;
  let question36 = userData.enrollmentData.goals[0].results.ageAndAcad.baselineData;
  let question37 = userData.enrollmentData.goals[0].results.ageAndAcad.implementData;
  let question38 = userData.enrollmentData.goals[0].results.ageAndAcad.outcomeMet;
  let question39 = userData.enrollmentData.goals[0].results.ageAndAcad.improvementEntireData;
  let question40 = userData.enrollmentData.goals[0].results.ageAndAcad.improvementDisaggregatedData;







  let row1 =  new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(`Cohort Year`, true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.one.cohortYear)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children:[plainText(results.two.cohortYear)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.three.cohortYear)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.four.cohortYear)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.five.cohortYear)],
        columnSpan: 2,
      }),
    ],
  });

  let row2 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(`Cohort Total`, true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.one.cohortTotal)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children:[plainText(results.two.cohortTotal)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.three.cohortTotal)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.four.cohortTotal)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(results.five.cohortTotal)],
        columnSpan: 2,
      }),
    ],
  });

  let row3 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(`Total and Percentage`, true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
  
     
      
    ],
  });

  let row4 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [plainText(institution, true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children:  [plainText(`%`, true, 18)],
        //
      }),
  
     
      
    ],
  });



  let empty1 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText('Peer 1', true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
  
     
      
    ],
  });
  let empty2 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText('Peer 2', true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
  
     
      
    ],
  });
  let empty3 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText('Peer 3', true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
  
     
      
    ],
  });


  let empty4 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText('Peer 4', true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
  
     
      
    ],
  });
  let empty5 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText('Peer 5', true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children : []
      }),
  
     
      
    ],
  });



  let table = new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, row2, row3, row4, empty1,empty2, empty3, empty4, empty5],
  })


  let link = userData.enrollmentData.goals[0].results.academic.link;
  let question2 = userData.enrollmentData.goals[0].results.academic.source;
  let question3 = userData.enrollmentData.goals[0].results.academic.expectedGoal;
  let question4 = userData.enrollmentData.goals[0].results.academic.baselineData;
  let question5 = userData.enrollmentData.goals[0].results.academic.implementData;
  let question6 = userData.enrollmentData.goals[0].results.academic.outcomeMet;
  let question7 = userData.enrollmentData.goals[0].results.academic.improvementEntireData;
  let question8 = userData.enrollmentData.goals[0].results.academic.improvementDisaggregatedData;

   let enrollmentTable = enrollTable(results)
   

  let newLine = plainText("", false, 22);

  let labels = []
  // let links = []

  userData.enrollmentData.goals.map(item => {

    let temp;
    temp= [
        textItem(item.goalLabel, false, 22)
    ]
    labels.push(...temp)


  })

  
//   if (userData.enrollmentData.goals[0].goalLabel === '') {
//     return [plainText(``, false, 22)]
// }


  return [
    newLine,
    coloredText(`ADD A SUB-HEADING THAT SUMMARIZES ENROLLMENT TYPE.`, true, 24),
    newLine,
    plainText(
      `All enrollment rates and data are accessible to the public at the following link: ANSWER TO QUESTION 9:`,
      false,
      22
    ),
    newLine,
    plainText(link, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} utilizes the data from ${question2} as the official source along with `,
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
          text: `The institution selected ${question3} as the self-established threshold for combined enrollment rates. A team of senior administrators identified these thresholds in close collaboration with the `,
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
          text: `This team also agreed to establish the combined enrollment baseline data at ${question4} `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),


    new Paragraph({
      children: [
        new TextRun({
          text: `The implementation results indicated that the combined enrollment rates and combined academic levels ${question5} from `,
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
          text: `Therefore, ${institution} ${question6} the outcome. Table `,
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
    enrollmentTable,
    newLine,
    plainText(`To address these results, ${institution} implemented ${question7} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question8}.`, false, 22),
    newLine,
    coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `For enrollment and combined attendance status (i.e., full-time, or part-time), the institution selected ${question17} as the self-established threshold for this category. Senior administrators selected these thresholds based on `,
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
            text: `This team established the baseline data at ${question18}. `,
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
            text: `The results indicated that these rates ${question19} from `,
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
            text: `Therefore, ${institution} ${question20} the outcome. Table `,
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
    attendTable,
    newLine,
    plainText(`${institution} implemented ${question21} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question22}.`, false, 22),
    newLine,
    coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),
    newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `For enrollment and combined instruction delivery mode (i.e., 100% distance, hybrid, or 100% face-to-face), the institution selected ${question23} as the expected goal. The selection of these thresholds considered `,
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
            text: `This baseline data ${question24}.
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
            text: `The results indicated that these rates ${question25} from `,
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
            text: `Therefore, ${institution} ${question26} the outcome. Table  `,
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
      deliveryTable,
      newLine,

      plainText(`${institution} implemented ${question27} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question28}.`, false, 22),
      newLine, 
      coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

      newLine,
      new Paragraph({
        children: [
          new TextRun({
            text: `For enrollment, combined gender, and age groups, the institution selected ${question29} as the expected goal based on `,
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
            text: `This baseline data ${question30}`,
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
            text: `The results indicated that these rates ${question31} from `,
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
            text: `Therefore, ${institution} ${question32} the outcome. Table  `,
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
      ageTable,
      newLine,

      plainText(`${institution} implemented ${question33} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question34}.`, false, 22),
      newLine, 
      coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false, 22),

      newLine,

      new Paragraph({
        children: [
          new TextRun({
            text: `For enrollment, age groups, and academic level (i.e., undergraduate, master, doctoral), the expected goal was ${question35} according to `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `MENTION SOME DOCUMENTS REVIEWED TO DECIDE THE THRESHOLDS LIKE FOR INSTANCE, HISTORICAL DATA PROFESSIONAL ORGANIZATIONS’ EXPECTATIONS, STATE MANDATED RATES, ETC `,
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
            text: `This baseline data ${question36}`,
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
            text: `The results indicated that these rates ${question37} from `,
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
            text: `Therefore, ${institution} ${question38} the outcome. ${institution} implemented ${question39} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question40}.
            `,
            bold: false,
            font: "Calibri",
            size: 22,
          })
        ],
      }),
      newLine,
      coloredText(`SUMMARIZE THE POSITIVE OR NEGATIVE IMPACT OF EACH IMPROVEMENT AND HOW THE IMPROVEMENT COULD BE TRANSLATED INTO NUMBERS AND PERCENTAGES.`, false,22),
      newLine

  ];
}
