import {
  Paragraph,
  TextRun,
  AlignmentType,
  UnderlineType,
} from "docx";
import { ReportingUnitTable } from "../../Tables/ReportingUnitTable";
import { assessmentTypes } from "../../constants/AssesmentTypes"; // Check import path
import plainText from "../../Parts/plainText";

export const SectionOne = (userData = {}) => {
  console.log("Assessment Types:", assessmentTypes); // Debugging
  console.log("User Data:", userData); // Debugging

  const reportingUnit = userData.reportingUnit || {}; // Prevent undefined error
  const assessmentType =
    assessmentTypes.find((entry) => entry.value === userData.assessmentType) || {};

  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: reportingUnit.institution || "Unknown Institution",
          size: 30,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Division of ${reportingUnit.division || "Unknown Division"}`,
          size: 28,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: reportingUnit.college || "Unknown College",
          size: 26,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: reportingUnit.office || "Unknown Office",
          size: 24,
          font: "Calibri",
        }),
      ],
    }),

    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: assessmentType.label || "Unknown Assessment Type",
          underline: { type: UnderlineType.SINGLE },
          size: 24,
          bold: true,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Assessment Report",
          bold: true,
          size: 24,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "" }),
    plainText("1. About the Reporting Unit", true, 24),
    ReportingUnitTable(userData),
    new Paragraph({ text: "" }),
  ];
};
