function theBeatlesPlay(array1, array2) {
  var strings = [];
  for (var i = 0; i < array1.length; i++) {
    var string1 = array1[i];
    var string2 = array2[i];
    strings.push('' + string1 + ' plays ' + string2);
  }
  return strings;
}
