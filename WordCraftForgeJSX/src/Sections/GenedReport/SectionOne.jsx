import plainText from "../../Parts/plainText";
import {GenedTable}  from "../../Tables/GenEdReport";

// Administrative Goals
export const SectionOne = (userData) => {
  // let firstSection
  let result = GenedTable(userData,"G");
  console.log("Result" , result);

  let newLine = plainText("",false,18);
  let n = 1;  
  const tables = result.reduce((list, elem, i) => {
  list.push(elem);
  if((i+1) % n === 0) list.push(newLine);
  return list;
}, []);

   return tables;
}
