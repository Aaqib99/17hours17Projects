import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

export default function fifthBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES PLANNING AND EVALUATION AS AN INTERTWINED PROCESS`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, planning and evaluation conform to an intertwined process in which the former cannot exist without the latter and vice versa. One feeds simultaneously into the other in a continuous manner to enrich one another comprehensively for consonant decision-making. This comprehensive process allows all major divisions, other key units, and any other reporting units to enrich the effectiveness of the institution and to systematize the implementation of any proposed improvement initiatives.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Although planning seems to precede evaluation, no planning takes place without a diagnostic or superficial overview of what needs to be planned. Under this premise, ${institution} has adopted a cyclical system that includes the methodical evaluation of planned goals and outcomes across relevant areas. To this end, ${institution} requires well-thought plans linked to strategic initiatives and priorities set forth by senior leadership.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Evidence of how the planning and evaluation processes are integrated at ${institution} is the current strategic plan. The conception of this plan responded to the constantly evolving process of the institution and the regular review by ${institution} of previous plans and proposed changes according to news views on standard operating procedures and the living nature of the plans.`,
      false,
      22
    ),
    newLine,
    plainText(
      `The planning stage of ${institution}'s institutional effectiveness steps require the identification of areas key to ${institution}'s regular operations, expected development, and future growth. To this end, ${institution} assesses the extent to which those areas can achieve expectations that, once met, can evidentially feed back into needed changes institutionally. `,
      false,
      22
    ),
    newLine,
    plainText(
      `Moreover, the retro-alimentation that ultimately guides the design of a new strategic plan and the annual submission of individual units’ strategic plans and annual reports sets the operating trajectory of the institution.`,
      false,
      22
    ),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `${institution} has contracted with Nembero Software Systems and Technology as its premier assessment management and archival system to ensure reliable coordination of both planning and evaluation. To strengthen its ability to monitor continuously all operations, ${institution} adopted a `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF YEARS HERE-`,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `year assessment cycle per Policy `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE ${institution}AL EFFECTIVENESS POLICY NUMBER HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `on institutional effectiveness. Besides referring to the adopted assessment cycle and its components (e.g., assessment plans, assessment reports, assessment councils for academic programs, administrative assessment, student affairs assessment, evidence, covered areas, etc.), this policy addresses the role of institutional effectiveness in the budgeting process and accountability mandates from a previous reporting term to the subsequent one. It emphasizes the imperative need to align all planning and evaluation processes to the mission statement of the institution and to those of each individual reporting unit.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    plainText(
      `Each required unit provides a yearly report within the adopted cycle. Those reports explain substantively accreditation-related narratives in support of mandated standards and pieces of evidence. That is, these reports illustrate the overall approach to planning and the effectiveness framework in place to exemplify core operations and procedures dealing with budget allocation, enrollment management, student affairs services, and other key functions of the institution.`,
      false,
      22
    ),
    newLine,
    new Paragraph({
      children: [
        new TextRun({
          text: `As such, the planning and effectiveness process adopted by ${institution} runs parallel to other key processes. There is an obvious integration of planning, effectiveness, budgeting, fund allocation, and federal and state mandates. Each one of these overarching processes solicits and provides information on each other to strengthen both intra- and inter-unit continuous improvement strategies from one term to the other within the adopted `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE NUMBER OF YEARS HERE-`,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `year assessment cycle. `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),

    plainText(
      `University units complete the annual assessment report that discusses any achievements in support of the institutional mission, unit’s mission, goals, and outcomes. Outcome findings and results contained in those reports explained the unit’s achievements and the impact of their operations on university resources and direct stakeholders.`,
      false,
      22
    ),

    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `Any findings of goal and outcome implementation reach the office of responsible individuals and their supervisors for subsequent distribution to senior leadership and external monitoring entities. For example, fund allocation depends on requests by the Department of Physical Plant requests, while federal or state mandates guide fund allocation recommendations to priority areas within the department. Figure `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `X, ADD THE TITLE OF THE FIGURE HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `illustrates the budgeting process and fund allocation at ${institution}.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
    newLine,
    newLine,
    coloredText(`Figure X `, false, 22),
    coloredText(`ADD THE NAME OF THE FIGURE HERE`, false, 22),
    newLine,
    coloredText(`ADD THE FIGURE HERE`, false, 22),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `As noticed in Figure X, `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE TITLE OF THE FIGURE HERE, `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `the budgeting process also exemplifies the close connection or clear integration between planning and evaluation at ${institution}. It immerses goals and outcomes very well into the financial conduct of the institution. Senior leadership incorporates planning and evaluation into the budget schedules for discussion when appropriate or needed. In fact, units substantiate their requests for fund allocation by considering the results of having implemented term goals and outcomes, how those expectations align or feed strategic initiatives institutionally, and the impact of those implementations across ${institution}.`,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
      ],
    }),
  ];
}
