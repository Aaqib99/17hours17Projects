import { Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../Parts/plainText";
import textItem from "../Parts/textItem";

export const GenedTable = (userData) => {
  console.log("Data in gened table", userData);
  let allTables = [];

  userData.map((competency, index) => {
    let label = plainText(competency.competencyLabel, true, 26);
    allTables.push(label);
    let statement = plainText(competency.competencyLabel, false, 24);
    allTables.push(statement);

    competency.courses.map((course) => {

      let temp = new Table({
        width: {
          size: "100%",
          type: WidthType.PERCENTAGE,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [plainText("Course Code", false, 24)],
              }),
              new TableCell({
                children: [plainText("Course Number", false, 24)],
              }),
              new TableCell({
                children: [plainText("Course Name", false, 24)],
              }),
              new TableCell({
                children: [
                  plainText(
                    "How did the student meet the competency statement?",
                    false,
                    24
                  ),
                ],
              }),
              new TableCell({
                children: [
                  plainText("How to improve next reporting term?", false, 24),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [plainText(course.code, false, 24)] }),
              new TableCell({
                children: [plainText(course.number, false, 24)],
              }),
              new TableCell({ children: [plainText(course.name, false, 24)] }),
              new TableCell({
                children: [
                  textItem(0,course.learningOne, false, 24),
                  textItem(0,course.learningTwo, false, 24),
                  textItem(0,course.learningThree, false, 24),
                ],
              }),
              new TableCell({
                children: [plainText(course.howToImprove, false, 24)],
              }),
            ],
          }),
        ],
      });
      let newLine = new Paragraph("");
      allTables.push(newLine);
      allTables.push(temp);
    });
  });
  return allTables;
};
