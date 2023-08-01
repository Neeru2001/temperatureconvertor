function convertToFahrenheit() {
    var celsiusInput = parseFloat(document.getElementById("celsius").value);
    var fahrenheitResult = (celsiusInput * 9 / 5) + 32;
    document.getElementById("fahrenheitResult").textContent = fahrenheitResult.toFixed(2);
}

function convertToKelvin() {
    var celsiusInput = parseFloat(document.getElementById("celsius").value);
    var kelvinResult = celsiusInput + 273.15;
    document.getElementById("kelvinResult").textContent = kelvinResult.toFixed(2);
}
