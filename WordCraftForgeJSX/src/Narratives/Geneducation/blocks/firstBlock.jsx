import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import para from "../../../Parts/Para";
import coloredTextItem from "../../../Parts/coloredTextItem";

export default function firstBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE ORGANIZATIONAL STRUCTURE AND GENERAL EDUCATION.`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution}'s commitment to fostering the spirit and tenets of its mission also translates into its approach to a common set of competencies that enrich students’ personal and academic backgrounds. The institution defines that common set as the General Education Program which, in addition to equipping students with core and soft skills needed in life and in the profession, serves as the foundation for a successful experience in advanced academic work in chosen fields of study. `,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `At ${institution}, the general education competencies reflect the guidelines set forth by the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee. `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `The `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF MEMBERS HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `members represent `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF REPRESENTED AREAS HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `areas such as `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `MENTION THREE OR FOUR AREAS HERE AS EXAMPLES OF THE AREA REPRESENTED `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `They are appointed by nomination from each college or school dean, faculty senate, and other key areas. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    para(
      "meet",` CHOOSE THE FREQUENCY (E.G., WEEKLY, MONTHLY, EACH SEMESTER, AS NEEDED, ETC.) monthly.`),
    textItem(
      0,
      `ensure compliance with adopted guidelines and continuous improvement efforts. `,
      false,
      22
    ),
    textItem(
      0,
      `review and later approve any curricular and syllabus changes pertaining to general education.`,
      false,
      22
    ),
    textItem(
      0,
      `enact any needed policy or regulation to strengthen general education efforts including the general education curriculum.
      `,
      false,
      22
    ),
    textItem(
      0,
      `plan all training events and regular updates to the curriculum, faculty, staff, and governing bodies in matters related to general education.`,
      false,
      22
    ),
    textItem(
      0,
      `issue yearly reports on the state of the general education program and curriculum at ${institution}.`,
      false,
      22
    ),

    new Paragraph({
      children: [
        new TextRun({
          text: `The `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `basically acts as a liaison group to the Office of the Provost and Vice Chancellor for Academic Affairs in all matters related to general education.`,
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
          text: `General education responsibilities are not limited to the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `only. In fact, all students receive information on general education requirements constantly first upon during orientation to the institution, then when entering the institution, and during their studies at the institution. All academic advisors highlight the importance of compliance with general education requirements in advising and coaching sessions. Students’ responsibilities include familiarity with the curriculum guides and course requirements, as well.`,
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
          text: `At ${institution}, general education requirements can be met through regular coursework, credit examinations, transfer credits, or an accepted combination of requisites. List `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE NAME OF THE TABLE HERE, mentions those requisites:`,
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
    
    coloredText(`List X, ADD THE NAME OF THE TABLE HERE`, false, 22),
    coloredTextItem(0, `REQUISITE ONE`, false, 22),
    coloredTextItem(0, `REQUISITE TWO`, false, 22),
    coloredTextItem(0, `REQUISITE THREE`, false, 22),
    coloredTextItem(0, `REQUISITE FOUR`, false, 22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `The academic structure of the general education program includes `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE TOTAL NUMBER OF COURSES `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `courses distributed in 6 specific competencies encompassing 2 thematic competencies and 3 knowledge areas. These courses require `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF CREDITS HOURS ALLOCATED TO THE GENERAL EDUCATION CURRICULUM HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `credit hours mandated toward the completion of an undergraduate degree. This last requirement represents about one fourth of the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF CREDITS HOURS ALLOCATED TO THE UNDERGRADAUTE DEGREE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `credit hours allocated to those degrees. See narrative related to academic program length in which${institution} discussed the process to award academic credits to undergraduate degrees. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} publishes all general education requirements in the catalog and on the general education online portal. List `,
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
          text: `defines the expected competencies:`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    coloredText(`List X`, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE`, false, 22),
    newLine,
    coloredTextItem(
      0,
      `KNOWLEDGE ARE, COMPETENCY ONE, MINIMUM REQUIRED CREDIT HOURS`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `KNOWLEDGE ARE, COMPETENCY TWO, MINIMUM REQUIRED CREDIT HOURS`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `KNOWLEDGE ARE, COMPETENCY THREE, MINIMUM REQUIRED CREDIT HOURS`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `KNOWLEDGE ARE, COMPETENCY FOUR, MINIMUM REQUIRED CREDIT HOURS`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Notice in List `,
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
          text: `the purposeful scope and sequence of the knowledge and content sought by the competencies. That is members of the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `do not authorize proposed courses to moving forward in the approval process when those courses deviate from the scope of the knowledge area or when they do not align with the scope and sequence of the thematic competency. Moreover, members ensure that any proposed courses have been validated at the required instances within the organizational structure of the institution as referenced in List `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE NAME OF THE TABLE HERE.
           `,
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
    coloredText(`List X, ADD THE NAME OF THE TABLE HERE`, false, 22),
    coloredTextItem(0, `APPROVAL LEVEL ONE`, false, 22),
    coloredTextItem(0, `APPROVAL LEVEL TWO`, false, 22),
    coloredTextItem(0, `APPROVAL LEVEL THREE`, false, 22),
    coloredTextItem(0, `APPROVAL LEVEL FOUR`, false, 22),
    newLine,
  ];
}
