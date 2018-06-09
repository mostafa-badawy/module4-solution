(function (window) {

  var hello = {};

  var helloX = "Hello :";

  hello.visitor = function (name) {
    console.log(helloX + " " + name);
  }

  window.hello = hello;

})(window);
