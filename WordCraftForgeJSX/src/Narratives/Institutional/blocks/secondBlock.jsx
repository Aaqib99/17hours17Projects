import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";



export default function secondBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE SYSTEMATIC INSTITUTIONAL PLANNING PROCESS`,
      true,
      22
    ),
    newLine,
    plainText(`${institution} is aware of the importance of having an ongoing process that highlights best practices in higher education planning and effectiveness. To that end, ${institution} constantly engages internal and external stakeholders to advance strategic initiatives and improve institutional performance.`, false,22),
        newLine,
    newLine,
    plainText(`Besides the request for assessment plans and assessment reports to evidence the achievement of the various strategic plans, ${institution} conducts surveys on the different activities offered on campus and at sponsored events off campus. With the assistance of the Office of Research and Effectiveness, all major divisions and other key units participate in the planning and effectiveness ongoing process.`, false,22),
    newLine,
    plainText(`The implementation of the planning and effectiveness ongoing process at ${institution} starts with the need identification stage in alignment with the priorities highlighted in the institutional mission statement. Each unit reflects on its level of preparation to affront any identified needs. Affinity groups within the unit brainstorm ideas on how to act upon those needs and compile an assessment plan which, upon implementation, becomes an assessment report.`, false,22),
    newLine,
    plainText(`Brainstorming sessions take place as informal and formal meetings, consultations with direct stakeholders, phone calls, email exchanges between affinity group members and responsible individuals, and through feedback from other people involved. Each affinity group or responsible individual has clear guidelines on what the specific needs are and how to collect details to respond to them. At the essence of these exercises is the examination of data and other information that benchmark any strategic plan or strategic priority under monitoring.`, false,22),
    newLine,
    plainText(`As the head of the institution, ${institution}'s president has the primary responsibility for monitoring the planning and effectiveness of the ongoing process. All designees provide timely updates and compile any required reports.`, false,22),
    newLine,


    new Paragraph({
      children: [
        new TextRun({
          text: `The iterative planning and effectiveness process continues with the unveiling of improvement strategies that respond to the data collected from the implementation of the assessment plan. The improvement strategies are subsequently implemented in the next upcoming term as part of the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF YEARS HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `-year assessment cycle. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    newLine,
    new Paragraph({
        bullet: {level: 0},
        children: [
          new TextRun({
            text: `Figure `,
            bold: false,
            size: 22,
            font: "Calibri",
          }),
          new TextRun({
            text: `X, ADD THE TITLE OF THE FIGURE HERE, `,
            bold: false,
            size: 22,
            font: "Calibri", 
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `illustrates the planning and effectiveness of the ongoing process and involved stakeholders at ${institution}. `,
            bold: false,
            size: 22,
            font: "Calibri",
          }),
        ],
      }),
    newLine,
    coloredText(`Table X `, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,

  ];
}
