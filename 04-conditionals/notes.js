// your notes here!
console.log("hello world!");
var improveTweet = function (tweet) {
    var arr=["lol","omg","lmao","rofl"]
    var result = tweet;
    if ((tweet.indexOf("lol") === -1 && tweet.indexOf("omg") === -1)&&(tweet.indexOf("lmao") === -1) &&( tweet.indexOf("rofl") === -1)) {
        result = result + Math.ceil(Math.random()*((arr.length)-1));
    }
    return result;