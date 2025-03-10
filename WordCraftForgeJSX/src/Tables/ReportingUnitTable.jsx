import { Table, TableRow, TableCell, Paragraph } from "docx";
import plainText from "../Parts/plainText";
import textItem from "../Parts/textItem";

export const ReportingUnitTable = (userData) => {
  let modeType;

  if (userData.reporter.deliveryMode === "1") {
    modeType = "Online";
  }
  if (userData.reporter.deliveryMode === "2") {
    modeType = "Face-to-Face";
  }
  if (userData.reporter.deliveryMode === "3") {
    modeType = "Hybrid";
  }
  if (userData.reporter.deliveryMode === "4") {
    modeType = "";
  }

  console.log("Delivery Mode", modeType);

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
            children: [plainText("Immediate Supervisor: ", true, 18)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [plainText(userData.reporter.supervisor, false, 18)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Unit/Program: ", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [plainText(userData.reporter.reportingArea, false, 18)],
          }),
        ],
      }),

      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Job Title: ", true, 18)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [plainText(userData.reporter.jobTitle, false, 18)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Delivery Mode: ", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [plainText(modeType, false, 18)],
          }),
        ],
      }),

      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Reporting Year: ", true, 18)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [plainText(`${userData.reporter.year}`, false, 18)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Submitted By:", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [
              plainText("Administrative Area", true, 18),
              textItem(0, userData.reporter.submittedByAdmin, false, 18),
              plainText("Learning Area", true, 18),
              textItem(0, userData.reporter.submittedByLearning, false, 18),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Phone:", true, 18)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [
              plainText(`${userData.reporter.supervisorPhone}`, false, 18),
            ],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Phone:", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [
              plainText("Administrative Area", true, 18),
              textItem(0, userData.reporter.phoneAdministration, false, 18),
              plainText("Learning Area", true, 18),
              textItem(0, userData.reporter.phoneLearning, false, 18),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Email: ", true, 18)],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [plainText(userData.reporter.supervisorEmail, false, 18)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Email:", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [
              plainText("Administrative Area", true, 18),
              textItem(0, userData.reporter.emailAdministration, false, 18),
              plainText("Learning Area", true, 18),
              textItem(0, userData.reporter.emailLearning, false, 18),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [
              plainText("Programmatic accreditation by: ", true, 18),
            ],
          }),
          new TableCell({
            width: { size: "25%", type: "PERCENTAGE" },
            children: [plainText(userData.reporter.programAcc, false, 18)],
          }),
          new TableCell({
            width: { size: "15%", type: "PERCENTAGE" },
            children: [plainText("Last review date: ", true, 18)],
          }),
          new TableCell({
            width: { size: "35%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reporter.dateOfLastReview, false, 18),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [plainText("Mission Statement:", true, 18)],
          }),
          new TableCell({
            columnSpan: 3,
            children: [plainText(userData.reporter.mission, false, 18)],
          }),
        ],
      }),
    ],
  });
};
