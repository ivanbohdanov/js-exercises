var nDays = new Date();
    NYDay = new Date(2018,0,1);
    countD = new Date();
    
function calculateDaysToNY(){
    countD = NYDay - nDays;
    console.log(nDays);
    console.log(NYDay);
    countD = countD/(24*60*60*1000);
    return countD;
    }
    
    console.log(calculateDaysToNY());
    