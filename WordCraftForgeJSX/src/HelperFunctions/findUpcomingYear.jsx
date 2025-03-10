function findUpcomingYear (currentYear) {

    let splitYearArray = currentYear.split("-");
    var upcomingYearArray = splitYearArray.map(function (x) { 
        return parseInt(x, 10) + 1; 
      });
      return upcomingYearArray.join("-");
}

export default findUpcomingYear;