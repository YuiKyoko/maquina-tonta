window.addEventListener("load",function(){
  var boton = document.getElementById("cri");
	var cont = 1;
	boton.addEventListener("click", function(){
		if (cont == 1){
			document.getElementsByClassName("circulo")[0].style.borderColor = "#79a8a9";
			document.getElementById("click").placeholder = "lila";
			document.getElementsByClassName("circulo")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[2].style.borderColor = "transparent";
		}
		if (cont == 2){
			document.getElementsByClassName("circulo")[1].style.borderColor = "#D1B6E1";
			document.getElementById("click").placeholder = "cobalto";
			document.getElementsByClassName("circulo")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[2].style.borderColor = "transparent";
		}
		if (cont == 3){
			document.getElementsByClassName("circulo")[2].style.borderColor = "#f8ecc9";
			document.getElementById("click").placeholder = "rosa";
			document.getElementsByClassName("circulo")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[1].style.borderColor = "transparent";
			cont = 0;
		}
		cont ++;
	});
	 var boton = document.getElementById("super");
	boton.addEventListener("click", function(){
		var presiona = document.getElementById("click").value;
		if(presiona == "lila"){
			document.getElementsByClassName("circulo")[0].style.borderColor = "#79a8a9";
			document.getElementsByClassName("circulo")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[2].style.borderColor = "transparent"
		} else if(presiona == "cobalto"){
			document.getElementsByClassName("circulo")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[1].style.borderColor = "#D1B6E1";
			document.getElementsByClassName("circulo")[2].style.borderColor = "transparent"
		}else if(presiona == "rosa"){
			document.getElementsByClassName("circulo")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circulo")[2].style.borderColor = "#f8ecc9"
		}
	});
})
