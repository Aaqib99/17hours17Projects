import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import coloredTextItem from "../../../Parts/coloredTextItem";
import CompetencyParts from "../../Functional/Parts/CompetencyParts";
import boldAndUnBoldText from "../../../Parts/boldAndUnBoldtext";

export default function fourthBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES CONSISTENCY OF ASSESSMENT MEASURES.`,
      true,
      22
    ),
    newLine,
    plainText(`At ${institution}, the general education program consists of a set of stages guided by competency-based outcome statements. Because of that, all faculty members collect evidence of outcome implementation through a variety of assessment activities and tools. Both comply with the VAR Principle as a mechanism to evaluate their psychometric properties in relation to the outcome to substantiate. For ${institution}, it is important that all assessment activities and tools are:`, false, 22),

    boldAndUnBoldText(0,`Valid `,`since the results of having measured the general education competencies provide accurate information of student performance in those competencies. That is, the assessment activities and tools are appropriate for the measurement of the competencies.`, 22),
    boldAndUnBoldText(0,`Appropriate `,`since they are tailored to a specific group of students according to maturity level, course content, and academic level of the course. That is, the assessment activities and tools align with course expectations and instructional practices.`, 22),
    boldAndUnBoldText(0,`Reliable `,`since they provide consistent or similar results when administered multiple times. That is, the assessment activities and tools yield trustworthy results despite being administered multiple times under equivalent circumstances.`, 22),
      newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Per guidelines by the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: ` REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `all assessment strategies and assessment tools must align with the standardized assessment process adopted by ${institution}. To this end, the institution has developed some assessment strategies and assessment tools administered to students at various moments and academic levels (e.g., freshman, sophomore, junior, seniors, etc.) during their tenure at the institution. The essence is to determine student performance and attainment level of given competencies. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),


    new Paragraph({
      children: [
        new TextRun({
          text: `Examples of these strategies and tools are referenced in List `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE NAME OF THE LIST HERE:`,
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
    coloredText(`List X`, false,22),
    coloredText(`ADD THE NAME OF THE LIST HERE:`, false,22),
    textItem(0,`${userData.competenciesList[0].outcomes[0].directMeasureOne}`, false,22),
    textItem(0,`${userData.competenciesList[0].outcomes[0].directMeasureTwo}`, false,22),
    textItem(0,`${userData.competenciesList[0].outcomes[0].directMeasureThree}`, false,22),
    newLine,
    
    new Paragraph({
        children: [
          new TextRun({
            text: `Notice in the attached Comprehensive General Education Report (C-GEAR) that the most frequently used assessment strategy is `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `ADD THE MOST FREQUENTLY USED ASSESSMENT STRATEGY HERE: `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
              type: ShadingType.SOLID,
              color: "#30D5C8",
            },
          }),
          new TextRun({
            text: `and the most frequently used assessment tool is `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
              text: `ADD THE MOST FREQUENTLY USED ASSESSMENT TOOL HERE. `,
              bold: false,
              font: "Calibri",
              size: 22,
              shading: {
                  type: ShadingType.SOLID,
                  color: "#30D5C8",
                },
            }),
            new TextRun({
              text: `Both the strategy and the tool evidence ${institution}'s consistent adherence to a standardization of the measurement of student performance in the general education program. Standardized assessment strategies and tools are used in all instruction delivery modes and campus sites. Of course, these strategies and tools are adapted to the courses within specific knowledge and thematic areas as well as the nature of the scope and sequence of the content being assessed. `,
              bold: false,
              font: "Calibri",
              size: 22,
            }),
        ],
      }),
      newLine,
      plainText(`General education competencies are also assessed indirectly. That is, ${institution} administers surveys that supplement inferences on students’ experience while participating in the assessment of general education competencies as they progress from freshman to the senior status. Examples of those surveys are:
      `, false, 22),
      newLine,
    coloredTextItem(0,`MENTION HERE THE FIRST SURVEY COMPLETED BY STUDENTS IN THE FRESHMAN YEAR`, false, 22),
    coloredTextItem(1,`MENTION ANOTHER SURVEY TAKEN BY STUDENTS AFTER THE FRESHMAN YEAR.`, false, 22),
    coloredTextItem(1,`MENTION THE LAST SURVEY TAKEN BY STUDENTS JUST BEFORE GRADUATION IN THE SENIOR YEAR.`, false, 22),
      coloredText(`BRIEFLY EXPLAIN HOW THOSE SURVEYS ADDRESS GENERAL EDUCATION COMPETENCIES.`, false,22),
    newLine,
      coloredText(`BRIEFLY EXPLAIN THE GENERAL EDUCATION-RELATED DATA OBTAINED FROM THOSE SURVEYS.`, false,22),
    newLine,
      coloredText(`BRIEFLY COMPARED THE SAME SURVEYS ADMINISTERED IN TWO DIFFERENT OCASSIONS.`, false,22),
    newLine,
      coloredText(`BRIEFLY EXPLAIN OTHER OR ADDITIONAL MECHANISMS TO ASSESS GENERAL EDUCATION COMPETENCIES.`, false,22),
    newLine,
      coloredText(`ADD ANY TABLE TO SUBSTANTIATE OR CHART TO ILLUSTRATE YOUR NARRATIVE.`, false,22),
    newLine,
  ];
}
