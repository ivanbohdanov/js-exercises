function reformatDate(date) {
    var result;
    if (typeof date == 'array') {
        result = new Date(date[0]);
    } else{
       result = new Date(date);
    }
    return result.getFullYear() + ' ' + result.getMonth()+1 + ' ' + result.getDate();  
}