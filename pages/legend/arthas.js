async function arthasPage() {
    const characterData = {
        name: "Arthas Lich King",
        subtitle: "Army of Scourge",
        image: "public/images/legends/arthas.webp",
        mechanics: [
            {
                title: "Soul Harvest",
                description: "Destroying enemy units leaves souls that Arthas can harvest. It is an additional resource."
            },
            {
                title: "Runes",
                description: "There are three types of runes: Blood, Frost, and Unholy, each with 3 levels. You can allocate only 3 points in any combination."
            },
            {
                title: "Soul Reforging",
                description: "Allows you to upgrade party with souls, granting him a specialization in one of the runes."
            },
        ],
        features: [
            { text: "Easy to learn", isPositive: true },
            { text: "Adaptive army", isPositive: true },
            { text: "No mages", isPositive: false },
            { text: "Addiction to murder", isPositive: false },
            { text: "Low team interaction", isPositive: false },
        ]
    };

    return characterComponent(characterData);
}