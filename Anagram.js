function allAnagrams(string){

  var uniqueOutput = {};
  (function anagram(ana, str) {

    if (str === '') {
      uniqueOutput[ana] = 1;
    }
    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));

    }
  })('', string);
  console.log(uniqueOutput);
  return Object.keys(uniqueOutput);
}

allAnagrams('east');