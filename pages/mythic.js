function mythicPage() {
    // Introduction about Mythic+
    const introduction = `
        <div class="text-center mb-4">
            <h2 class="text-2xl font-bold text-yellow-300">What is Mythic+</h2>
            <p class="text-base">
                Mythic+ is a game mode similar to the mutation mode in SC2 or Mythic+ in WoW. 
                Each level from +1 to +4 represents a random selection of modifiers, which are chosen randomly 
                to enhance the challenge and excitement of the gameplay. 
                Prepare for intense battles as you adapt to these varying conditions!
            </p>
        </div>
    `;

    // Modifiers array with names included
    const modifiers = [
        {
            icon: 'public/images/mythic/ability_rogue_sprint.webp',
            name: 'Boots of Speed',
            description: 'Increased enemy movement speed +50%',
        },
        {
            icon: 'public/images/mythic/ability_toughness.webp',
            name: 'Fortified',
            description: 'Additional enemy protection +5',
        },
        {
            icon: 'public/images/mythic/achievement_boss_archaedas.webp',
            name: 'Tyrannical',
            description: 'Additional enemy health +30%',
        },
        {
            icon: 'public/images/mythic/inv_staff_07.webp',
            name: 'Brilliance',
            description: 'Enemy mana regeneration aura 200%',
        },
        {
            icon: 'public/images/mythic/spell_nature_thorns.webp',
            name: 'Thorns',
            description: 'Aura returns 30% of damage to attackers',
        },
        {
            icon: 'public/images/mythic/spell_shadow_nethercloak.webp',
            name: 'Cloak of Shadows',
            description: 'Enemies receive constant invisibility',
        },
        {
            icon: 'public/images/mythic/spell_shadow_vampiricaura.webp',
            name: 'Vampiric Aura',
            description: 'Attack converts 50% of damage into health',
        },
    ];

    // Generating the modifiers table
    const modifiersHTML = modifiers.map(modifier => {
        return `
            <tr class="hover:bg-gray-700 transition-colors duration-200">
                <td class="p-2">
                    <div class="rounded-lg overflow-hidden flex items-center justify-center w-16 h-16 bg-transparent border border-gray-600">
                        <img src="${modifier.icon}" alt="Modifier Icon" class="w-full h-full object-cover">
                    </div>
                </td>
                <td class="p-2 text-sm font-bold">${modifier.name}</td>
                <td class="p-2 text-sm text-white">${modifier.description}</td>
            </tr>
        `;
    }).join('');

    return `
        <div class="flex flex-col items-center">
            ${introduction}
            <h3 class="text-xl font-bold mb-2 text-yellow-300">Modifiers Table</h3>
            <table class="min-w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <thead>
                    <tr class="bg-gray-900">
                        <th class="p-3 text-left text-gray-200 text-sm">Icon</th>
                        <th class="p-3 text-left text-gray-200 text-sm">Name</th>
                        <th class="p-3 text-left text-gray-200 text-sm">Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${modifiersHTML}
                </tbody>
            </table>
        </div>
    `;
}
