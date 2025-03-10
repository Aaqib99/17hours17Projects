import { Paragraph, TextRun, ShadingType } from "docx"
import textItem from "../../../Parts/textItem"
import plainText from "../../../Parts/plainText"
import coloredText from "../../../Parts/coloredText"

const CompetencyParts = (userData) => {
    let array = [];

    if (userData.commSkills.knowledgeArea !== "") {
        array.push(userData.commSkills)
    }
    if (userData.infoSkills.knowledgeArea !== "") {
        array.push(userData.infoSkills)
    }
    if (userData.thinkingSkills.knowledgeArea !== "") {
        array.push(userData.thinkingSkills)
    }
    if (userData.socialSkills.knowledgeArea !== "") {
        array.push(userData.socialSkills)
    }
    if (userData.collabSkills.knowledgeArea !== "") {
        array.push(userData.collabSkills)
    }
    if (userData.quantSkills.knowledgeArea !== "") {
        array.push(userData.quantSkills)
    }



    let compData = []
    array.map((item , index) =>{
        let temp = [
            textItem(0, `Knowledge Area ${index+1}: ${item.knowledgeArea}`, false, 22),
            textItem(0, `Thematic Area ${index+1}: ${item.thematicArea}`, false, 22),
            textItem(0, `Competency ${index+1}: ${item.competencyLabel}`, false, 22),
            new Paragraph({
                children : [
                    new TextRun({
                        text : `This competency represents `,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                    new TextRun({
                        text : `XX`,
                        bold : false,
                        font : "Calibri",
                        size : 22,
                        shading: {
                            type: ShadingType.SOLID,
                            color: "#30D5C8",
                          },
                    }),
                    new TextRun({
                        text : `% of all general education competencies and encompasses `,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                    new TextRun({
                        text : `ADD THE NUMBER OF COURSES INCLUDED TO DISCUSS IN THIS PARAGRAPH or XX%`,
                        bold : false,
                        font : "Calibri",
                        size : 22,
                        shading: {
                            type: ShadingType.SOLID,
                            color: "#30D5C8",
                          },
                    }),
                    new TextRun({
                        text : `of the `,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                    new TextRun({
                        text : `ADD THE TOTAL NUMBER OF GENERAL EDUCATION COURSES `,
                        bold : false,
                        font : "Calibri",
                        size : 22,
                        shading: {
                            type: ShadingType.SOLID,
                            color: "#30D5C8",
                          },
                    }),
                    new TextRun({
                        text : `courses part of the general education program and `,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                    new TextRun({
                        text : `XX% of the ADD THE TOTAL NUMBER OF ACADEMIC PROGRAMS `,
                        bold : false,
                        font : "Calibri",
                        size : 22,
                        shading: {
                            type: ShadingType.SOLID,
                            color: "#30D5C8",
                          },
                    }),
                    new TextRun({
                        text : `of the academic programs offered at the institution. This competency was assessed in `,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                    new TextRun({
                        text : `ADD THE TOTAL NUMBER OF SECTIONS OFFERED FOR THE COURSES FOR THIS COMPETENCY `,
                        bold : false,
                        font : "Calibri",
                        size : 22,
                        shading: {
                            type: ShadingType.SOLID,
                            color: "#30D5C8",
                        },
                    }),
                    new TextRun({
                        text : `course sections.`,
                        bold : false,
                        font : "Calibri",
                        size : 22
                    }),
                ]
            }),

           
            coloredText(`Figure X`, false, 22),
            coloredText(`ADD THE TITLE OF THE FIGURE HERE`, false, 22),
            coloredText(`ADD THE ACTUAL FIGURE HERE`, false, 22),
            plainText(` `, false, 22),
        ]

        compData.push(...temp);
 
})
return compData;
}

export default CompetencyParts


// performance : "",
//         performResult :"",
//         thresholdMet: "",
//         threeEffortsOne : "",
//         threeEffortsTwo : "",
//         improvements:""