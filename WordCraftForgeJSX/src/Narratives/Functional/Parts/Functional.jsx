// import findUpcomingYear from "../../../HelperFunctions/findUpcomingYear";
import plainText from "../../../Parts/plainText";

export const Functional = (userData , type) => {
 
  let allComponents = [];
//   let upcomingYear = findUpcomingYear(userData.reportingUnit.reportingYear);
  let typeName = type === "F" ? "Functional" : "Learning"

  let goals;
  if (type === "F") {
    goals = userData.adminGoals
  } else {
    goals = userData.learningGoals
  }

  goals.map((entry, index) => {
    entry.outcomes.map((outcome, outcomeIndex) => {
      
      let temp = [
        plainText("", false, 18),
        plainText(
          `The ${userData.reportingUnit.office} will be able to ${entry.goalStatement}.`,
          false,
          22
        ),
        plainText("", false, 20),
        plainText(
          `The ${userData.reportingUnit.office} will be able to ${outcome.outcomeStatement}.`,
          false,
          22
        ),
      ];
      allComponents.push(...temp);
    });

  });
  console.log(allComponents);
  return allComponents;
};
