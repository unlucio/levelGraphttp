var endPoint = {};
endPoint.name = "document";
endPoint.path = '/:databaseName/document/'
endPoint.accepts = ['get', 'post', 'put', 'delete'];

//endPoint.methods = {};

endPoint.methods = {
	"get": function (req, res, next) {
		res.send("document get responseText for db: "+req.params.databaseName);
	},
	"post": function (req, res, next) {
		res.send("document post responseText for db: "+req.params.databaseName);
	},
	"put": function (req, res, next) {
		res.send("document put responseText for db: "+req.params.databaseName);
	},
	"delete": function (req, res, next) {
		res.send("document delete responseText for db: "+req.params.databaseName);
	}
};

module.exports = endPoint;