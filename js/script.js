//FB
$(document).ready(function () {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : "331790907197189",
      cookie     : true,
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

});

//url
$(document).ready(function(){
	var sPageURL = window.location.hash;
	if(sPageURL == "#propietarios"){
		$('#menu').removeClass('hiddenI');
		$('.interior').addClass('hidden');
		$('#int_prop').removeClass('hidden');
		$('#in_prop').addClass('active');
		var width = $( window ).width();
		if (width > 500) {
			$("#slider2").slick({
				accessibility:true,
				arrows:true,
				slidesToShow: 4,
				slidesToScroll:1,
				speed:1000,
				dots:false,
				appendArrows:"#arrows_slider2",
				prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
				nextArrow:'<img src="img/flecha_derecha.png" class="right">'
			});
		}else{
			$("#movil1").slick({
				accessibility:true,
				arrows:true,
				slidesToShow: 1,
				slidesToScroll:1,
				speed:1000,
				dots:false,
				appendArrows:"#arrows_sliderM1",
				prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
				nextArrow:'<img src="img/flecha_derecha.png" class="right">'
			});
			$("#slider_cont_op").slick({
				accessibility:true,
				arrows:false,
				slidesToShow: 2,
				slidesToScroll:1,
				speed:1000,
				dots:false,
				autoplay: true,
				autoplaySpeed: 2000
			});
		}
	}else{
		if(sPageURL == "#profesionales"){
			$('#menu').removeClass('hiddenI');
			$('.interior').addClass('hidden');
			$('#int_prof').removeClass('hidden');
			$('#in_prof').addClass('active');
			var width = $( window ).width();
			if (width > 500) {
				$("#slider").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 4,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_slider",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
			}else{
				$("#movil2").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 1,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_sliderM",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
				$("#slider_cont_op2").slick({
					accessibility:true,
					arrows:false,
					slidesToShow: 2,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					autoplay: true,
					autoplaySpeed: 2000
				});
			}
		}
	}
})
//Navegation
function goTo(page){
	var width = $( window ).width();
	$('.interior').addClass('hidden');
	$(page).removeClass('hidden');
	if (width <= 768) {
		$('#proptietarios > .div_center').removeClass('hiddenI');
		$('#profesionales > .div_center').removeClass('hiddenI');
	}
	if(page.id == "home"){
		$('#menu').addClass('hiddenI');
	}else{
		if (page.id == "int_prop") {
			$('#menu').removeClass('hiddenI');
			$('.page').removeClass('active');
			$('#in_prop').addClass('active');
			var width = $( window ).width();
			if (width > 500) {
				$("#slider2").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 4,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_slider2",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
			}else{
				$("#movil1").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 1,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_sliderM1",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
				$("#slider_cont_op").slick({
					accessibility:true,
					arrows:false,
					slidesToShow: 2,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					autoplay: true,
					autoplaySpeed: 2000
				});
			}
			
		}else{
			$('#menu').removeClass('hiddenI');
			$('.page').removeClass('active');
			$('#in_prof').addClass('active');
			var width = $( window ).width();
			if (width > 500) {
				$("#slider").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 4,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_slider",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
			}else{
				$("#movil2").slick({
					accessibility:true,
					arrows:true,
					slidesToShow: 1,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					appendArrows:"#arrows_sliderM",
					prevArrow:'<img src="img/flecha_izquierda.png" class="left">',
					nextArrow:'<img src="img/flecha_derecha.png" class="right">'
				});
				$("#slider_cont_op2").slick({
					accessibility:true,
					arrows:false,
					slidesToShow: 2,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					autoplay: true,
					autoplaySpeed: 2000
				});
			}
		}
	}
}
//lightbox start
$('.close').click(function(){
	$('.lightbox').removeClass('active');
})
//hover two videos
$(document).ready(function (argument) {
	var width = $( window ).width();
	if (width > 768) {
		$(".two_videos").hover(function(){
		if(this.id == "proptietarios"){
			$('#proptietarios > .hover_start > .transp').addClass('hover');
			$('#proptietarios > .hover_start > .title_hover').addClass('hiddenI');
			setTimeout("$('#proptietarios > .hover_start ').addClass('hiddenI');", 500);
			$('#proptietarios > .div_center').css('transform', 'translate3d(0px, 0px, 0px) scale(.8)');
			$('#proptietarios').addClass('goBig');
			$('#profesionales').addClass('goRight');
		}else{
			$('#profesionales > .hover_start > .transp').addClass('hover');
			$('#profesionales > .hover_start > .title_hover').addClass('hiddenI');
			setTimeout("$('#profesionales > .hover_start ').addClass('hiddenI');", 500);
			$('#profesionales > .div_center').css('transform', 'translate3d(0px, 0px, 0px) scale(.8)');
			$('#profesionales').addClass('goBig');
			$('#proptietarios').addClass('goLeft');
		}
		}, function(){
			if(this.id == "proptietarios"){
				$('#proptietarios > .hover_start > .transp').removeClass('hover');
				$('#proptietarios > .hover_start > .title_hover').removeClass('hiddenI');
			setTimeout("$('#proptietarios > .hover_start ').removeClass('hiddenI');", 0);
				$('#proptietarios > .div_center').css('transform', 'translate3d(0px, 0px, 0px) scale(0)');
				$('#proptietarios').removeClass('goBig');
				$('#profesionales').removeClass('goRight');
			}else{
				$('#profesionales > .hover_start > .transp').removeClass('hover');
				$('#profesionales > .hover_start > .title_hover').removeClass('hiddenI');
			setTimeout("$('#profesionales > .hover_start ').removeClass('hiddenI');", 0);
				$('#profesionales > .div_center').css('transform', 'translate3d(0px, 0px, 0px) scale(0)');
				$('#profesionales').removeClass('goBig');
				$('#proptietarios').removeClass('goLeft');
			}
	});
	}
})

//Propietarios
$('.cont_prod > div').on('click', function(){
	if(this.id=='curado'){
		$('.prod.prop').removeClass('active');
		$('.prop_txt').addClass('hidden');
		$('#curado').addClass('active');
		$('#curado_info').removeClass('hidden');
	}else{
		if(this.id=='vibrado'){
			$('.prod.prop').removeClass('active');
			$('.prop_txt').addClass('hidden');
			$('#vibrado').addClass('active');
			$('#vibrado_info').removeClass('hidden');
		}else{
			if(this.id=='humedades'){
				$('.prod.prop').removeClass('active');
				$('.prop_txt').addClass('hidden');
				$('#humedades').addClass('active');
				$('#humedades_info').removeClass('hidden');
			}else{
				if(this.id == "grietas"){
					$('.prod.prop').removeClass('active');
					$('.prop_txt').addClass('hidden');
					$('#grietas').addClass('active');
					$('#grietas_info').removeClass('hidden');
				}
			}
		}
	}
})
//Profesionales
$('.cont_prod > div').on('click', function(){
	if($(this).hasClass('op1')){
		$('.prod.prof').removeClass('active');
		$('.prof_txt').addClass('hidden');
		$('.op1').addClass('active');
		$('#op1_info').removeClass('hidden');
	}else{
		if($(this).hasClass('op2')){
			$('.prod.prof').removeClass('active');
			$('.prof_txt').addClass('hidden');
			$('.op2').addClass('active');
			$('#op2_info').removeClass('hidden');
		}else{
			if($(this).hasClass('op3')){
				$('.prod.prof').removeClass('active');
				$('.prof_txt').addClass('hidden');
				$('.op3').addClass('active');
				$('#op3_info').removeClass('hidden');
			}else{
				if($(this).hasClass('op4')){
					$('.prod.prof').removeClass('active');
					$('.prof_txt').addClass('hidden');
					$('.op4').addClass('active');
					$('#op4_info').removeClass('hidden');
				}else{
					if($(this).hasClass('op5')){
						$('.prod.prof').removeClass('active');
						$('.prof_txt').addClass('hidden');
						$('.op5').addClass('active');
						$('#op5_info').removeClass('hidden');
					}else{
						if($(this).hasClass('op6')){
							$('.prod.prof').removeClass('active');
							$('.prof_txt').addClass('hidden');
							$('.op6').addClass('active');
							$('#op6_info').removeClass('hidden');
						}else{
							if($(this).hasClass('op7')) {
								$('.prod.prof').removeClass('active');
								$('.prof_txt').addClass('hidden');
								$('.op7').addClass('active');
								$('#op7_info').removeClass('hidden');
							};
						}
					}
				}
			}
		}
	}
})


//Mensaje

$('.mail').click(function(){
	$('#form').addClass('active');
	$('#sobre').addClass('hidden');
	$('#sobreHover').removeClass('hidden');
})
$('#close').click(function(){
	$('#form').removeClass('active');
	$('#sobre').removeClass('hidden');
	$('#sobreHover').addClass('hidden');
})

//Hover videos
$(".cont_video").hover(function(){
	jQuery(this).find(".img_video > span").addClass('hidden');
	jQuery(this).find(".opacity_vid").removeClass('hidden');
	jQuery(this).find(".img_video").addClass('zoom');
	jQuery(this).find(".txt_hover > hr").addClass('displeyRight');
	jQuery(this).find(".txt_hover > div").addClass('displeyRight');
	}, function(){
	jQuery(this).find(".img_video > span").removeClass('hidden');
	jQuery(this).find(".opacity_vid").addClass('hidden');
	jQuery(this).find(".img_video").removeClass('zoom');
	jQuery(this).find(".txt_hover > hr").removeClass('displeyRight');
	jQuery(this).find(".txt_hover > div").removeClass('displeyRight');	
});
//Abrir/cerrar video
$('.verVideo').click(function(){
	$('#ver_video').addClass('active');
})
$('#closeVideo').click(function(){
	$('#ver_video').removeClass('active');
	player.pauseVideo();
})
//Validar formulario
$(document).ready(function(){
	$('#btn_send').click(function(){
		name = $('#nombre').val();
		mail = $('#mail').val();
		number = $('#number').val();
		msj = $('#msj').val();
		var val_name = false,
			val_mail = false,
			val_number = false,
			val_msj = false
		var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
		if(name.length > 0 && name.length < 50){
			$('#nombre').removeClass('error')
			$('.title_form, .txt_form').addClass('hidden')
			val_name = true;	
		}else{
			$('#nombre').addClass('error')
			$('.title_form, .txt_form').removeClass('hidden')
			val_name = false;
		}
		if(mail.length > 5 && mail.length < 50 && expresion.test(mail)){
			$('#mail').removeClass('error')
			$('.title_form, .txt_form').addClass('hidden')
			val_mail = true;	
		}else{
			$('#mail').addClass('error')
			$('.title_form, .txt_form').removeClass('hidden')
			val_mail = false;
		}
		if(number.length > 7 && number.length < 15){
			$('#number').removeClass('error')
			$('.title_form, .txt_form').addClass('hidden')
			val_number = true;	
		}else{
			$('#number').addClass('error')
			$('.title_form, .txt_form').removeClass('hidden')
			val_number = false;
		}
		if(msj.length > 0){
			$('#msj').removeClass('error')
			$('.title_form, .txt_form').addClass('hidden')
			val_msj = true;	
		}else{
			$('#msj').addClass('error')
			$('.title_form, .txt_form').removeClass('hidden')
			val_msj = false;
		}
		if(val_name && val_mail && val_number && val_msj){
			$('#error').addClass('hidden');
			$('.title_form, .txt_form').removeClass('hidden')
			$('#nombre').val('');
			$('#mail').val('');
			$('#number').val('');
			$('#msj').val('');
			$('#msj_gracias').removeClass('hidden');
		}else{
			$('#error').removeClass('hidden');
			$('.title_form, .txt_form').addClass('hidden')
		}
	})
})


//Controles video

var player,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: '100%',
        height: 400,
        videoId: '',
        playerVars: {
            controls: 0
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);

}


// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    var currentPos = player.getCurrentTime(); //Get currenttime
	var maxduration = player.getDuration(); //Get video duration
	var percentage = 100 * currentPos / maxduration; //in %
	$('.timeBar').css('width', percentage+'%');
}

var timeDrag = false;	/* Drag status */
$('.progressBar').mousedown(function(e) {
	timeDrag = true;
	updatebar(e.pageX);
});
$(document).mouseup(function(e) {
	if(timeDrag) {
		timeDrag = false;
		updatebar(e.pageX);
	}
});
$(document).mousemove(function(e) {
	if(timeDrag) {
		updatebar(e.pageX);
	}
});

//update Progress Bar control
var updatebar = function(x) {
	var progress = $('.progressBar');
	var maxduration = player.getDuration(); //Video duraiton
	var position = x - progress.offset().left; //Click pos
	var percentage = 100 * position / progress.width();

	//Check within range
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}

	//Update progress bar and video currenttime
	$('.timeBar').css('width', percentage+'%');
	var newTime = maxduration * percentage / 100;
	player.seekTo(newTime);
};

// Playback

$('.btnPlay').on('click', function () {
	var state = player.getPlayerState();
	if (state == 1) {
		player.pauseVideo();
		$('.btnPlay').css('background', 'url(img/play.png) no-repeat');
	}else{
		player.playVideo();
		$('.btnPlay').css('background', 'url(img/pausa.png) no-repeat');
	}
    
});


$('#volume-input').on('change', function () {
    player.setVolume($(this).val());
});
$('.volumeBar').on('mousedown', function(e) {
	var volume = $('.volumeBar');
    var position = e.pageX - volume.offset().left;
    var percentage = 100 * position / volume.width();
    $('.volume').css('width', percentage+'%');
    player.setVolume(percentage);
});
$('#volMas').on('click', function(){
	var maxWidth = $('.volumeBar').width();
	var width = $('.volume').width();
	width += 10;
	var percentage = (width * 100)/maxWidth;
	$('.volume').css('width', percentage+'%');
	player.setVolume(percentage);
})
$('#volMenos').on('click', function(){
	var maxWidth = $('.volumeBar').width();
	var width = $('.volume').width();
	width -= 10;
	var percentage = (width * 100)/maxWidth;
	$('.volume').css('width', percentage+'%');
	player.setVolume(percentage);
})

//Mostrar/ocultar controles
$(".hover-video").hover(function(){
	$('#cont_controles').fadeIn(1000);
	}, function(){
		setTimeout("$('#cont_controles').fadeOut(1000);", 1000);
});

// Seleccionar video

$('.verVideo').on('click', function () {

    var url = $(this).attr('data-video-id');

    player.cueVideoById(url);
    var video = this.id;
    switch (video){
    	case 'hija':
    		$('.title_ver').text('Tu futuro y el de tus hijos está en tus manos..');
    		break;
    	case 'zapatos':
    		$('.title_ver').text('Vida en pareja arruinada.');
    		break;
    	case 'arquitecto':
    		$('.title_ver').text('Tu trabajo siempre hablará por ti.');
    		break;
    }

});


// Helper Functions

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

//responsive

$(document).ready(function(){
	var width = $( window ).width();
	if (width <= 768) {
		$('#proptietarios > .div_center').removeClass('hiddenI');
		$('#profesionales > .div_center').removeClass('hiddenI');
	}
})


//Animacion video hover
$( "div.enterleave" )
  .mouseenter(function() {
    n += 1;
    $( this ).find( "span" ).text( "mouse enter x " + n );
  })
  .mouseleave(function() {
    $( this ).find( "span" ).text( "mouse leave" );
  });

//Abrir aviso de privacidad
$('#verAviso').click(function(){
	$('#aviso').addClass('active');
})
$('#closeAviso').click(function(){
	$('#aviso').removeClass('active');
})

//share FB
$(".shareFB").click(function(event) {
  console.log("FB")
  FB.ui({
    name: 'CEMEX',
    method: 'feed',
    link: location.href,
    caption: 'CEMEX',
    picture: 'http://cemexarquitectos.misapps.com.mx/img/share_cemex.jpg',
    description: 'HAY DECISIONES QUE PUEDEN DEFINIR UNA VIDA, COMO LA ELECCIÓN DEL CONCRETO CON QUE CONSTRUIR UNA CASA. ASEGÚRATE DE QUE SEA LA CORRECTA.',
  }, function(response){
  });
});

