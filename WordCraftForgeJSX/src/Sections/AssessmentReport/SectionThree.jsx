import plainText from "../../Parts/plainText";
import { LearningTable } from "../../Tables/LearningTable";

// Administrative Goals
export const SectionThree = (userData) => {

  let result = LearningTable(userData);
  console.log("Learning tables", result);

  let newLine = plainText("",false,18);
  let n = 1;  
  const tables = result.reduce((list, elem, i) => {
  list.push(elem);
  if((i+1) % n === 0) list.push(newLine);
  return list;
}, []);
  console.log("All table Learning" , tables)
   return tables;
}
