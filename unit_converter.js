const millimeterEl = document.querySelector("#millimeter");
const centimeterEl = document.querySelector("#centimeter");
const meterEl = document.querySelector("#meter");
const kilometerEl = document.querySelector("#kilometer");

function updateValues(value, conversionRatio) {
	centimeterEl.value = value * conversionRatio.centimeter;
	meterEl.value = value * conversionRatio.meter;
	kilometerEl.value = value * conversionRatio.kilometer;
}

function funMillimeter(value) {
	updateValues(value, { centimeter: 0.1, meter: 0.001, kilometer: 0.000001 });
}

function funCentimeter(value) {
	updateValues(value, { millimeter: 10, meter: 0.01, kilometer: 0.00001 });
}

function funMeter(value) {
	updateValues(value, { millimeter: 1000, centimeter: 100, kilometer: 0.001 });
}

function funKilometer(value) {
	updateValues(value, { millimeter: 1000000, centimeter: 100000, meter: 1000 });
}
s