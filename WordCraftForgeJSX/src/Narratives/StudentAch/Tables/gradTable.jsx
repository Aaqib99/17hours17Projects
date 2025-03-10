import { Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../../../Parts/plainText";

let text = plainText(`asdsadad`, false, 22);


const gradTable = (results) => {
    console.log("Results in grad table", results)

let row1 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText("Graduation Type", true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "80%", type: "PERCENTAGE" },
      children: [
        plainText(
          `Combined and Graduation Type (4-year)`,
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
      children: [plainText(`African American`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.africanAmerican.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.africanAmerican.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.africanAmerican.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.africanAmerican.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.africanAmerican.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.africanAmerican.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.africanAmerican.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.africanAmerican.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.africanAmerican.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.africanAmerican.percent, true, 18)],
      //
    }),

  ],
});


let row6 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`American Indian /Alaska Native
      `, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.americanIndia.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.americanIndia.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.americanIndia.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.americanIndia.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.americanIndia.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.americanIndia.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.americanIndia.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.americanIndia.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.americanIndia.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.americanIndia.percent, true, 18)],
      //
    }),

  ],
});


let row7 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Asian`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.asian.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.asian.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.asian.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.asian.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.asian.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.asian.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.asian.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.asian.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.asian.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.asian.percent, true, 18)],
      //
    }),

  ],
});


let row8 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Hispanic`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.hispanic.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.hispanic.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.hispanic.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.hispanic.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.hispanic.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.hispanic.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.hispanic.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.hispanic.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.hispanic.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.hispanic.percent, true, 18)],
      //
    }),

  ],
});



let row9 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Native Hawaiian / Other Pacific Islander`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.hawaiin.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.hawaiin.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.hawaiin.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.hawaiin.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.hawaiin.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.hawaiin.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.hawaiin.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.hawaiin.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.hawaiin.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.hawaiin.percent, true, 18)],
      //
    }),

  ],
});


let row10 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`White`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.white.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.white.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.white.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.white.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.white.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.white.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.white.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.white.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.white.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.white.percent, true, 18)],
      //
    }),

  ],
});

let row11 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Two or More Races`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.twoOrMore.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.twoOrMore.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.twoOrMore.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.twoOrMore.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.twoOrMore.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.twoOrMore.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.twoOrMore.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.twoOrMore.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.twoOrMore.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.twoOrMore.percent, true, 18)],
      //
    }),

  ],
});
let row12 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText('Race and Ethnicity unknown', true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.unknown.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.unknown.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.unknown.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.unknown.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.unknown.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.unknown.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.unknown.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.unknown.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.unknown.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.unknown.percent, true, 18)],
      //
    }),

  ],
});



  return new Table({
    width: {
      size: "100%",
      type: WidthType.PERCENTAGE,
    },
    rows: [row1, 
      row2, 
      row3, 
      row4, row5,row6,row7,row8,row9,row10,row12
    ],
  });
};

export default gradTable;
