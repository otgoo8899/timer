var time = document.getElementsByTagName('h1')[0]
var second=0, minute=0, hour=0; doil=0;
var ol = document.getElementsByTagName('ol')[0]
function watch(){
	doil++;
if(doil>99){
	second++;
	doil=0;
	if(second>59){
		minute++;
		second=0;
		if(minute>59){
			hour++;
			minute=0;
		}
	}
}	
	//temnary operator ? :
	var d = doil<10 ? "0"+doil : doil;
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText = h+":"+m+":"+s+":"+d;
	
}
var a;
 
function start(){
	a = setInterval(watch,1000);
	document.getElementsByTagName('button')[0].disabled=true;
	document.getElementsByTagName('button')[1].disabled=false;
	d = setInterval(watch,10)

}

function stop(){
 clearInterval(a)
 clearInterval(d)
	document.getElementsByTagName('button')[0].disabled=false;
	document.getElementsByTagName('button')[1].disabled=true;

}
function restart(){
	ol.innerText=''
	doil=0;
	second=0;
	minute=0;
	hour=0;
	time.innerText="00:00:00:00";
	clearInterval(a)
	document.getElementsByTagName('button')[0].disabled=false;
}
function lap(){
	// document.createElement('tag');->shine tag uusgene
	var li = document.createElement('li');
	li.innerText=time.innerText;
	console.log(li);
	// tagName.append(tagName);
	ol.append(li);
}
