

function calculate() {
	var lineCount = parsInt(document.getElementById("linecount").value);
	var accuracy = parsInt(document.getElementById("accuracy").value);
	var result = lineCount + accuracy;
	document.getElementById("payable").value = result;
	
	
}	


