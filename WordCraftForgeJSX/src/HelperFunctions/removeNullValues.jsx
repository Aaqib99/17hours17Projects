export default function removeNullValues(userData) {

  let data = JSON.parse(JSON.stringify(userData)); 
  let cleanOutcomes = [];
  let cleanCourses = [];

  for (let entryName in data) {
    // Check if the current element is a JSON object
    let entry = data[entryName];

    if (typeof entry === "object" && !Array.isArray(entry)) {
      for (let key in entry) {
        if (entry.hasOwnProperty(key)) {
          const value = entry[key];
          if (
            value === "NA" ||
            value === "N/A" ||
            value === "n/a" ||
            value === "na" ||
            value === "Null" ||
            value === "Nill" ||
            value === "NILL" ||
            value === "Na" ||
            value === "NULL" ||
            value === "None" ||
            value === "none" ||
            value === "null" ||
            value === "nill" ||
            value === "Not Applicate" ||
            value === "not applicable"
          ) {
            entry[key] = "";
          }
        }
      }
    }

    // Check if the current element is an array, array has json elements
    if (Array.isArray(entry)) {
      for (let j = 0; j < entry.length; j++) {
        let arrayObj = entry[j];
        // clean json
        for (let key in arrayObj) {
          // looping through a goal
          if (arrayObj.hasOwnProperty(key)) {
            const value = arrayObj[key]; // goal json

            // outcomes array inside goal
            if (Array.isArray(value)) {
              value.forEach((elem) => {
                // looping through each outcome
                for (let keyName in elem) {
                  let keyValue = elem[keyName];

                  if (userData.learningGoals) {
                    if (Array.isArray(keyValue)) {
                      // looping through courses
                      keyValue.forEach((courseObj) => {
                        // looping through each course
                        for (let courseField in courseObj) {
                          let courseValue = courseObj[courseField];
                          if (
                            courseValue === "NA" ||
                            courseValue === "N/A" ||
                            courseValue === "n/a" ||
                            courseValue === "na" ||
                            courseValue === "Null" ||
                            courseValue === "Nill" ||
                            courseValue === "NILL" ||
                            courseValue === "NULL" ||
                            courseValue === "None" ||
                            courseValue === "none" ||
                            courseValue === "null" ||
                            courseValue === "nill" ||
                            courseValue === "Not Applicate" ||
                            courseValue === "not applicable"
                          ) {
                            courseObj[courseField] = "";
                          }
                        }
                        cleanCourses.push(courseObj);
                      });
                      elem[keyName] = cleanCourses;
                    }

                  }
                  if (
                    keyValue === "NA" ||
                    keyValue === "N/A" ||
                    keyValue === "n/a" ||
                    keyValue === "na" ||
                    keyValue === "Null" ||
                    keyValue === "Nill" ||
                    keyValue === "NILL" ||
                    keyValue === "NULL" ||
                    keyValue === "none" ||
                    keyValue === "None" ||
                    keyValue === "null" ||
                    keyValue === "nill" ||
                    keyValue === "Not Applicate" ||
                    keyValue === "not applicable"
                  ) {
                    elem[keyName] = "";
                  }
                }
                cleanOutcomes.push(elem);
              });
              value[key] = cleanOutcomes;
            } else {
              if (
                value === "NA" ||
                value === "N/A" ||
                value === "n/a" ||
                value === "na" ||
                value === "Null" ||
                value === "Nill" ||
                value === "NILL" ||
                value === "NULL" ||
                value === "null" ||
                value === "none" ||
                value === "None" ||
                value === "nill" ||
                value === "Not Applicate" ||
                value === "not applicable"
              ) {
                arrayObj[key] = "";
              }
            }
          }
        }
      }
    }
  }
  return data;
}
