import { Table, WidthType, TableRow, TableCell } from "docx";
import body from "./body";
import shuffleArray from "../../Parts/shuffleDoc";
import plainText from "../../Parts/plainText";

export default function table(userData) {

  let rows = body(userData);
  let shuffledRows = shuffleArray(rows);
  let res = []

shuffledRows.map(row => {
  res.push(...row);
})
  return res;
}
