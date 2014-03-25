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
			$("div.promo-h3 > h3.promo").addClass("hide");
			$("div.promo-h3 > h3.promo:nth-child(1)").removeClass("hide");
		});

	});

$(document).ready(function(){		
		$(".slider-nav li:nth-child(2) a").click(function(){
			$("div.promo-h3 > h3.promo").addClass("hide");
			$("div.promo-h3 > h3.promo:nth-child(2)").removeClass("hide");
		});

	});

$(document).ready(function(){		
		$(".slider-nav li:nth-child(3) a").click(function(){
			$("div.promo-h3 > h3.promo").addClass("hide");
			$("div.promo-h3 > h3.promo:nth-child(3)").removeClass("hide");
		});

	});

$(document).ready(function(){		
		$("#cards-selection-web .app").click(function(){
			$("#cards-selection-web.open").toggleClass("open");
		});

	});

// $(document).ready(function(){
// 		$("#cards-selection-web li,#cards-selection-mobile li").click(function(){
			
// 			var checkeds = $(this).parents("ul").find("input:checked").size();

// 				if ( $(this).find(".check-field").is(':checked') ){
// 					$(this).find(".check-field").prop('checked',false);
// 					$(this).toggleClass("on-check");
// 				}

// 				else{
// 					if(checkeds >= 2){
						
// 					}
// 					else{
// 						$(this).find(".check-field").prop('checked',true);
// 						$(this).toggleClass("on-check");
// 					}
// 				}

// 		});
// });


// gral script for radio buttons on the header's dropdown 

$(document).ready(function(){		

		$("#cards-selection-web li,#cards-selection-mobile li").click(function(){

			$(this).parents("ul").find("li.on-check").toggleClass("on-check");

			if ( $(this).find(".check-field").is(':checked') ){
				$(this).find(".check-field").prop('checked',false);
				$(this).removeClass("on-check");
			}

			else{
				$(this).find(".check-field").prop('checked',true);
				$(this).addClass("on-check");
				}
		});

		$("#cards-selection-web li.buy-card,#cards-selection-mobile li.buy-card").click(function(){
			$("li.aa-card.on-check").find(".check-field").prop('checked',false);
			$("li.aa-card.on-check").removeClass("on-check");
		});
			
		$("#cards-selection-web li .check-field,#cards-selection-mobile li .check-field").click(function(e){
			e.stopPropagation();

			$(this).parents("ul").find("li.on-check").toggleClass("on-check");

			if ( $(this).is(':checked') ){
				$(this).prop('checked',false);
				$(this).parents("li").removeClass("on-check");
			}
			else{
				$(this).prop('checked',true);
				$(this).parents("li").addClass("on-check");
			}

		});

		$("#cards-selection-web li.buy-card .check-field,#cards-selection-mobile li.buy-card .check-field").click(function(e){
			e.stopPropagation();

			$("li.aa-card.on-check").find(".check-field").prop('checked',false);
			$("li.aa-card.on-check").removeClass("on-check");
		});
	});

// particular case: click on Aerolineas Argentinas Card.

$(document).ready(function(){		

		$("#cards-selection-web li.aa-card:not(on-check),#cards-selection-mobile li.aa-card:not(on-check)").click(function(){
			
			if ( $("li.buy-card.on-check").find(".check-field").is(':checked') ){
				$("li.buy-card.on-check").find(".check-field").prop('checked',false);
			}

			$("li.buy-card.on-check").toggleClass("on-check");
		});
			
		$("#cards-selection-web li.aa-card:not(on-check) .check-field,#cards-selection-mobile li.aa-card:not(on-check) .check-field").click(function(e){
			e.stopPropagation();

			
			if ( $("li.buy-card.on-check").find(".check-field").is(':checked') ){
				$("li.buy-card.on-check").find(".check-field").prop('checked',false);
			}

			$("li.buy-card.on-check").toggleClass("on-check");

		});
	});

// script para las paginas que se reemplazan arriba al click en la desplegable - caso web
$(document).ready(function(){
	// ************* BUY CARDS ******************
	$("#cards-selection-web li.buy-card:nth-child(1)").click(function(){
		$(".image-card-web ul.buy-cards-list li:nth-child(1)").toggleClass("hidden-card");
		$(".image-card-web ul.buy-cards-list li:nth-child(1)").siblings("li").addClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-web li.buy-card:nth-child(2)").click(function(){
		$(".image-card-web ul.buy-cards-list li:nth-child(2)").toggleClass("hidden-card");
		$(".image-card-web ul.buy-cards-list li:nth-child(2)").siblings("li").addClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-web li.buy-card:nth-child(3)").click(function(){
		$(".image-card-web ul.buy-cards-list li:nth-child(3)").toggleClass("hidden-card");
		$(".image-card-web ul.buy-cards-list li:nth-child(3)").siblings("li").addClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-web li.buy-card:nth-child(4)").click(function(){
		$(".image-card-web ul.buy-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-web ul.buy-cards-list li:nth-child(4)").siblings("li").addClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	// ************* CREDIT CARDS ******************

	$("#cards-selection-web li.credit-card:nth-child(1)").click(function(){
		$(".image-card-web ul.credit-cards-list li:nth-child(1)").toggleClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(1)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-web li.credit-card:nth-child(2)").click(function(){
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").toggleClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(2)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-web li.credit-card:nth-child(3)").click(function(){
		$(".image-card-web ul.credit-cards-list li:nth-child(3)").toggleClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(3)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-web li.credit-card:nth-child(4)").click(function(){
		$(".image-card-web ul.credit-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-web ul.credit-cards-list li:nth-child(4)").siblings("li").addClass("hidden-card");
	});

	// ********* caso particular AA ****************
	$("#cards-selection-web li.credit-card.aa-card").click(function(){
		// $(".image-card-web ul.credit-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-web ul.buy-cards-list li").addClass("hidden-card");
	});

});

// script para las paginas que se reemplazan arriba al click en la desplegable - caso mobile
$(document).ready(function(){
	// ************* BUY CARDS ******************
	$("#cards-selection-mobile li.buy-card:nth-child(1)").click(function(){
		$(".image-card-mobile ul.buy-cards-list li:nth-child(1)").toggleClass("hidden-card");
		$(".image-card-mobile ul.buy-cards-list li:nth-child(1)").siblings("li").addClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.buy-card:nth-child(2)").click(function(){
		$(".image-card-mobile ul.buy-cards-list li:nth-child(2)").toggleClass("hidden-card");
		$(".image-card-mobile ul.buy-cards-list li:nth-child(2)").siblings("li").addClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.buy-card:nth-child(3)").click(function(){
		$(".image-card-mobile ul.buy-cards-list li:nth-child(3)").toggleClass("hidden-card");
		$(".image-card-mobile ul.buy-cards-list li:nth-child(3)").siblings("li").addClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.buy-card:nth-child(4)").click(function(){
		$(".image-card-mobile ul.buy-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-mobile ul.buy-cards-list li:nth-child(4)").siblings("li").addClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").addClass("hidden-card");
	});

	// ************* CREDIT CARDS ******************

	$("#cards-selection-mobile li.credit-card:nth-child(1)").click(function(){
		$(".image-card-mobile ul.credit-cards-list li:nth-child(1)").toggleClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(1)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.credit-card:nth-child(2)").click(function(){
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").toggleClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(2)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.credit-card:nth-child(3)").click(function(){
		$(".image-card-mobile ul.credit-cards-list li:nth-child(3)").toggleClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(3)").siblings("li").addClass("hidden-card");
	});

	$("#cards-selection-mobile li.credit-card:nth-child(4)").click(function(){
		$(".image-card-mobile ul.credit-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-mobile ul.credit-cards-list li:nth-child(4)").siblings("li").addClass("hidden-card");
	});

	// ********* caso particular AA ****************
	$("#cards-selection-mobile li.credit-card.aa-card").click(function(){
		// $(".image-card-mobile ul.credit-cards-list li:nth-child(4)").toggleClass("hidden-card");
		$(".image-card-mobile ul.buy-cards-list li").addClass("hidden-card");
	});

});


$(document).ready(function(){		
		$("#cards-selection-mobile").hide();
		$(".hide-for-medium-up .cards-select-link.no-arrow, #cards-selection-mobile > a.app").click(function(){
			
			$("#cards-selection-mobile").slideToggle("slow");

		});
	});

$(document).ready(function(){		
		$("header .header-form .search-icon, header .header-form .dir-icon,#cards-selection-mobile > a.app").click(function(e){
			e.stopPropagation();
		});
	});

$(document).ready(function(){
		$(window).resize(function(){
			if( $(window).width() > 767){
				$("#cards-selection-mobile").hide();

			}
		});
});

$(document).ready(function(){
		$(window).resize(function(){
			if( $(window).width() < 768){
				$(".search-field").attr("placeholder","Ej: Marcas, etc...");
				$(".dir-field").attr("placeholder","Ej: Direccion, etc...");
			}

			else{
				$(".search-field").attr("placeholder","Ej: Marcas, Restaurantes, etc...");
				$(".dir-field").attr("placeholder","Ej: Direccion, Ciudad, etc...");
			}
		});
});