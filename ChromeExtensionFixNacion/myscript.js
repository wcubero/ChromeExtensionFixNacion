

try {

	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("opacity", "1");
	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("style", "height: 600px;");
	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("style", "overflow-y:auto;max-height: 1200px;");
	
	let data_financiero = document.querySelector("#main > div > div:nth-child(2) > div > article").getInnerHTML();

	$(function () {

		setTimeout(function () {

			let href = location.href;
						
			if (href.includes("elfinancierocr")) {				
				
				//Financiero	  	 	 			 
				console.log(data_financiero);				 
				data_financiero = data_financiero.replaceAll("avatar", "");		
				data_financiero = data_financiero.replaceAll("avatar-skeleton", "");						
				data_financiero = data_financiero.replaceAll("react-loading-skeleton", "");				
				data_financiero = data_financiero.replaceAll("opacity", "");		 
				data_financiero = data_financiero.replaceAll("display", "");		
				data_financiero = data_financiero.replaceAll("visibility", "");											
				document.querySelector("#main > div > div:nth-child(2) > div > article").innerHTML = data_financiero;
																
				document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style", " transform: rotate(-10deg);");

				document.querySelector(".tp-modal").setAttribute("style", "display:none;");
				document.querySelector(".tp-backdrop").setAttribute("style", "display:none;");
				document.querySelector("#main").setAttribute("style", "overflow-y:auto;max-height: 1200px;");
				document.querySelector("*").setAttribute("style", "overflow-y:auto;");
				document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style", " transform: rotate(-10deg);");


				return;
			}

			console.log('Listo FixNacionFinanciero!');

		}, 5000);


	});

} catch (e) {
	console.log(e);
}



try {

	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("opacity", "1");
	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("style", "height: 600px;");
	document.querySelector("#main > div > div:nth-child(2) > div > article").setAttribute("style", "overflow-y:auto;max-height: 1200px;");
		    	
	let documento_original = document.querySelector("#main > div > div:nth-child(2) > div > article").getInnerHTML();

	$(function () {

		setTimeout(function () {
 
			let href = location.href;

			if (href.includes("nacion")) {
			 
				//Nacion
				console.log(documento_original);				 
				documento_original = documento_original.replaceAll("avatar", "");		
				documento_original = documento_original.replaceAll("avatar-skeleton", "");						
				documento_original = documento_original.replaceAll("react-loading-skeleton", "");				
				documento_original = documento_original.replaceAll("opacity", "");		 
				documento_original = documento_original.replaceAll("display", "");		
				documento_original = documento_original.replaceAll("visibility", "");											
				document.querySelector("#main > div > div:nth-child(2) > div > article").innerHTML = documento_original;
																
				document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style", " transform: rotate(-10deg);");

				document.querySelector(".tp-modal").setAttribute("style", "display:none;");
				document.querySelector(".tp-backdrop").setAttribute("style", "display:none;");
				document.querySelector("#main").setAttribute("style", "overflow-y:auto;max-height: 1200px;");
				document.querySelector("*").setAttribute("style", "overflow-y:auto;");
				document.querySelector("#main-nav > div.news-theme-navigation-container.news-theme-navigation-bar.logo-left.horizontal-links > div.nav-logo.nav-logo-left.nav-logo-show > a > img").setAttribute("style", " transform: rotate(-10deg);");

				return;
			}		 

			console.log('Listo FixNacionFinanciero!');

		}, 5000);


	});

} catch (e) {
	console.log(e)
}

