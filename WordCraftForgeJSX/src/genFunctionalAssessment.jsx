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
// import { SectionThree } from "./Sections/AssessmentReport/NewSections/SectionThree";

// Documents contain sections, you can have multiple sections per document,

import { NumberFormat } from "docx";
import removeNullValues from "./HelperFunctions/removeNullValues";





function genFunctionalAssessment(userData, selectedLayout, reportType) {

  console.log("Data received.", userData, selectedLayout);
  let thirdSection;
  // remove N/A, n/a , NULL, NILL values from data
  let data = removeNullValues(userData);



  let firstSection = SectionOne(data , "F", false);
  let secondSection = SectionTwo(data, "F", selectedLayout);

  // if (reportType === 'box-portrait') {

  // }
  let layout;



  
  if (selectedLayout === "block-landscape" || selectedLayout === "box-landscape" || selectedLayout === "linear-landscape" || selectedLayout === "column-landscape" || selectedLayout === 'compact-landscape-1' || selectedLayout === 'compact-landscape-2' || selectedLayout === 'compact-landscape-3'){
    layout = PageOrientation.LANDSCAPE;
  }
  if (selectedLayout === "block-portrait"){
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

        children: [
          ...firstSection,
          ...secondSection,

        ],
      },
    ],
  });

  Packer.toBlob(doc).then(async (blob) => {

      saveAs(blob, "document.docx");
    // return blob;
  });


}

export default genFunctionalAssessment;
