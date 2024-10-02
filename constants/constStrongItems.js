function constStrongItems() {
    let str = 'public/images/items/strong/';
    let type = '.webp';
    return [
        {
            icon: `${str}BTNClawsOfAttack${type}`,
            name: 'Claws of Attack +15',
            description: 'Increases the attack damage of the Hero by 15 when worn'
        },
        {
            icon: `${str}BTNDaggerOfEscape${type}`,
            name: 'Kelen\'s Dagger of Escape',
            description: 'Allows the Hero to teleport a short distance'
        },
        {
            icon: `${str}BTNOrbOfFrost${type}`,
            name: 'Orb of Frost',
            description: 'Adds 6 bonus cold damage to the attack of a Hero when carried. The Hero\'s attacks also become ranged when attacking air and slow the movement speed and attack rate of the enemy for 3 seconds'
        },
        {
            icon: `${str}BTNHelmutPurple${type}`,
            name: 'Crown of Kings +5',
            description: 'Increases the Strength, Intelligence, and Agility of the Hero by 5 when worn'
        },
        {
            icon: `${str}BTNMaskOfDeath${type}`,
            name: 'Mask of Death',
            description: 'While wearing this mask, a Hero will recover hit points equal to 50% of the attack damage dealt to an enemy unit'
        },
        {
            icon: `${str}BTNInfernalStone${type}`,
            name: 'Inferno Stone',
            description: 'Calls an Infernal down from the sky, dealing 50 damage and stunning enemy land units for 4 seconds in an area. The Infernal lasts 180 seconds.'
        },
    ];
}