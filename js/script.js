let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


function colorChange() {
	let hex_code = "#";

	for (let i = 0; i < 6; i++) {
		let random_index = Math.floor(Math.random() * hex_numbers.length);

		hex_code += hex_numbers[random_index];
	}

	document.getElementById("main__hex-code").innerHTML = hex_code;
	document.getElementsByTagName("body")[0].style.background = hex_code;
}

function gradientChange() {
	let hex_code_1 = "#";
	let hex_code_2 = "#";

	for (let i = 0; i < 6; i++) {
		let random_index_1 = Math.floor(Math.random() * hex_numbers.length);
		let random_index_2 = Math.floor(Math.random() * hex_numbers.length);

		hex_code_1 += hex_numbers[random_index_1];
		hex_code_2 += hex_numbers[random_index_2];
	}

	document.getElementById("main__hex-code").innerHTML = "from " + hex_code_1 + " to " + hex_code_2;
	document.getElementsByTagName("body")[0].style.background = "linear-gradient(45deg, " + hex_code_1 + ", " + hex_code_2 + ")";
}

function colorCopy() {
	let hex_code = document.getElementsByTagName("body")[0].style.background;

	let bgColor = "background: " + hex_code + ";";
	navigator.clipboard.writeText(bgColor);
}