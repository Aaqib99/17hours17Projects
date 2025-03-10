import { Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../../../Parts/plainText";

let text = plainText(`asdsadad`, false, 22);


const enrollTable = (results) => {
    

let row1 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText("Enrollment Type", true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "80%", type: "PERCENTAGE" },
      children: [
        plainText(
          `Combined Academic Level (i.e., undergraduate, graduate, etc.)`,
          true,
          18
        ),
      ],
      columnSpan: 10,
    }),
  ],
});

let row2 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Cohort Year`, true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.one.cohortYear)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children:[plainText(results.two.cohortYear)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.three.cohortYear)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.four.cohortYear)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.five.cohortYear)],
      columnSpan: 2,
    }),
  ],
});
let row3 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Cohort Total`, true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.one.cohortTotal)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children:[plainText(results.two.cohortTotal)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.three.cohortTotal)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.four.cohortTotal)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(results.five.cohortTotal)],
      columnSpan: 2,
    }),
  ],
});



let row4 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Total and Percentage`, true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(`N`, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(`%`, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(`N`, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(`%`, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(`N`, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(`%`, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(`N`, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(`%`, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(`N`, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(`%`, true, 18)],
      //
    }),

   
    
  ],
});


let row5 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Undergraduate 1`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.undergradOne.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.undergradOne.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.undergradOne.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.undergradOne.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.undergradOne.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.undergradOne.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.undergradOne.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.undergradOne.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.undergradOne.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.undergradOne.percent, true, 18)],
      //
    }),

  ],
});


let row6 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Undergraduate 2`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.undergradTwo.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.undergradTwo.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.undergradTwo.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.undergradTwo.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.undergradTwo.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.undergradTwo.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.undergradTwo.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.undergradTwo.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.undergradTwo.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.undergradTwo.percent, true, 18)],
      //
    }),

  ],
});


let row7 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Other`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.other.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.other.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.other.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.other.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.other.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.other.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.other.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.other.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.other.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.other.percent, true, 18)],
      //
    }),

  ],
});

  return new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, row2, row3, row4, row5,row6,row7],
  });
};

export default enrollTable;
