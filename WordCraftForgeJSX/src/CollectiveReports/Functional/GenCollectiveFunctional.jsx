import {
    Document,
    Packer,
    Footer,
    AlignmentType,
    PageNumber,
    Paragraph,
    TextRun,
    PageOrientation,
    NumberFormat
  } from "docx";
import plainText from "../../Parts/plainText";
import { SectionOne } from "../../Sections/AssessmentReport/NewSections/SectionOne";
import { SectionTwo } from "../../Sections/AssessmentReport/NewSections/SectionTwo";

const GenCollectiveFunctional = (reportsData,type, selectedLayout) => {
const newLine  =plainText('', false, 24);

    let allSections = [];
    console.log("Data in collective ", reportsData, type, selectedLayout)

    reportsData.map((reportItem)=>{
        let firstSection = SectionOne(reportItem , "F", true);
        let secondSection = SectionTwo(reportItem, "F", selectedLayout);

        allSections.push(...firstSection, ...secondSection);
    })

    let layout;

    if (selectedLayout === "block-landscape"){
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
              newLine,

                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        children: [
                          `${reportsData[0].reportingUnit.institution}`,
                        ],
                        size: 24,
                        bold : true,
                        font: "Calibri",
                      }),
                    ],
                  }),
                  newLine,

                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        children: [
                          "Collective Functional Assessment Report",
                       
                          
                        ],
                        size: 24,
                        bold : true,
                        font: "Calibri",
                      }),
                    ],
                  }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        children: [
                          "A List of all Submitted Assessment Reports",
                        ],
                        size: 24,
                        bold : true,
                        font: "Calibri",
                      }),
                    ],
                  }),
                  plainText('', true, 24),

                  ...allSections
            ],
          },
        ],
      });
    
      Packer.toBlob(doc).then(async (blob) => {
    
          saveAs(blob, "document.docx");
        // return blob;
      });
}

export default GenCollectiveFunctional