$(document).ready(function(){

	// configuração botão voltar ao topo
	jQuery("#voltarTopo").hide();

	jQuery('#voltarTopo').click(function () {
	     jQuery('body,html').animate({
	       scrollTop: 0
	     }, 800);
	    return false;
	});

	jQuery(window).scroll(function () {
	     if (jQuery(this).scrollTop() > 300) {
	        jQuery('#voltarTopo').fadeIn();
	     } else {
	        jQuery('#voltarTopo').fadeOut();
	     }
	 });

	// configuração do menu
	$('.stellarnav').stellarNav();

	// configuração do carousel slick
	$('#carousel .slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed:2000,
	});

	// pegando o click do menu
	var content = $('#content');
	// loading = new Image();
	// loading.src = 'images/load.gif';

	$('#menu a').click(function(e){
		var arq = pega_arq($(this).attr('href'));
		abre(arq,content);
		console.log(arq,content);
	});



	// iniciando a home
	abre(pega_arq(document.location.href),content);


});//document.ready

function abre(href,content){
	content.html('<p class="loading"><img src="images/load.gif"/></p>');
	$.ajax({
		url:href,
		success:function(response){
			content.delay(1000).hide().html(response).fadeIn();
			init_plugins(href);
		}
	});
}

function pega_arq(url){
	var file = url.split('#');
	return ( file[1] ) ? file[1]+'.html' : 'paginas/home.html';
}
function init_plugins( href ){
	if( href=='lightbox.html' ){
		$('#gallery a').click(function( e ){
			e.preventDefault();
		})
		$('#gallery').lightBox();
	}
}