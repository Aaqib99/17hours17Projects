import {Paragraph , TextRun, UnderlineType,AlignmentType} from "docx";

function plainText (text , bold ,size ) {
                    
    return  new Paragraph({
        children: [
          new TextRun({
            text: `${text}`,
            size: size,
            bold : bold,
            font: "Calibri",
          })
        ],
      })
}
export const underlineText = (text , bold ,size ) => {
                    
    return  new Paragraph({
        children: [
          new TextRun({
            text: `${text}`,
            size: size,
            bold : bold,
            underline: { type: UnderlineType.SINGLE },
            font: "Calibri",
          })
        ],
      })
}

export const centeredText = (text , bold ,size ) => {
                    
    return  new Paragraph({
      alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: `${text}`,
            size: size,
            bold : bold,
            font: "Calibri",
          })
        ],
      })
}


export default plainText;