import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";

export default function thirdBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE INSTITUTIONAL PLANNING AND EFFECTIVENESS AS A COMPREHENSIVE PROCESS`,
      true,
      22
    ),
    newLine,
    plainText(
      `As with any complex organization, ${institution} follows a very structured path to all strategic planning endeavors. It requires the correct deployment of key resources to obtain the maximum and most comprehensive information possible to ensure a fair representation of all constituents and areas within the institution. For instance, academic planning sessions include faculty and staff with expertise in academics. However, enrollment management, student affairs, and financial offices are also part of the working sessions. This reflects the diversity of the staff with the rich expertise and experience needed to design high-quality plans with viable effectiveness metrics.`,
      false,
      22
    ),
    newLine,
    newLine,
    plainText(
      `The institutional planning and effectiveness process also consists of a set of phases tailored to the needs of the units. While some units set those phases based on fiscal years, others do it based on academic years. Regardless of the chosen calendar, strategic planning sessions result from concerted efforts and staff availability in alignment with their already contracted responsibilities.`,
      false,
      22
    ),
    newLine,

    plainText(
      `This process solicits input and feedback through a variety of tools and exercises. In some cases, focus groups are most adequate, while surveys and targeted meetings are more viable. Working sessions respond to meeting requests that accommodate group members and reflect members’ preferences for face-to-face, online, or hybrid meetings.`,
      false,
      22
    ),
    newLine,

    plainText(
      `The final outputs of working sessions echo viewpoints and responses later triangulated to generate emerging themes. Additionally, they provide the clues for the prioritization of strategic principles, suggested goals, and proposed objectives, first, for discussion and secondly, for submission to the chain of approval in alignment with ${institution}'s mission statement and the presidential vision.`,
      false,
      22
    ),
    newLine,

    plainText(
      `What follows is an example of how the steering committees from two major divisions ensure a comprehensive and inclusive process during the design of their strategic plans.`,
      false,
      22
    ),
    newLine,

    coloredText(
      `ADD A BULLETED LIST OR CHART OF HOW TWO COMMITTEES COMPLETED THE STRATEGIC PLANS FOR THEIR AREAS. ENSURE A VAST REPRESENTATION OF STAKEHOLDERS.`,
      false,
      22
    ),
    newLine,
  ];
}
