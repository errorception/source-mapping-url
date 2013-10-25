source-mapping-url
====

Extracts the sourceMappingUrl from a node.js read stream.

Pass it any `utf8` stream, and it gives you the source-map url in that stream. If no source-map is found, it returns `false`.

Works for both the `@` and `#` formats. Only tested against JS files, but no reason it can't work for CSS files too.

Example
---

```javascript
var smu = require("source-mapping-url"),
	zlib = require("zlib"),
    http = require("http");

var stream = http.get("http://code.jquery.com/jquery.min.js")
                 .pipe(zlib.createGunzip());

smu(stream, function(err, sourceMapUrl) {
	// sourceMapUrl is either false (if there's no source map declaration)
	// or is the value extracted from the file.
	// eg. `jquery.min.map`
});
```


Installation
---

```
npm install source-mapping-url
```

To run tests, `cd` to the source-mapping-url directory, and type in ```npm test```.

License
---

MIT