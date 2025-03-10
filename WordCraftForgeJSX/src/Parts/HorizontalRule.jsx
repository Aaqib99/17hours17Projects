import { Paragraph } from "docx";
function HorizontalRule() {
  return new Paragraph({
    border: {
      // top: {
      //   color: "auto",
      //   space: 1,
      //   style: "single",
      //   size: 6,
      // },
      bottom: {
        color: "auto",
        space: 0,
        style: "single",
        size: 2,
      },
    },
  });
}
export default HorizontalRule;
