// This is my Random Message Generator. This message generator is an fortune teller. Please don't take it seriously. 

function randomNumberGenerator(num) {
    return Math.random() * num;
}

function fortuneQuotes(fortuneType) {
    
    //Object that stores all the fortunes
    const fortune = {
        todayPrediction : ['A good day', 'Incredible', 'Strange', 'Scary', 'Quiet', 'Peaceful', 'Awful'],
        encounter : ['A Cute Animal', 'An Old Friend', 'Your Coworker', 'The Love of your Life', 'Your Nemesis', 'Your Rival'],
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
