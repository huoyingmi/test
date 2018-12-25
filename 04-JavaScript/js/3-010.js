function toChange(){
	var oBox = document.getElementById('box');
	oBox.style.width='300px';
	oBox.style.height='300px';
	oBox.style.backgroundColor='red';
}
function toOriginal(){
	var oBox = document.getElementById('box');
	oBox.style.width='100px';
	oBox.style.height='100px';
	oBox.style.backgroundColor='#fff';
}

var oBox = document.getElementById('box');
oBox.onmouseover = toChange;
oBox.onmouseout = toOriginal;