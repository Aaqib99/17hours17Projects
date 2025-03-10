import { TableRow, TableCell } from "docx";
import plainText from "../../../Parts/plainText";

function reportPart(userData, type) {
  let data;
  let modeType;

  if (userData.reportingUnit.learningMode === "1") {
    modeType = "Online";
  }
  if (userData.reportingUnit.learningMode === "2") {
    modeType = "Face-to-Face";
  }
  if (userData.reportingUnit.learningMode === "3") {
    modeType = "Hybrid";
  }
  if (userData.reportingUnit.learningMode === "4") {
    modeType = "";
  }

  if (type === "F") {
    data = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Mission Statement: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.mission, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Entered on: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.dateOfInfoEntry, false, 24),
            ],
          }),
        ],
      }),
    ];
  }
  if (type === "L") {
    data = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Academic Program: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.academicProgram, false, 24),
            ],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Phone: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.phoneAcadProgram, false, 24),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Learning Mode: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(modeType, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Program Level: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.programLevel, false, 24),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Mission Statement: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.mission, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Entered on: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.dateOfInfoEntry, false, 24),
            ],
          }),
        ],
      }),
    ];
  }
  if (type === "G") {
    data = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Learning Mode: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(modeType, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Program Level: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.programLevel, false, 24),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Mission Statement: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [plainText(userData.reportingUnit.mission, false, 24)],
          }),
          new TableCell({
            width: { size: "20%", type: "PERCENTAGE" },
            children: [plainText("Entered on: ", true, 24)],
          }),
          new TableCell({
            width: { size: "30%", type: "PERCENTAGE" },
            children: [
              plainText(userData.reportingUnit.dateOfInfoEntry, false, 24),
            ],
          }),
        ],
      }),
    ];
  }

  return data;
}

export default reportPart;
