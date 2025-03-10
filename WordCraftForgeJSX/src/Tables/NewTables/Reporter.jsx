import { Table, TableRow, TableCell } from "docx";
import plainText from "../../Parts/plainText";
import reportPart from "./Parts/reporter";

export const NewReporter = (userData, type) => {
  
 

  return new Table({
    width: {
      size: "100%",
      type: "PERCENTAGE",
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Institution: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.institution, false, 24),
            ],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Division: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.division, false, 24)],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("College/School: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.college, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Reporting Unit: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.office, false, 24)],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Assessment Period: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.reportingYear, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Phone of Reporting Unit: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.reportingUnitPhone, false, 24),
            ],
          }),
        ],
      }),

      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Responsible Person: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.responsibleName, false, 24),
            ],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Email: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.responsibleEmail, false, 24),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Entered by: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.enteredBy, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Email: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.emailEnteredBy, false, 24),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Programmatic Accreditation: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.programAcc, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Date of Last Review: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.dateOfLastReview, false, 24),
            ],
          }),
        ],
      }),
     // dynamic reporter component
     ...reportPart(userData , type)
    ],
  });
};
