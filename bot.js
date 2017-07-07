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
                    "For boys who are fearful of getting an earful",
                    "You can't get to heaven in a silver spoon",
                    "You can't get to heaven in your Sunday best",
                    "And now I am spending all my days at girlpower.com",
                    "In-between my beauty magazines and my credit card bills",
                    "Now who would have believed this riot grrrl is a cynic",
                    "You don't own the situation, honey / You don't own the stage",
                    "I can tell you - the telling gets old",
                    "Dig if you will the picture",
                    "Dream if you can a courtyard",
                    "Dearly beloved, We are gathered here today",
                    "Act your age, mama (Not your shoe size)",
                    "Lay down your funky weapon",
                    "The kind you find in a second hand store",
                    "I was dreamin' when I wrote this",
                    "But it was Saturday night I guess that makes it all right",
                    "You don't have to be cool to rule my world",
                    "I only wanted to see you laughing in the purple rain",
                    "Wait for the common sense of the morning",
                    "The grandmother didn’t want to go to Florida",
                    "Reader, I married him",
                    "It is a truth universally acknowledged",
                    "Time is the longest distance between two places",
                    "There is light in darkness, you just have to find it",
                    "Our histories cling to us", 
                    "We are shaped by where we come from",
                    "Long before the first bugles sounded from the barracks within the city",
                    "From beyond the screen of bushes which surrounded the spring",
                    "The courthouse is less old than the town",
                    "It was just noon that Sunday morning when the sheriff reached the jail",
                    "Sitting beside the road, watching the wagon mount the hill toward her",
                    "watch yourself softly becoming the author of something beautiful",
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
                    "Nay, but that men know so little of men",
                    "One ever feels his twoness",
                    "I sit with Shakespeare, and he winces not",
                    "Nevertheless, men strive to know",
                    "And the world whistled in his ears",
                    "The function of the university is not simply to teach bread-winning",
                    "the thinker must think for truth, not fame",
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
                    "Yes / Was the start of my last jam",
                    "I guarantee you no more music by these suckers",
                    "Yes, the rhythm, the rebel / Without a pause, I'm lowering my level",
                    "I got a letter from the government the other day",
                    "And you say, Goddamn / This is the dope jam",
                    "Data is a precious thing and will last longer than the systems themselves",
                    "The warehouse of this memory is called the #library",
                    "I went to find me in the library",
                    "Because brains packed with knowledge are yummy, that’s why",
                    "and think about that cell in the library basement",
                    "The library was even more hushed than usual",
                    "Tell me the manner of books that you seek and I will strive to locate their whereabouts",
                    "The librarian stamped Returned on the card",
                    "She slammed the book down on her desk and peered up at me",
                    "A woman I had never seen before was sitting at the circulation desk",
                    "The librarian flipped their front covers back to check the due date",
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
                    "Now what the hell ya suppose is eatin' them two guys?",
                    "Oh, my girls, however long you may live",
                    "You better not never tell nobody but God",
                    "Matter of fact, I think this the youngest us ever felt",
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
                    "#Library says",
                    "#Libraries look",
                    "#Librarians quantify",
                    "Amazon.com says",
                    "Amazon.com believes",
                    "Amazon.com rejects",
                    "Stately plump Buck Mulligan",
                    "Wikipedia.com will",
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
                    "Wisdom is higher than a fool can reach",
                    "May be refined, and join the angelic train",
                    "Students, to you 't is given to scan the heights",
                    "Imagination! who can sing thy force?",
                    "Can Afric's Muse forgetful prove?",
                    "ADIEU, New England's smiling meads",
                    "And add new glory to her name",
                    "A poem is true if it hangs together",
                    "Information is the oxygen of the modern age",
                    "Information helps you to see that you're not alone",
                    "Let the wild rumpus start",
                    "and sailed back over a year and in and out of weeks and through a day",
                    "Do I dare / Disturb the universe?",
                    "I celebrate myself, and sing myself",
                    "Stay gold, Ponyboy",
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
                    "so much depends / upon a red wheel barrow",
                    "where i'm from it's purple when it snows"
                  ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);

Bot.tweet(phrase);
