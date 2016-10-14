aleDsz.service("WebService", function ($http, $q) {

	this.getUrl = function (FileName)
	{
		return "svc/" + FileName + ".php";
	};

	this.post = function (Url, Data = null)
	{
		var deferred = $q.defer();

		$http.post(this.getUrl(Url), Data).success(function(Response)
		{
			deferred.resolve(Response);
		})
		.error(function(Response)
		{
			deferred.reject(Response);
		});

		return deferred.promise;
	};
	
});