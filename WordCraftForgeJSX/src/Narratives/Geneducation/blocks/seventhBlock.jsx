import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import para from "../../../Parts/Para";
import coloredTextItem from "../../../Parts/coloredTextItem";

export default function seventhBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      ` ADD A HEADING THAT ILLUSTRATES THE GENERAL EDUCATION ASSESSMENT OF DISTANCE EDUCATION, OFF-CAMPUS, AND TRANSFER STUDENTS.`,
      true,
      22
    ),
    newLine,
 
    new Paragraph({
      children: [
        new TextRun({
          text: `As stated in the mission statement, ${institution} seeks to prepare all students to become well-rounded professionals upon graduation. At the core of this premise is the offering of courses with the same high caliber to all students regardless of their attendance enrollment status (e.g., face-to-face, distance education, etc.) or campus site (e.g., on-campus, off-campus, hybrid, etc.). In consequence, the General Education Program is implemented across all undergraduate programs regardless of the instruction delivery mode, campus sites, and entering status of the students. Of the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE TOTAL NUMBER OF GENERAL EDUCATION OFFERED LAST REPORTING PERIOD `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `general education courses offered during the last reporting period. `,
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
            text: `ADD THE TOTAL NUMBER OF GENERAL EDUCATION COURSES OFFERED VIA DISTANCE EDUCATION (XX%) `,
            bold: false,
            size: 22,
            font: "Calibri",
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `were delivered via distance education.`,
            bold: false,
            size: 22,
            font: "Calibri",
            
          }),
        ],
      }),
    newLine,
    new Paragraph({
        bullet: 0,
        children: [
          new TextRun({
            text: `ADD THE TOTAL NUMBER OF GENERAL EDUCATION COURSES OFFERED AT OFF-CAMPUS SITES (XX%) `,
            bold: false,
            size: 22,
            font: "Calibri",
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `were delivered to off-campus sites.`,
            bold: false,
            size: 22,
            font: "Calibri",
            
          }),
        ],
      }),
   newLine,
   coloredText(`BRIEFLY EXPLAIN THE SITUATION OF TRANSFER STUDENTS AND GENERAL EDUCATION COURSES: APPROVED DUE TO MEMORANDA OF AGREEMENT? APPROVED VIA CONSORTIA? ETC.`, false, 22),
   newLine,
  

    new Paragraph({
      children: [
        new TextRun({
          text: `Like their face-to-face counterparts, distance education and off-campus students participated in the appropriate and adequate implementation of the general education outcomes. Faculty members teaching in those modalities conducted the adapted assessment activities appropriate to course level and best practices in teaching as presented in course syllabi. These faculty members also reported their general education outcome implementation findings according to the guidelines set forth by `,
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
       
      ],
    }),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `Although the improvement efforts adopted by the General Education Program applied to all undergraduate students, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `List X, ADD THE NAME OF THE LIST HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `presents improvement efforts to address the specific needs of distance education and off-campus students as adopted by the `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `REPLACE THE PLACEHOLDING NAME WITH THE COUNCIL’S CORRECT ONE General Education Curriculum Committee:`,
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
    coloredText(`ADD THE NAME OF THE LIST`, false,22),
    newLine,
    coloredText(`ADD THE ACTUAL LIST HERE`, false,22),
    newLine,
    
    coloredTextItem(
      0,
      `ADD ONE IMPROVEMENT AND IMPACT ON STUDENT HERE`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `ADD ANOTHER IMPROVEMENT AND IMPACT ON STUDENT HERE`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `ADD A THIRD IMPROVEMENT AND IMPACT ON STUDENT HERE`,
      false,
      22
    ),
    coloredTextItem(
      0,
      `ADD A FINAL IMPROVEMENT AND IMPACT ON STUDENT HERE`,
      false,
      22
    ),
    newLine,
  ];
}
