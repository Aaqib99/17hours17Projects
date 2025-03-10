

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


const FunctionalPara = (reportData) => {




 let layout = PageOrientation.PORTRAIT;
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
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        children: [
                          "Paragraph-Formatted Functional Assessment Report Document: ",
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
                          "A List of Selected Paragraphs from the Functional Assessment Reports",
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

export default FunctionalPara