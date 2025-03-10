import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

export default function eighthBlock(userData) {

  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES PLANNING AND EVALUATION AS MISSION-DRIVEN PROCESSES`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution}’s mission statement is the driving force in all planning and evaluation efforts at the institution. In fact, this mission is reviewed periodically to reflect growth and development. Prior to reviewing it, the mission is discussed extensively in various affinity groups such as the faculty 
      senate, student senate, staff senate, and other stakeholders. All identified stakeholders complete surveys and participate in focus groups as opportunities to voice their opinions and provide formative assessment to the reviewing process`,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution}’s operates within its mission statement to meet the goals and objectives established in the strategic plan. This approach ensures total compliance with institutional expectations and evidence ${institution}’s ability to abide by current practices in higher education planning and evaluation. On the other hand, the institution seeks to document the close alignment between the mission statement and the reviews conducted on all assessment initiatives to identify areas for improvement.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Faculty members and staff serve as monitors of the alignment of the mission statement with all planning and evaluation activities. Through their participation in assessment-related councils, faculty and staff act as peer reviewers of all assessment reports. They use an institutionally adopted rubric to identify the strengths and weaknesses of the reports as well as the alignment with the mission statement of the institution and that of the reporting unit.`,
      false,
      22
    ),
    newLine,
  ];
}
