import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

export default function seventhBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES PLANNING AND EVALUATION AS A RESEARCH-BASED PROCESS`,
      true,
      22
    ),
    newLine,
    plainText(
      `Planning and evaluation at ${institution} is a research-based process on two fronts. All reporting units follow both institutionally adopted requirements and best practices in the profession or operational fields. While all institutional requirements call for the implementation of senior leadership recommendations, best practices in the profession strengthen ${institution}’s positioning outside campus. ${institution}’s research-based approach implies a view of the internal implementation longitudinally to evidence its systematicity and comprehensiveness. In doing so, the institution relies on quantitative and qualitative data collection tools to identify continuously emerging themes, key priorities, enrollment trends, satisfaction levels, and engagement opportunities.`,
      false,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, planning and evaluation are not episodic, sporadic, or isolated processes. On the contrary, planning and evaluation are evidence-based activities to affirm substantively continuous progress toward improvement and institutional growth. The essence of practicing planning and evaluation as a research-based process is to build channels of communication with off-campus academia that respond to on-campus effective practices and proposed changes.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Like professional researchers, ${institution}’s seeks to identify how operational procedures, implemented activities, and learning experiences taking place internally increase its preparation for change, not to generalize results outside the institution, but to explain internal contexts toward appropriate improvement opportunities for specific units.`,
      false,
      22
    ),
    newLine,
    plainText(
      `The idea is to utilize proven research principles to engage in broad consultation practices with external constituents and to discover the impact of student learning experiences socially and professionally. Another benefit of broad consultations with external stakeholders is to gather different perspectives on effectiveness issues drawn from other institutions and applicable to ${institution}’s contexts. Additionally, this research-based approach generates valid and reliable information similar to that across other administrative units, academic programs, and student affairs services at ${institution}.
      `,
      false,
      22
    ),
    newLine,
    new Paragraph({
        children: [
          new TextRun({
            text: `Policy `,
            bold: false,
            font: "Calibri",
            size: 22,
          }),
          new TextRun({
            text: `ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE `,
            bold: false,
            font: "Calibri",
            size: 22,
            shading: {
                type: ShadingType.SOLID,
                color: "#30D5C8",
              },
          }),
          new TextRun({
            text: `incorporates the feedback from external stakeholders onto institutional practices. For the design of the current strategic plan, ${institution} consulted with alumni, community members, employers, and other individuals identified by the institution, as needed, for their opinions during focus groups and interviews. This approach is evidence of ${institution}'s treatment of those individuals as key stakeholders of what the institution produces, its commitment to improving continuously based on off-campus data and information, and its social responsibilities to respond to the needs of the community as a recipient of that product. `,
            bold: false,
            font: "Calibri",
            size: 22,
          })
        ],
      }),
    newLine,

    new Paragraph({
      children: [
        new TextRun({
          text: `Policy `,
          bold: false,
          font: "Calibri",
          size: 22,
        }),
        new TextRun({
          text: `ADD THE INSTITUTIONAL EFFECTIVENESS POLICY NUMBER HERE `,
          bold: false,
          font: "Calibri",
          size: 22,
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
        new TextRun({
          text: `also emphasizes continuous assessment at all institutional levels to feedback those results into newly adjusted and improved learning experiences for all students and campus operating process. The policy sponsors a heavy reliance on data analyses and presentations for informational purposes internally and externally.`,
          bold: false,
          font: "Calibri",
          size: 22,
        })
      ],
    }),
  ];
}
