import plainText from "../../Parts/plainText";
import { FunctionalTable } from "../../Tables/FunctionalTable";

// Administrative Goals
export const SectionTwo = (userData) => {
  let result = FunctionalTable(userData);
  let newLine = plainText("", false, 18);
  let n = 1;
  const tables = result.reduce((list, elem, i) => {
    list.push(elem);
    if ((i + 1) % n === 0) list.push(newLine);
    return list;
  }, []);

  return tables
};
