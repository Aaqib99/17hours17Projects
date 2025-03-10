import boldAndUnBoldText from "../../../Parts/boldAndUnBoldtext";

const Institution = (data) => {
  let response = [];
  data.forEach((elem) => {
    let temp = [
      boldAndUnBoldText(
        2,
        `Goal ${elem.goalNumber}: `,
        `${elem.goalStatement}`,
        22
      ),
      boldAndUnBoldText(
        3,
        `Objective ${elem.objNumber}: `,
        `${elem.objStatement}`,
        22
      ),
    ];
    response.push(...temp);
  });

  return response;
};

export default Institution;
