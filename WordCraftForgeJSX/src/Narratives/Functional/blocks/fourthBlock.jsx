import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

let newLine = plainText("", false, 22);

export default function fourthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES ADMINISTRATIVE ASSESSMENT AND THE ADOPTED STANDARDIZED PROCESS.`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, all related activities are systematic and ongoing as part of the standardized assessment process aligned with its mission and led by senior leadership. All reporting units such as academic programs, student support services, and administrative units at ${institution} have adopted a comprehensive assessment process based on the 7-element procedure as presented below:`,
      false,
      22
    ),
    newLine,
    plainText(
      `1. Goal statement: Functional and learning components.`,
      false,
      22
    ),
    plainText(
      `2. Outcome statement: Functional and learning components.`,
      false,
      22
    ),
    plainText(
      `3. (Optional): Strategic alignment to critical initiatives adopted at the following levels:`,
      false,
      22
    ),
    plainText(`         a. Institutional`, false, 22),
    plainText(`         b. Divisional`, false, 22),
    plainText(`         c. College or School`, false, 22),
    plainText(`         d. Departmental`, false, 22),
    plainText(
      `4. Types of evidence (i.e., direct, and indirect evidence)`,
      false,
      22
    ),
    plainText(
      `5. Types of thresholds (i.e., direct, and indirect thresholds)`,
      false,
      22
    ),
    plainText(
      `6. Outcome implementation results along with supporting attachments`,
      false,
      22
    ),
    plainText(
      `7. Decided on improvement strategies for the next reporting term`,
      false,
      22
    ),
    newLine,
    plainText(
      `The 7-element process begins with a clear definition of selected functional goals by each administrative unit. ${institution} defines goals as general expectations that guide the overall operations of administrative units. Goals are ample enough to guide the functional process without being philosophically oriented. They are also narrow enough not to be a short-term activity. Although goals encompass key and substantive elements, they are not stated in measurable terms. The assessment of the stated goals takes place via the assessment of the functional outcomes.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `The systematicity of the ${institution}’s standardized assessment process continues with the selection of at least `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF FUNCTIONAL OUTCOMES PER GOALS HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `functional outcomes per goal for a maximum of `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE MAXIMUM NUMBER OF OUTCOMES HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `outcomes. Outcomes are measurable statements that specify the expected behavior to observe within the administrative units. Because of this, administrative units collect information by administering tools and techniques for comparison with established and agreeable milestones. The assessment report submitted by each administrative unit allocates a space to list both the types of evidence administered and the quality of the thresholds desired. Figure X,  `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE TITLE OF THE FIGURE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates how the administrative assessment is embedded within the comprehensive planning and assessment process of the institution. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    coloredText("Figure X", false, 22),
    coloredText("ADD THE TITLE OF THE FIGURE HERE", false, 22),
    coloredText("ADD THE FIGURE HERE", false, 22),
    newLine,
    plainText(
      `The Outcome Implementation Results section of the institutionally adopted assessment report template requires a discussion or analysis of direct and indirect information collected on the unit’s functional operations based on two required aspects. First, each administrative unit reports how the improvement strategies decided during a previous reporting period impacted the unit’s administrative operations and performance in the subsequent reporting period. In this section, administrative units discuss any uncovered strengths and weaknesses in selected areas. `,
      false,
      22
    ),
    newLine,
    plainText(
      `Within the Outcome Implementation Results section, administrative units attach any necessary evidentiary documentation in support of the narrative. For instance, they include instructions for any required functions, the assessment tools used to collect the data, and the data obtained during the implementation of the outcome.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `In the Decided Improvement Strategies, each administrative unit issues newly decided improvement strategies for implementation during the subsequent reporting period after discussing observed strengths and weaknesses in the Outcome Implementation Results section. At ${institution}, the assessment process looks graphically like `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `Figure X, ADD THE TITLE OF THE FIGURE HERE.`,
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
    coloredText("Figure X", false, 22),
    coloredText("ADD THE TITLE OF THE FIGURE HERE", false, 22),
    coloredText("ADD THE FIGURE HERE", false, 22),
    newLine,
    plainText(
      `Within this scheme, administrative assessment practices align perfectly with the comprehensive and standardized assessment plan based on the seven elements. At the essence of these elements is a continuous commitment to plan for future events and assess regularly how administrative units fulfill that commitment as needed for further reporting on strategic initiatives like the institutional, divisional, college, and departmental strategic plans. To this end, each administrative unit demonstrates the ability to inform those initiatives through a variety of targeted programs, services, and activities necessary to document the achievement of strategic plans.
        `,
      false,
      22
    ),
    newLine,
    plainText(
      `In pursuing their commitments to planning, all administrative units at ${institution} illustrate their ability to function within the budgetary resources allocated, and of course, justify any further needs to adjust those resources to the context of recent programs, services, and activities deemed necessary to address equally the needs of faculty, staff, and students.`,
      false,
      22
    ),

    newLine,
    plainText(
      `In their path toward continuous improvement, administrative units at ${institution} can provide administrative leaders with constant updates on improved effectiveness within the scope of their responsibilities and attributions, both institutional and unit mission statements, and strategic alignment with appropriate critical initiatives. Also central to this intent is the ability of administrative units to influence budgetary decisions as part of the annual fiscal exercises for appropriate fund allocations. Administrative units play a vital role in institutional direction as clearly stated in the Administrative Assessment Handbook. `,
      false,
      22
    ),

    // ADD the table here

    newLine,
    plainText(
      `An alignment of the assessment of administrative units with the comprehensive planning and assessment processes at the ${institution} is included in the Graduating Senior Survey, for example. Students can voice their opinions on how some administrative units like financial aid, student support services, enrollment office, registration office, the library, information technology services, campus cafeteria, and others were able to provide highly satisfactory programs, services, and activities. In doing so, students can indicate the strengths, weaknesses, and opportunities for growth and improvement of any administrative units within the institution. This feedback has resulted in the identification of areas not easily identifiable through other means.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Moreover, all administrative units align the goals and outcomes to institutional strategic initiatives within major areas. For instance, if the location of the reporting administrative unit is within the Division of Administration and Finance, then, the report should evidence an alignment with the strategic plans of the ${institution} and that of the division. The same occurs for reporting administrative units from the Division of Fundraising and Development and other major areas.`,
      false,
      22
    ),
    newLine,
    plainText(
      `To ensure the alignment of administrative assessment with the standardized assessment process at ${institution}, the university organized the Administrative Assessment Council also known as AAC. This council includes key members in the representation of the various divisions and administrative units. ${institution} considers it particularly important to engage a cross-section of the university to foster a culture of assessment regardless of specific areas of responsibilities. Equally important is that senior leadership is the main responsible for the implementation of all assessment initiatives and for monitoring the accomplishment of goals that evidence the ${institution}’s commitment to institutional effectiveness from the perspective of administrative assessment.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children : [
        new TextRun({
          text: `The structural organization of the assessment reports reflects the intrinsic and continuous relations within the seven elements included in these reports. All reports are part of an institutionally adopted schedule within and outside the ${institution} accreditation cycle. Responsible individuals or their designees submit the administrative unit assessment report compiled at the end of each reporting period. Table `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE TABLE HERE illustrates the adopted schedule of the assessment process at ${institution}.`,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },

        }),
      ]
    }),
    newLine,
    coloredText("Figure X", false, 22),
    coloredText("ADD THE TITLE OF THE FIGURE HERE", false, 22),
    coloredText("ADD THE FIGURE HERE", false, 22),
  ];
}
