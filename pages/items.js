async function itemsPage() {
    const weak_items = [
        {
            icon: 'public/images/items/green/BTNGauntletsOfOgrePower.webp',
            name: 'Gauntlets of Ogre Strength +3',
            description: 'Increases the Strength of the Hero by 3 when worn'
        },
        {
            icon: 'public/images/items/green/BTNMantleOfIntelligence.webp',
            name: 'Mantle of Intelligence +3',
            description: 'Increases the Intelligence of the Hero by 3 when worn'
        },
        {
            icon: 'public/images/items/green/BTNSlippersOfAgility.webp',
            name: 'Slippers of Agility +3',
            description: 'Increases the Agility of the Hero by 3 when worn'
        },
        {
            icon: 'public/images/items/green/BTNRingGreen.webp',
            name: 'Ring of Protection +3',
            description: 'Increases the armor of the Hero by 3 when worn'
        },
        {
            icon: 'public/images/items/green/BTNRingGreen.webp',
            name: 'Ring of Protection +4',
            description: 'Increases the armor of the Hero by 4 when worn'
        },
        {
            icon: 'public/images/items/green/BTNRingGreen.webp',
            name: 'Ring of Protection +5',
            description: 'Increases the armor of the Hero by 5 when worn'
        },
        {
            icon: 'public/images/items/green/BTNGoldRing.webp',
            name: 'Ring of Superiority',
            description: 'Increases the Strength, Agility and Intelligence of the Hero by 1 when worn'
        },
        {
            icon: 'public/images/items/green/BTNGlove.webp',
            name: 'Gloves of Haste',
            description: 'Increases the attack speed of the Hero by 18% when worn'
        },
        {
            icon: 'public/images/items/green/BTNCirclet.webp',
            name: 'Circlet of Nobility',
            description: 'Increases the Strength, Agility and Intelligence of the Hero by 2 when worn'
        },
        {
            icon: 'public/images/items/green/BTNClawsOfAttack.webp',
            name: 'Claws of Attack +5',
            description: 'Increases the attack damage of the Hero by 5 when worn'
        },
        {
            icon: 'public/images/items/green/BTNClawsOfAttack.webp',
            name: 'Claws of Attack +8',
            description: 'Increases the attack damage of the Hero by 8 when worn'
        },
        {
            icon: 'public/images/items/green/BTNPendantOfEnergy.webp',
            name: 'Pendant of Energy',
            description: 'Increases the mana capacity of the Hero by 100 when worn'
        },
        {
            icon: 'public/images/items/green/BTNPeriapt.webp',
            name: 'Periapt of Vitality',
            description: 'Increases the hit points of the Hero by 50 when worn'
        },
        {
            icon: 'public/images/items/green/BTNRingSkull.webp',
            name: 'Ring of Regeneration',
            description: 'Increases the Hero\'s hit point regeneration by 2 hit points per second'
        },
        {
            icon: 'public/images/items/green/BTNTalisman.webp',
            name: 'Talisman of Evasion',
            description: 'Causes attacks against the wearer to miss 15% of the time. Does not stack with Evasion or Drunken Brawler'
        },
    ];

    const itemsHTML = weak_items.map(item => {
        return `
        <div class="flex flex-col items-center p-2 bg-gray-800 rounded-lg transition-shadow duration-200 hover:bg-gray-700">
            <div class="relative rounded-lg overflow-hidden flex items-center justify-center w-20 h-20 bg-transparent border border-gray-600 shadow-inner">
                <img src="${item.icon}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            <h3 class="mt-2 text-sm font-bold">${item.name}</h3>
            <p class="text-xs text-white text-center">${item.description}</p>
        </div>
    `;
    }).join('');

    return `
    <div class="flex flex-col items-center">
        <div class="text-center mb-4">
            <h2 class="text-2xl font-bold text-yellow-300">Items</h2>
            <p class="text-base">
                Explore the unique items that grant you extraordinary powers and boost your stats for the challenges ahead!
            </p>
            <p class="text-base">
                All items are divided into three groups based on the strength of the creep camps:
            </p>
            <p class="text-base">
                Weak, Medium, and Strong camps drop different tiers of items, so the tougher the camp, the better the rewards!
            </p>
        </div>

        <h3 class="text-xl font-bold mb-2 text-yellow-300"><div class="circle weak"></div>Weak Creep Camp</h3>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-screen-lg">
            ${itemsHTML}
        </div>

        <p class="text-base text-center mt-4 text-gray-300">
            Work in progress!
        </p>
    </div>
    `;
}
