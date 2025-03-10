import {Paragraph , TextRun} from "docx";

function indentText (text , bold ,size ) {
                    
    return  new Paragraph({
        children: [
          new TextRun({
            text: `         ${text}`,
            size: size,
            bold : bold,
            font: "Calibri",
          })
        ],
      })
}
export default indentText;