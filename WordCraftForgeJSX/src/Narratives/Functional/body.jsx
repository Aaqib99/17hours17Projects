import { TableCell, TableRow } from "docx";
import firstBlock from "./blocks/firstBlock";
import secondBlock from "./blocks/secondBlock";
import thirdBlock from "./blocks/thirdBlock";
import fourthBlock from "./blocks/fourthBlock";
import fifthBlock from "./blocks/fifthBlock";
import sixthBlock from "./blocks/sixthBlock";
import seventhBlock from "./blocks/seventhBlock";
import eighthBlock from "./blocks/eighthBlock";
import plainText from "../../Parts/plainText";

export default function body(userData) {
  let blockOne = firstBlock(userData);
  let blockTwo = secondBlock(userData);
  let blockThree = thirdBlock(userData);
  let blockFour = fourthBlock(userData);
  let blockFive = fifthBlock(userData);
  let blockSix = sixthBlock(userData);
  let blockSeven = seventhBlock(userData);
  let blockEight = eighthBlock(userData);

  // return [
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockOne],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockTwo],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockThree],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockFour],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockFive],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockSix],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockSeven],
  //       }),
  //     ],
  //   }),
  //   new TableRow({
  //     children: [
  //       new TableCell({
  //         width: { size: "100%", type: "PERCENTAGE" },
  //         children: [...blockEight],
  //       }),
  //     ],
  //   }),
  // ];




  return [
    [...blockOne],
    [...blockTwo],
    [...blockThree],
    [...blockFour],
    [...blockFive],
    [...blockSix],
    [...blockSeven],
    [...blockEight]
   
  ];
}
