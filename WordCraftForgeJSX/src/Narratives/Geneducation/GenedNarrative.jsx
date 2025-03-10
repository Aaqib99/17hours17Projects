
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
import plainText from "../../Parts/plainText";


import table from "./table";

function GenedNarrative(userData) {

let newTable = table(userData);
  console.log("Data received.", userData);
  let newLine =  plainText(``, false, 22)
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
          plainText(`Note to the user: This example of a narrative includes all assessment reports completely submitted by the institution. It does not include any incomplete assessment reports.`, false, 22),
          newLine,
          new Paragraph({
            alignment : AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `General Education Assessment`,
                size: 26,
                bold : true,
                font: "Calibri",
              })
            ],
          }),
          ...newTable
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log("base64", blob);
    saveAs(blob, "document.docx");
  });
}

export default GenedNarrative;

