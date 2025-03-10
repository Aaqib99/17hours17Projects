import coloredText from "../../../Parts/coloredText";
import coloredTextItem from "../../../Parts/coloredTextItem";
import plainText from "../../../Parts/plainText";



export default function sixthBlock(userData) {
  let institution = userData.formData.institution;
  let newLine = plainText("", false, 22);

  return [
    newLine,
    coloredText(
      `ADD A HEADING THAT ILLUSTRATES THE MACRO- AND MICRO-PLANNING PROCESSES`,
      true,
      22
    ),
    newLine,
    plainText(
      `${institution} is committed to fostering a culture of planning and evaluation at all levels. In virtue of that self-imposed expectation, ${institution}’s president leads all efforts regarding all institutional effectiveness-related activities. In that capacity, the president issues guidelines, and expectations to ensure compliance with the mission statement and external reporting.`,
      false,
      22
    ),
    newLine,
    plainText(
      `At ${institution}, all institutional effectiveness activities, defined as the intersection of planning and evaluation, start at the president’s cabinet. To that effect, cabinet members meet regularly and as needed to discuss pending initiatives and to report on each other’s accomplishments, areas of interest, and more importantly, all the president’s top priorities. These priorities include specific assignments to select cabinet members, distribution of strategic directions per areas of responsibilities, required actions and initiatives in support of both presidential initiatives and mission-related and reports on individual performance.`,
      false,
      22
    ),
    newLine,

    plainText(
      `Under the president’s leadership and protocol, cabinet members share recommendations on procedures and other initiatives as appropriate. They disseminate any relevant pieces of information to their direct reports, as well. As members of the senior leadership team, they coordinate and liaise between their areas of responsibilities and the Office of the President. Essentially, the President’s Cabinet serves as a venue for accountability and monitoring among senior leadership.`,
      false,
      22
    ),
    newLine,

    plainText(
      `Each major division organizes individual councils or committees to streamline projects and initiatives. What follows is a list of some of these councils and their efforts to realize ${institution}’s presidential vision on institutional effectiveness:`,
      false,
      22
    ),
    newLine,
    newLine,

    coloredText(
      `ADD A DIVISION’S NAME AND ITS LEADERSHIP COUNCIL.`,
      false,
      22
    ),
    newLine,
    coloredTextItem(0,`Provide some brief notes on how institutional effectiveness is undertaken within the division. `,false,22),
    newLine,
    coloredTextItem(0,` List three or four brief examples of institutional effectiveness accomplishments, impact, and the next reporting period’s improvement strategies by three distinct offices.`,false,22),
    newLine,

    coloredText(
      `ADD A DIVISION’S NAME AND ITS LEADERSHIP COUNCIL.`,
      false,
      22
    ),
    newLine,
    coloredTextItem(0,`Provide some brief notes on how institutional effectiveness is undertaken within the division. `,false,22),
    newLine,
    coloredTextItem(0,` List three or four brief examples of institutional effectiveness accomplishments, impact, and the next reporting period’s improvement strategies by three distinct offices.`,false,22),
    newLine,

    coloredText(
      `ADD A DIFFERENT GROUP’S NAME AND ITS LEADERSHIP COUNCIL. `,
      false,
      22
    ),
    newLine,
    coloredTextItem(0,`Examples of affinity groups: Dean’s Council, Chair’s Council, Faculty Senate, Student Senate`,false,22),
    newLine,
    coloredTextItem(0,` Provide some brief notes on how institutional effectiveness is undertaken within three affinity groups.`,false,22),
    newLine,
    coloredTextItem(0,`  List three or four brief examples of institutional effectiveness accomplishments, impact, and the next reporting period’s improvement strategies by three distinct affinity groups.`,false,22),
   
    newLine,
  ];
}
