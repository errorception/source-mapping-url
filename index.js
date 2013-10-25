var split = require("split"),
	through = require("through");

module.exports = function(stream, done) {
	var sourceMappingLine;

	stream.pipe(split()).pipe(through(function(chunk) {
		if(chunk.indexOf("sourceMappingURL") !== -1) {
			sourceMappingLine = chunk;
			this.end();
		}
	}, function() {
		if(sourceMappingLine) {
			var fileName = sourceMappingLine.split("=")[1];
			if(fileName) return done(null, fileName.split(" ")[0]);
			return done(null, false);
		}
		done(null, false);
	}));
}
