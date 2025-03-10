
import {Paragraph , PageBreak} from 'docx'
const PageBreak = () => {
  return new Paragraph({
        children : [
          new PageBreak(),
        ]
      })
  
}

export default PageBreak