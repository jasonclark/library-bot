var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "#heylibrary",
                    "#oklibrary",
                    "Who will be your #book this season?",
                    "This is the saddest story I have ever heard.",
                    "hidden in the old #books written by people who weren't afraid to be honest",
                    "As I read the words they'd left behind",
                    "Time is not a line but a dimension",
                    "In the late summer of that year we lived in a house in a village",
                    "Youtube.com says",
                    "Youtube.com believes",
                    "Youtube.com rejects",
                    "Facebook.com says",
                    "Facebook.com believes",
                    "Facebook.com rejects",
                    "Google.com says",
                    "Google.com believes",
                    "Google.com rejects",
                    "Wikipedia.com says",
                    "Wikipedia.com believes",
                    "Wikipedia.com rejects",
                    "#Readers be",
                    "#Readers be like",
                    "#Librarians be",
                    "#Librarians be like",
                    "#Libraries be like",
                    "#Librarians do",
                    "#Libraries make",
                    "#Library believes",
                    "#Librarians search",
                    "I opened a book and made some friends",
                    "There is no Frigate like a Book",
                    "in the world between the covers of books",
                    "Books to the ceiling",
                    "The fellowship of books is real",
                    "I had a Mother who read me tales",
                    "At my dear land of Story-books",
                    "When Mother reads aloud, I long",
                    "Only after that did we invent the #librarian",
                    "#Books are for reading",
                    "The real tight #interface is between the #book and the reader",
                    "the world of the #book is plugged right into your brain",
                    "The #librarian is the interface",
                    "#Libraries are bougie",
                    "you don't want to get lost in the #archives",
		    "went back into the #archives & discovered this whole universe of characters",
		    "#metadata liberates us",
		    "#metadata equals surveillance",
		    "#Metadata isn't what it used to be",
		    "#metadata is a word with 8 letters",
		    "#metadata was ignored due to errors",
		    "The man who does not #read",
                    "A #library is full of new worlds to travel",
                    "The buying of more #books than one can #read",
                    "Make the #library staff laugh",
                    "it me",
                    "and what is the use of a #book, thought Alice",
                    "Go, my #book, and help destroy the world as it is.",
                    "He loved Big Brother.",
                    "his heart was going like mad and yes I said yes I will Yes.",
                    "Paradise will be a kind of library",
                    "I am writing these poems / From inside a lion.",
                    "There's a light on in the attic.",
                    "And playing tag and pouring tea / and turnin' pages of this book.",
                    "She's a liberated lady, and she smokes them big cigars.",
                    "stuff + things",
                    "It was the best of times",
                    "Go to the library",
                    "united in the book",
                    "organizing the universe of knowledge",
                    "the diary of the human race",
                    "Save the time of the reader",
                    "is the wisdom we have lost in knowledge",
                    "#Data is not information",
                    "Stories are just data with a soul",
                    "One person's data is another person's noise",
                    "Information wants to be free",
                    "We simply don’t have enough data to form a conclusion",
                    "What gets measured gets managed",
                    "The world is one #bigdata problem",
                    "What we have is a #data glut",
                    "The very design of neoliberal principles is a direct attack on democracy",
                    "#Analytics will never tell you everything you want to know",
                    "Call me Ishmael",
                    "I am an invisible man",
                    "Mrs. Dalloway said she would buy the flowers herself",
                    "For a long time, I went to bed early",
                    "Ships at a distance have every man's wish on board",
                    "It was a pleasure to burn",
                    "It was a pleasure to burn",
                    "You better not never tell nobody but God",
                    "Lolita, light of my life, fire of my loins",
                    "A screaming comes across the sky",
                    "riverrun, past Eve and Adam's, from swerve of shore to bend of bay",
                    "It was a bright cold day in April, and the clocks were striking thirteen",
                    "I love the smell of book ink in the morning",
                    "Easy reading is damn hard writing",
                    "Something is rotten in the state of Denmark",
                    "Dear Sir or Madam, will you read my book?",
                    "It took me years to write, will you take a look?",
                    "T'is true: there's magic in the web of it",
                    "How well he's read, to reason against reading!",
                    "there is nothing new under the sun",
                    "Never trust anyone who has not brought a book with them",
                    "Books are a uniquely portable magic",
                    "You don't have to burn books to destroy a culture",
                    "No tears in the writer, no tears in the reader",
                    "The world was hers for the reading",
                    "Every reader, as he reads, is actually the reader of himself",
                    "Everything in the world exists in order to end up as a book",
                    "Literature adds to reality, it does not simply describe it",
                    "Fiction is like a spider's web",
                    "I saw the library as a temple",
                    "in the #library with the candlestick",
                    "My #library is an #archive of longings",
                    "You can tell a lot about an area from its #library",
                    "Without #archives many stories of real people would be lost",
                    "Nothing is long ago in an #archive",
                    "Shall I part my hair behind?",
                    "Do I dare to eat a peach?",
                    "I agree to comply with all #library regulations",
                    "show me on this card catalog where the bad Google hurt you",
                    "Sad",
                    "happiness",
                    "#Library says",
                    "#Libraries look",
                    "#Librarians quantify",
                    "Amazon.com says",
                    "Amazon.com believes",
                    "Amazon.com rejects",
                    "Stately plump Buck Mulligan",
                    "Wikipedia will",
                    "e-books find a way",
                    "#Librarians will",
                    "social+local+mobile #solomo",
                    "Reading is giving",
                    "#Libraries cannot be",
                    "#Library shows",
                    "There is a place where the sidewalk ends",
                    "The public library is where place and possibility meet",
                    "every reader is, while reading, the reader of his own self",
                    "There is no friend as loyal as a book",
                    "Maybe ever'body in the whole damn world is scared of each other",
                    "We lived in the gaps between the stories",
                    "Memories warm you up from the inside",
                    "Information about the package is as important as the package itself",
                    "The pub is the internet",
                    "Knowledge is the parent of knowledge",
                    "A poem is true if it hangs together",
                    "Information is the oxygen of the modern age",
                    "Information helps you to see that you're not alone",
                    "Let the wild rumpus start",
                    "Do I dare / Disturb the universe?",
                    "I celebrate myself, and sing myself",
                    "Stay gold, Ponyboy",
                    "Library funds",
                    "Got to tell you 'bout the book I read",
                    "It was Don Delillo, whiskey neat, And a blinking midnight clock",
                    "Discussing post-war US literature",
                    "And I need a job, so I want to be a paperback writer",
                    "I have my books and my poetry to protect me",
                    "Who gives a f—k about an Oxford comma?",
                    "just remember that all the people in this world haven't had the advantages that you've had",
                    "I like big books and I cannot lie",
                    "Everyday I write the book",
                    "We be reading Marx where I'm from",
                    "where i'm from it's purple when it snows",
                    "#abook is blue and black" ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);

Bot.tweet(phrase);
