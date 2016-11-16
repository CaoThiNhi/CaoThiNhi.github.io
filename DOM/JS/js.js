function changeFontSize(x){
				document.getElementsByClassName("doanvan")[0].style.fontSize = x+"px";
				document.getElementsByClassName("doanvan")[1].style.fontSize = x+"px";
				document.getElementsByClassName("doanvan")[2].style.fontSize = x+"px";
				
		}

function increaseFontSize(x){
  changeFontSize(x);
  var tmp=x+1;
  if(tmp>=30)
    document.getElementsByClassName("doanvan")[1].style.fontSize =30+"px";
  else
    document.getElementsByClassName("doanvan")[1].style.fontSize =x+ 1+"px";
  
}

function decreaseFontSize(x){
  changeFontSize(x);
  var tmp=x+1;
  if(tmp<=10)
    document.getElementsByClassName("doanvan")[2].style.fontSize =10+"px";
  else
    document.getElementsByClassName("doanvan")[2].style.fontSize =x- 1+"px";
}

function Color(){
        document.getElementsByClassName("doanvan")[0].style.color = "blue";
				document.getElementsByClassName("doanvan")[1].style.color = "pink";
				document.getElementsByClassName("doanvan")[2].style.color = "red";
}

function changeBgColor(){
  document.getElementById("wrap").style.background = "#eee";

}

function copyContent(){
  document.getElementById("p1").innerHTML = document.getElementsByClassName("doanvan")[1].innerHTML;
}



