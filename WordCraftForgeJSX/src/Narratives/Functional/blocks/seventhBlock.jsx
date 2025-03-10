import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
let newLine = plainText("", false, 22);


export default function seventhBlock(userData) {
    let institution = userData.reportingUnit.institution;


  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE RELATIONSHIP BETWEEN THE ADMINISTRATIVE UNIT OUTCOMES AND THE INSTITUTIONAL BUDGET.`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution} fosters a connection among all institutional effectiveness activities and budgetary efforts that are both central to the efficient operation of the institution. To this end, ${institution} continuously links the budget planning process to benchmarks and metrics that measure the performance of administrative units with the institutional mission statement and that of the unit.`,
      false,
      22
    ),
   
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text : `Central to this intent are the guidelines set forth by the `,
          bold : false,
          size : 22,
          font :"Calibri"

        }),
        new TextRun({
          text : `Division of Finance and Administration-THE USER NEEDS TO ADD THE CORRECT NAME HERE. `,
          bold : false,
          size : 22,
          font :"Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },

        }),
        new TextRun({
          text : `These guidelines involve all administrative units and the need for them to submit the yearly required functional assessment reports, which are the direct link between the mission statements and how they support the institution. In addition to the guidelines, each administrative unit needs to provide: `,
          bold : false,
          size : 22,
          font :"Calibri"

        }),
      ]
    }),
   
     newLine,
    textItem(0,`Evidence of having participated in the institutional effectiveness process.
    `,false,22),
    textItem(0,`Evidence of demonstrated progress in accomplishing the goal of relevant strategic plans (e.g., institutional, divisional, departmental)
    `,false,22),
    textItem(0,`Evidence of having improved functions is based on a careful analysis of the implementation results from the previous reporting term.`,false,22),
    newLine,
    plainText(
      `Seeing the planning and assessment of administrative units through the lens of the budget and fund allocation process has allowed the ${institution} to identify cost savings, increase efficiency, manage resources according to critical needs, streamline standard operating procedures, and provide financial-based research support to all administrative units. Key to this intent is to help administrative units to focus without distraction on the essence of their missions and responsibilities while freeing them up from functions not related to their relevant roles, day-to-day operations, institutionally defined tasks.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text : `While meeting the guidelines, administrative units ensure the institutional consistency of the planning process. This includes the adoption of administrative outcomes that align with the budgetary expectations of the institution. Consequently, administrative units also participate in the annual review led by the `,
          bold : false,
          size : 22,
          font :"Calibri"

        }),
       
        new TextRun({
          text : `Division of Finance and Administration-THE USER NEEDS TO ADD THE CORRECT NAME HERE. `,
          bold : false,
          size : 22,
          font :"Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },

        }),
        new TextRun({
          text : `through the ${institution}’s `,
          bold : false,
          size : 22,
          font :"Calibri",
          

        }),
        new TextRun({
          text : `Budget and Finance Committee THE USER NEEDS TO ADD THE CORRECT NAME HERE  `,
          bold : false,
          size : 22,
          font :"Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },

        }),
        new TextRun({
          text : `in support of presidential initiatives. `,
          bold : false,
          size : 22,
          font :"Calibri",
        }),
      ]
    }),
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text : `The Budget and Finance Committee THE USER NEEDS TO ADD THE CORRECT NAME HERE `,
          bold : false,
          size : 22,
          font :"Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },

        }),
        new TextRun({
          text : `makes recommendations on all matters of fund allocation (e.g., decreases, increases, modifications reviews, etc.) based on the evidentiary performance of the administrative units according to their formulated administrative goals for both the previous and subsequent reporting terms. The fund allocation review takes place annually before the adoption of the institution’s official budget and before any discussions by the `,
          bold : false,
          size : 22,
          font :"Calibri",
        }),
        new TextRun({
          text : `Board of Directors, THE USER NEEDS TO ADD THE CORRECT NAME HERE.`,
          bold : false,
          size : 22,
          font :"Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
      ]
    }),
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text : `To ensure the appropriate funding of all programs, services, and activities planned by the ${institution} in alignment with strategic priorities, and before any requests for fund allocation, administrative units submit a report to the `,
          bold : false,
          font : "Calibri",
          size : 22
        }),
        new TextRun({
          text : `Budget and Finance Committee THE USER NEEDS TO ADD THE CORRECT NAME HERE `,
          bold : false,
          font : "Calibri",
          size : 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text : `that mandates the following pieces of information:`,
          bold : false,
          font : "Calibri",
          size : 22
        })
      ]
    }),
    newLine,
    textItem(0,` Historical data from previous reporting periods and cycles.`,false,22),
    textItem(0,` A summary of major responsibilities by sub-units, if necessary.`,false,22),
    textItem(0,`An annotated organizational chart: responsible individuals, start dates, direct reports, etc.`,false,22),
    textItem(0,`Staffing structure: number of responsible individuals per area and direct reporting lines along with a list of programs, services, and activities sponsored or supervised by those individuals.`,false,22),
    textItem(0,`Last reporting term monetary allocation with a breakdown of expenses.`,false,22),
    textItem(0,`A general list of programmed services and activities for the subsequent reporting term along with data collection to measure the stated goals according to the impact of the programmed services and activities.`,false,22),
    textItem(0,`Projected expenses and targeted audience of the programmed services and activities.`,false,22),
    newLine,
    plainText(`By aligning goals and objectives to the budget process, administrative units evidence a disposition to share their responsibilities and commitment for ${institution}’s operational success as expected by the strategic priorities such as the institutional mission statements and that of the administrative units.`, false,22)
  ];
}
