import {
  Paragraph,
  TextRun,
  ShadingType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import gradTable from "../Tables/gradTable";

export default function secondBlock(userData) {
  let results = userData.graduationData.goals[0].results.four.combined;
  let institution = userData.reportingUnit.institution;
  console.log("Results in second block", results)

  let row1 = new TableRow({
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
        children: [plainText(results.two.cohortYear)],
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
        children: [plainText(results.two.cohortTotal)],
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
        children: [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`%`, true, 18)],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`n`, true, 18)],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [plainText(`%`, true, 18)],
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
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
    ],
  });

  let empty1 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText("Peer 1", true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
    ],
  });
  let empty2 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText("Peer 2", true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
    ],
  });
  let empty3 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText("Peer 3", true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
    ],
  });

  let empty4 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText("Peer 4", true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
    ],
  });
  let empty5 = new TableRow({
    children: [
      new TableCell({
        width: { size: "16%", type: "PERCENTAGE" },
        children: [coloredText("Peer 5", true, 18)],
        columnSpan: 2,
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        // columnSpan : 0.5
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
        //
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
      new TableCell({
        width: { size: "8%", type: "PERCENTAGE" },
        children: [],
      }),
    ],
  });

  let table = new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, row2, row3, row4, empty1, empty2, empty3, empty4, empty5],
  });

  let link = userData.graduationData.goals[0].link;
  let label = userData.graduationData.goals[0].goalLabel;
  let question2 = userData.graduationData.goals[0].source;
  let question3 = userData.graduationData.goals[0].expectedGoal;
  let question4 = userData.graduationData.goals[0].baselineData;
  let question5 = userData.graduationData.goals[0].implementData;
  let question6 = userData.graduationData.goals[0].outcomeMet;
  let question7 = userData.graduationData.goals[0].improvementEntireData;
  let question8 = userData.graduationData.goals[0].improvementDisaggregatedData;

  let graduationTable = gradTable(results);

  let newLine = plainText("", false, 22);

  let labels = [];

  userData.graduationData.goals.map((item) => {
    let temp;

    temp = [textItem(item.goalLabel, false, 22)];
    labels.push(...temp);
  });

  if (userData.graduationData.goals[0].goalLabel === '') {
      return [plainText(``, false, 22)]
  }

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE EXPECTED STUDENT ACHIEVEMENT RATES.
`,
      true,
      24
    ),
    newLine,
    plainText(
      `For this section of the narrative, ${institution} has chosen the following criteria to explain student achievement:`,
      false,
      22
    ),
    newLine,
    label,
    plainText(
      `The discussion below includes expected goals, baseline data, movement of the implementation data in terms of any increase, decrease, fluctuation, or remaining the same, status of the student achievement outcome as met or not met, and the listing of three Improvement efforts made based on the entire data, disaggregated data, or both entire and disaggregated data.`,
      false,
      22
    ),
    newLine,
    coloredText(
      `ADD A SUB-HEADING THAT SUMMARIZES THE TYPE OF GRADUATION RATES`,
      false,
      22
    ),
    newLine,
    coloredText(
      `DEFINE THE TYPE OF GRADUATION RATE UNDER DISCUSSION (E.G., 6-YEAR, 5-YEAR, 4-YEAR) AND HOW THE INSTITUTION CALCULATES IT.`,
      false,
      22
    ),
    newLine,

    link,
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
          text: `The institution selected ${question3} as the self-established threshold for combined graduation rates. A team of senior leaders identified these thresholds in close collaboration with the `,
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
          text: `This team also agreed to establish the combined graduation baseline data at ${question4} `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: `The implementation results indicated that the combined graduation rates ${question5} from `,
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
          text: `illustrates those graduation rates. `,
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
    graduationTable,
    newLine,
    plainText(
      `To address these results, ${institution} implemented ${question7} based on the entire analyzed data. It also implemented improvements based on disaggregated data such as ${question8}.`,
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
    coloredText(
      `BRIEFLY DISCUSS SOME DETAILS OF THE DATA BY ETHNIC BACKGROUND TO INCLUDE THE THRESHOLD FOR DIRECT EVIDENCE AND IMPROVEMENTS WITHIN THE GROUPS.`,
      false,
      22
    ),
    newLine,
    coloredText(
      `BRIEFLY DISCUSS SOME DETAILS OF THE DATA BY SOCIOECONOMIC BACKGROUND TO INCLUDE THE THRESHOLD FOR DIRECT EVIDENCE AND IMPROVEMENTS WITHIN THE GROUPS.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Compared to peers, Table `,
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
          text: `provides a comparison of combined graduation rates standing: `,
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
    table,
    newLine,
    coloredText(
      `BRIEFLY COMPARE THE COHORT YEARS AND COHORT FIGURES FOR BOTH THE INSTITUTION AND PEERS HERE. FOR INSTANCE, COMPARE THE THRESHOLDS FOR ACCEPTABILITY BETWEEN THE GROUPS AND MENTION THE NUMERIC DIFFERENCE.`,
      false,
      22
    ),
    newLine,
  ];
}
