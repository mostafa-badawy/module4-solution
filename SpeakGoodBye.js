(function (window) {

  var goodBye = {};

  var goodByeX = "Good Bye :";

  goodBye.visitor = function (name) {
    console.log(goodByeX + " " + name);
  }

  window.goodBye = goodBye;

})(window);
