// Idea Types
export const themeType = {
    typeName: 'Themes',
    description: 'How a player\'s goals tie into broader narrative themes.',
    backgroundColor: '#3d2d4d',
    iconColor: '#b69bc6'
};

// Theme Ideas
export const THEMES = [
    {
        ideaName: 'Beauty',
        description: 'The world is beautiful.',
        ideaType: themeType,
        icons: [
            '/lorc/rainbow-star.svg',
            '/lorc/flowers.svg',
            '/lorc/night-sky.svg',
            '/lorc/lightning-tree.svg',
            '/lorc/sunrise.svg'
        ]
    },
    {
        ideaName: 'Betrayal',
        description: 'Someone has been betrayed!',
        ideaType: themeType,
        icons: [
            '/lorc/deathcab.svg',
            '/delapouite/broken-axe.svg',
            '/lorc/screaming.svg',
            '/delapouite/gps.svg',
            '/lorc/maze.svg'
        ]
    },
    {
        ideaName: 'Chance',
        description: '"Just one more roll!"',
        ideaType: themeType,
        icons: [
            '/caro-asercion/coinflip.svg',
            '/caro-asercion/slot-machine.svg',
            '/delapouite/coins.svg',
            '/delapouite/rolling-dice-cup.svg',
            '/delapouite/dice-twenty-faces-one.svg'
        ]
    },
    {
        ideaName: 'Cost',
        description: 'Everything has a price.',
        ideaType: themeType,
        icons: [
            '/delapouite/price-tag.svg',
            '/lorc/frankenstein-creature.svg',
            '/lorc/life-in-the-balance.svg',
            '/lorc/bleeding-wound.svg',
            '/delapouite/devil-mask.svg'
        ]
    },
    {
        ideaName: 'Duality',
        description: 'Having two parts, often with opposite meanings.',
        ideaType: themeType,
        icons: [
            '/delapouite/toggles.svg',
            '/lorc/magnet.svg',
            '/delapouite/skills.svg',
            '/lorc/duality-mask.svg',
            '/delapouite/multi-directions.svg'
        ]
    },
    {
        ideaName: 'Fear',
        description: 'Sending chills up your spine.',
        ideaType: themeType,
        icons: [
            '/skoll/raise-zombie.svg',
            '/lorc/dark-squad.svg',
            '/delapouite/spooky-house.svg',
            '/delapouite/alien-egg.svg',
            '/delapouite/evil-tower.svg'
        ]
    },
    {
        ideaName: 'Forbidden',
        description: "Don't push that button.",
        ideaType: themeType,
        icons: [
            '/delapouite/button-finger.svg',
            '/lorc/temptation.svg',
            '/lorc/locked-chest.svg',
            '/delapouite/locked-box.svg',
            '/lorc/locked-fortress.svg'
        ]
    },
    {
        ideaName: 'Greed',
        description: "It's all about taking more than you give.",
        ideaType: themeType,
        icons: [
            '/lorc/top-hat.svg',
            '/delapouite/piggy-bank.svg',
            '/kier-heyl/dwarf-helmet.svg',
            '/delapouite/imperial-crown.svg',
            '/delapouite/credits-currency.svg'
        ]
    },
    {
        ideaName: 'Home',
        description: 'Everyone wants a place to call home.',
        ideaType: themeType,
        icons: [
            '/delapouite/hot-meal.svg',
            '/delapouite/family-house.svg',
            '/delapouite/fireplace.svg',
            '/delapouite/bed.svg',
            '/priorblue/battery-plus.svg'
        ]
    },
    {
        ideaName: 'Power',
        description: 'UNLIMITED POWER!',
        ideaType: themeType,
        icons: [
            '/delapouite/power-ring.svg',
            '/lorc/power-lightning.svg',
            '/lorc/embrassed-energy.svg',
            '/delapouite/imperial-crown.svg',
            '/cathelineau/annexation.svg'
        ]
    },
    {
        ideaName: 'Justice',
        description: 'People should be treated fairly.',
        ideaType: themeType,
        icons: [
            '/lorc/scales.svg',
            '/lorc/hammer-drop.svg',
            '/delapouite/handcuffed.svg',
            '/delapouite/congress.svg',
            '/delapouite/prisoner.svg'
        ]
    },
    {
        ideaName: 'Life & Death',
        description: 'Make life what you make it.',
        ideaType: themeType,
        icons: [
            '/delapouite/baby-face.svg',
            '/delapouite/ages.svg',
            '/delapouite/family-tree.svg',
            '/delapouite/person-in-bed.svg',
            '/delapouite/graveyard.svg'
        ]
    },
    {
        ideaName: 'Loyalty',
        description: 'Devotion to a particular person, duty, or cause.',
        ideaType: themeType,
        icons: [
            '/lorc/crown.svg',
            '/lorc/prayer.svg',
            '/lorc/rally-the-troops.svg',
            '/delapouite/three-friends.svg',
            '/lorc/shield-reflect.svg'
        ]
    },
    {
        ideaName: 'Change',
        description: 'Times are changing.',
        ideaType: themeType,
        icons: [
            '/delapouite/pylon.svg',
            '/delapouite/modern-city.svg',
            '/delapouite/coronation.svg',
            '/delapouite/conqueror.svg',
            '/lorc/rocket-flight.svg'
        ]
    },
    {
        ideaName: 'Corruption',
        description: 'Everybody has a price.',
        ideaType: themeType,
        icons: [
            '/delapouite/receive-money.svg',
            '/lorc/backstab.svg',
            '/delapouite/armor-punch.svg',
            '/delapouite/dungeon-light.svg',
            '/delapouite/convince.svg'
        ]
    },
    {
        ideaName: 'War',
        description: 'War never changes.',
        ideaType: themeType,
        icons: [
            '/lorc/gas-mask.svg',
            '/delapouite/planet-conquest.svg',
            '/cathelineau/annexation.svg',
            '/delapouite/sword-brandish.svg',
            '/lorc/missile-swarm.svg'
        ]
    },
    {
        ideaName: 'Love',
        description: 'Emotional bonds of passion and intimacy.',
        ideaType: themeType,
        icons: [
            '/delapouite/lovers.svg',
            '/delapouite/love-letter.svg',
            '/lorc/cupidon-arrow.svg',
            '/lorc/linked-rings.svg',
            '/delapouite/cherish.svg'
        ]
    },
    {
        ideaName: 'Tradition',
        description: 'Passed down beliefs from the previous generation.',
        ideaType: themeType,
        icons: [
            '/lorc/firework-rocket.svg',
            '/delapouite/present.svg',
            '/delapouite/coronation.svg',
            '/delapouite/chef-toque.svg',
            '/delapouite/cavalry.svg'
        ]
    },
    {
        ideaName: 'Family',
        description: "It's all about the family.",
        ideaType: themeType,
        icons: [
            '/delapouite/family-tree.svg',
            '/delapouite/three-friends.svg',
            '/delapouite/griffin-shield.svg',
            '/delapouite/dagger-rose.svg',
            '/delapouite/family-house.svg'
        ]
    },
    {
        ideaName: 'Coming of Age',
        description: 'Growing up into adulthood.',
        ideaType: themeType,
        icons: [
            '/delapouite/suitcase.svg',
            '/delapouite/id-card.svg',
            '/delapouite/family-house.svg',
            '/delapouite/baby-bottle.svg',
            '/delapouite/money-stack.svg'
        ]
    },
    {
        ideaName: 'Revenge',
        description: 'Getting back at those that wronged you.',
        ideaType: themeType,
        icons: [
            '/lorc/backstab.svg',
            '/lorc/imprisoned.svg',
            '/lorc/sword-clash.svg',
            '/lorc/cloak-dagger.svg',
            '/lorc/gunshot.svg'
        ]
    },
    {
        ideaName: 'Adaptation',
        description: 'To become better suited towards your environment.',
        ideaType: themeType,
        icons: [
            '/lorc/snowing.svg',
            '/delapouite/desert-camp.svg',
            '/lorc/wheat.svg',
            '/delapouite/flood.svg',
            '/lorc/quicksand.svg'
        ]
    },
    {
        ideaName: 'Savage Wilds',
        description: 'The untamed wilderness is actually very dangerous.',
        ideaType: themeType,
        icons: [
            '/lorc/werewolf.svg',
            '/lorc/sea-serpent.svg',
            '/lorc/quicksand.svg',
            '/delapouite/carnivorous-plant.svg',
            '/delapouite/ceiling-barnacle.svg'
        ]
    },
    {
        ideaName: 'Duplication',
        description: 'Creating a copy of oneself.',
        ideaType: themeType,
        icons: [
            '/lorc/virus.svg',
            '/lorc/tumor.svg',
            '/delapouite/team-downgrade.svg',
            '/lorc/teleport.svg',
            '/lorc/trade.svg'
        ]
    },
    {
        ideaName: 'Fate',
        description: 'It was predetermined that you would get this theme.',
        ideaType: themeType,
        icons: [
            '/delapouite/sword-altar.svg',
            '/delapouite/coronation.svg',
            '/delapouite/ring.svg',
            '/caro-asercion/cootie-catcher.svg',
            '/delapouite/sinking-ship.svg'
        ]
    }
];
