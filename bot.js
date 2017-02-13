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
                    "Reader, I married him",
                    "Paradise will be a kind of library",
                    "stuff + things",
                    "it was the best of times",
                    "Go to the library",
                    "united in the book",
                    "organizing the universe of knowledge",
                    "the diary of the human race",
                    "Save the time of the reader",
                    "is the wisdom we have lost in knowledge",
                    "Data is not information",
                    "Stories are just data with a soul",
                    "Sad",
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
