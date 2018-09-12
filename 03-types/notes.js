// your notes here!
console.log("hello world!");
var getHTMLText = function (str) {
    var start= str.indexOf('>');
    var end= str.lastIndexOf('<');
    var mainstring= str.slice(start+1,end);
    return mainstring;
};
