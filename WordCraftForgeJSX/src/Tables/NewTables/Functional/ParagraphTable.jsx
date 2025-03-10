import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";
import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import HorizontalRule from "../../../Parts/HorizontalRule";

export const ParagraphTable = (userData, type) => {

  console.log("Data in para component", userData);
  let newLine = plainText(``, false, 18);
  let emptyLine = plainText(``, false, 1);
  const reportingUnit = userData.reportingUnit.office;
  const reportingYear = userData.reportingUnit.reportingYear

  let allComponents = [];
  let upcomingYear = findUpcomingYear(reportingYear);
  console.log("Next year", upcomingYear, type);

  let goals = userData.adminGoals;
  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {

      let outcomeMet = outcome.outcomeMet === "1" ? 'meet' : 'did not meet'

      let temp = [
        plainText(
          `Division of ${userData.reportingUnit.division} `,
          true,
          23
        ),
        plainText(
          `Reporting Unit ${reportingYear}`,true,23
        ),
    
        plainText(`For the ${reportingYear} reporting period, the ${reportingUnit} implemented ${outcome.outcomeLabel}. The unit assessed this outcome with ${outcome.directMeasureOne} under the threshold of ${outcome.directMeasureOneTarget}. The implementation results indicated that ${reportingUnit} : `,
          false,
          24
        ),

        outcome.implementationResultOne !== "" ?
          textItem(0, `${outcome.implementationResultOne}`, false, 24): emptyLine,
        outcome.implementationResultTwo !== "" ?
          textItem(0, `${outcome.implementationResultTwo}`, false, 24): emptyLine,
        outcome.implementationResultThree !== "" ?
          textItem(0, `${outcome.implementationResultThree}`, false, 24): emptyLine,


          plainText(`The ${reportingUnit} used last year’ results to ${outcome.improveOne}.`, false,22),
          plainText(`The ${reportingUnit} ${outcomeMet} the outcome.`, false,22),
          newLine,

        HorizontalRule()
      ];
      allComponents.push(...temp);
    });
  });
  console.log(allComponents);
  return allComponents;
};
