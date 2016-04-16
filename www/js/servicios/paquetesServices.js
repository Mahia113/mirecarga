//recargas.service es el nombre del servicio

angular.module('recargas.service', ['ionic'])

.factory('paquetesService',function()
{
	var carac_paquete1 = '<b>Características del paquete:</b>'+
		    			  '<br><br>- Llamadas ilimitadas (México, USA, Canadá)<br>'+
		     			  '- Mensajes ilimitados (México, USA, Canadá)';

	var carac_paquete2 = '<b>Características del paquete:</b>'+
		    			  '<br><br>- Llamadas ilimitadas (México, USA, Canadá)'+
		     			  '<br>- Mensajes ilimitados (México, USA, Canadá)'+
		     			  '<br>- WhatsApp ilimitado (México)'+
		     			  '<br>- Facebook ilimitado (México)'+
		     			  '<br>- Facebook Messenger ilimitado (México)'+
		     			  '<br>- Twitter ilimitado (México)';

    var carac_paquete3 = '<b>Características del paquete:</b>'+
		    			  '<br><br>- Llamadas ilimitadas (México, USA, Canadá)'+
		     			  '<br>- Mensajes ilimitados (México, USA, Canadá)'+
		     			  '<br>- WhatsApp ilimitado (México)'+
		     			  '<br>- Facebook ilimitado (México)'+
		     			  '<br>- Facebook Messenger ilimitado (México)'+
		     			  '<br>- Twitter ilimitado (México)'+
		     			  '<br>- 1 GB de navegación (Indistinto)';

	function objclass(titulo,subtitulo,imagen,caracteristicas,costo)
	{
		this.titulo = titulo;
		this.subtitulo = subtitulo;
		this.imagen = imagen;
		this.caracteristicas = caracteristicas;
		this.costo =  costo;
	}

	return{
			objetos : [
			new objclass("Paquete 1","Básico","img/11.png",carac_paquete1,"11"),
			new objclass("Paquete 2","Intermedio","img/22.png",carac_paquete2,"22"),
			new objclass("Paquete 3","Alto consumo","img/33.png",carac_paquete3,"33")
					    ]
		};

});

