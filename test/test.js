var should = require("should"),
	fs = require("fs"),
	path = require("path"),
	sourceMappingUrl = require("../");

describe("sourceMappingUrl", function() {
	it("should parse source maps from in between the stream", function(done) {
		sourceMappingUrl(fs.createReadStream(path.join(__dirname, "stubs", "jquery.js")), function(err, url) {
			should.not.exist(err);

			url.should.equal("jquery.min.map");
			done();
		});
	});

	it("should parse source maps from the end of the stream", function(done) {
		sourceMappingUrl(fs.createReadStream(path.join(__dirname, "stubs", "fontdragr.js")), function(err, url) {
			should.not.exist(err);

			url.should.equal("scripts.js.map");
			done();
		});
	});

	it("should parse source maps with an @ format", function(done) {
		sourceMappingUrl(fs.createReadStream(path.join(__dirname, "stubs", "jquery.js")), function(err, url) {
			should.not.exist(err);

			url.should.equal("jquery.min.map");
			done();
		});
	});

	it("should parse source maps with a # format", function(done) {
		sourceMappingUrl(fs.createReadStream(path.join(__dirname, "stubs", "fontdragr.js")), function(err, url) {
			should.not.exist(err);

			url.should.equal("scripts.js.map");
			done();
		});
	});

	it("should fail gracefully if there's no source maps", function(done) {
		sourceMappingUrl(fs.createReadStream(path.join(__dirname, "stubs", "prototype.js")), function(err, url) {
			should.not.exist(err);

			url.should.be.false;
			done();
		});
	});
});
