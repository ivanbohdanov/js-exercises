var startD = new Date(2001, 0, 1);
    endD = new Date(2010, 0, 1);

function calculateSaturdays(fDate, sDate) {
    while(fDate < sDate) {
        if(fDate.getDay()===6){
            console.log(fDate);
        }
        
        fDate.setFullYear(fDate.getFullYear() +1 );
    }
}

console.log(calculateSaturdays(startD, endD));


