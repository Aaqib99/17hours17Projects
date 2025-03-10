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
  // import { SectionOne } from "./Sections/GenedReport/SectionOne";

  import { saveAs } from "file-saver";
  // Documents contain sections, you can have multiple sections per document,
  
  import { NumberFormat } from "docx";
  import removeNullValues from "./HelperFunctions/removeNullValues";
import { NewReporter } from "../Tables/NewTables/Reporter";
// import { SectionTwo } from "./Sections/AssessmentReport/NewSections/SectionTwo";


  function LearningMap(userData) {

    console.log("Data general eduacation", userData);
    // remove N/A, n/a , NULL, NILL values from data
    let data = removeNullValues(userData);
    let layout;

    if (userData.selectedLayout === "block-landscape"){
      layout = PageOrientation.LANDSCAPE;
    }
    if (userData.selectedLayout === "block-portrait"){
      layout = PageOrientation.PORTRAIT;
    }


    let firstSection = NewReporter(data , "L");
//   let secondSection = SectionTwo(data, "G");
  
  
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
          children: [firstSection , ...secondSection],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      console.log("base64", blob);
      saveAs(blob, "document.docx");
    });
  }
  
  export default LearningMap;
  