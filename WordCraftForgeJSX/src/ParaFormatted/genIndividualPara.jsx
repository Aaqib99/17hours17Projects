import {
  Document,
  Packer,
  Footer,
  AlignmentType,
  PageNumber,
  Paragraph,
  TextRun,
  PageOrientation,
  NumberFormat,
} from "docx";
import plainText from "../../Parts/plainText";
const newLine = plainText(``, false,24);
const genIndividualPara = (reportData) => {
  const reportingUnit = reportData.reportingUnit;
  const office = reportingUnit.office;
  const goals = reportData.adminGoals;

  adminGoals.map(item => {
    item.outcomes.map(outcomeItem=> {
        let temp = [
            plainText(`Division of ${reportingUnit.division}`, false, 24),
            plainText(`Reporting Unit ${office}`, false, 24),
            newLine,
            plainText(`For the ${reportingUnit.reportingYear} reporting period, the ${office} implemented ${outcomeItem.outcomeLabel}. The unit assessed this outcome with DIRECT EVIDENCE under the threshold of THRESHOLD FOR DIRECT EVIDENCE. The implementation results indicated that REPORTING UNIT: `, false, 24)
        ]
    })
  })


  return [
 


  ];
};

export default genIndividualPara;
