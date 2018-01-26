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
                    "You've got a real type of thing going down, gettin' down", 
                    "There's a whole lot of rhythm going round",
                    "Tear the roof off, we're gonna tear the roof off the mothersucker",
                    "Ow, we want the funk / Give up the funk",
                    "Make my funk the P. Funk / I want my funk uncut",
                    "Make my funk the P. Funk / I wants to get funked up",
                    "Coming to you directly from the Mothership",
                    "Flash light / Red light / Neon light / Ooh, stop light",
                    "Rule number one: Don’t fuck with #librarians.",
                    "When trouble strikes, head to the library.",
                    "They say in every library there is a single book that can answer the question that burns like a fire in the mind.",
                    "A library is like an island in the middle of a vast sea of ignorance",
                    "Never trust anyone who has not brought a book with them",
                    "Read about things that wouldn't keep you up all night long, weeping and tearing out your hair.",
                    "Literature doesn't exactly have a strong mental-health track record.",
                    "You don't spend your life hanging around books without learning a thing or two.",
                    "She's not sure if you're a boy or a girl",
                    "You've got your transmission and your live wire",
                    "You've torn your dress, your face is a mess",
                    "I, I will be king / And you, you will be queen",
                    "Ground Control to Major Tom",
                    "And I'm floating in a most peculiar way",
                    "We spoke of was and when / Although I wasn't there, / He said I was his friend",
                    "Hey man, my schooldays insane",
                    "Jamming good with Weird and Gilly, and The Spiders from Mars.",
                    "I catch a paper boy / But things don't really change",
                    "as much a part of Springfield as the church, the library, or the crazy house",
                    "But I am just a simple #librarian. I have only read about dancing in books.",
                    "Hey, hey, this is not a lending library!",
                    "They won’t let me in the big people library downtown, there was some… unpleasantness",
                    "For more information on Grand Funk, consult your school library!",
                    "Oooh, Friends of the Library is holding a historic manuscript viewing!",
                    "I've seen things you people wouldn't believe.",
                    "Attack ships on fire off the shoulder of Orion.",
                    "I watched C-beams glitter in the dark near the Tannhäuser Gate",
                    "All those moments will be lost in time, like tears in rain.",
                    "Time to die",
                    "Out on my skateboard, the night is just humming",
                    "Run from the pigs, the fuzz, the cops, the heat",
                    "Silent kid, don't lose your graceful tongue",
                    "Darling don't you go and cut your hair",
                    "Songs mean a lot / When songs are bought",
                    "You can sing along with them if you try / Holdin' the spoken world up",
                    "She's got a neck like a Saturday paper / You read it fast before the Sunday mass",
                    "Don't listen to me baby if you wanna survive",
                    "Your silence will not protect you",
                    "what is most important to me must be spoken",
                    "Revolution is not a one time event",
                    "Poetry is the way we help give name to the nameless",
                    "What are the words you do not yet have?",
                    "Because the machine will try to grind you into dust anyway",
                    "master's tools will never dismantle the master's house",
                    "Poetry is not a luxury",
                    "there is only poetry to hint at possibility made real",
                    "a town isn't a town without a bookstore",
                    "Fiction allows us to slide into these other heads",
                    "Tell him that we fucking reprogrammed reality",
                    "The more the data banks record about each one of us",
                    "We drive into the future using only our rearview mirror",
                    "We see ourselves being translated more & more into the form of information",
                    "The medium is the message",
                    "A typewriter is a means of transcribing thought",
                    "We shape our tools & afterwards our tools shape us",
                    "Ads are the cave art of the twentieth century",
                    "The printing press was at first mistaken for an engine of immortality",
                    "The photograph reverses the purpose of travel",
                    "Madison Avenue is a very powerful aggression against private consciousness",
                    "I am large, I contain multitudes",
                    "And your very flesh shall be a great poem",
                    "The real war will never get in the books",
                    "My words itch at your ears till you understand them",
                    "The dirtiest book of all is the expurgated book",
                    "A perfect writer would make words sing, dance, kiss",
                    "Speed on my book! spread your white sails",
                    "It is not in any dictionary, utterance, symbol",
                    "I am the poet of the Body and I am the poet of the Soul",
                    "I got books with hooks and it looks like rain",
                    "Like a thick ass book that's filled with wack rhymes",
                    "they see that a book can lead to the pleasure of conversation",
                    "the solitary act of reading can actually be a part of the path to communion",
                    "to his consciousness as a thinker when he had solitude to read",
                    "what is so painful about reading is",
		          "that you read something and you don't have anybody to share it with",
                    "There is light in darkness, you just have to find it",
                    "One of the most subversive institutions in the United States is the public library",
                    "The good parts of a book may be only something a writer is lucky enough to overhear",
                    "Everything good he had ever written he'd made up",
                    "It would be today until it was tonight and tomorrow would be today again",
                    "in the fast deep water, in the half light, the fishing would be tragic",
                    "The only writing that was any good was what you made up",
                    "The thirteen saloons that had lined the one street of Seney had not left a trace",
                    "All you have to do is write one true sentence",
                    "All thinking men are atheists",
                    "All American literature comes from one book by Mark Twain called Huckleberry Finn",
                    "I'm always reading books - as many as there are",
                    "The first draft of anything is shit",
                    "For boys who are fearful of getting an earful",
                    "You can't get to heaven in a silver spoon",
                    "You can't get to heaven in your Sunday best",
                    "And now I am spending all my days at girlpower.com",
                    "In-between my beauty magazines and my credit card bills",
                    "Now who would have believed this riot grrrl is a cynic",
                    "You don't own the situation, honey / You don't own the stage",
                    "I can tell you - the telling gets old",
                    "Even in his heart the Devil has to know the water level",
                    "Are you writing from the heart?",
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
                    "The microphone explodes, shattering the molds",
                    "I walk tha corner to tha rubble that used to be a library",
                    "They don't gotta burn tha books they just remove 'em",
                    "They rally round tha family!",
                    "Some of those that work forces",
                    "And now you do what they told ya",
                    "I'm sittin' down here in the campfire light",
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
                    "in the world between the covers of books",
                    "Books to the ceiling",
                    "The fellowship of books is real",
                    "I had a Mother who read me tales",
                    "At my dear land of Story-books",
                    "When Mother reads aloud, I long",
                    "Only after that did we invent the #librarian",
                    "#Books are for reading",
                    "#Books are for use",
                    "Every reader their #book",
                    "Every book its reader",
                    "Save the time of the #reader",
                    "The #Library is a growing organism",
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
                    "that sucker was simple and plain",
                    "911 is a joke in yo town",
                    "Hear the drummer get wicked",
                    "Raw metaphysically bold, never followed a code",
                    "Crucifixion ain't no fiction",
                    "You go ooh and ahh when I jump in my car",
                    "Mind over matter - mouth in motion",
                    "Hear my words my verbs and get juiced up (juiced up)",
                    "With vise, I hold the mic device",
                    "Yes / Was the start of my last jam",
                    "I guarantee you no more music by these suckers",
                    "Yes, the rhythm, the rebel / Without a pause, I'm lowering my level",
                    "I got a letter from the government the other day",
                    "And you say, Goddamn / This is the dope jam",
                    "They tell lies in the books that you're readin'",
                    "Yo, why don't you just back up from the TV, read a book or something",
                    "But you check out the books they own",
		          "Data is a precious thing and will last longer than the systems themselves",
                    "The warehouse of this memory is called the #library",
                    "never discount the usefulness of town #archives",
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
                    "#itme",
                    "it me #itme",
                    "and what is the use of a #book, thought Alice",
                    "Go, my #book, and help destroy the world as it is.",
                    "He loved Big Brother.",
                    "his heart was going like mad and yes I said yes I will Yes.",
                    "Paradise will be a kind of library",
                    "I am writing these poems / From inside a lion.",
                    "There's a light on in the attic.",
                    "And playing tag and pouring tea / and turnin' pages of this book.",
                    "She's a liberated lady, and she smokes them big cigars.",
                    "It was the best of times",
                    "Go to the library",
                    "united in the book",
                    "organizing the universe of knowledge",
                    "the diary of the human race",
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
                    "A screaming comes across the sky",
                    "riverrun, past Eve and Adam's, from swerve of shore to bend of bay",
                    "It was a bright cold day in April, and the clocks were striking thirteen",
                    "The past is whatever the records and the memories agree upon",
                    "I love the smell of book ink in the morning",
                    "Easy reading is damn hard writing",
                    "Something is rotten in the state of Denmark",
                    "Dear Sir or Madam, will you read my book?",
                    "It took me years to write, will you take a look?",
                    "T'is true: there's magic in the web of it",
                    "My library was dukedom large enough",
                    "How well he's read, to reason against reading!",
                    "there is nothing new under the sun",
                    "Books are a uniquely portable magic",
                    "You don't have to burn books to destroy a culture",
                    "No tears in the writer, no tears in the reader",
                    "The world was hers for the reading",
                    "There is no Frigate like a Book",
                    "My brain hums with scraps of poetry and madness",
                    "Lock up your libraries if you like",
                    "Thinking is my fighting",
                    "What do we seek through millions of pages?",
                    "Books are the mirrors of the soul",
                    "a library where the songs of the singers rise naturally from the lives of the livers",
                    "To read a novel is a difficult and complex art",
                    "I was always going to the bookcase for another sip of the divine specific",
                    "I ransack public libraries, and find them full of sunk treasure",
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
