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
import { SectionOne } from "./Sections/AssessmentReport/SectionOne";
import { saveAs } from "file-saver";
import { SectionTwo } from "./Sections/AssessmentReport/SectionTwo";
import { SectionThree } from "./Sections/AssessmentReport/SectionThree";

// Documents contain sections, you can have multiple sections per document,

import { NumberFormat } from "docx";
import removeNullValues from "./HelperFunctions/removeNullValues";
import plainText from "./Parts/plainText";

function GenerateAssessment(userData = { learningGoals: [] }) {
  console.log("Data received.", userData);
  
  let thirdSection;
  let data = removeNullValues(userData);
  console.log("Null values removed", data);
  
  // Fix: Use optional chaining to prevent errors
  let learningCompExists = userData?.learningGoals?.[0]?.label || "";

  let firstSection = SectionOne(data);
  let secondSection = SectionTwo(data);
  
  if (learningCompExists === "") {
    thirdSection = [];
  } else {
    thirdSection = SectionThree(data);
  }

  console.log("Data", data);

  const doc = new Document({
    sections: [
      {
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ children: ["Page ", PageNumber.CURRENT] }),
                  new TextRun({ children: [" of ", PageNumber.TOTAL_PAGES] }),
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
              orientation: PageOrientation.LANDSCAPE,
            },
          },
        },
        children: [
          ...firstSection,
          plainText("2. About the Functions of the Reporting Unit", true, 24),
          ...secondSection,
          plainText("3. About the Learning Experiences within the Reporting Unit", true, 24),
          ...thirdSection,
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log("base64", blob);
    saveAs(blob, "document.docx");
  });
}


export default GenerateAssessment;
