var check = true;

function throughOnce(fn) {
  return fn.bind(this);
}

var logThroughOnce = throughOnce(function(text) {
  if(check) { console.log(text); }
  check = !check;
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
