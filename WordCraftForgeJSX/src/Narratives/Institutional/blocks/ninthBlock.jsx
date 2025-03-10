import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function ninthBlock(userData) {

  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES PLANNING AND EVALUATION AS MISSION-DRIVEN PROCESSES.`,
      true,
      22
    ),
    newLine,

    new Paragraph({
        children: [
          new TextRun({
            text: `Policy `,
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
            text: `serves as the link between all institutional effectiveness initiatives and budgetary efforts to allocate funds appropriately. However, the president, as the leader of the institution, meets regularly with various individuals to discuss all fund requests according to emerging needs. Like the president, other senior leaders have consultative conversations with internal stakeholders to discuss budget operations within their areas of responsibility. Each senior leader also discusses their own budgetary needs for feedback to and from the president, who along with his consulting team makes all final decisions regarding:`,
            bold: false,
            font: "Calibri",
            size: 22,
          })
        ],
      }),
      newLine,
      textItem(0,`Budget prioritization`, false,22),
      textItem(0,`Funds allocation`, false,22),
      textItem(0,`Contingency budgetary constraints`, false,22),
      textItem(0,`Operational plans and data-supported requests`, false,22),
      textItem(0,`Other budget considerations`, false,22),

      newLine,


    plainText(
      `All budgetary requests and requests for fund allocation follow institutionally adopted guidelines. These include:`,
      false,
      22
    ),
    newLine,
    textItem(0,`Evidence of having identified areas in need or ongoing commitments.`, false,22),
    textItem(0,`Evidence of having discussed fund allocations within the interested areas and units.`, false,22),
    textItem(0,`Evidence of having discussed any fund allocations with immediate supervisors.`, false,22),
    textItem(0,`Area supervisors such as deans and unit directors elevate those fund allocation requests to their respective vice presidents or associate vice presidents.`, false,22),
    textItem(0,`All vice-chancellors receive a substantive explanation of any fund allocation requests.`, false,22),
    textItem(0,`Upon vice chancellors’ consideration, fund allocation requests are then discussed during area team meetings or, when appropriate, in cabinet sessions.`, false,22),
    newLine,

    plainText(
      `That is, everyone with budget reviewing authority decides how any fund allocation requests move forward in the line of priorities within the prerogatives of the unit, area, and actual authority. They do so in consultations with their supervisors and the Budget Office. In essence, the budget process and the fund allocation exercises respond to strategic planning priorities along with financial management guidelines to advance all institutional operations in support of student success.`,
      false,
      22
    ),
    newLine,
  ];
}
