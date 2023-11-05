function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultElement.innerText = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        resultElement.innerText = `${temperatureInput} °C is equal to ${fahrenheit.toFixed(2)} °F`;
    } else if (unit === "fahrenheit") {
        const celsius = (temperatureInput - 32) * 5/9;
        resultElement.innerText = `${temperatureInput} °F is equal to ${celsius.toFixed(2)} °C`;
    }
}
