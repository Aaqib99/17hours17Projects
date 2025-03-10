import {Paragraph, TextRun, ShadingType} from 'docx'

function para(text, txt2) {
    return new Paragraph({
      bullet: {level : 0},
      children: [
        new TextRun({
          text: text,
          bold: false,
          size: 22,
          font: "Calibri",
        }),
        new TextRun({
          text: txt2,
          bold: false,
          size: 22,
          font: "Calibri",
          shading: {
            type: ShadingType.SOLID,
            color: "#30D5C8",
          },
        }),
      ],
    });
  }

export default para;