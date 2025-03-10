import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import para from "../../../Parts/Para";
import coloredTextItem from "../../../Parts/coloredTextItem";

export default function fifthBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE ANALYSIS OF GENERAL EDUCATION RESULTS.
      `,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, there are various layers of responsibilities regarding the analysis of the general education results. These layers include faculty, staff, department chairs, college or school deans, and senior leadership. Ultimately, the institution’s president is responsible for final result-based decisions and all strategic directions of the general education program. Other instances include overseeing boards and advisory councils at the top level. `,
      false,
      22
    ),
    newLine,
    plainText(`At the classroom level, faculty members engage in formative and summative analyses of the results obtained after implementing the general education outcomes. Formative analyses take place to adjust the teaching process such as modification of assignments, revision of course content schedule, and others. Through these analyses, faculty members determine how students are attaining competencies in terms of strengths, weaknesses, opportunities, and obstacles. Faculty members ensure a close and continuous alignment of general education expectations with assessment activities and tools.`, false,22),
    newLine,
    plainText(`Unlike formative analyses conducted during the outcome implementation process, summative analyses assist in what the final findings of that implementation are. Summative analyses lead to inferences and conclusions of how close student performance is to the general education outcome thresholds. Faculty members can then decide on comparing overall performance to specific elements of the outcomes to make further decisions on assessment measures, attainment level of the outcome, or enhancement of any elements of the general education process. Upon looking at the results, faculty members can then conclude what worked well or not and whether student performance shows readiness in the assessed competencies.`, false, 22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `A second level of analysis occurs at the departmental level. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `BRIEFLY EXPLAIN WHAT THE DEPARTMENT DOES TO DISCUSS THE DATA SHARED BY FACULTY MEMBERS.`,
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

   coloredText(`BRIEFLY EXPLAIN IF THERE ARE OTHER LEVELS OF ANALYSIS: WHO ARE THE PEOPLE INVOLVED AT THOSE LEVELS, WHAT DO THEY DO? ETC.`, false, 22),
   newLine,
   coloredText(`END THE PARAGRAPH WITH A BRIEF DISCUSSION OF THE HIGHEST LEVEL OF DECISION MAKING IN REGARD TO GENERAL EDUCATION DATA.`, false, 22),
   newLine,
   coloredText(`BRIEFLY DISCUSS SOME FINDINGS OR CONCLUSIONS FROM THOSE ANALYSES. ADD FIGURES OR CHARTS TO ILLUSTRATE THOSE FINDINGS. WHEN DISCUSSING THE DATA, REMEMBER TO COMPARE AND CONTRAST THE DATA FOR FACE-TO-FACE, DISTANCE EDUCATION STUDENTS, AND OFF-CAMPUS STUDENTS, IF APPLICABLE`, false, 22),
   newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `Overall, if the analyses indicate that student performance is high or higher than expected, then faculty and the `,
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
            text: `recommend any actions to sustain the success of those results. These strategies are explicitly stated in the Improvement Strategies sections of the report. On the contrary, if the analyses highlight or unveil weaknesses and low student performance by not reaching the stated thresholds, then faculty and the committee will also issue a set of improvement efforts for implementation in the subsequent reporting period.`,
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
          text: `${institution} utilizes the results of the data analyses as the basis to guide the program review processes of the General Education Program scheduled each `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE TOTAL NUMBER OF YEARS USED TO REVIEW THE GENERAL EDUCATION PROGRAM `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `years as mentioned in the guidelines set forth by `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee.`,
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
    plainText(`In essence, the analyses of the general education findings and data allow faculty to engage continuously in comparative analyses of student performance. Through this constant review, each competency is assessed in terms of strengths, weaknesses, and major problems not readily evident in its teaching and learning practices. Additionally, these exercises seek to determine the relative consistency and adequate validity of the data obtained from the assessment of the competencies each implementation year and how the improvement strategies decided in a previous reporting period impacted student performance in the general education program the subsequent reporting period.`, false,22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Evidence of these analyses is presented in List `,
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
          text: `which includes links to the actual reports. Members of the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee`,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: ` compile these General Education Reports at the end of each academic year as seen below: `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText(`List X`, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE`, false, 22),
    newLine,
    coloredText(`LOOK AT THIS EXAMPLE`, false, 22),
    newLine,

    coloredTextItem(
      0,
      `ADD THE LINKED REPORT HERE AND ACADEMIC YEAR`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `ADD THE LINKED REPORT HERE AND ACADEMIC YEAR`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `ADD THE LINKED REPORT HERE AND ACADEMIC YEAR`,
      false,
      22
    ),
    newLine,
  ];
}
