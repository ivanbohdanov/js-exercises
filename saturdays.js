function calculateSaturdays (a,b) {
     for (var i = a; i<b; i++) {
        var date = new Date (i, 1, 1);
     if (date.getDay() == 6){
         console.log(date.toDateString());
     }
    }
}