// *** YOUR ANSWER BELOW ***

const monthsInYear = 12;

function yearsAndMonthsToSeconds(x,y){
  let totalMonths = x * monthsInYear + y;
  return totalMonths * 2.628e+6 + " seconds";
}

yearsAndMonthsToSeconds(1,5);
