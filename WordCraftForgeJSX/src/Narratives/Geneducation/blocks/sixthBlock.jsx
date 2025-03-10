import {
  Table,
  TableCell,
  TableRow,
  WidthType,
  Paragraph,
  TextRun,
  ShadingType,
} from "docx";

import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
import coloredTextItem from "../../../Parts/coloredTextItem";
import textItem from "../../../Parts/textItem";
let newLine = plainText("", false, 22);

let emptyRow = new TableRow({
  children: [
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [coloredText(`ADD THOSE EFFORTS`, false, 22)],
    }),
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [coloredText(`ADD THOSE EFFORTS`, false, 22)],
    }),
    new TableCell({
      width: { size: "33.33%", type: "PERCENTAGE" },
      children: [coloredText(`ADD THOSE EFFORTS`, false, 22)],
    }),
  ],
});

let emptyRow2 = new TableRow({
  children: [
    new TableCell({
      width: { size: "40%", type: "PERCENTAGE" },
      children: [plainText(`Outcome`, false, 22)],
    }),
    new TableCell({
      width: { size: "60%", type: "PERCENTAGE" },
      children: [coloredText(`ADD THOSE EFFORTS`, false, 22)],
    }),
  ],
});
let emptyRow3 = new TableRow({
  children: [
    new TableCell({
      width: { size: "20%", type: "PERCENTAGE" },
      children: [coloredText(`Course No.`, false, 22)],
    }),
    new TableCell({
      width: { size: "30%", type: "PERCENTAGE" },
      children: [coloredText(`ADD KEY FINDINGS`, false, 22)],
    }),
    new TableCell({
      width: { size: "50%", type: "PERCENTAGE" },
      children: [coloredText(`ADD THE FINDING-RELATED EFFORTS`, false, 22)],
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
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("2019-2020", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("2020-2021", true, 22)],
        }),
        new TableCell({
          width: { size: "33.33%", type: "PERCENTAGE" },
          children: [plainText("2022-2023", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          // width: { size: "100%", type: "PERCENTAGE" },
          columnSpan : 3,
          children: [
            plainText(
              "Improvements to the General Education Curriculum",
              true,
              22
            ),
          ],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    new TableRow({
      children: [
        new TableCell({
          // width: { size: "100%", type: "PERCENTAGE" },
          columnSpan:3,
          children: [
            plainText(
              "Improvements to the General Education Teaching Practices",
              true,
              22
            ),
          ],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
    new TableRow({
      children: [
        new TableCell({
          // width: { size: "100%", type: "PERCENTAGE" },
          columnSpan:3,
          children: [
            plainText(
              "Improvements to the General Education Assessment Strategies",
              true,
              22
            ),
          ],
        }),
      ],
    }),
    emptyRow,
    emptyRow,
  ],
});


// let tableTwo = new Table({
//   width: {
//     size: "60%",
//     type: WidthType.PERCENTAGE,
//   },
//   rows: [
//     new TableRow({
//       children: [
//         new TableCell({
//           width: { size: "20%", type: "PERCENTAGE" },
//           children: [plainText("Outcome", true, 22)],
//         }),
//         new TableCell({
//           width: { size: "40%", type: "PERCENTAGE" },
//           children: [plainText("Improvement Efforts", true, 22)],
//         }),
//       ],
//     }),
//     new TableRow({
//       children: [
//         new TableCell({
//           width: { size: "20%", type: "PERCENTAGE" },
//           children: [plainText(`${userData.competenciesList[0].competencyOutcomeStatement}`, true, 22)],
//         }),
//         new TableCell({
//           width: { size: "40%", type: "PERCENTAGE" },
//           children: [coloredText("ADD THOSE EFFORTS", true, 22)],
//         }),
//       ],
//     }),
//     emptyRow2,
//     emptyRow2,
//   ],
// })

let tableThree = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Course", true, 22)],
        }),
        new TableCell({
          width: { size: "30%", type: "PERCENTAGE" },
          children: [coloredText("Result Findings", true, 22)],
        }),
        new TableCell({
          width: { size: "50%", type: "PERCENTAGE" },
          children: [coloredText("Improvement Efforts", true, 22)],
        }),
      ],
    }),
    emptyRow3,
    emptyRow3,
    emptyRow3,
  ],
});

export default function sixthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    coloredText(
      ` ADD A HEADING THAT ILLUSTRATES SEEKING IMPROVEMENT IN GENERAL EDUCATION.`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, the analyses of findings have led to actionable and practical enhancement of the general education program. Each competency is assessed according to the findings and implementation results to determine strengths, weaknesses, and major problems not readily evident in its teaching and learning practices. Through the competency result analyses, the institution adopts strategies to enhance, for instance, the general education curriculum, all general education teaching practices, and general education assessment strategies and tools.`,
      false,
      22
    ),
    newLine,
    coloredText(
      `Table X, ADD THE NAME OF THE TABLE HERE, lists a series of result-based improvement implemented by the General Education Program in three major areas:`,
      false,
      22
    ),
    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE TITLE OF THE TABLE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    // add a table here
    table,
    newLine,
    new Paragraph({
        children: [
          new TextRun({
            text: `List X, ADD THE NAME OF THE LIST HERE, `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `briefly mentions the impact of some improvement efforts on student learning and performance. For more details on both the improvement efforts and the impact, please refer to the attached Comprehensive General Education Report (C-GEAR), in which the reviewer could see all the general education reports submitted by each responsible individual or a designee.`,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,
      coloredText(`Table X`, false, 22),
      coloredText(`ADD THE TITLE OF THE TABLE`, false, 22),
      newLine,
      textItem(0,`Improvements to the General Education Curriculum`, true,22),
      coloredTextItem(1,`ADD ONE IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      textItem(0,`Improvements to the General Education Teaching Practices`, true,22),
      coloredTextItem(1,`ADD ONE IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      textItem(0,` Improvements to the General Education Assessment Strategies`, true,22),
      coloredTextItem(1,`ADD ONE IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      coloredTextItem(1,`ADD ANOTHER IMPACT HERE`, false,22),
      newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Notice that the improvements listed under `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `reflect the vertices of the Curriculum Alignment Triangle or the points in which the general education curriculum, the general education teaching practices, and the general education assessment strategies support each other. Therefore, the improvements implemented by ${institution} in any of those areas are valid to address the findings from the implementation result analyses. Any weaknesses in one of those areas affect other areas thus negatively impacting student learning and performance. Important to ${institution} is to create a didactic balance among those three elements of the general education program that optimizes student learning and performance as illustrated under`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
            text: ` List X, ADD THE NAME OF THE LIST HERE. `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
      ],
    }),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} also implemented some complementary improvement efforts that positively impacted students and the General Education Program from other perspectives such as those in knowledge and thematic areas, and in academic programs. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Table X, ADD THE TITLE OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `presents those additional improvement efforts.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`List X`, false, 22),
    coloredText(`ADD THE ACTUAL NAME OF THE LIST HERE`, false, 22),
    newLine,
    coloredTextItem(0,`ADD ONE IMPROVEMENT AND IMPACT ON STUDENT HERE`, false, 22),
    coloredTextItem(0,`ADD ANOTHER IMPROVEMENT AND IMPACT ON STUDENT HERE`, false, 22),
    coloredTextItem(0,`ADD A THIRD IMPROVEMENT AND IMPACT ON STUDENT HERE`, false, 22),
    coloredTextItem(0,`ADD A FINAL IMPROVEMENT AND IMPACT ON STUDENT HERE`, false, 22),
    newLine,
    new Paragraph({children : [
        new TextRun({
            text : `Finally, it is important to present some improvement efforts made according to the general education outcome statements. `,
            bold: false,
            font: "Calibri",
            size: 22,
        }),
        new TextRun({
            text: `Table X, ADD THE NAME OF THE TABLE HERE, lists a series of result-based improvement disaggregated by outcomes:`,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
    ]}),
    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    coloredText(`ADD THE ACTUAL TABLE HERE`, false, 22),
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,

    new Table({
      width: {
        size: "60%",
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: "20%", type: "PERCENTAGE" },
              children: [plainText("Outcome", true, 22)],
            }),
            new TableCell({
              width: { size: "40%", type: "PERCENTAGE" },
              children: [plainText("Improvement Efforts", true, 22)],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: { size: "20%", type: "PERCENTAGE" },
              children: [plainText(`${userData.competenciesList[0].outcomes[0].competencyOutcomeStatement}`, true, 22)],
            }),
            new TableCell({
              width: { size: "40%", type: "PERCENTAGE" },
              children: [coloredText("ADD THOSE EFFORTS", true, 22)],
            }),
          ],
        }),
        emptyRow2,
        emptyRow2,
      ],
    }),

    newLine,
    coloredText(`Table X, ADD THE NAME OF THE TABLE HERE, lists a series of result-based enhancements disaggregated by courses in which the improvements were implemented:`, false, 22),
    newLine,
    coloredText(`Table X`, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    coloredText(`ADD THE ACTUAL TABLE HERE`, false, 22),
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    tableThree,
    newLine

  ];
}
