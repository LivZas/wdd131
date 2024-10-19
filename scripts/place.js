const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

document.addEventListener('DOMContentLoaded', function () {
    const temperature = 9;
    const windSpeed = 5;
    const windChillElement = document.getElementById('wind-chill');
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return Math.round(
                13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)
            ) + '°C';
        } else {
            return 'N/A';
        }
    }

    temperatureElement.textContent = `${temperature}°C`;
    windSpeedElement.textContent = `${windSpeed} km/h`;

    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChillValue;
});
