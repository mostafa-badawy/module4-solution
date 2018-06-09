(function (window) {

  var names = ["Yaakov", "John", "jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var item in names) {

    var firstLetter = ((names[item]).charAt(0)).toLowerCase();

    if (firstLetter == 'j') {
      window.goodBye.visitor(names[item]);
    } else {
      window.hello.visitor(names[item]);
    }

  }

})(window);
