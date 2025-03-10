import {Paragraph, TextRun, ShadingType} from 'docx'
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function firstBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(`ADD A HEADING THAT SUMMARIZES THE DEFINITION OF THE OUTCOMES ASSESSMENT PROCESS AT THE INSTITUTION.`, true, 24),
    newLine,
    newLine,
    plainText(
      `${institution}'s commitment to fostering a culture of assessment and evidence-based outputs is very high and aligns with its mission statement, vision, and institutional values. To realize this commitment, ${institution} has established a standardized outcomes assessment process that covers two key areas, the functional and learning aspects, within the institution. These aspects complement each other to provide academic opportunities to all students regardless of the learning mode of the experience and of its academic level.`,
      false,
      22
    ),
    newLine,
    plainText(
      `The primary differences between the functional outcomes and the learning outcomes focus on the assessment strategies and the expected results. For instance, functional outcomes collect data and other details on how academic programs and other areas operate or function to promote student learning experiences and administrative efficiency. These outcomes support the environment and the context toward successful learning experiences and business governance. On its side, learning outcomes guide actual learning experiences that explain attitudes displayed, the knowledge acquired, the principles and values cultivated, and the skills developed, by students during their participation in the chosen academic programs and in learning experiences offered by some functional areas. These outcomes center on teaching and learning to evince academic development.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `In line with this approach, ${institution} champions a standardized and inclusive assessment process. This process reflects cyclical terms of `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE YEARS OF THE ASSESSMENT CYCLE HERE (EXAMPLE, 3 TO 4 YEARS IN A ROW) `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `for all academic programs and learning experiences including those under the requirements of their programmatic accreditation agencies such as ADD ONE NAME OF A PROGRAM ACCREDITED BY PROGRAMMATIC AGENCY, ADD ANOTHER NAME OF A PROGRAM ACCREDITED BY PROGRAMMATIC AGENCY, and ADD A THIRD NAME OF A PROGRAM ACCREDITED BY PROGRAMMATIC AGENCY. All academic programs, administrative units, learning experiences, and student support services complete the assessment report that includes seven elements according to the activities that they offer:`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    plainText(
      `1. Goal statement: Functional and learning components.`,
      false,
      22
    ),
    plainText(
      `2. Outcome statement: Functional and learning components.`,false,
      22
    ),
    plainText(
      `3. (Optional): Strategic alignment to critical initiatives adopted at the following levels:`,false,
      22
    ),
    plainText(
      `         a. Institutional`,false,
      22
    ),
    plainText(
      `         b. Divisional`,false,
      22
    ),
    plainText(
      `         c. College or School`,false,
      22
    ),
    plainText(
      `         d. Departmental`,false,
      22
    ),
    plainText(
        `4. Types of evidence (i.e., direct, and indirect evidence)`,false,
        22
      ),
    plainText(
        `5. Types of thresholds (i.e., direct, and indirect thresholds)`,false,
        22
      ),
    plainText(
        `6. Outcome implementation results along with supporting attachments`,false,
        22
      ),
    plainText(
        `7. Decided on improvement strategies for the next reporting term`,false,
        22
      ),
    newLine,
    plainText(
      `Like administrative units do in the Functional Assessment Reports and student support services in the Support Assessment Reports, academic programs and learning experience units submit elements 1 through 5 as part of the assessment plan completed at the beginning of the first year of the implementation of the standardized assessment process. At the end of that year, all areas across the institutions finalize the assessment reports.`,
      false,
      22
    ),
    newLine,
    plainText(
      `It is important to note that learning does not occur in a vacuum solely under the requirements of an academic program. For ${institution}, academic programs refer to the structured credentialing to obtain a certificate or a degree according to a set of courses. Learning experience units refer to the nontraditional spaces such as offices, internship sites, and others in which students complement their educational development as part of the requirements of the chosen academic programs.
      `,
      false,
      22
    ),
   
    textItem(0, `For more details on the administrative assessment and the Functional Assessment Report at ${institution}, please refer to the narrative provided under Standard 7.3. Administrative Assessment and all supporting documentation.`, false, 22),
    textItem(
      0,
      `For information on the assessment of student support services and the Support Assessment Report, please refer to the narrative provided under standards 8.2.c (Academic and Support Services) and 12.1 (Student Support Services).`,
      false,
      22
    ),
    textItem(
      0,
      `Decisions to reorient those programs, services, and activities toward more effective operations.`,
      false,
      22
    ),
    newLine,
    plainText(
      `At the end of each year, administrative units submit assessment reports rich in actionable information corresponding to the previous implementation period. Therefore, administrative units can go beyond that information to measure the impact of their programs, services, and activities.`,
      false,
      22
    ),
    newLine,
    plainText(
      `
    Through the Yuli & Yeli Software by Nembero Software Systems & Technology, which is the company contracted by ${institution} to host the entire assessment management and archival system, the institution has been able to generate and secure reliable administrative assessment reports. Yuli and Yeli offer evidence repository services, report templates, training workshops, conferences, and other accreditation-related products, administrative units can capture quality and mature data for continuous improvement.`,
      false,
      22
    ),
    newLine,
    textItem(
      0,
      `For more details on the administrative assessment and the Functional Assessment Report at ${institution}, please refer to the narrative provided under Standard 7.3. Administrative Assessment and all supporting documentation.`,
      false,
      22
    ),
    textItem(
      0,
      `For information on the assessment of student support services and the Support Assessment Report, please refer to the narrative provided under standards 8.2.c (Academic and Support Services) and 12.1 (Student Support Services).`,
      false,
      22
    ),
  ];
}
