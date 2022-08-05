function importAll(r) {
    return r.keys().map(r);
}
  
const images = importAll(require.context('../assets/images/', true, /\.(png|jpe?g|svg|webp)$/));
let cards = [];

const findQuotes = name => {
    switch(name) {
        case "Andy":
            return ["Rit-dit-dit-do-doo!", "I wish there was a way to know you're in the good old days before you've actually left them."];
        case "Angela":
            return ["Save Bandit!", "I find the mystery genre disgusting. I hate being titillated."];
        case "Creed":
            return ["I've been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader", "Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name? Creed Bratton."];
        case "Darryl":
            return ["Whoa! That person has really gotten him or herself into quite a predicament.", "I don't want to prank any more. Things get real."];
        case "Dwight":
            return ["Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.", "All you need is love? False. The four basic human necessities are air, water, food, and shelter."];
        case "Erin":
            return ["What if we all get together and help each other and hire a new guy, and then we all kill him, but first we take out like a hundred thousand dollar life insurance policy. I bet you guys like that idea don't you?", "I never really thought much about being more than a receptionist. But, why? Because I happened to answer help wanted ad to be a receptionist? I mean, what if the ad had been for a CEO? Or for a brain surgeon?"];
        case "Holly":
            return ["Have ya hoid the news? Extry! Extry! Read all about it!", "Your wife becoming be will I."];
        case "Jan":
            return ["Why is this so hard? That's what she said. Oh my God. What am I saying?", "You are so right. You are SO right! Because before I lived here the glass was always covered with smudges and I moved in and I cleaned it and I guess that makes me the devil!"];
        case "Jim":
            return ["Bears, beets, Battlestar Galactica", "I don't mean to brag, but New Year's Eve, I was home by nine."];
        case "Kelly":
            return ["I talk a lot, so I've learned to tune myself out.", "Who says exactly what they're thinking? What kind of a game is that?"];
        case "Kevin":
            return ["Me think, why waste time say lot word, when few word do trick.", "I just wanna lie on the beach and eat hot dogs. That's all I've ever wanted."];
        case "Meredith":
            return ["Tell ya one thing, I'm not gonna be a good mom tonight.", "For my new year's resolution, I gave up drinking.. during the week."];
        case "Michael":
            return ["Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", "Oh how the turn tables-"];
        case "Nellie":
            return ["One day, you're alone, tired. At your feet, a dying bird. But where did it come from? Why did you kill it? Is it because in some strange way it is you?", "I walked right into a job for which I was ill-prepared, ill-suited, and somebody else already had, and I got it. If you ask me, that's the American dream right there. Anything can happen to anyone. It's just random."];
        case "Oscar":
            return ["Kids, sometimes it pays to be gay.", "This guy's been gone long enough. He's lost his right to a window."];
        case "Pam":
            return ["I feel God in this Chili's tonight.", "There's a lot of beauty in ordinary things. Isn't that kind of the point?"];
        case "Phyllis":
            return ["I wonder what people like about me. Probably my jugs.", "I just think we all deserve to be with someone who wants to be with us."];
        case "Ryan":
            return ["(...) you got your sheep, and you got your black sheep, and I'm not even a sheep. I'm on the freakin' moon.", "People keep calling me a 'wunderkind'. I don't even know what that means. I mean, I know what it means. It means very successful for your age. So I guess it makes sense, but It's a weird word."];
        case "Stanley":
            return ["Boy, have you done lost your mind? 'Cause I'll help you find it!", "I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little, but on Pretzel Day? Well, I like Pretzel Day."];
        case "Toby":
            return ["Hazing is a fun way to show a new employee that she is not welcome or liked.", "I have six roommates, which are better than friends because they have to give you one month's notice before they leave."];
        default:
            return [""];
    }
}

const Card = (src, description, alreadySelected) => {
    let quotes = findQuotes(description);
    return {src, description, alreadySelected, quotes};
}

const createCards = (() => {
    images.forEach(img => {
        let indexOfStaticMedia = img.indexOf("static/media");
        let imgNoStaticMedia = img.substring(indexOfStaticMedia + 13);
        let endOfName = imgNoStaticMedia.indexOf(".");
        let description = imgNoStaticMedia.substring(0, 1).toUpperCase() + imgNoStaticMedia.substring(1, endOfName);
        cards.push(Card(img, description, false));
    });
    return cards;
})();

export {cards}

