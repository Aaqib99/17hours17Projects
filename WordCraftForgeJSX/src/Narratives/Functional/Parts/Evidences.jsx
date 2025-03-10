import indentText from "../../../Parts/indentText";
import plainText from "../../../Parts/plainText";
import textItem from "../../../Parts/textItem";

const Evidences = (userData, type) => {
    let goals = type ===  "F" ? userData.adminGoals : userData.learningGoals;
    let evidences = [];
    goals.map((entry) => {
      entry.outcomes.map((outcome) => {
        let temp =  [

        indentText("Direct Evidence", true, 22),
        outcome.directMeasureOne !== "" ?
          textItem(0, `${outcome.directMeasureOne}`, false, 22) : plainText(``, false, 22),
        outcome.directMeasureTwo !== "" ?
          textItem(0, `${outcome.directMeasureTwo}`, false, 22) : plainText(``, false, 22),
        outcome.directMeasureThree !== "" ?
          textItem(0, `${outcome.directMeasureThree}`, false, 22) : plainText(``, false, 22),
    ];
    evidences.push(...temp);
      })
    })
    return evidences;
}

export const strategies = (userData) => {
    let goals = userData.learningGoals;
    let strategies = [];
    goals.map((entry) => {
      entry.outcomes.map((outcome) => {
        let temp =  [
          plainText(`${outcome.improveOne}`, false,22) ,
          plainText(`${outcome.improveTwo}`, false,22) ,
          plainText(`${outcome.improveThree}`, false,22) ,
      ]
        strategies.push(...temp);
      })
    })
    return strategies;
}

export const indirectEvidences = (userData) => {
    let goals = userData.learningGoals;
    let indirectEvidences = [];
    goals.map((entry) => {
      entry.outcomes.map((outcome) => {
        let temp =  [
          plainText(`${outcome.indirectMeasureOne}`, false,22) ,
          plainText(`${outcome.indirectMeasureTwo}`, false,22) ,
          plainText(`${outcome.indirectMeasureThree}`, false,22) ,
      ]
      indirectEvidences.push(...temp);
      })
    })
    return indirectEvidences;
}

export default Evidences