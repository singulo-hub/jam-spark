// Idea Types
export const goalType = {
    typeName: 'Goals',
    description: 'Ultimate task for the player to achieve.',
    backgroundColor: '#8D360F',
    iconColor: '#f3b25e'
};

// Goal Ideas
export const GOALS = [
    {
        ideaName: 'Collect',
        description: 'Complete your collection!',
        ideaType: goalType,
        icons: [
            '/lorc/holy-grail.svg',
            '/delapouite/medallist.svg',
            '/lorc/dozen.svg',
            '/delapouite/spell-book.svg',
            '/delapouite/coins-pile.svg'
        ]
    },
    {
        ideaName: 'Avoid',
        description: "Someone wants to avoid something.",
        ideaType: goalType,
        icons: [
            '/felbrigg/dodge.svg',
            '/delapouite/boulder-dash.svg',
            '/lorc/dinosaur-rex.svg',
            '/delapouite/detour.svg',
            '/lorc/tripwire.svg'
        ]
    },
    {
        ideaName: 'Build',
        description: "It's cool because you made it.",
        ideaType: goalType,
        icons: [
            '/lorc/dozen.svg',
            '/delapouite/crane.svg',
            '/delapouite/concrete-bag.svg',
            '/lorc/tinker.svg',
            '/caro-asercion/paper-crane.svg'
        ]
    },
    {
        ideaName: 'Chase',
        description: "Everyone loves the thrill of the chase!",
        ideaType: goalType,
        icons: [
            '/delapouite/speed-boat.svg',
            '/caro-asercion/cloaked-figure-on-horseback.svg',
            '/quoting/biplane.svg',
            '/skoll/race-car.svg',
            '/delapouite/deer-track.svg'
        ]
    },
    {
        ideaName: 'Conquest',
        description: "Capturing anything by force with a valiant effort.",
        ideaType: goalType,
        icons: [
            '/delapouite/flag-objective.svg',
            '/delapouite/exploding-planet.svg',
            '/quoting/bunker-assault.svg',
            '/cathelineau/annexation.svg',
            '/delapouite/trojan-horse.svg'
        ]
    },
    {
        ideaName: 'Deliver',
        description: "Give something to someone.",
        ideaType: goalType,
        icons: [
            '/delapouite/delivery-drone.svg',
            '/lorc/galleon.svg',
            '/delapouite/cardboard-box-closed.svg',
            '/delapouite/mine-wagon.svg',
            '/delapouite/cargo-ship.svg'
        ]
    },
    {
        ideaName: 'Destroy',
        description: "Whatever is standing, it won't be for long!",
        ideaType: goalType,
        icons: [
            '/skoll/carpet-bombing.svg',
            '/lorc/demolish.svg',
            '/lorc/pyromaniac.svg',
            '/lorc/wrecking-ball.svg',
            '/delapouite/hammer-break.svg'
        ]
    },
    {
        ideaName: 'Escape',
        description: "Someone wants to leave where they are.",
        ideaType: goalType,
        icons: [
            '/delapouite/forest-entrance.svg',
            '/delapouite/cave-entrance.svg',
            '/delapouite/evasion.svg',
            '/delapouite/fish-escape.svg'
        ]
    },
    {
        ideaName: 'Fight',
        description: "Someone is attacking or being attacked.",
        ideaType: goalType,
        icons: [
            '/lorc/sword-clash.svg',
            '/lorc/cannon-shot.svg',
            '/delapouite/coliseum.svg',
            '/skoll/knockout.svg',
            '/lorc/internal-injury.svg'
        ]
    },
    {
        ideaName: 'Rescue',
        description: "Someone is in trouble and needs help!",
        ideaType: goalType,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg'
        ]
    },
    {
        ideaName: 'Steal',
        description: "Someone wants to take something that isn't thier's.",
        ideaType: goalType,
        icons: [
            '/lorc/paranoia.svg',
            '/lorc/shield-reflect.svg',
            '/delapouite/lighthouse.svg',
            '/lorc/angel-outfit.svg',
            '/delapouite/life-buoy.svg'
        ]
    },
    {
        ideaName: 'Survive',
        description: "Do whatever it takes to survive just one more day.",
        ideaType: goalType,
        icons: [
            '/lorc/snowflake-2.svg',
            '/delapouite/water-bottle.svg',
            '/delapouite/life-bar.svg',
            '/lorc/wolf-howl.svg',
            '/delapouite/opened-food-can.svg'
        ]
    },
    {
        ideaName: 'Settle',
        description: "Make a new home and make it grow and prosper.",
        ideaType: goalType,
        icons: [
            '/delapouite/castle.svg',
            '/lorc/hammer-nails.svg',
            '/lorc/wheat.svg',
            '/delapouite/well.svg',
            '/delapouite/factory-arm.svg'
        ]
    },
    {
        ideaName: 'Solve',
        description: "Unravel the mystery. Complete the puzzle.",
        ideaType: goalType,
        icons: [
            '/delapouite/archive-research.svg',
            '/delapouite/puzzle.svg',
            '/delapouite/spy.svg',
            '/delapouite/cctv-camera.svg',
            '/delapouite/key-card.svg'
        ]
    },
    {
        ideaName: 'Score',
        description: "If there are points, you want them.",
        ideaType: goalType,
        icons: [
            '/delapouite/basketball-basket.svg',
            '/delapouite/level-end-flag.svg',
            '/lorc/empty-hourglass.svg',
            '/delapouite/jumping-dog.svg',
            '/lorc/crown-coin.svg'
        ]
    },
    {
        ideaName: 'Race',
        description: "Get to the finish line!",
        ideaType: goalType,
        icons: [
            '/skoll/race-car.svg',
            '/delapouite/finish-line.svg',
            '/lorc/empty-hourglass.svg',
            '/delapouite/medallist.svg',
            '/delapouite/banana-peel.svg'
        ]
    },
    {
        ideaName: 'Explore',
        description: "Get lost for fun!",
        ideaType: goalType,
        icons: [
            '/caro-asercion/mountain-climbing.svg',
            '/delapouite/swimfins.svg',
            '/delapouite/hang-glider.svg',
            '/lorc/grapple.svg',
            '/delapouite/binoculars.svg'
        ]
    },
    {
        ideaName: 'Climb',
        description: "Get to the top.",
        ideaType: goalType,
        icons: [
            '/caro-asercion/mountain-climbing.svg',
            '/delapouite/tower-flag.svg',
            '/heavenly-dog/defensive-wall.svg',
            '/lorc/grapple.svg',
            '/lorc/rocket-flight.svg'
        ]
    },
    {
        ideaName: 'Dig',
        description: "Go as low as you can go.",
        ideaType: goalType,
        icons: [
            '/lorc/diamond-hard.svg',
            '/delapouite/dig-hole.svg',
            '/lorc/drill.svg',
            '/delapouite/dynamite.svg',
            '/delapouite/flashlight.svg'
        ]
    },
    {
        ideaName: 'Research',
        description: "Discover the secrets of the universe.",
        ideaType: goalType,
        icons: [
            '/lord-berandas/microscope.svg',
            '/lorc/light-bulb.svg',
            '/delapouite/car-wheel.svg',
            '/delapouite/observatory.svg',
            '/skoll/atom.svg'
        ]
    },
    {
        ideaName: 'Persuade',
        description: "Convince someone of something.",
        ideaType: goalType,
        icons: [
            '/delapouite/monk-face.svg',
            '/delapouite/love-letter.svg',
            '/lorc/trade.svg',
            '/skoll/talk.svg',
            '/lorc/sabers-choc.svg'
        ]
    },
    {
        ideaName: 'Accomplish',
        description: "Recieve the highest medals and honors.",
        ideaType: goalType,
        icons: [
            '/delapouite/medallist.svg',
            '/delapouite/trophies-shelf.svg',
            '/delapouite/coronation.svg',
            '/skoll/rank-3.svg',
            '/delapouite/high-kick.svg'
        ]
    },
    {
        ideaName: 'Protect',
        description: "Prevent someone or something from being harmed.",
        ideaType: goalType,
        icons: [
            '/lorc/cat.svg',
            '/delapouite/baby-face.svg',
            '/delapouite/griffin-shield.svg',
            '/lorc/bubble-field.svg',
            '/delapouite/ecology.svg'
        ]
    },
    {
        ideaName: 'Sneak',
        description: "Don't be detected.",
        ideaType: goalType,
        icons: [
            '/delapouite/stealth-bomber.svg',
            '/lorc/cloak-dagger.svg',
            '/darkzaitzev/ninja-heroic-stance.svg',
            '/darkzaitzev/smoke-bomb.svg',
            '/delapouite/double-street-lights.svg'
        ]
    },
    {
        ideaName: 'Capture',
        description: "Contain something or someone.",
        ideaType: goalType,
        icons: [
            '/delapouite/cage.svg',
            '/delapouite/bug-net.svg',
            '/skoll/box-trap.svg',
            '/lorc/mantrap.svg',
            '/delapouite/daemon-pull.svg'
        ]
    }
];
