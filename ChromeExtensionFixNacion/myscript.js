
let documento_original = document.querySelector("#main > div > div:nth-child(2) > div > article").getInnerHTML();
let data_financiero = document.querySelector("#main > div > div:nth-child(2) > div > article").getInnerHTML();

$(function() { 
     
  setTimeout(function(){ 
		
debugger

 let href = location.href;
  
  if(href.includes("nacion"))  
  {
	  //Nacion
	  //console.log(documento_original);		
	  documento_original = documento_original.replaceAll("article","regalo").replaceAll("default_","regalo_");		
	  document.querySelector("#main > div > div:nth-child(2) > div > article").innerHTML = documento_original;
	    document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style"," transform: rotate(-10deg);");
	 	 
	  return;	  
  }
  
  if(href.includes("elfinancierocr"))
  {
	   //Financiero	  	 
	  // document.querySelector("body > div.tp-modal").setAttribute("style", "display:none;");
      // document.querySelector("body > div.tp-backdrop.tp-active").setAttribute("style", "display:none;");
	  // document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("style", "overflow-y:auto;");	  	  	
	  // data_financiero = data_financiero.replaceAll("article","regalo").replaceAll("default_","regalo_");		  
	  // document.querySelector("#main > div > div:nth-child(2) > div > article").innerHTML = documento_original;
	  // document.querySelector("#main").setAttribute("style", "overflow-y:auto;max-height: 900px;");	  		
	
	  document.querySelector(".tp-modal").setAttribute("style","display:none;");
	  document.querySelector(".tp-backdrop").setAttribute("style","display:none;");
	  document.querySelector("#main").setAttribute("style", "overflow-y:auto;max-height: 1200px;");
	  document.querySelector("*").setAttribute("style", "overflow-y:auto;");
	  document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style"," transform: rotate(-10deg);");
	

	
	  
	  
	  
	  return;	  
  }
		 	 
	  console.log('Listo FixNacionFinanciero!');
	  
  }, 5000);
   
  
});