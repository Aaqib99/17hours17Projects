import { Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../../../Parts/plainText";




const licensingTable = (results, rowNames) => {
    

let row1 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText("Licensing Type:", true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "80%", type: "PERCENTAGE" },
      children: [
        plainText(
          `Combined Licensing Examinations`,
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
      children: [plainText(rowNames.groupOneLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.one.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.one.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.one.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.one.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.one.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.one.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.one.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.one.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.one.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.one.percent, true, 18)],
      //
    }),

  ],
});


let row6 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupTwoLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.two.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.two.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.two.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.two.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.two.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.two.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.two.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.two.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.two.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.two.percent, true, 18)],
      //
    }),

  ],
});


let row7 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupThreeLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.three.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.three.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.three.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.three.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.three.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.three.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.three.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.three.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.three.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.three.percent, true, 18)],
      //
    }),

  ],
});


let row8 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupFourLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.four.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.four.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.four.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.four.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.four.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.four.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.four.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.four.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.four.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.four.percent, true, 18)],
      //
    }),

  ],
});


let row9 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupFiveLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.five.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.five.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.five.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.five.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.five.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.five.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.five.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.five.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.five.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.five.percent, true, 18)],
      //
    }),

  ],
});



let row10 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupSixLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.six.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.six.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.six.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.six.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.six.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.six.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.six.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.six.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.six.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.six.percent, true, 18)],
      //
    }),

  ],
});
let row11 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupSevenLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.seven.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.seven.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.seven.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.seven.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.seven.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.seven.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.seven.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.seven.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.seven.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.seven.percent, true, 18)],
      //
    }),

  ],
});
let row12 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(rowNames.groupEightLabel, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.eight.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.eight.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.eight.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.eight.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.eight.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.eight.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.eight.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.eight.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.eight.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.eight.percent, true, 18)],
      //
    }),

  ],
});













  return new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, row2, row3, row4, row5,row6,row7, row8, row9, row10 ,row11, row12],
  });
};

export default licensingTable;
