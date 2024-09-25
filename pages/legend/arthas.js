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
        ],
        history: `
            <p>Born into nobility, Arthas Menethil was the prince of Lordaeron, destined for greatness.</p>
            <p>From a young age, he trained as a paladin under the guidance of Uther the Lightbringer, embodying the virtues of honor and justice.</p>
            <p>However, his relentless pursuit of power led him down a dark path, as he sought to eradicate the undead scourge threatening his homeland.</p>
            <p>In a moment of desperation, Arthas made the fateful decision to wield the cursed runeblade Frostmourne, sacrificing his humanity for the sake of victory.</p>
            <p>Transformed into the Lich King, Arthas became a harbinger of death and despair, commanding the Scourge in a relentless quest for domination.</p>
            <p>His tragic fall from grace serves as a cautionary tale of ambition and the cost of power, forever echoing through the annals of history.</p>
        `
    };

    return characterComponent(characterData);
}