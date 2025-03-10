import { Table, TableCell, TableRow, WidthType } from "docx";
import textItem from "../../../Parts/textItem";
import plainText from "../../../Parts/plainText";
import coloredText from "../../../Parts/coloredText";
import coloredTextItem from "../../../Parts/coloredTextItem";

let newLine = plainText("", true, 22);


let table = new Table({
  width: {
    size: "100%",
    type: WidthType.PERCENTAGE,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Division", true, 22)],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Administrative Unit", true, 22)],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Accreditation Organization", true, 22)],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Date of Last Review", true, 22)],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Division of Academic Affairs")],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Office of AD Student Affairs")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("UN")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: ["19 May 2021"],
        })
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Division of Innovation")],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Office of Dean")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("IMF")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: ["22 May 2021"],
        })
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Division of Engineering")],
        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("Office of the HOD")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: [plainText("NASA")],

        }),
        new TableCell({
          width: { size: "25%", type: "PERCENTAGE" },
          children: ["25 May 2021"],
        })
      ],
    }),
  ],
});

export default function eighthBlock(userData) {
  let institution = userData.reportingUnit.institution;

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES THE SAMPLING METHODOLOGY.`,
      true,
      22
    ),
    newLine,
    plainText(
      `This portion of the narrative explains the methodology used by the ${institution} to draw a representative sample of the functional assessment reports that exemplify the appropriate quality of the assessment process standardized across the institution.`,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution}’s administrative profile includes a universe of ADD TOTAL NUMBER OF ADMINISTRATIVE UNITS ONLY administrative units housed at ADD TOTAL NUMBER OF DIVISIONS divisions.`,
      false,
      22
    ),
    newLine,
    plainText(
      `For this section of the narrative, ${institution} defines sampling as the systematic process applied to select a random and representative number of functional assessment reports (i.e., sample) that validly and reliably reflect the characteristics of the standardized assessment process observed in all submitted functional assessment reports (i.e., population).`,
      false,
      22
    ),
    newLine,
    plainText(
      `${institution} favors a judgmental sampling methodology that yields a sample size without drawing any inferences on the quality of the functional assessment reports. With this sampling methodology, ${institution} ensures that the assessment process:`,
      false,
      22
    ),
     newLine,
    textItem(0,`is successfully in place.
    `,false,22),
    textItem(0,`is supported with evidentiary documentation.`,false,22),
    textItem(0,`is regularly monitored for internal compliance with institutionally adopted guidelines.`,false,22),
    textItem(0,`reflects best practices in both the assessment fields and professional areas.`,false,22),

    newLine,
    plainText(`Although there are various statistical approaches to select the appropriate sample size, ${institution} adopted the following method to determine it according to its mission, values, and situational context:`,
      false,
      22
    ),
    newLine,
    coloredTextItem(0,` THE USER CAN MENTION THE DIVISIONS AND 30% OF THE DEPARTMENTS UNDER EACH DIVISION.
    `,false,22),
    coloredTextItem(0,`THE USER NEEDS TO ENSURE THAT THE NUMBER OF DEPARTMENTS IS REPRESENTATIVE WITHIN EACH DIVISION. `,false,22),
    coloredTextItem(0,` THE USER NEEDS TO EXPLAIN THE VARIETY OF PROFESSIONAL OR DISCIPLINARY AREAS REPRESENTED.`,false,22),
    coloredTextItem(0,` THE USER CAN EXPLAIN THE VARIETY OF PROGRAMS, SERVICES, AND ACTIVITIES BEING REPRESENTED.`,false,22),
    newLine,
    newLine,
    // add funcitonal outocomes here
    plainText(
      `As part of this sample, ${institution} also provides a comprehensive list of administrative units being accredited by their professional organizations. This accreditation validates the institution’s approach to rigor and the high quality of the programs, services, and activities offered by any listed administrative unit in Table X, ADD THE TITLE OF THE TABLE HERE.`,
      false,
      22
    ),
    newLine,
    newLine,
    coloredText(`Table X`, false,22),
    
    coloredText(`ADD THE TITLE OF THE TABLE HERE`, false, 22),
    coloredText(`LOOK AT THIS TABLE`, false, 22),
    newLine,
    // add a table here
    table,
        newLine,
        plainText(`The functional assessment reports in the sample presented above are a subset of the reports found in the Collective Functional Report that includes all the submitted functional assessment reports for each one of the years covered by this narrative.`, false, 22)
  ];
}
