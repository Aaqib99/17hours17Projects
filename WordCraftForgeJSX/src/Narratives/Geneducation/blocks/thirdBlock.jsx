import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredTextItem from "../../../Parts/coloredTextItem";
import CompetencyParts from "../../Functional/Parts/CompetencyParts";

export default function thirdBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES ASSESSMENT OF GENERAL EDUCATION OUTCOMES.`,
      true,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Assessment of the general education outcomes is the responsibility of faculty members in charge of instruction for selected general education courses. Faculty members plan, design, and implement all assessment activities in alignment with the guidelines set forth by `,
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
          text: `At the end of the term, faculty members complete and later submit the General Education Assessment Report (GEAR) to the committee at the scheduled time. `,
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
          text: `The committee compiles all GEARs to generate the Comprehensive General Education Report (C-GEAR). This identifies and explains the extent to which students evidence the attainment of selected general education competencies for a term. This analysis comes from a review of the data obtained from assessment methods like general and targeted assignments, demonstrations, embedded questions, laboratory work, research projects, and from assessment tools such as exams, checklists, rubrics, and others. For instance, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `SELECT A COMPETENCY AND BRIEFLY EXPLAIN HOW THIS COMPETENCY IS ASSESSED.`,
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
    plainText(`The C-GEAR offers a general overview of the assessment strategies within the General Education Program. Specifically, it comprises all the courses assessed, the results of the assessments, the students’ ability to meet the thresholds, and improvement efforts for implementation in the subsequent reporting period.`, false, 22),
    newLine,
    plainText(`For the purposes of this section of the narrative, what follows is a discussion of the overall assessment results for courses in each one of the competencies along with relevant improvement efforts. `, false, 22),
    newLine,
    plainText(`The attached Comprehensive General Education Report (C-GEAR) includes all the reports submitted by different academic programs. Due to the length of this comprehensive report, what follows is a sample of its content comprised here by a representative sample of three courses per competency. The sample discussed below responds to the following methodology:`, false, 22),
    newLine,
  
    textItem(
      0,
      `Representation of all knowledge areas. `,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF KNOWLEDGE AREAS.`, false, 22),
    textItem(
      0,
      `Representation of all thematic areas. `,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF THEMATIC AREAS.`, false, 22),
    textItem(
      0,
      `Representation of all general education competencies.`,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF GENERAL EDUCATION COMPETENCIES.`, false, 22),
    textItem(
      0,
      `Variety of courses selected to be part of the general education program.`,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF GENERAL EDUCATION COURSES.`, false, 22),
    textItem(
      0,
      `Variety of academic programs involved.`,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF ACADEMIC PROGRAMS.`, false, 22),
    textItem(
      0,
      `Cross-sectional representation of the student population within a competency.`,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF STUDENTS IN GENERAL EDUCATION COURSES.`, false, 22),
    textItem(
      0,
      `Cross-sectional representation of the courses offered.`,
      false,
      22
    ),
    coloredTextItem(1,`ADD THE TOTAL NUMBER OF SECTIONS OF GENERAL EDUCATION COURSES.`, false, 22),
    newLine,
    ...CompetencyParts(userData),
    newLine,
  ];
}
