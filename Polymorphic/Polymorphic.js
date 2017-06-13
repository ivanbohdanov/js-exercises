var milisec = 1496851371222;
    str = '12 January 2017';
    mas = ['12 January 2017'];
    ob = new Date();

function reformatDate(date){
    var ms;
    
    if(Number.isInteger(date)){
        ms = date;
    }
    else{
        ms = Date.parse(date); 
    }
    var dt = new Date(ms);
    return dt.toString('yyyy-mm-dd');
}



console.log(reformatDate(milisec));
console.log(reformatDate(str));
console.log(reformatDate(mas));
console.log(reformatDate(ob));
