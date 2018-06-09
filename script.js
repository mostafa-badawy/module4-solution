(function (window) {

  var names = ["Mostafa", "Mahmoud", "Jehan", "jasmine", "Khaled", "jamal", "Ramzy", "Josef"];

  for (var item in names) {

    var firstLetter = ((names[item]).charAt(0)).toLowerCase();

    if (firstLetter == 'j') {
      window.goodBye.visitor(names[item]);
    } else {
      window.hello.visitor(names[item]);
    }

  }

})(window);
