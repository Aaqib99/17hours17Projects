import HorizontalRule from "../../../Parts/HorizontalRule";
import plainText from "../../../Parts/plainText";
import { FunctionalComponent } from "../../../Tables/NewTables/Functional/FunctionalComponent";
import { Paragraph, AlignmentType, TextRun } from "docx";
import { LearningComponent } from "../../../Tables/NewTables/LearningComponent";
import { CompetencyComponent } from "../../../Tables/NewTables/CompetencyTable";
import { BoxFunctional } from "../../../Tables/NewTables/Functional/BoxFunctional";
import { LinearFunctional } from "../../../Tables/NewTables/Functional/LinearFunctional";
import { ColumnFunctional } from "../../../Tables/NewTables/Functional/ColumnFunctional";
import CompactOne from "../../../Tables/NewTables/Functional/CompactOne";
import { BoxLandscape } from "../../../Tables/NewTables/Functional/Landscape/BoxLandscape";
import { LinearLandscape } from "../../../Tables/NewTables/Functional/Landscape/LinearLandscape";
import TwoCompact from "../../../Tables/NewTables/Functional/TwoCompact";
import ThreeCompact from "../../../Tables/NewTables/Functional/ThreeCompact";
import { ParagraphTable } from "../../../Tables/NewTables/Functional/ParagraphTable";

// Administrative Goals
export const SectionTwo = (userData , type, selectedLayout) => {

  
  let funcComponent;
  let competenciesList = []
  let commComponent;
  let thinkingComponent;
  let quantComponent;
  let socialComponent;
  let collabComponent;
  let infoComponent;

  console.log("Layout in section two", selectedLayout)

  let title;

  if (type ==='FP') { // for functional paragraph formatted reports
    funcComponent = ParagraphTable(userData, type);
  }
  
  if (type === "F" ){

    if (selectedLayout === 'block-portrait' || selectedLayout === 'block-landscape' ) {
      funcComponent = FunctionalComponent(userData, type);
    }

    if (selectedLayout === 'box-portrait') {
      funcComponent = BoxFunctional(userData, type);
    }
    
    if (selectedLayout === 'box-landscape') {
      funcComponent = BoxLandscape(userData, type);
    }
    


    if (selectedLayout === 'linear-portrait') {
      funcComponent = LinearFunctional(userData, type);
    }
    if (selectedLayout === 'linear-landscape') {
      funcComponent = LinearLandscape(userData, type);
    }


    if (selectedLayout === 'column-portrait' || selectedLayout === 'column-landscape') {
      funcComponent = ColumnFunctional(userData, type);
    }
    if (selectedLayout === 'compact-portrait-1' || selectedLayout === 'compact-landscape-1') {
      funcComponent = CompactOne(userData, type);
    }
    if (selectedLayout === 'compact-portrait-2' || selectedLayout === 'compact-landscape-2') {
      funcComponent = TwoCompact(userData, type);
    }
    
    if (selectedLayout === 'compact-portrait-3' || selectedLayout === 'compact-landscape-3') {
      funcComponent = ThreeCompact(userData, type);
    }
    
    
    title = "2. Functions of the Reporting Unit"
  }


  if (type === "L"){
    funcComponent = LearningComponent(userData , type);
    title  = "2. Student Development within the Academic Program or the Learning Experience Unit"
  }

  if (type === "G") {
    title = '2. Selected Competencies'

    if (userData.commSkills.knowledgeArea !== ""){
      commComponent = CompetencyComponent(userData.reportingUnit, userData.commSkills);
      competenciesList.push(...commComponent) 
    }
    if (userData.infoSkills.knowledgeArea !== ""){
      infoComponent = CompetencyComponent(userData.reportingUnit, userData.infoSkills);
      competenciesList.push(...infoComponent)
    }
    if (userData.quantSkills.knowledgeArea !== ""){
      quantComponent = CompetencyComponent(userData.reportingUnit, userData.quantSkills);
      competenciesList.push(...quantComponent)
    }
    if (userData.thinkingSkills.knowledgeArea !== ""){
      thinkingComponent = CompetencyComponent(userData.reportingUnit, userData.thinkingSkills);
      competenciesList.push(...thinkingComponent)
    }
    if (userData.socialSkills.knowledgeArea !== ""){
      socialComponent = CompetencyComponent(userData.reportingUnit, userData.socialSkills);
      competenciesList.push(...socialComponent)
    }
    if (userData.collabSkills.knowledgeArea !== ""){
      collabComponent = CompetencyComponent(userData.reportingUnit, userData.collabSkills);
      competenciesList.push(...collabComponent)
    }
    
  }

if (type === 'G') {
  return [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({
          text: title,
          size: 24,
          bold : true,
          font: "Calibri",
        }),
      ],
    }),
    plainText("", false, 24),

    type!== "FP" ? plainText("Purpose: ", true, 24) : newLine,
    type!== "FP" ?plainText(`The purpose of this section is to present the general and specific expectations (i.e., goals and outcomes) regarding the functions or operations of the unit in alignment with selected institutional priorities along with the reporting period’s outcome implementation and next reporting period’s decided improvement strategies.`,
    false,
    24): newLine,
    HorizontalRule(),
   ...competenciesList     
  ];

} else {
  return [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({
          text: title,
          size: 24,
          bold : true,
          font: "Calibri",
        }),
      ],
    }),
    plainText(`This section provides the goals and outcomes regarding what the unit plans to do in alignment with strategic priorities. It also includes the evidence to collect, the thresholds to meet, the results obtained, and the improvement decided for the next reporting period.`,
    false,
    24),
    ...funcComponent,    
    HorizontalRule(),
  ];
}
};
