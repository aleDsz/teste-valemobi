aleDsz.controller("MainController", function ($rootScope, $scope, $http, $q, WebService) {
	
	$rootScope.Mercadorias = [];

	$rootScope.Mercadoria = {
		CodigoMercadoria	: null,
		Tipo				: null,
		Nome				: null,
		Quantidade			: null,
		Preco				: null,
		TipoNegocio			: null
	};

	$rootScope.tipoMercadoria = [ "Placa-mãe", "Placa de vídeo", "Processador", "Monitor", "Memória RAM", "HD/SSD", "Leitor/Gravador de CD/DVD", "Gabinete", "Mouse", "Teclado", "Fonte de Alimentação", "Headset" ];
	$rootScope.tipoNegocio =[ "Compra", "Venda" ];

	$rootScope.getTipoMercadoria = function(index) {
		return $rootScope.tipoMercadoria[index];
	}

	$rootScope.getTipoNegocio = function(index) {
		return $rootScope.tipoNegocio[index];
	}

	$rootScope.checkIfExists = function() {
		var query = { CodigoMercadoria : $rootScope.Mercadoria.CodigoMercadoria };
		$rootScope.message = "Verificando se este código já foi utilizado . . .";
		WebService.post("produto", query).then(function(response) {
			if (response != "null") {
				$rootScope.message = "Já existe um produto com este código";
			} else {
				$rootScope.message = "Este código pode ser utilizado!";
			}
		});
	}

	$rootScope.obterTodos = function() {
		$rootScope.message = "Carregando lista . . .";
		WebService.post("listaProduto").then(function(response) {
			$rootScope.message = "";
			$rootScope.Mercadorias = response;
		});
	}

	$rootScope.checkIfObjectIsNotNull = function() {
		if ($rootScope.Mercadoria.CodigoMercadoria == null) {
			$rootScope.message = "O campo Código está nulo, favor preencher corretamente";
			return false;
		}
		else if ($rootScope.Mercadoria.Tipo == null) {
			$rootScope.message = "O campo Tipo de Mercadoria está nulo, favor preencher corretamente";
			return false;
		}
		else if ($rootScope.Mercadoria.Nome == null) {
			$rootScope.message = "O campo Nome está nulo, favor preencher corretamente";
			return false;
		}
		else if ($rootScope.Mercadoria.Quantidade == null) {
			$rootScope.message = "O campo Quantidade está nulo, favor preencher corretamente";
			return false;
		}
		else if ($rootScope.Mercadoria.Preco == null) {
			$rootScope.message = "O campo Preço está nulo, favor preencher corretamente";
			return false;
		}
		else if ($rootScope.Mercadoria.TipoNegocio == null) {
			$rootScope.message = "O campo Tipo de Negócio está nulo, favor preencher corretamente";
			return false;
		}
		else
			return true;
	}

	$rootScope.cadastrar = function() {
		if ($rootScope.checkIfObjectIsNotNull) {
			WebService.post("addProduto", $rootScope.Mercadoria).then(function(response) {
				if (response.CodigoMercadoria == $rootScope.Mercadoria.CodigoMercadoria) {
					$rootScope.message = "Produto cadastrado com sucesso!";

					$rootScope.Mercadoria = {
						CodigoMercadoria	: null,
						Tipo				: null,
						Nome				: null,
						Quantidade			: null,
						Preco				: null,
						TipoNegocio			: null
					};
				} else {
					$rootScope.message = "Ocorreu um erro ao tentar cadastrar, tente novamente mais tarde!";
				}
			});
		}
	}

});