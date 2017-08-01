function calculateSaturdays(a, b) {
    for (var year = a; year <= b; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0)
            document.write("<p>" + " 1 st January is being a Sunday " + year + " </p>");
    }
}
calculateSaturdays(2001, 2020)