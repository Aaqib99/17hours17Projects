import coloredText from "../../../Parts/coloredText";
import plainText from "../../../Parts/plainText";
import textItem, { newBold } from "../../../Parts/textItem";
import Evidences from "../Parts/Evidences";
import { Functional } from "../Parts/Functional";

let newLine = plainText("", false, 22);

export default function secondBlock(userData) {
  let institution = userData.reportingUnit.institution;
  let funcComponent = Functional(userData, "F");
  let evidences = Evidences(userData, "F");

  return [
    newLine,
    newLine,
    coloredText(
      `ADD A HEADING THAT SUMMARIZES EVIDENCE OF GOAL-SETTING AND ASSESSMENT ACTIVITIES.`,
      true,
      22
    ),

    newLine,
    plainText(
      `${institution} fosters a culture of assessment and evidence across the institution. Like academic programs and student support services, administrative units participate in the adopted and standardized assessment process. Evidence of administrative units participating in this process includes the submission of a Functional Assessment Report, which focuses on general goals, expected outcomes, and the results of outcome implementation. This report ends with two other sections, Implementation Results, and Decided Improvement Strategies. Administrative units attach any supporting documentation or tangible evidence in the Implementation Results section. `,
      false,
      22
    ),
    newLine,
    plainText(
      `The Functional Assessment Report is one way utilized by administrative units to inform on their operations and performance while serving various constituencies at the institution according to the tenets of the mission.Some examples of actually set goals and outcomes are given below:`,
      false,
      22
    ),
    newLine,
    // add funcitonal outcomes here
    // ...funcComponent,

    textItem(0,
      `Upon implementing current standard operating procedures, the Office of Building Maintenance will be able to complete work orders according to the allocated time of service.`,
      false,
      24
    ),
    textItem(0,
      `Upon implementing current standard operating procedures, the Office of Building Maintenance will be able to conduct quarterly work order completion audits according to the maintenance schedule.`,
      false,
      24
    ),
    textItem(0,
      `According to the office’s strategic plan, the Office of Transportation will be able to renovate the fleet of buses and official vehicles in the next three years.`,
      false,
      24
    ),
    textItem(0,
      `According to the office’s strategic plan, the Office of Transportation will be able to organize the Driver Education and Behavior Program for students and student organizations.`,
      false,
      24
    ),
    textItem(0,
      `Based on national standards, the Office of Real Estate will be able to conduct a mapping of surrounding properties in a 1-mile radius of the institution for possible acquisition.`,
      false,
      24
    ),
    textItem(0,
      `Per system guidelines, the Office of Beautification will be able to establish the Landscape Beatification Week involving members of the institutional and social community.`,
      false,
      24
    ),
    textItem(0,
      `According to the office’s strategic plan, the Office of Marketing and Institutional Image will
be able to increase the visibility of the institution in 10 regional and 2 national markets.`,
      false,
      24
    ),
    textItem(0,
      `Based on current trends on student engagement, the Office of Security and Emergency
Services will be able to organize the Be Safe Program for students, faculty, and staff.`,
      false,
      24
    ),
    textItem(0,
      `Based on its strategic plan, the School of Graduate and Professional Programs will be able to
increase the number of graduate and professional programs by 50% during the current
    academic year`,
      false,
      24
    ),
    textItem(0,
      `Per current trends, the Division of Student Engagement will be able to organize bi-monthly
research seminars for students in collaboration with the Office of Staff and Faculty
Engagement.`,
      false,
      24
    ),

    plainText(
      `For this narrative, the list of ten functional outcomes exemplified above only intends to illustrate this specific portion of the narrative. However, the linked Collective Functional Report includes all assessment reports submitted by the units. Please, refer to this document to obtain a broader image of the assessment process and the elements included.`,
      false,
      22
    ),
    newLine,
    plainText(
      `Under the Types of Evidence and Types of Thresholds sections of the Functional Assessment Report, each administrative unit lists the assessment activities to undertake. These activities are a specification of the types of pieces of evidence that support the unit’s implementation of the outcome. That is, it presents the most appropriate methods and tools chosen by the unit to generate and process the obtained data according to the constructs specified in the Types of Evidence section of the report.`,
      false,
      22
    ),
    newLine,
    plainText(
      `These pieces of data constitute the core of the information related to the administrative performance of the unit. It is the responsibility of each administrative unit to select assessment activities that comply with the VIR Principle as a mechanism to evaluate the advantages and disadvantages of the assessment activities considering the outcome to substantiate. These assessment activities are:
    `,
      false,
      22
    ),
    newLine,
    newBold(
      0,
      "Valid ",
      `because they measure the construct specified by the unit. For instance, the time spent answering calls or repairing a student residence hall.`,
      22
    ),
    newBold(
      0,
      "Implementable ",
      `because any assessment activities comply with a schedule set forth by the unit.`,
      22
    ),
    newBold(
      0,
      "Reliable ",
      `since the results of implementing the assessment activity can yield similar results or related ones over a given period.`,
      22
    ),
    newLine,
    plainText(
      `The Nembero Solutions and Consulting refers to assessment activities as types of direct and indirect evidence. This terminology allows users to understand the importance of the assessment activities in the context of the outcome and the required substantive narrative in support of the ${institution}’s efforts to meet the elements of the standard.`,
      false,
      22
    ),
    newLine,
    plainText(
      `While the direct evidence seeks to evince how the unit’s actual performance and produced work sample align with the essence of the outcome, the indirect evidence surveys involved stakeholders’ opinions and comments regarding the unit’s actual performance and produced work sample. Both direct and indirect pieces of evidence feed into each other to let ${institution} know the level of performance of administrative units’ operations. Some examples of direct assessment activities are provided here:`,
      false,
      22
    ),
    newLine,
    // ADD Direct Evidences from functional reports
    // ...evidences,

    textItem(0,`List of standard operating procedures.`, false, 24),
    textItem(0,`Inventory of work orders received.`, false, 24),
    textItem(0,`Inventory of work orders completed.`, false, 24),
    textItem(0,`Audit of orders completed versus the allocated time.`, false, 24),
    textItem(0,`Inventory of vehicle fleet.`, false, 24),
    textItem(0,`Student workshops.`, false, 24),
    textItem(0,`Number of potential properties for purchase.`, false, 24),
    textItem(0,`List of individuals and their affiliations who attended the Landscape Beautification Week.`, false, 24),
    textItem(0,`Snapshots of billboards and list of market outreach.`, false, 24),
    textItem(0,`Number of graduate and professional programs.`, false, 24),
    textItem(0,`List of student researchers.`, false, 24),

    newLine,
    plainText(
      `For this narrative, the above list of ten direct pieces of evidence intends to illustrate this specific portion of the narrative. Refer to the Collective Functional Report for more examples.`,
      false,
      22
    ),
  ];
}
