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
					$(this).siblings("h3").removeClass("active");
				});

			});