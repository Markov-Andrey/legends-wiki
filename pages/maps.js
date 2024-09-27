function mapsPage() {
    const alteracUnits = [
        {
            img: 'public/images/maps/alterac/alterac_unit_1.webp',
            name: 'Syndicate Assassin',
            abilities: [
                { name: 'Shadow Move', description: 'The unit remains invisible until it strikes, emerging from the shadows to attack.' },
                { name: 'Acid Weapon', description: 'Slows the target\'s attack and movement speed, while also dealing periodic damage over time.' }
            ],
        },
        {
            img: 'public/images/maps/alterac/alterac_unit_2.webp',
            name: 'Syndicate Ambal',
            abilities: [
                { name: 'Protection Aura', description: 'Grants nearby allied units increased defense, forming a protective shield around them.' },
                { name: 'Heavy Mace', description: 'Has a chance to deal bonus damage and stun the target with a powerful strike.' }
            ],
        },
        {
            img: 'public/images/maps/alterac/alterac_unit_3.webp',
            name: 'Syndicate Wizard',
            abilities: [
                { name: 'Electro Shield', description: 'Creates a shield around the target, periodically dealing damage to nearby enemies.' },
                { name: 'Teleport', description: 'Instantly teleports the unit to a nearby location, allowing quick repositioning.' }
            ],
        }
    ];

    const mapTextData = {
        title: "Alterac's Justice",
        description: `
            We find ourselves in Alterac, where the Syndicate is running smuggling operations along their routes. 
            Our mission is to put an end to their illegal activities.
        `,
        objective: `
            Assist the dwarf sniper Stonebeard, who has a high-damage ability with a long reload time. 
            Your goal is to destroy 5 waves of Syndicate smuggling operations.
        `,
        defeatCondition: `
            Failure will occur if you allow 5 Syndicate horses to escape.
        `
    };

    return `
    <div class="bg-gray-800 rounded-lg shadow-md text-white p-4">
        <h2 class="text-3xl font-bold text-yellow-300 mb-4 text-center">${mapTextData.title}</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img src="public/images/maps/alterac/alteracjustice.webp" alt="${mapTextData.title} Map" class="col-span-1 w-full h-auto rounded-lg shadow-lg">
            
            <div class="col-span-3 flex flex-col gap-4">
                <div>
                    <h2 class="font-bold">📘 Description:</h2>
                    <p class="text-base">
                        ${mapTextData.description}
                    </p>
                </div>
                
                <div>
                    <h2 class="font-bold">✅ Main Objective:</h2>
                    <p class="text-base">
                        ${mapTextData.objective}
                    </p>
                </div>
                
                <div>
                    <h2 class="font-bold">❌ Defeat Conditions:</h2>
                    <p class="text-base">
                        ${mapTextData.defeatCondition}
                    </p>
                </div>
                
                <div>
                    <h2 class="font-bold">👑 Special Units:</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${alteracUnits.map(unit => `
                        <div class="bg-black border-2 border-gray-500 p-2 rounded-lg text-center">
                            <img src="${unit.img}" alt="${unit.name}" class="max-w-[200px] h-[200px] object-cover rounded mx-auto">
                            <h3 class="text-lg font-bold text-yellow-200 mb-2">${unit.name}</h3>
                            <ul class="text-sm text-left">
                                ${unit.abilities.map(ability => `
                                    <li class="mb-2">
                                        <strong>${ability.name}:</strong> ${ability.description}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}