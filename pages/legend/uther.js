async function utherPage() {
    const characterData = {
        name: "Uther the Lightbringer",
        subtitle: "Paladins of the Silver Hand",
        image: "public/images/legends/uther.webp",
        mechanics: [
            {
                title: "Divine Intervention",
                description: "Protects a unit with Divine Shield when health is low, but no more than 1 time per X min."
            },
            {
                title: "Summon Champions",
                description: "Summon 1 of 3 champions from one of the Paladin paths (Light, Protection, Retribution) to support the army with powerful auras."
            }
        ],
        features: [
            { text: "Easy to learn", isPositive: true },
            { text: "High armor", isPositive: true },
            { text: "High healing potential", isPositive: true },
            { text: "Low movement speed", isPositive: false },
            { text: "Low army attack speed", isPositive: false }
        ]
    };

    return characterComponent(characterData);
}
