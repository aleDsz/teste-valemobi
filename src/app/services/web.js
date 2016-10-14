aleDsz.service("WebService", function ($http, $q) {

	this.getUrl = function (FileName)
	{
		return "svc/" + FileName + ".php";
	};

	this.post = function (Url, Data)
	{
		var deferred = $q.defer();

		if (Data !== null) {
			$http.post(this.getUrl(Url), Data).success(function(Response)
			{
				deferred.resolve(Response);
			})
			.error(function(Response)
			{
				deferred.reject(Response);
			});
		} else {
			$http.post(this.getUrl(Url)).success(function(Response)
			{
				deferred.resolve(Response);
			})
			.error(function(Response)
			{
				deferred.reject(Response);
			});
		}

		return deferred.promise;
	};
	
});