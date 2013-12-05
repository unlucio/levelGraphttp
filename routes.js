var endPoints = require("./endPoints")

exports.generate = function(app){
	app.get('/', function(req, res){
		res.send("Hi, I'm levelGraph's http api");
	});

	for(var endPointModuleIndex in endPoints){
		var endPointModule = endPoints[endPointModuleIndex]
		var path = endPointModule.path;

		for(var endPointAcceptedMethodIndex in endPointModule.accepts){
			var endPointAcceptedMethod = endPointModule.accepts[endPointAcceptedMethodIndex];
			var endPointMethod = endPointModule.methods[endPointAcceptedMethod];

			app[endPointAcceptedMethod](path, endPointMethod);
		}
	}

	console.log("\n------ LEVELGRAPH: http REST api ------\n");
	console.log("Possible end points: \n");

	for(var methodIndex in app.routes){
	    var routeMethod = app.routes[methodIndex]
	    console.log("- "+methodIndex+":");
	    for(var routeIndex in routeMethod){
	        var routeDettails = routeMethod[routeIndex];
	        console.log("   "+routeDettails.path+"  --  (regExp: "+routeDettails.regexp+")");
	    }
	    
	}

	console.log("---------------------------------------\n\n");
};