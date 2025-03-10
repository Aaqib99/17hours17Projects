import {
  Document,
  Packer,
  Footer,
  AlignmentType,
  PageNumber,
  Paragraph,
  TextRun,
  PageOrientation,
} from "docx";
import { SectionOne } from "./Sections/AssessmentReport/NewSections/SectionOne";
import { saveAs } from "file-saver";
import { SectionTwo } from "./Sections/AssessmentReport/NewSections/SectionTwo";


import { NumberFormat } from "docx";
import removeNullValues from "./HelperFunctions/removeNullValues";

function genLearningAssessment(userData) {
  console.log("Data received.", userData);
  let thirdSection;
  // remove N/A, n/a , NULL, NILL values from data
  let data = userData
  let firstSection = SectionOne(data, "L");
  let secondSection = SectionTwo(data, "L");
  let layout;
  if (userData.selectedLayout === "block-landscape") {
    layout = PageOrientation.LANDSCAPE;
  }
  if (userData.selectedLayout === "block-portrait") {
    layout = PageOrientation.PORTRAIT;
  }

  const doc = new Document({
    sections: [
      {
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    children: ["Page ", PageNumber.CURRENT],
                  }),
                  new TextRun({
                    children: [" of ", PageNumber.TOTAL_PAGES],
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    children: [
                      "Nembero ®™",
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        properties: {
          page: {
            pageNumbers: {
              start: 1,
              formatType: NumberFormat.DECIMAL,
            },
            size: {
              orientation: layout,
            },
          },
        },

        children: [...firstSection, ...secondSection],
      },
    ],
  });

  Packer.toBlob(doc).then(async (blob) => {
    saveAs(blob, "document.docx");
  });
}

export default genLearningAssessment;
