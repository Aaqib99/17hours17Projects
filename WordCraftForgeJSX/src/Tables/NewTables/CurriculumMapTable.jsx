import { Table, TableRow, TableCell } from "docx";
import plainText from "../../Parts/plainText";
import reportPart from "./Parts/reporter";

 const CurriculumMapTable = (userData, type) => {

  return new Table({
    width: {
      size: "100%",
      type: "PERCENTAGE",
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "10%", type: "PERCENTAGE" },
            children: [plainText("Academic Status", true, 22)],
          }),
          new TableCell({
            width: { size: "10%", type: "PERCENTAGE" },
            children : [plainText("Courses Reported", true, 22)]
          }),
          new TableCell({
            width: { size: "10%", type: "PERCENTAGE" },
            children: [plainText("Reporting Period", true, 22)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [plainText(`Learning Goal 1: Goal Label 1`, true, 22) , plainText(`goal statement`, false,22)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [plainText("Reporting Period", true, 22)],
          }),
        ],
      }),
     
    ],
  });
};


export default CurriculumMapTable;

