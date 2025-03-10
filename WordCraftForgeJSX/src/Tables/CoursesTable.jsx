import textItem from "../Parts/textItem";

function CoursesTable(courses) {
  let array = [];
  console.log("Courses array" , courses);
  
  courses.forEach((course) => {
    let belowStudents = course.totalStudents - course.atOrAbove;

    let abovePercentage = (100 * course.atOrAbove) / course.totalStudents;
    let belowPercentage = (100 * belowStudents) / course.totalStudents;
    
    let data =  [
      textItem(
        0,
        `For ${course.code} ${course.number}: ${course.name}, results indicated that: `,
        false,
        18
      ),
      textItem(
        1,
        `Of the ${course.totalStudents} (100%) students`,
        false,
        18
      ),
      textItem(
        2,
        `${course.atOrAbove} (${abovePercentage.toFixed(0)}%) scored at or above the milestone. These students evidenced ${course.strengths}.`,
        false,
        18
      ),
      textItem(
        2,
        `${belowStudents} (${belowPercentage.toFixed(0)}%) scored below the milestone. These students evidenced ${course.weakness}.`,
        false,
        18
      )
    ]
    array.push(...data);
})
    return array;

  };

export default CoursesTable;
