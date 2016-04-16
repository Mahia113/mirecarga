
angular.module('recargas.controllers',[])

//Controlador para la vista home, que es la primera que se muestra en la App
.controller('ControlHome', function($scope, $state, paquetesService)
	{
		$scope.verPlanes = function()
		{
			$state.go('paquetes');
		}
	}
) //Termina el controller de la vista Home

// Controlador para la vista paquetes, que es la segunda vista que se muestra en la App
.controller('ControlPaquetes', function($scope, $state, paquetesService)
{
	$scope.detallesP1 = function(indice)
	{
		console.log(indice);

		$state.go('paqueteDetalles',{'indice':indice});
	}

	$scope.regresarPaquetes = function()
	{
		 window.history.back();
	}

	$scope.paquetes  = paquetesService.objetos;
})//Termina el controller de la vista Paquetes

// Controlador para la vista Paquete detalles, que es la tercera vista en la App
.controller('ControlPaqueteDetalles', function($scope, $state, $stateParams, paquetesService)
{
	var indice = $stateParams.indice;

	console.log(indice);

	$scope.regresarPaquetes = function()
	{
		 window.history.back();
	}

	$scope.formulario = function()
	{
		 $state.go('registro',{'indice':indice});
	}

	//console.log( paquetesService.objetos[indice]);
	$scope.mostrar  = paquetesService.objetos[indice];

})//Fin del contralador de la vista Paquete detalles

.controller('ControlRegistro', function($scope, $state, $stateParams,$http, paquetesService)
{
	console.log($stateParams.indice);
	$scope.regresarPaquetes = function()
	{
		 window.history.back();
	}

	$scope.submitForm = function (formData)
	{
		var indice = $stateParams.indice;
		var jsonTest ='{"nombre":"'+this.recargas.name+'","email":"'+this.recargas.email+'","tels":{"num_usa":"'+this.recargas.telefonoUSA+'","num_mex1":"'+this.recargas.telefonoMEX+'"},"tipo":"1","id_pay":"1"}';
		var url = "http://www.celexpress.com/wbs/Recarga/insert.php?json="+jsonTest;
		if(indice==0){
          	app.buy(11,"Recarga de 11");
          }
          if(indice==1){
          	app.buy(22,"Recarga de 22");
          }
          if(indice==2){
          	app.buy(33,"Recarga de 33");
          }
		 $http.get(url).success(function(data){
          console.log(data);
          $state.go("home");
        }).error(function(error){
           alert("error"+error);
        });

  	}


});
// Se agrega el ; ya que es el último metodo