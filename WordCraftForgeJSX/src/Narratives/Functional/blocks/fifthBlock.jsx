import { Paragraph, Table, TableCell, TableRow, TextRun, WidthType,ShadingType } from "docx";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredText from "../../../Parts/coloredText";

let newLine = plainText("", false, 22);


let table = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Administrative Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Plan Submitted", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Plan Reviewed", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Report Submitted", true, 22)],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [coloredText("Report Reviewed", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
        new TableCell({
          width: { size: "20%", type: "PERCENTAGE" },
          children: [],
        }),
      ],
    }),
  ],
});
export default function fifthBlock(userData) {
  let institution = userData.reportingUnit.institution;
 

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE IMPACT OF THE ORGANIZATIONAL STRUCTURE ON ADMINISTRATIVE EFFECTIVENESS.`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution}’s organizational structure favors and advances all efforts to foster a culture of assessment and evidence. The organizational structure helps the institution operationalize how all administrative units can assess their performance against institutionally adopted priorities and their self-imposed expectations. This close monitoring contributes to informing institutional development and growth of administrative units at the macro level. ${institution}’s organizational chart illustrates the profile of the institution as follows to illustrate the broad-based participation of all members: `,
      false,
      22
    ),
    newLine,
    textItem(0,`A TOTAL OF 12 DIVISIONS`,true,22),
    textItem(0,`A TOTAL OF 35 MAJOR OFFICES/UNITS/DEPARTMENTS`,true,22),
    textItem(0,`A TOTAL OF 43 LOWER-LEVEL OFFICES`,true,22),
    newLine,
    
    plainText(
      `The profile allows the institution to identify readily the administrative units with a required assessment report. These are in all the divisions and key other units whether in Academic Affairs, Student Affairs, Development, etc. One advantage of this organization is that it strengthens the quality and functional excellence inspired by the mission statement while leveraging the institutional focus on administrative effectiveness.`,
      false,
      22
    ),
    newLine,
    new Paragraph({children : [
      new TextRun({
        text : `In support of these efforts, ${institution} has adopted Policy`,
        bold : false, 
        font: "Calibri",
        size : 22,
        
      }),
      
      new TextRun({
        text : ` ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE`,
        bold : false, 
        font: "Calibri",
        size : 22,
        shading: {
          type: ShadingType.SOLID,
          color: "#30D5C8",
        },
        
      }),
      new TextRun({
        text : ` approved in `,
        bold : false, 
        font: "Calibri",
        size : 22,
        
      }),
      new TextRun({
        text : `ADD THE APPROVAL YEAR HERE `,
        bold : false, 
        font: "Calibri",
        size : 22,
        shading: {
          type: ShadingType.SOLID,
          color: "#30D5C8",
        },
      }),
      new TextRun({
        text : `approved in  that requires all major divisions and other key areas to submit a yearly administrative assessment report aligned with the strategic plans of the institution and the unit, tailored to their own needs according to best practices in their fields, and aligned with other institutional strategic priorities. `,
        bold : false, 
        font: "Calibri",
        size : 22,
      }),
    ]}),
    newLine,
    new Paragraph(
      {children : [
        new TextRun({
          text : `The organizational structure of the institution also favors a culture of assessment and evidence by implementing a centralized model of leadership. That is, the institutional effectiveness process (i.e., administrative, learning, student support assessments, and related areas) is housed at the Office of `,
          bold : false, 
          font : "Calibri",
          size : 22,

        }),
        new TextRun({
          text : `ADD THE NAME OF THE OFFICE IN CHARGE OF INSTITUTIONAL EFFECTIVENESS `,
          bold : false, 
          font : "Calibri",
          size : 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text : `and encompasses the assessment reports from `,
          bold : false, 
          font : "Calibri",
          size : 22,
          
        }),
        new TextRun({
          text : ` ADD THE NUMBER OF OFFICES THAT SUBMIT ASSESSMENT REPORTS `,
          bold : false, 
          font : "Calibri",
          size : 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text : `units.`,
          bold : false, 
          font : "Calibri",
          size : 22,
        }),

        
      ]}
    ),
    
    newLine,
    plainText(
      `${institution}’s president leads all efforts to foster a culture of assessment and evidence by ensuring a clear delineation of administrative responsibilities among cabinet members and other senior leaders according to the increasing complexity of the institution. Some of these individuals also belong to the Administrative Assessment Council (AAC).`,
      false,
      22
    ),
    newLine,
    coloredText(
      `ADD HOW THE INSTITUTION IMPLEMENTS PLANNING AND EVALUATION ACROSS THE INSTITUTION. FOR INSTANCE, MENTION THE ROLE OF THE STUDENT AFFAIRS ASSESSMENT, ANY PLANNING COMMITTEE, ACADEMIC COMMITTEE, DEAN’S COUNCIL, ETC`,
      false,
      22,
    ),
    newLine,
    coloredText(`EXPLAIN ANY TIMELINE TO SUBMIT THE ADMINISTRATIVE ASSESSMENT REPORTS. START WITH THE MONTH WHEN REPORTS ARE REQUIRED, TRAINING TO SUPPORT REPORT COMPLETERS, FOLLOW-UPS, PRESENTATIONS TO SUPPORT COMPLETERS, ETC.`, false,22),
    newLine,
    new Paragraph({children : [
      new TextRun({
        text : `Table `,
        bold : false, 
        font : "Calibri",
        size : 22,
      }),
      new TextRun({
        text : `X, ADD THE TITLE OF THE FIGURE HERE `,
        bold : false, 
        font : "Calibri",
        size : 22,
        shading: {
          type: ShadingType.SOLID,
          color: "#30D5C8",
        },
      }),
      new TextRun({
        text : `brief lists of the administrative units 
        that have submitted the administrative assessment report. `,
        bold : false, 
        font : "Calibri",
        size : 22,
      }),

    ]}),
    plainText(`Table X`, false,22),
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    plainText(`LOOK AT THIS TABLE`, false, 22),
    newLine,

    // add a table here
    table,
        newLine,
        plainText(`For this narrative, Table X, ADD THE TITLE OF THE FIGURE HERE, is a brief list that 
        illustrates this specific portion of the narrative.`, false, 22),
  ];
}
