import { Table, TableCell, TableRow, WidthType } from "docx";
import plainText from "../../../Parts/plainText";

let text = plainText(`asdsadad`, false, 22);


const jobStatusTable = (results) => {
    

let row1 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText("Placement Type: ", true, 18)],
      columnSpan: 2,
    }),
    new TableCell({
      width: { size: "80%", type: "PERCENTAGE" },
      children: [
        plainText(
          `Combined Job Placement Status`,
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
      children: [plainText(`Full-time Employed`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.fullTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.fullTime.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.fullTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.fullTime.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.fullTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.fullTime.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.fullTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.fullTime.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.fullTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.fullTime.percent, true, 18)],
      //
    }),

  ],
});


let row6 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Part-time Employed`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.partTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.partTime.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.partTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.partTime.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.partTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.partTime.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.partTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.partTime.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.partTime.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.partTime.percent, true, 18)],
      //
    }),

  ],
});


let row7 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Graduate Studies`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.gradStudies.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.gradStudies.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.gradStudies.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.gradStudies.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.gradStudies.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.gradStudies.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.gradStudies.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.gradStudies.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.gradStudies.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.gradStudies.percent, true, 18)],
      //
    }),

  ],
});


let row8 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Internship`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.internship.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.internship.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.internship.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.internship.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.internship.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.internship.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.internship.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.internship.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.internship.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.internship.percent, true, 18)],
      //
    }),

  ],
});



let row9 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Still Applying`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.stillApplying.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.stillApplying.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.stillApplying.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.stillApplying.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.stillApplying.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.stillApplying.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.stillApplying.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.stillApplying.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.stillApplying.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.stillApplying.percent, true, 18)],
      //
    }),

  ],
});


let row10 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Not Employed`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.notEmployed.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.notEmployed.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.notEmployed.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.notEmployed.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.notEmployed.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.notEmployed.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.notEmployed.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.notEmployed.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.notEmployed.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.notEmployed.percent, true, 18)],
      //
    }),

  ],
});

let row11 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText(`Did not answer`, true, 18)],
      columnSpan: 2,
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.one.didNotAnswer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.one.didNotAnswer.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.two.didNotAnswer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.two.didNotAnswer.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.three.didNotAnswer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.three.didNotAnswer.percent, true, 18)],
      //
    }),

    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.four.didNotAnswer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.four.didNotAnswer.percent, true, 18)],
      //
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children: [plainText(results.five.didNotAnswer.num, true, 18)],
      // columnSpan : 0.5
    }),
    new TableCell({
      width: { size: "8%", type: "PERCENTAGE" },
      children:  [plainText(results.five.didNotAnswer.percent, true, 18)],
      //
    }),

  ],
});
let row12 = new TableRow({
  children: [
    new TableCell({
      width: { size: "16%", type: "PERCENTAGE" },
      children: [plainText('Other Status', true, 18)],
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
    rows: [row1, row2, row3, row4, row5,row6,row7,row8,row9,row10,row11,row12],
  });
};

export default jobStatusTable;
