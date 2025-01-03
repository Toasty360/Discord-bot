export function performChaos() {
    const chaosEvents = [
        {
            message: 'knocked over a trash can, spilling garbage everywhere',
            points: 10,
        },
        { message: 'stole a baguette from the bakery', points: 15 },
        { message: 'fell into a fountain while chasing a bird', points: -5 },
        {
            message:
                "accidentally unplugged the mayor's microphone during a speech",
            points: 20,
        },
        { message: 'triggered a fire alarm at the town hall', points: 25 },
        { message: 'got tangled in Christmas lights', points: -10 },
        { message: 'scared away pigeons from a park bench', points: 5 },
        { message: 'slipped on ice and caused a pileup', points: 15 },
        { message: 'stole a child’s balloon at the park', points: -5 },
        {
            message: 'chewed through an internet cable, causing an outage',
            points: 30,
        },
        { message: "ate someone's picnic sandwich", points: 10 },
        { message: 'interrupted a local TV broadcast', points: 25 },
        { message: 'crashed into a wedding cake', points: 20 },
        { message: "stole sausages from a butcher's shop", points: 15 },
        { message: 'chased a mailman down the street', points: 10 },
        { message: 'knocked over a market stall', points: 25 },
        { message: 'mistook a skunk for a friend', points: -15 },
        { message: 'started a food fight at a festival', points: 20 },
        { message: 'accidentally set off fireworks', points: 30 },
        { message: 'pushed a shopping cart into traffic', points: 15 },
        { message: 'sneezed on someone’s ice cream cone', points: -5 },
        { message: 'hid under a table and scared diners', points: 10 },
        { message: 'stole a pizza slice from a delivery man', points: 15 },
        { message: 'tripped a jogger in the park', points: 5 },
        { message: 'climbed onto a parade float', points: 20 },
        { message: 'ate a stack of pancakes meant for charity', points: -10 },
        { message: 'snuck into a movie theater', points: 10 },
        { message: 'tripped over a power cord during a concert', points: 25 },
        { message: 'unleashed helium balloons into the sky', points: 15 },
        { message: 'got stuck in a revolving door', points: -5 },
        { message: 'started a spontaneous dance party', points: 10 },
        { message: 'mistook a catapult for a toy', points: 30 },
        { message: 'got caught stealing candy from a baby', points: -10 },
        { message: 'knocked over a stack of library books', points: 15 },
        { message: 'stole a chef’s hat during a cooking show', points: 20 },
        { message: 'spilled paint on a mural', points: 25 },
        {
            message: 'tried to steal a hot dog from a street vendor',
            points: 10,
        },
        { message: 'interrupted a chess tournament', points: 15 },
        { message: 'caused a stampede at a petting zoo', points: 30 },
        { message: 'rolled through wet cement', points: -10 },
        { message: 'knocked over a stack of dominoes', points: 20 },
        { message: 'chased a drone into a tree', points: -5 },
        { message: 'stole popcorn from a carnival vendor', points: 10 },
        { message: 'crashed into a lemonade stand', points: 15 },
        { message: 'ate the mayor’s birthday cake', points: 25 },
        { message: 'hid in a costume store and scared customers', points: 10 },
        { message: 'chewed on someone’s car tire', points: 20 },
        { message: 'mistook a fire hydrant for a chew toy', points: -5 },
        { message: 'distracted a police officer with antics', points: 15 },
    ]

    return chaosEvents[Math.floor(Math.random() * chaosEvents.length)]
}

export function getRandomPetType() {
    const petTypes = [
        {
            name: 'Sneaky Cat',
            emoji: '🐱',
            image: 'https://example.com/images/sneaky_cat.png',
            color: '#FFD700', // Gold
        },
        {
            name: 'Clumsy Dog',
            emoji: '🐶',
            image: 'https://example.com/images/clumsy_dog.png',
            color: '#FF4500', // Orange-Red
        },
        {
            name: 'Rebellious Penguin',
            emoji: '🐧',
            image: 'https://example.com/images/rebellious_penguin.png',
            color: '#1E90FF', // Dodger Blue
        },
        {
            name: 'Hyperactive Squirrel',
            emoji: '🐿️',
            image: 'https://example.com/images/hyperactive_squirrel.png',
            color: '#8B4513', // Saddle Brown
        },
        {
            name: 'Grumpy Owl',
            emoji: '🦉',
            image: 'https://example.com/images/grumpy_owl.png',
            color: '#4B0082', // Indigo
        },
        {
            name: 'Cheeky Monkey',
            emoji: '🐒',
            image: 'https://example.com/images/cheeky_monkey.png',
            color: '#F4A460', // Sandy Brown
        },
        {
            name: 'Mischievous Raccoon',
            emoji: '🦝',
            image: 'https://example.com/images/mischievous_raccoon.png',
            color: '#808080', // Gray
        },
        {
            name: 'Sassy Parrot',
            emoji: '🦜',
            image: 'https://example.com/images/sassy_parrot.png',
            color: '#32CD32', // Lime Green
        },
        {
            name: 'Lazy Panda',
            emoji: '🐼',
            image: 'https://example.com/images/lazy_panda.png',
            color: '#000000', // Black
        },
        {
            name: 'Troublemaker Ferret',
            emoji: '🐾',
            image: 'https://example.com/images/troublemaker_ferret.png',
            color: '#A52A2A', // Brown
        },
        {
            name: 'Sneaky Fox',
            emoji: '🦊',
            image: 'https://example.com/images/sneaky_fox.png',
            color: '#FF6347', // Tomato
        },
        {
            name: 'Rowdy Goat',
            emoji: '🐐',
            image: 'https://example.com/images/rowdy_goat.png',
            color: '#FFFFFF', // White
        },
        {
            name: 'Nosy Elephant',
            emoji: '🐘',
            image: 'https://example.com/images/nosy_elephant.png',
            color: '#708090', // Slate Gray
        },
        {
            name: 'Chaotic Kangaroo',
            emoji: '🦘',
            image: 'https://example.com/images/chaotic_kangaroo.png',
            color: '#B22222', // Firebrick
        },
        {
            name: 'Curious Hedgehog',
            emoji: '🦔',
            image: 'https://example.com/images/curious_hedgehog.png',
            color: '#D2691E', // Chocolate
        },
    ]

    // Pick a random pet type
    const randomPet = petTypes[Math.floor(Math.random() * petTypes.length)]

    // Format the response with name, emoji, image, and color
    return {
        name: `${randomPet.name} ${randomPet.emoji}`,
        image: randomPet.image,
        color: randomPet.color,
    }
}
