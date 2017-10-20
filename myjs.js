///////variables///////////
var chatStr = "";

/////////P1 chat////////////
function changeChatStr1(){
	chatStr = document.getElementById("p1Input").value;
	document.getElementById("p1Input").value = ""
	replaceEmojis()
	cencorship()
}

/////////P2 chat////////////
function changeChatStr2(){
	chatStr = document.getElementById("p2Input").value;
	document.getElementById("p2Input").value = ""
	replaceEmojis()
	cencorship()
}

/////////chat Display////////
function createChat(chatNum){
	var ndiv = document.createElement("div");
	ndiv.innerHTML = chatStr;
	if (chatNum == 1){
		ndiv.style.backgroundColor = "#AFA";
	}
	else if(chatNum == 2){
		ndiv.style.backgroundColor = "#FAF";
		ndiv.style.textAlign = "right"
	}
	ndiv.style.padding = "10px"
	document.getElementById("chatDisplay").appendChild(ndiv);
	
}

//////replace Emojies////////
function replaceEmojis(){
	chatStr = chatStr.replace(":)", "<img class='emoji' src='imgs/smile.png' />");
	chatStr = chatStr.replace(":(", "<img class='emoji' src='imgs/sad.png' />");
	chatStr = chatStr.replace("<3", "<img class='emoji' src='imgs/heart.png' />");
	chatStr = chatStr.replace("shit", "<img class='emoji' src='imgs/poop.png' />");
	chatStr = chatStr.replace("XD", "<img class='emoji' src='imgs/XD.png' />");
}

function  cencorship(){
	chatStr = chatStr.replace("fuck", "****");
	chatStr = chatStr.replace("bitch", "*****");
	chatStr = chatStr.replace("dick", "****");
	chatStr = chatStr.replace("pussy", "*****");
}
///////Interactions/////////
document.getElementById("p1Input").addEventListener("keyup",function(ev){
	if(ev.keyCode == 13){
		changeChatStr1();
		createChat(1);
	}
});
document.getElementById("p2Input").addEventListener("keyup",function(ev){
	if(ev.keyCode == 13){
		changeChatStr2();
		createChat(2);
	}
});