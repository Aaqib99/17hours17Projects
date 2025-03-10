import plainText from "../../../Parts/plainText";

const Courses = (userData) => {
  let data = [];
  console.log(userData)
  userData.learningGoals.map((goal) => {
    goal.outcomes.map((outcome) => {
      outcome.courses.map((course) => {
        let temp = plainText(
          `For course ${course.code} ${course.name}, results indicated that ${course.atOrAbove} students scored at or above the threshold thus evidencing ${course.strengths}. ${course.below} students scored below the threshold thus evidencing ${course.weakness}.`,
          false,
          22
        );
        data.push(temp);
      });
    });
});
return data;

};

// export const CompetencyCourses = (userData) => {
//   let data = [];
//   console.log(userData)
//   userData.competenciesList.map((comp) => {
//     comp.courses.map((courseItem ,index) => {
//         let temp =[ 
//           plainText(
//           ``,
//           false,
//           22
//         )]

//         data.push(...temp);
//     });
// });
// return data;

// };



export default Courses;
