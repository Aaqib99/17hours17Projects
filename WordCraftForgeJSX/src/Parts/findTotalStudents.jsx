function sumArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function findTotalStudents(courses, type) {
  let data = [];

  courses.forEach((courseItem) => {
    let belowStudents = parseInt(courseItem.totalStudents) - parseInt(courseItem.atOrAbove)
    let intValue;

    if (type === "totalStudents") {
      intValue = parseInt(courseItem.totalStudents);
    }
    if (type === "atOrAbove") {
      intValue = parseInt(courseItem.atOrAbove);
    }
    if (type === "below") {
      intValue = belowStudents;
    }
    data.push(intValue);
  });

  const result = sumArrayElements(data);

  return result;
}

export default findTotalStudents;
