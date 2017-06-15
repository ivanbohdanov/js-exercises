function calculateDaysToNY() {
    var now = new Date ();
    var newYear = new Date('12/31/' + now.getFullYear());
    return (newYear.getTime() - now.getTime()) / 86400000 ;
}