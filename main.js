function throughOnce(fn) {
  return fn.bind(this);
}

var logThroughOnce = throughOnce(function(text, callNumber) {
  if(callNumber % 2 === 0) { console.log(text); }
});

logThroughOnce("Hello World!", 0); // "Hello World!"
logThroughOnce("Hello World!", 1); //
logThroughOnce("Hello World!", 2); // "Hello World!"
logThroughOnce("Hello World!", 3); //
