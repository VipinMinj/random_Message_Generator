// This is my Random Message Generator. This message generator is an fortune teller. Please don't take it seriously. 

function randomNumberGenerator(num) {
    return Math.random() * num;
}

function fortuneQuotes(fortuneType) {
    
    //Object that stores all the fortune quotes
    const fortune = {
        todayPrediction : ['a good day', 'Incredible', 'Strange', 'Scary', 'Quiet', 'Peaceful', 'Awful'],
        encounter : ['a Cute Animal', 'An Old Friend', 'Your Coworker', 'The Love of your Life', 'Your Nemesis', 'Your Rival'],
        action : ['Walk Away', 'Face your Fears', 'Confess', `Say what's on your Mind`, `Exercise`],
        wordOfTheDay : [`Exhilarating`,`Exciting`, `Boring`, `Messy`, `Mysterious` ]
    }

    //switch that returns according to what is being asked for
    switch (fortuneType) {
        case 'todayPrediction':
            return (fortune.todayPrediction[Math.floor(Math.random() * (fortune.todayPrediction.length))]);
            break;
        case 'encounter':
            return fortune.encounter[Math.floor(Math.random() * (fortune.encounter.length))];
            break;
        case 'action':
            return fortune.action[Math.floor(Math.random() * (fortune.action.length))];
            break;
        case 'wordOfTheDay':
            return fortune.wordOfTheDay[Math.floor(Math.random() * (fortune.wordOfTheDay.length))];
            break;
        default:
            return `Invalid Input. Please try again.`;
    }
}

function message() {
    //This funtion prints the whole message
    console.log(`Today's gonna be : ${fortuneQuotes('todayPrediction')}`);
    console.log(`You're gonna meet : ${fortuneQuotes('encounter')}`);
    console.log(`You should : ${fortuneQuotes('action')}`);
    console.log(`My word of the day for you is : ${fortuneQuotes('wordOfTheDay')}`);
}

message();
