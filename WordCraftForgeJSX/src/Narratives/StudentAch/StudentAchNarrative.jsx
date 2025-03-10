import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Footer,
  AlignmentType,
  PageNumber,
  Paragraph,
  // Table,
  // TableRow,TableCell,
  TextRun,
  PageOrientation,
  NumberFormat,
} from "docx";

import table from "./table";
import plainText from "../../Parts/plainText";

function StudentAchNarrative (userData) {
  let newTable = table(userData);
  console.log("Data received.", userData);
  // remove N/A, n/a , NULL, NILL values from data
  // let data = removeNullValues(userData);
  // console.log("Null values removed", data);

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
              orientation: PageOrientation.PORTRAIT,
            },
          },
        },
        children: [
          new Paragraph({
            alignment : AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `Student Achievement`,
                size: 23,
                bold : true,
                font: "Calibri",
              })
            ],
          }),

          plainText(``,false,26),
          ...newTable,
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log("base64", blob);
    // const filename = fs.documentDirectory + "MyWordDocument.docx";
    saveAs(blob, "document.docx");
  });
}

export default StudentAchNarrative;
