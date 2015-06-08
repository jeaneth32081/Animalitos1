// JavaScript 

$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('Perro','audio/Perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Gato','audio/Gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Pollito','audio/Pollito.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Serpiente','audio/Serpiente.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Oso','audio/Oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Loro','audio/Loro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Tigre','audio/Tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Raton','audio/Mono.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Elefante','audio/Elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Totuga','audio/Tortuga.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Cerdo','audio/Cerdo.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		},false); //deviceready
}); //ready