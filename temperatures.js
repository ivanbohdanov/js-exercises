function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (5 * (valNum - 32)) / 9;
}

function temperatureConverter1(valNum1) {
    valNum = parseFloat(valNum1);
    document.getElementById("outputFahrenheit").innerHTML = (9 * valNum1 + (32 * 5)) / 5;
}