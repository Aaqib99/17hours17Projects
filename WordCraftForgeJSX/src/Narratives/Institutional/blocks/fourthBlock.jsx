import { Paragraph, TextRun, ShadingType } from "docx";
import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

export default function fourthBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      ` ADD A HEADING THAT ILLUSTRATES GOALS AND OUTCOMES BEYOND TEACHING AND LEARNING`,
      true,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, setting goals and expected outcomes goes beyond teaching and learning. Like academic programs, selected administrative units and student affairs services submit goals and outcomes as part of the institutionally adopted planning and effectiveness process. Administrative units and student affairs services follow the same guidelines delineated for academic programs regarding the assessment plan and assessment reports in alignment with the missions of the institutions, the reporting units, and services.
      `,
      false,
      22
    ),
    newLine,
    newLine,
    plainText(
      `Equally, all designees receive training on how to complete the following:`,
      false,
      22
    ),
    newLine,
    textItem(0,` Goals aligned with best practices in the field and institutional expectations.`, false,22),
    textItem(0,`Outcomes aligned with best practices in the field and institutional expectations.
    `, false,22),
    textItem(0,` Direct and indirect evidence or methods to assess the outcomes.`, false,22),
    textItem(0,` Direct and indirect thresholds or levels of performance to ascertain the accomplishment of the outcomes.`, false,22),
    textItem(0,` Discussion of the obtained results from implementing the outcomes.`, false,22),
    textItem(0,` Listing of improvement strategies based on the obtained results.`, false,22),
        newLine,

        new Paragraph({
            children  :[
            new TextRun({
                text : `Unit heads and service directors submit yearly assessment reports for the adopted `,
                bold  : false,
                font : "Calibri",
                size : 22,
                }),
            new TextRun({
                text : `ADD THE NUMBER OF YEARS HERE, `,
                bold  : false,
                font : "Calibri",
                size : 22,
                shading: {
                    type: ShadingType.SOLID,
                    color: "#30D5C8",
                  }
                }),
            new TextRun({
                text : `-year assessment cycle. They adapt the goal and outcome schemes to evidence all logistical operations and aspects of their assigned responsibilities. For instance, the units within the Division of Development complete the yearly assessment reports which feed institutional reports as needed and appropriate. `,
                bold  : false,
                font : "Calibri",
                size : 22,
                }),
        ]}),
    newLine,
  ];
}
