import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function tenthBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES INTERNAL AND EXTERNAL STAKEHOLDERS’ INVOLVEMENT IN INSTITUTIONAL EFFECTIVENESS`,
      true,
      22
    ),
    newLine,
    plainText(
      `In the development of any strategic plans at ${institution}, the committee in charge always includes a manageable number of members with different backgrounds and levels of involvement with the institution. In fact, they receive their appointments to these committees via a formal invitation or charter. In fact, they come from a variety of areas encompassing academia, community (e.g., local, non-local, etc.), employers, employees (e.g., current, former, etc.), friends, organizations (e.g., Chairs’ Council, Dean’s Council, Faculty Senate, Student Senate, etc.), parents, students (e.g., current, former, etc.), and other individuals who directly, indirectly, internally, or externally can contribute with comments, ideas, and other contributions. Through these compositions, strategic planning committees ensure a diversity of ideas and a plurality of voices.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Committee chairs design a plan of work that reflects best practices in strategic planning in alignment with requirements in the subject matter area of the profession. While some committees lean toward environmental scanning strategies to get a glimpse of the areas under planning, other committees prefer a PEST approach. PEST reflects the various political, economic, social, and technological factors affecting both the interactions within the areas subject to the strategic planning process and the strategic planning process per se. Other committees use the traditional SWOT analysis to adopt a working methodology to complete the expected strategic plan. That is, ${institution} allows the utilization of any strategic management framework that reflects representatively the modus operandi of the area under planning.`,
      false,
      22
    ),
    newLine,


    plainText(
      `Steering committees follow the adopted strategic planning methodology and any legal protocol to collect information and engage stakeholders in strategic planning activities and deliberations. A sample list of research-based strategies followed by any steering committees includes the following:`,
      false,
      22
    ),
    newLine,
      textItem(0,`Closed- and open-ended questionnaires`, false,22),
      textItem(0,`Focus groups`, false,22),
      textItem(0,`General and targeted interviews`, false,22),
      textItem(0,`General and targeted surveys`, false,22),
      textItem(0,`Historical documentation review and analyses`, false,22),
      textItem(0,`Third-party comments`, false,22),
      textItem(0,`Town halls`, false,22),
      textItem(0,`Webinars`, false,22),
      textItem(0,`Others`, false,22),

      newLine,

      new Paragraph({
        children: [
          new TextRun({
            text: `The steering committees apply appropriate quantitative (i.e., statistics), qualitative (e.g., content and narrative analyses), and mixed-method approaches (i.e., a combination of quantitative and qualitative methodologies) along with computer applications for data visualization and presentation to understand data trends and obtain emerging that explicate the above-mentioned PEST factors. The final steps in the completion of strategic plans involve additional follow-ups with stakeholders, consultations with senior leadership in charge of the area under planning, and approval of the plan. This last stage requires publication of the plan, elaboration of the working plan version to monitor the implementation of goals and objectives, and approval of a tentative calendar to review or refine both the working and the final plans. Figure `,

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
            text: `illustrates the typical steps to involve internal and external stakeholders in the planning and evaluation process at ${institution}.`,
            bold: false,
            font: "Calibri",
            size: 22,
          })
        ],
      }),
      newLine,
      coloredText(`Figure X`, false,22),
      coloredText(`ADD THE TITLE OF THE FIGURE HERE`, false,22),
      coloredText(`ADD THE ACTUAL FIGURE HERE`, false,22),
      newLine,
      plainText(`${institution} values the inputs of all stakeholders as a path to continuous development, growth, and opportunities for our communities, faculty, staff, and students.`, false, 22),
      newLine,

  ];
}
