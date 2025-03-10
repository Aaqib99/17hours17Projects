import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function secondBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE CAPTURING OF THE GENERAL EDUCATION COMPETENCIES.`,
      true,
      22
    ),
    newLine,
    plainText(
      `The assessment of the general education competencies takes place strategically from lower- to upper-division courses. This provides a longitudinal overview of the knowledge acquired, the skills developed, and the dispositions displayed throughout the student’s tenure at the institution. This assessment is equally comparable, defined, and monitored in all instruction delivery modes or campus sites. These competencies serve as the common denominator or foundational-level knowledge to various academic areas as to ensure the appropriate identification of learning outcomes, student performance, and improvement efforts aligned with best practices and trends in general education. `,
      false,
      22
    ),
    newLine,
    plainText(`Responsible faculty submit all general education outcome statements via the General Education Assessment Report (GEAR) through the Yuli & Yeli Software by Nembero Software Systems & Technology. Nembero is the company contracted by ${institution} to host the entire assessment management and archival system to generate and secure reliable assessment reports. Yuli and Yeli offers evidence repository services, report templates, training workshops, conferences, and other accreditation-related products.`, false, 22),
    newLine,
    plainText(`Besides the knowledge (i.e., discipline related) and thematic competency (i.e., umbrella term) areas, these GEAR reports include specific competencies (e.g., interpersonal communication, oral communication, written communication, etc.), competency-related outcome statements, types of evidence (e.g., direct, and indirect), types of thresholds (e.g., direct, and indirect), the implementation results, and a set of improvement strategies for implementation in the subsequent reporting period.`, false, 22),
    newLine,
    plainText(`The general education outcome statements reflect best practices in instructional design. They mirror the CAOOL Method, which is a variation of Nino’s COOL Method created by Dr. Pedro Nino and mentioned in Giannina R. Baker’s case study entitled North Carolina A&T State University: A Culture of Inquiry (NILOA, February 2012, p.4,). The CAOOL method is advantageous in that it does not only define the five key elements of outcome statements, but in that it also specifies the sequence of those elements within the statement per se. That is, CAOOL clearly indicates what students are required to learn and how the assessment of that learning can take place. CAOOL consists of the following elements:`, false, 22),
    textItem(0,`Condition or the resource for someone to do something.`, false, 22),
    textItem(0,`Agent or someone who uses the condition in an observable behavior.`, false, 22),
    textItem(0,`Observable or the expected behavior displayed by the agent to produce a tangible and measurable piece of evidence.`, false, 22),
    textItem(0,`Object or the tangible evidence of the observable behavior to assess according to the level of achievement.`, false, 22),
    textItem(0,` Level of achievement or the established quality level of the evidence to determine whether the agent met the statement.`, false, 22),
    newLine,
    plainText(`An example of a CAOOL-based outcome statement in general education is “During their participation in the Advanced French course, students will be able to evidence presentational oral communication skills in front of French native speakers”.`, false, 22),
    newLine,
    plainText(`Faculty members in consultation with appropriate offices within the organizational structure approval levels develop the outcomes and undertake the general education assessment process. This approach is consistent with the standardized assessment process adopted by the institution. The generation of general education outcome statements goes through iterations and approval stages to evidence the VACA Method (i.e., validity/visibility, appropriateness/accountability, consistency/communication, and applicability/alignment) along with diversity of stakeholders’ voices for outcome statements. At ${institution}, outcome statements ought to be valid since they address a specific and visible construct. They are also appropriate to the academic status of the target population. Faculty members communicate those outcomes via the syllabus and other means while emphasizing their alignment with institutional priorities.`, false, 22),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `List `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: ` X, ADD THE NAME OF THE TABLE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `presents the general education outcomes adopted as of`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `INSERT THE LAST DATE WHEN THESE OUTCOMES WERE REVISED: `,
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
    coloredText(`List X`, false, 22),
    coloredText(`ADD THE NAME OF THE TABLE HERE`, false, 22),
    textItem(
      0,
      `Knowledge Area:  `,
      false,
      22
    ),
    textItem(
      0,
      `Thematic Area:  `,
      false,
      22
    ),
   
    textItem(
      0,
      `Competency: `,
      false,
      22
    ),
    textItem(
      0,
      `Competency Definition:`,
      false,
      22
    ),
    textItem(
      0,
      `Competency Outcome Statement: `,
      false,
      22
    ),
    

    new Paragraph({
      children: [
        new TextRun({
          text: `Notice how these general education outcome statements illustrate the institutionally adopted competencies expected of all undergraduate students. At ${institution}, these outcomes are assessed  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `BRIEFLY INDICATE THE FREQUENCY OF WHEN THE OUTCOMES ARE ASSESSED: EVERY YEAR? EVERY TWO YEARS? ETC. `,
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
    plainText(`The Course-Competency Map distributes the selected courses according to the general education competencies most appropriate to the scope and sequence of the selected courses.`, false, 22),
    newLine
  ];
}
