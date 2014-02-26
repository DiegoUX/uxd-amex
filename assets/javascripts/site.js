$(document).ready(function(){
	    $("a.mobile-btn").click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			$("body").toggleClass("active");
		
		});
	});

$(document).ready(function(){
		$(".accordions-wrapper h3.link-acc").click(function(){
			$(this).next(".acc-item-content").slideToggle("slow");
			$(this).toggleClass("active");
		});

	});

$(document).ready(function(){
		$(".checks-section.hide-for-medium-up > ul").hide();
		$(".checks-section h3").click(function(){
			$(this).next("ul").slideToggle("slow");
			$(this).toggleClass("active");
			// $(this).siblings("h3").removeClass("active");
		});

	});

$(document).ready(function(){		
		$(".slider-nav li:nth-child(1) a").click(function(){
			$("h3.promo").empty();
			$("h3.promo").append("2x1 en Cinemark es un beneficio para disfrutar todos los días y con quien quiera.");
			// $(this).siblings("h3").removeClass("active");
		});

	});

$(document).ready(function(){		
		$(".slider-nav li:nth-child(2) a").click(function(){
			$("h3.promo").empty();
			$("h3.promo").append("Registre su email y participe del Sorteo por 3 Smart TV 3D");
			// $(this).siblings("h3").removeClass("active");
		});

	});

$(document).ready(function(){		
		$(".slider-nav li:nth-child(3) a").click(function(){
			$("h3.promo").empty();
			$("h3.promo").append("Con D&eacute;bito Express participe en el sorteo de &oacute;rdenes de compra en Disco, Jumbo, Easy, Vea y Blaisten");
			// $(this).siblings("h3").removeClass("active");
		});

	});

$(document).ready(function(){		
		$("#cards-selection-web .app").click(function(){
			$("#cards-selection-web.open").toggleClass("open");
		});

	});

$(document).ready(function(){		
		$("#cards-selection-web li").click(function(){

			$(this).toggleClass("on-check");
			
			if ( $(this).find(".check-field").is(':checked') ){
				$(this).find(".check-field").prop('checked',false);
			}
			else{
				$(this).find(".check-field").prop('checked',true);
			}
				
		});
	});

