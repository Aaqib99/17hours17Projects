import plainText from "../../../Parts/plainText";
import HorizontalRule from "../../../Parts/HorizontalRule";
import indentText from "../../../Parts/indentText";
import Institution from "./Institution";
import textItem from "../../../Parts/textItem";
const StrategicAlignment = (
  outcome,
  type,
  index,
  outcomeIndex,
  entry,
  userData
) => {
  let newLine = plainText("", false, 22);

  if (outcome.printAlignment === "0") {
    return [plainText(``, false, 22)];
  } else {
    return [
      HorizontalRule(),
      indentText(
        `Strategic Alignment ${index + 1}.${outcomeIndex + 1}: ${
          entry.label
        } – ${outcome.outcomeLabel}`,
        true,
        22
      ),
      indentText(
        `The ${userData.reportingUnit.office} aligns the outcome with the following key priorities: `,
        false,
        22
      ),
      textItem(
        1,
        `${userData.reportingUnit.institution}'s Strategic Plan: `,
        true,
        22
      ),
      // looping starts here
      ...Institution(outcome.institution),
      textItem(
        1,
        `${userData.reportingUnit.division}'s Strategic Plan: `,
        true,
        22
      ),
      ...Institution(outcome.division),
      textItem(
        1,
        `${userData.reportingUnit.college}'s Strategic Plan: `,
        true,
        22
      ),
      ...Institution(outcome.college),
      textItem(
        1,
        `${userData.reportingUnit.office}'s Strategic Plan: `,
        true,
        22
      ),
      ...Institution(outcome.program),
      HorizontalRule(),
    ];
  }
};

export default StrategicAlignment;
