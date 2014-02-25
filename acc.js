
$(document).ready(function(){
	$("#accordion div").hide();
	$("#accordion h3").click(function(){
		$(this).next("div").slideToggle("slow")
		.siblings("div:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});

/*

<div id="accordion" class="dropdown_boxes">
		<ul>
			
			<li>
				<h3 class="active">
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/geolocalizacion.png"></span>Geolocalización<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: block;">
					<p>Rápidamente identifica al usuario, el lugar desde donde se conecta a la aplicación y le muestra un mapa que le permite guiarse y llegar sin problemas al comercio de destino.</p>
				</div>
			</li>
			
			<li>
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/promociones-al-instante.png"></span>Promociones al instante y en tiempo real<span class="arrow"></span>
				</h3>
				<div class="hide" style="display: none;">
					<p>Configure sus acciones de marketing para fechas y horarios específicos, y emita alertas a los clientes que están por la zona para que se acerquen a adquirir un producto a un precio súper especial.</p>
				</div>
			</li>

			<li>
					
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/promociones-por-cliente.png"></span>Promociones por tipo de cliente<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: none;">
					<p>Determine su target y desarrolle acciones específicas para cada segmento. Cree campañas distintas por zona geográfica y usuario.</p>
					
				</div>
			</li>

			<li>
					
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/catalogo.png"></span>Catálogo para navegar y comprar<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: none;">
					<p>Un intuitivo catálogo le permite a sus usuarios navegar geográficamente, seleccionando las promociones de mayor interés, disparando una compra a un comercio determinado, entre muchas otras opciones.</p>
				</div>
			</li>

			<li>
					
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/me-gusta.png"></span>Me Gusta!<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: none;">
					<p>The Brand Show se integra completamente a las redes sociales, permitiendo a sus clientes compartir el sitio en el que están, realizar comentarios sobre la publicación, y promocionar su marca a nivel integral en las dos redes sociales más utilizadas, como Facebook y Twitter.</p>
				</div>
			</li>

			<li>
					
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/descarga.png"></span>Descarga “Over The Air” sin costo adicional<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: none;">
					<p>Según usted elija, la aplicación no demorará un costo adicional en el celular de sus clientes. Simplemente comenzará a funcionar mediante la descarga ‘Over The Air’ por la red celular, por SMS o por PC. De forma muy fácil y en solo segundos tendrá un completo catálogo de promociones y productos con geolocalización listo para usar.</p>
				</div>
			</li>

			<li>
					
				<h3>
					<span><img src="http://testing.theuxdepartment.com/mobilenik/wp-content/uploads/2013/06/estrella.png"></span>Una poderosa herramienta de Branding<span class="arrow"></span>
				</h3>				
				<div class="hide" style="display: none;">
					<p>Incorporando The Brand Show su marca estará presente en su cliente en todo momento. Ninguna acción de marketing y ningún medio le asegura este nivel de llegada. Ahora puede estar más cerca que nunca. Ahora puede estar con su cliente todo el día, a tan sólo un click desde su celular.</p>
				</div>
			</li>

		</ul>
	</div>

*/