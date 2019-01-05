window.onload = function(){
	 function toRed(){
		oBox.style.background = 'red';
	}
	var oBox = document.getElementById('box');
	oBox.onclick = toRed;
}