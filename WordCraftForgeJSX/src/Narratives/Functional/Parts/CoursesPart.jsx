
export default function CoursesPart (courses) {
    let arr = []
   
    courses.map(item => {

        let temp =  new Paragraph({
            children : [
                new TextRun({
                    text : `During the ${userData.reportingUnit.reportingYear} reporting period, the overall student performance of ${item.outcomes[0].courses[0].totalStudents} in this competency was ${item.performance} since student performance ${item.performResult}. In consequence, these students ${item.thresholdMet} the general education outcome threshold. To improve student performance considering the entire data, the institution decided to ${item.threeEffortsOne}. The disaggregated data was considered to establish the following improvement efforts ${item.threeEffortsTwo}. Figure`,
                    bold : false,
                    font : "Calibri",
                    size : 22
                }),
                new TextRun({
                    text : ` X, ADD THE TITLE OF THE FIGURE HERE, `,
                    bold : false,
                    font : "Calibri",
                    size : 22,
                    shading: {
                        type: ShadingType.SOLID,
                        color: "#30D5C8",
                    },
                }),
                new TextRun({
                    text : `illustrates student performance in this competency.`,
                    bold : false,
                    font : "Calibri",
                    size : 22
                }),
            ]
        })
    })


}

