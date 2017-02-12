var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "#heylibrary",
                    "Libraries make",
                    "Library believes",
                    "Librarians search",
                    "Books are for reading",
                    "Libraries are bougie",
                    "it me",
                    "Bibliophiles make America great",
                    "stuff + things",
                    "it was the best of times",
                    "happiness",
                    "Library says",
                    "Libraries look",
                    "Librarians quantify",
                    "Amazon.com says",
                    "Stately plump Buck Mulligan",
                    "Wikipedia will",
                    "e-books find a way",
                    "Librarians will",
                    "social+local+mobile #solomo",
                    "Reading is giving",
                    "Libraries cannot be",
                    "Library shows",
                    "Library funds",
                    "#abook is blue and black" ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);

Bot.tweet(phrase);
