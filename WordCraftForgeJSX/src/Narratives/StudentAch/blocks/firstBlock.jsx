import {Paragraph, TextRun, ShadingType} from 'docx'
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function firstBlock(userData) {

  let institution = userData.reportingUnit.institution;
  let link = userData.reportingUnit.accessibleAt
  let newLine = plainText("", false, 22);


  return [
    newLine,
    coloredText(`ADD A HEADING THAT SUMMARIZES HOW STUDENT ACHIEVEMENT IS CONSISTENT WITH THE INSTITUTIONAL MISSION.
`, true, 24),
    newLine,
    newLine,
    plainText(
      `${institution}'s As stated in the mission statement, the ${institution}'s main purpose is to offer an environment that not only fosters success but also secures tangible opportunities to evidence that success. One way to reach that purpose is ${institution}'s commitment to student achievement by increasing retention as a springboard toward increased graduation. To that end, ${institution} employs multiple criteria to evidence institutional efforts and tangible opportunities in support of student achievement.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} defines student achievement as `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE INSTITUTIONAL DEFINITION OF STUDENT ACHIEVEMENT HERE. `,
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
   
  
   
 
    plainText(
      `As noted in the definition, ${institution} recognizes how the mission statement and strategic initiatives intertwine with individual contributions from other areas (e.g., divisions, colleges, schools, departments, academic programs, etc.) to strengthen all institutional efforts toward student achievement. With the help of current institution-wide monitoring, the institution can determine internal trends for comparisons with peers on various criteria, and how it offers transformational opportunities to all students with those peers.
      `,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution} considers it important to highlight that the following four narratives aligned with the mission statements detail comprehensive processes, reliable methods, and valid best practices to measure the individual administrative, institutional, and programmatic progress toward student achievement:`,
      false,
      22
    ),
   
    textItem(0, `Administrative assessment`, false, 22),
    textItem(
      0,
      `General education assessment`,
      false,
      22
    ),
    textItem(
      0,
      `Learning assessment`,
      false,
      22
    ),
    textItem(
      0,
      `Support services assessment`,
      false,
      22
    ),
    newLine,
    plainText(
      `As mentioned in those four narratives, ${institution} utilizes data trends and comparisons to determine appropriate improvement actions in alignment with the student population that we serve and the academic programs that we offer.`,
      false,
      22
    ),
    newLine,
    plainText(
      `All student achievement data is accessible publicly through this link:`,
      false,
      22
    ),
    newLine,
    link !== '' ? plainText(link, false, 22) : plainText(``, false, 22),
    newLine
    
   
  ];
}
