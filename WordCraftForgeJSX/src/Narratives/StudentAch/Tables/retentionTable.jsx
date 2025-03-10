import { Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../../../Parts/plainText";




const retentionTable = (results) => {
    

let row1 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText("Retention Type:", true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "80%", type: "PERCENTAGE" },
      children: [
        plainText(
          `Combined Semester Sequence`,
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
      children: [plainText(`Fall-to-Spring`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.fallToSpring.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.fallToSpring.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.fallToSpring.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.fallToSpring.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.fallToSpring.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.fallToSpring.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.fallToSpring.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.fallToSpring.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.fallToSpring.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.fallToSpring.percent, true, 18)],
      //
    }),

  ],
});


let row6 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Spring-to-Summer`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.springToSummer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.springToSummer.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.springToSummer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.springToSummer.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.springToSummer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.springToSummer.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.springToSummer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.springToSummer.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.springToSummer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.springToSummer.percent, true, 18)],
      //
    }),

  ],
});


let row7 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Summer-to-Fall`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.summerToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.summerToFall.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.summerToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.summerToFall.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.summerToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.summerToFall.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.summerToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.summerToFall.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.summerToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.summerToFall.percent, true, 18)],
      //
    }),

  ],
});
let row8 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Fall-to-Fall`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.fallToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.fallToFall.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.fallToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.fallToFall.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.fallToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.fallToFall.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.fallToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.fallToFall.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.fallToFall.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.fallToFall.percent, true, 18)],
      //
    }),

  ],
});

  return new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, row2, row3, row4, row5,row6,row7, row8],
  });
};

export default retentionTable;
