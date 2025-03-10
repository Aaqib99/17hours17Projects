import { Paragraph, TextRun, ShadingType,Table,TableRow, TableCell,WidthType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import indentText from "../../../Parts/indentText";

let emptyRow = new TableRow({
    children: [
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        children: [
          coloredText(
            "Division of Academic Affairs",
            true,
            22
          ),
        ],
      }),
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        children: [
          coloredText(
            "Faculty Senate Office of the President",
            true,
            22
          ),
        ],
      }),
    ],
  })


let emptyRow2 = new TableRow({
    children: [
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Division of Academic Affairs",
            true,
            22
          ),
        ],
      }),
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Spring 20XX",
            true,
            22
          ),
        ],
      }),
    ],
  })
let emptyRow3 = new TableRow({
    children: [
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Division of Development",
            true,
            22
          ),
        ],
      }),
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Fall 20XX",
            true,
            22
          ),
        ],
      }),
    ],
  })

let emptyRow4 = new TableRow({
    children: [
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Off-Campus Site 1",
            true,
            22
          ),
        ],
      }),
      new TableCell({
        width: { size: "30%", type: "PERCENTAGE" },
        columnSpan : 3,
        children: [
          coloredText(
            "Spring 20XX",
            true,
            22
          ),
        ],
      }),
    ],
  })



let table = new Table({
    width: {
      size: "60%",
      type: WidthType.PERCENTAGE,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Strategic Plans", true, 22)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Approved By", true, 22)],
          }),
        ],
      }),
      emptyRow,
    ],
  });

let tableTwo = new Table({
    width: {
      size: "60%",
      type: WidthType.PERCENTAGE,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Strategic Plans", true, 22)],
            columnSpan : 3,
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Scheduled for Review", true, 22)],
          }),
        ],
      }),
      emptyRow2,
      emptyRow3,
      emptyRow4
    ],
  });

let tableThree = new Table({
    width: {
      size: "60%",
      type: WidthType.PERCENTAGE,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Strategic Plans", true, 22)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [coloredText("Submitted By", true, 22)],
          }),
        ],
      }),
      emptyRow
    ],
  });


export default function firstBlock(userData) {

  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE INTRODUCTION`,
      true,
      22
    ),
    newLine,
    plainText(
      `Planning and evaluation processes at the institutional level strengthen ${institution}'s mission in a systematic and comprehensive manner by engaging all units led by senior leadership that report directly to the president. Senior leadership intentionally aligns those processes with ${institution}'s mission statement by immersing them in all ongoing operations and functions in their areas of responsibility. Central to these intentions are operational plans crafted according to best practices in their fields in the context of institutionally adopted effectiveness initiatives. `,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Since its foundation in  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `YEAR WHEN INSTITUTION WAS FOUNDED `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `${institution}'s goals have been excellence, preeminence, and scholarship continuously reinforced to these days as stated in its current mission: `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`ADD THE INSTITUTION’S CURRENT MISSION STATEMENT HERE.`, false,22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} offers NUMBER certificate, NUMBER graduate, and NUMBER undergraduate programs delivered by NUMBER academic departments housed at NUMBER colleges or schools. Because of the intentional pursuit of delivering high-quality education, ${institution} ranked `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE RANK IF NEEDED `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `by `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `NAME OF RANKING ORGANIZATION `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `in `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
            text: `YEAR OF RANKING.`,
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
    plainText(`Systematic planning and constant evaluation allow ${institution} to implement a series of initiatives to measure its institutional growth and commitment to faculty, partnering communities, staff, and students. To 
    achieve this, ${institution} engages in teaching, research, and service as opportunities to address the needs of the partnering community and as a means to support the academic programs and creative endeavors offered at the institution.
    `, false,22),
    newLine,
    new Paragraph({
        children  :[
        new TextRun({
            text : `ADD AN ITALICIZED SUB-HEADING THAT ILLUSTRATES THE SYSTEMATIC PLANNING PROCESS`,
            bold  : true,
            font : "Calibri",
            size : 22,
            italics : true,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
            })
    ]}),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `An excellent example of how ${institution} implements a systematic planning process is the adopted strategic plan entitled `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NAME OF THE CURRENTLY IMPLEMENTED STRATEGIC PLAN. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `${institution}'s president launched the Strategic Planning Initiative in `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `YEAR `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `by chartering the Strategic Planning Committee which included the following areas:`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,

    coloredText(`IN A BULLETED LIST, MENTION THE OPERATIONAL AREAS REPRESENTED IN THE STRATEGIC PLANNING COMMITTEE`, false,22),
    newLine,
    plainText(`The main responsibilities of the committee were:`, false, 22),
    newLine,
    coloredText(`IN A BULLETED LIST, MENTION FIVE OVERARCHING RESPONSIBILITIES OF THE STRATEGIC PLANNING COMMITTEE`, false,22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Briefly summarized, ${institution}’s `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE YEARS OF THE PLAN`,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `-year strategic plan includes `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF GOALS `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `goals `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF OBJECTIVES `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `objectives, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `AND ADD THE NUMBER OF ACTIONABLE STRATEGIES `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
            text: `actionable strategies. The plan targets ${institution}'s tenets in teaching, research, service, and creative endeavors while fostering a variety of community engagement and partnerships as evidence of institutional commitment to its mission, current identity, and productive future.`,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
      ],
    }),
    newLine,
    plainText(`The resulting strategic plan encompasses all major divisions:`, false,22),
    newLine,
    textItem(0,`${userData.formData.division}`, false,22),
    newLine,
    plainText(`Each division has goals and objectives aligned within the plan to support the institution, its operations, and specific expectations according to best practices in the fields. As a result, all areas reporting directly to the president assess their progress toward implementing those goals and objectives. This encompassing approach leads those major divisions to take appropriate actions for all kinds of improvements visible in concrete deliverables that evidence the uniqueness of ${institution}.
    `, false, 22),
    newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `As a working document, ${institution}'s strategic plan guides a shared vision to self-monitor areas of responsibilities while navigating standard operating procedures that allow appropriate responses to unpredictable results and reasonable improvements to undesired outputs. Figure `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `X, ADD THE TITLE OF THE FIGURE HERE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `illustrates the systematic institutional planning process at ${institution}. `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
      newLine,
      coloredText(`Figure X`, false, 22),
      newLine,
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
      newLine,
    coloredText(`ADD THE FIGURE HERE`, false, 22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `The systematic institutional planning process does not stop with the adopted strategic plan. Policy `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `approved in `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE APPROVAL YEAR HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `requires all major divisions and other key areas to have an approved strategic plan tailored to their own needs, according to best practices in their fields, and totally aligned with institutional strategic initiatives. Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates the systematic institutional planning process at ${institution}.`,
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
          text: `Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE NAME OF THE TABLE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `is a list of randomly selected strategic plans completed in some areas.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`Table X`, false, 22),
    newLine,
  coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
  coloredText(`ADD THE TABLE HERE`, false, 22),
  newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `All strategic plans receive the approval of their overseeing instances as exemplified in Table`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: ` X, ADD THE TITLE OF THE TABLE HERE `,
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
    coloredText(`Table X`, false, 22),
    newLine,
  coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
  coloredText(`ADD THE TABLE HERE`, false, 22),
  coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
  newLine,
    table,
    newLine,
    new Paragraph({
        children  :[
        new TextRun({
            text : `ADD AN ITALICIZED SUB-HEADING THAT ILLUSTRATES THE CONSTANT EVALUATION PROCESS`,
            bold  : true,
            font : "Calibri",
            size : 22,
            italics : true,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
            })
    ]}),
    newLine,
    new Paragraph({
        children  :[
        new TextRun({
            text : `At ${institution}, systematic institutional planning is subject to an ongoing review process to identify strengths, weaknesses, and areas of growth. All reviews fall into the established life cycle of the adopted strategic plan per an also adopted schedule. Policy `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE `,
            bold  : false,
            font : "Calibri",
            size : 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
            }),
        new TextRun({
            text : `referenced above requires that the review of any strategic plan is conducted in close alignment with the institutional mission statement and that of the area under review. The goal is to ensure the collection of valid and reliable information for timely decision-making within the constraints of any allocated funds. `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        
    ]}),
    newLine,
    plainText(`Equally important to mention is that the constant evaluation process includes a variety of stakeholders from front-line employees to external constituents as appropriate.`, false,22),
    newLine,
    new Paragraph({
        children  :[
        new TextRun({
            text : `For the purposes of this evaluation, ${institution} adopted a `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `ADD THE NUMBER OF YEARS HERE `,
            bold  : false,
            font : "Calibri",
            size : 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },

            }),
        new TextRun({
            text : `-year assessment cycle. In consequence, the institution collects four types of data to track how the implementation of the strategic plans is taking place within the institutional and divisional contexts:`,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
    ]}),
    newLine,
    textItem(0,`Year 1: Baseline Data`, true,22),
    indentText(`It allows the implementation of a strategic plan as initially adopted to determine any observable strengths and weaknesses.`, false,22),
    newLine,
    textItem(0,`Year 2: Diagnosis Data`, true,22),
    indentText(`It informs about the potential impact of the strengths and weaknesses in the corresponding areas.`, false,22),
    newLine,
    textItem(0,`Year 3: Adjustment Data`, true,22),
    indentText(`It allows the modification of the implementation methods of the plan strategies to make decisions on the continuance or rejection of the strategy under scrutiny.`, false,22),
    newLine,
    textItem(0,`Year 4: Decision Data`, true,22),
    indentText(`It allows the validation of the adjusted methods as the basis for reliable data and information for upper-level supervision.`, false,22),
    newLine,
    indentText(`As evidenced through these four types of data, not only is there a constant evaluation of the plans, but also of the information collected for reliable decision-making during the life cycle of the plans. All major divisions and other key areas use surveys and additional tools aligned with specialized accreditation mandates and federal agency requests. The Office of Research and Effectiveness assists with any requirements.`, false,22),
    newLine,
    new Paragraph({
        children  :[
        new TextRun({
            text : `On the other hand, these exercises involved internal and external stakeholders that help to determine the relative consistency and adequacy of the plan strategies and opportune implementation. In essence, this constant review yields consistent recommendations for institutional and divisional improvements. Figure `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `X, ADD THE TITLE OF THE FIGURE HERE `,
            bold  : false,
            font : "Calibri",
            size : 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
            }),
            
        new TextRun({
            text : `illustrates the constant evaluation process and involved stakeholders at ${institution}.`,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
    ]}),

  newLine,
    coloredText(`Figure X `, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
    coloredText(`ADD THE FIGURE HERE`, false, 22),
    newLine,

    new Paragraph({
        children  :[
        new TextRun({
            text : `Table `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `X, ADD THE TITLE OF THE TABLE HERE, `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `lists the scheduled reviews of some selected plans.`,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
    ]}),
    newLine,
    coloredText(`Table X `, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    tableTwo,
    newLine,

    new Paragraph({
        children  :[
        new TextRun({
            text : `As with the systematic institutional planning process, the constant evaluation process gets recorded in the adopted assessment management and archival system, Nembero Software Systems & Technology. Through Nembero, ${institution} is readily prepared to generate tracking reports and report summaries for authorized individuals within the institution. Table `,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
        new TextRun({
            text : `X, ADD THE TITLE OF THE TABLE HERE, `,
            bold  : false,
            font : "Calibri",
            size : 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
            }),
        new TextRun({
            text : `provides a list of the strategic plans completed and under monitoring as of the date of this report.`,
            bold  : false,
            font : "Calibri",
            size : 22,
            }),
    ]}),

    newLine,
    coloredText(`Table X `, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,
    tableThree,
    newLine,
  ];
}
