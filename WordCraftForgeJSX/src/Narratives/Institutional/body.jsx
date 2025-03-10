import firstBlock from "./blocks/firstBlock";
import secondBlock from "./blocks/secondBlock";
import thirdBlock from "./blocks/thirdBlock";
import fourthBlock from "./blocks/fourthBlock";
import fifthBlock from "./blocks/fifthBlock";
import sixthBlock from "./blocks/sixthBlock";
import seventhBlock from "./blocks/seventhBlock";
import eighthBlock from "./blocks/eighthBlock";
import ninthBlock from "./blocks/ninthBlock";
import tenthBlock from "./blocks/tenthBlock";

export default function body(userData) {
  let blockOne = firstBlock(userData);
  let blockTwo = secondBlock(userData);
  let blockThree = thirdBlock(userData);
  let blockFour = fourthBlock(userData);
  let blockFive = fifthBlock(userData);
  let blockSix = sixthBlock(userData);
  let blockSeven = seventhBlock(userData);
  let blockEight = eighthBlock(userData);
  let blockNine = ninthBlock(userData);
  let blockTen = tenthBlock(userData);

  return [

    [...blockOne],
    [...blockTwo],
    [...blockThree],
    [...blockFour],
    [...blockFive],
    [...blockSix],
    [...blockSeven],
    [...blockEight],
    [...blockNine],
    [...blockTen],
   
  ];
}
